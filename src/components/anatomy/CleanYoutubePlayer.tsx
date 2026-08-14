'use client';

import { useState } from 'react';
import { PictureInPicture, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CleanYoutubePlayerProps {
  videoId: string;
  className?: string;
}

export function CleanYoutubePlayer({ videoId, className }: CleanYoutubePlayerProps) {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Placeholder when video is popped out */}
      <div className={cn("w-full aspect-video bg-slate-900/50 rounded-xl flex-col items-center justify-center border border-white/10", isPopup ? "flex" : "hidden")}>
        <PictureInPicture className="w-8 h-8 text-slate-500 mb-2" />
        <p className="text-slate-400 text-sm">Video diputar di mode Popup</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 bg-transparent border-white/10 hover:bg-white/5"
          onClick={() => setIsPopup(false)}
        >
          Kembalikan Video
        </Button>
      </div>

      {/* Actual Player Wrapper */}
      <div 
        className={cn(
          "group relative transition-all duration-300",
          isPopup 
            ? "fixed bottom-6 right-6 w-[320px] md:w-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl z-[100] border border-white/20 animate-in slide-in-from-bottom-5 bg-black" 
            : "w-full"
        )}
      >
        {/* Close Popup Button (Only visible in Popup mode) */}
        {isPopup && (
          <div className="absolute -top-12 right-0 flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full shadow-lg h-9 px-4 bg-slate-900/95 text-white hover:bg-slate-800 border-white/10 backdrop-blur-sm"
              onClick={() => setIsPopup(false)}
            >
              <X className="w-4 h-4 mr-1" /> Tutup Popup
            </Button>
          </div>
        )}

        {/* Enter Popup Button (Only visible in Normal mode on hover) */}
        {!isPopup && (
           <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-lg shadow-lg bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/10"
                onClick={() => setIsPopup(true)}
              >
                <PictureInPicture className="w-4 h-4 mr-2" /> Popup
              </Button>
           </div>
        )}

        {/* YouTube Iframe */}
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="w-full h-full border-0 pointer-events-auto"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
