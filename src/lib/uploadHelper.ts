/**
 * Compresses image file on client side using HTML5 Canvas
 * Reduces 5MB+ camera photos to ~150-300KB for instant uploads.
 */
export function compressImage(file: File, maxWidth = 1200, quality = 0.85): Promise<File> {
  return new Promise((resolve) => {
    if (!file.type.startsWith('image/') || file.size < 800 * 1024) {
      return resolve(file); // Don't compress non-images or small images
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve(file);

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) return resolve(file);
            const compressedFile = new File(
              [blob], 
              file.name.replace(/\.[^/.]+$/, '.jpg'), 
              { type: 'image/jpeg', lastModified: Date.now() }
            );
            resolve(compressedFile);
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = () => resolve(file);
    };
    reader.onerror = () => resolve(file);
  });
}

/**
 * Uploads a file via server API (/api/upload)
 * Avoids client-side Supabase CORS & network fetch errors.
 */
export async function uploadFileViaApi(file: File, folder = 'uploads'): Promise<string> {
  const fileToUpload = await compressImage(file);

  const formData = new FormData();
  formData.append('file', fileToUpload);
  formData.append('folder', folder);

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errorJson = await res.json().catch(() => null);
    throw new Error(errorJson?.error || `Gagal mengunggah file ${file.name}`);
  }

  const data = await res.json();
  return data.url;
}
