import { NextResponse } from 'next/server';
import { db as prisma } from '@/lib/db';

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const data = await req.json();
    const resolvedParams = await params;
    const profile = await prisma.profile.update({
      where: { id: resolvedParams.id },
      data,
    });
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Failed to update profile:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to update profile' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    await prisma.profile.delete({
      where: { id: resolvedParams.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete profile:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to delete profile' }, { status: 500 });
  }
}
