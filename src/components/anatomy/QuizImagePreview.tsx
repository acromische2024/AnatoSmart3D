'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ZoomIn, ImageOff, ExternalLink, X } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface QuizImagePreviewProps {
  src: string;
  alt?: string;
  className?: string;
  maxHeight?: string;
}

export function QuizImagePreview({
  src,
  alt = 'Ilustrasi Soal',
  className = '',
  maxHeight = 'max-h-80',
}: QuizImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src) return null;

  if (hasError) {
    return (
      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 my-3">
        <ImageOff className="w-4 h-4 shrink-0 text-red-400" />
        <span className="flex-1 truncate">Gambar tidak dapat dimuat: {src}</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1 text-red-200 shrink-0 font-medium"
        >
          Buka Link <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`relative group rounded-2xl overflow-hidden border border-white/10 bg-black/40 cursor-zoom-in transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 my-3 text-center ${className}`}
      >
        {isLoading && (
          <div className="w-full h-48 flex items-center justify-center bg-white/5 animate-pulse">
            <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          </div>
        )}

        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-auto ${maxHeight} object-contain mx-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.02] ${
            isLoading ? 'hidden' : 'block'
          }`}
        />

        {/* Hover Zoom Badge */}
        {!isLoading && (
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            <ZoomIn className="w-3.5 h-3.5 text-purple-400" />
            <span>Klik untuk memperbesar</span>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="bg-black/95 border border-white/15 text-white max-w-5xl max-h-[92vh] p-3 sm:p-5 flex flex-col items-center justify-center overflow-hidden"
          showCloseButton={false}
        >
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>

          {/* Close & Action Header */}
          <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs sm:text-sm font-medium text-slate-300 line-clamp-1">{alt}</span>
            <div className="flex items-center gap-2">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <span>Buka Tab Baru</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Zoomed Image */}
          <div className="flex-1 w-full overflow-auto custom-scrollbar flex items-center justify-center p-2 mt-2">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/**
 * Utility to extract image URLs from text and return cleaned text and found images.
 */
export function extractImagesAndCleanText(
  rawText: string,
  existingImageUrl?: string | null
): { cleanText: string; images: string[] } {
  const images: string[] = [];

  if (existingImageUrl && typeof existingImageUrl === 'string' && existingImageUrl.trim()) {
    images.push(existingImageUrl.trim());
  }

  if (!rawText) return { cleanText: '', images };

  let text = rawText;

  // 1. Markdown image syntax: ![alt](url)
  const mdImgRegex = /!\[([^\]]*)\]\((https?:\/\/[^\s\)]+)\)/g;
  text = text.replace(mdImgRegex, (_, _alt, url) => {
    if (!images.includes(url)) images.push(url);
    return '';
  });

  // 2. HTML <img> tags: <img src="..." />
  const htmlImgRegex = /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*\/?>/gi;
  text = text.replace(htmlImgRegex, (_, url) => {
    const trimmed = url.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) {
      if (!images.includes(trimmed)) images.push(trimmed);
    }
    return '';
  });

  // 3. Direct image URLs ending with common image extensions
  const extRegex = /(https?:\/\/[^\s<>"'()]+\.(?:jpg|jpeg|png|gif|webp|svg|avif)(?:\?[^\s<>"'()]*)?)/gi;
  text = text.replace(extRegex, (match) => {
    if (!images.includes(match)) images.push(match);
    return '';
  });

  // 4. Common image host URLs that might not have standard extensions in the pathname
  const cdnRegex = /(https?:\/\/(?:[a-zA-Z0-9-]+\.supabase\.co\/storage\/v1\/object\/public\/[^\s<>"'()]+|i\.imgur\.com\/[^\s<>"'()]+|images\.unsplash\.com\/[^\s<>"'()]+|upload\.wikimedia\.org\/[^\s<>"'()]+))/gi;
  text = text.replace(cdnRegex, (match) => {
    if (!images.includes(match)) images.push(match);
    return '';
  });

  // Clean remaining whitespace and orphan punctuation
  const cleanText = text
    .replace(/:\s*\./g, '.')
    .replace(/:\s*([,.:;?!])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/^[\s,.:;]+|[\s,.:;]+$/g, '')
    .trim();

  return {
    cleanText: cleanText || rawText,
    images,
  };
}
