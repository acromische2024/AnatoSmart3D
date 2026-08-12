'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  X,
  Box,
  ImageIcon,
  Calendar,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import dynamic from 'next/dynamic';

type Preparation = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  imageUrl: string | null;
  modelUrl: string | null;
  thumbnailUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

interface DetailDialogProps {
  preparation: Preparation | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModelViewerWrapper = dynamic(
  () =>
    import('./ModelViewer').then((mod) => ({ default: mod.ModelViewerWrapper })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center rounded-xl bg-navy-light">
        <div className="text-center">
          <motion.div
            className="w-12 h-12 mx-auto mb-3 border-2 border-sky-500/30 border-t-sky-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <p className="text-sm text-slate-500">Memuat model 3D...</p>
        </div>
      </div>
    ),
  }
);

export function DetailDialog({ preparation, open, onOpenChange }: DetailDialogProps) {
  const [activeTab, setActiveTab] = useState<'image' | 'model'>('image');
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePan, setImagePan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const prevOpen = useRef(open);
  useEffect(() => {
    if (open && !prevOpen.current) {
      setImageZoom(1);
      setImagePan({ x: 0, y: 0 });
    }
    prevOpen.current = open;
  }, [open]);

  if (!preparation) return null;

  const hasImage = !!preparation.imageUrl;
  const hasModel = !!preparation.modelUrl;
  const imgSrc = preparation.thumbnailUrl || preparation.imageUrl;

  const handleZoomIn = () => setImageZoom((z) => Math.min(z + 0.3, 3));
  const handleZoomOut = () => setImageZoom((z) => Math.max(z - 0.3, 0.5));
  const handleResetZoom = () => {
    setImageZoom(1);
    setImagePan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (imageZoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - imagePan.x, y: e.clientY - imagePan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && imageZoom > 1) {
      setImagePan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[92vh] overflow-hidden bg-navy-light/95 backdrop-blur-xl border-sky-500/15 text-foreground p-0 gap-0">
        {/* Header area */}
        <div className="flex flex-col sm:flex-row gap-4 p-5 pb-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  {preparation.title}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  {preparation.category && (
                    <Badge
                      variant="outline"
                      className="border-sky-500/25 text-sky-300 bg-sky-500/10"
                    >
                      {preparation.category}
                    </Badge>
                  )}
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {new Date(preparation.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 w-8 h-8 rounded-full text-slate-400 hover:text-foreground hover:bg-white/10"
                onClick={() => onOpenChange(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {preparation.description && (
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {preparation.description}
              </p>
            )}
          </div>
        </div>

        {/* Tab switcher */}
        {hasImage && hasModel && (
          <div className="flex items-center gap-1 px-5 pt-4">
            <button
              onClick={() => setActiveTab('image')}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                activeTab === 'image'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/25'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Foto
            </button>
            <button
              onClick={() => setActiveTab('model')}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                activeTab === 'model'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <Box className="w-4 h-4" />
              Model 3D
            </button>
          </div>
        )}

        {/* Content area */}
        <div className="p-5 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'image' && hasImage && imgSrc && (
              <motion.div
                key="image-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy border border-sky-500/10"
              >
                <div
                  className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <img
                    src={imgSrc}
                    alt={preparation.title}
                    className="w-full h-full object-contain select-none transition-transform duration-200"
                    style={{
                      transform: `scale(${imageZoom}) translate(${imagePan.x / imageZoom}px, ${imagePan.y / imageZoom}px)`,
                    }}
                    draggable={false}
                  />
                </div>

                {/* Zoom controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    onClick={handleZoomOut}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    onClick={handleResetZoom}
                  >
                    <span className="text-xs font-medium">{Math.round(imageZoom * 100)}%</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    onClick={handleZoomIn}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === 'model' && hasModel && (
              <motion.div
                key="model-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-sky-500/10"
              >
                <ModelViewerWrapper url={preparation.modelUrl!} />
              </motion.div>
            )}

            {!hasImage && !hasModel && (
              <div className="w-full aspect-[4/3] rounded-xl border border-sky-500/10 bg-navy flex items-center justify-center">
                <p className="text-sm text-slate-500">Tidak ada media tersedia</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
