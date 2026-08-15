import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { getSupabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'uploads';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const fileExt = file.name.split('.').pop() || 'file';
    const originalName = file.name;
    const fileName = `${uuidv4()}_${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `${folder}/${fileName}`;

    const r2AccountId = process.env.R2_ACCOUNT_ID;
    const r2AccessKeyId = process.env.R2_ACCESS_KEY_ID;
    const r2SecretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    const r2BucketName = process.env.R2_BUCKET_NAME;
    const r2PublicUrl = process.env.R2_PUBLIC_URL;

    // Check if Cloudflare R2 credentials are configured
    if (r2AccountId && r2AccessKeyId && r2SecretAccessKey && r2BucketName) {
      const s3 = new S3Client({
        region: 'auto',
        endpoint: `https://${r2AccountId}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: r2AccessKeyId,
          secretAccessKey: r2SecretAccessKey,
        },
      });

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      await s3.send(
        new PutObjectCommand({
          Bucket: r2BucketName,
          Key: filePath,
          Body: buffer,
          ContentType: file.type || 'application/octet-stream',
        })
      );

      const baseUrl = r2PublicUrl 
        ? r2PublicUrl.replace(/\/$/, '') 
        : `https://${r2BucketName}.${r2AccountId}.r2.dev`;

      const publicUrl = `${baseUrl}/${filePath}`;
      return NextResponse.json({ url: publicUrl, provider: 'cloudflare-r2' });
    }

    // Fallback to Supabase Storage if R2 is not yet configured
    const supabase = getSupabase();
    const { error: uploadError } = await supabase.storage
      .from('anatomy-assets')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Upload error: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('anatomy-assets')
      .getPublicUrl(filePath);

    return NextResponse.json({ url: publicUrl, provider: 'supabase' });

  } catch (error: any) {
    console.error('Upload handler error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error during upload' },
      { status: 500 }
    );
  }
}
