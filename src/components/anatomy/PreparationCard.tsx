'use client';

import { motion } from 'framer-motion';
import { Eye, Box, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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

interface PreparationCardProps {
  preparation: Preparation;
  index: number;
  onSelect: (prep: Preparation) => void;
  onDelete: (id: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function PreparationCard({
  preparation,
  index,
  onSelect,
  onDelete,
}: PreparationCardProps) {
  const hasImage = !!preparation.imageUrl;
  const hasModel = !!preparation.modelUrl;
  const imgSrc = preparation.thumbnailUrl || preparation.imageUrl;

  return (
    <motion.div
      className="group relative glass-card glow-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(preparation)}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-light">
        {imgSrc ? (
          <motion.img
            src={imgSrc}
            alt={preparation.title}
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
                <Box className="w-8 h-8 text-sky-500/50" />
              </div>
              <p className="text-xs text-slate-600">Tidak ada gambar</p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 img-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="icon"
              variant="ghost"
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(preparation);
              }}
            >
              <Eye className="w-5 h-5" />
            </Button>
          </motion.div>
          {hasModel && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="icon"
                variant="ghost"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(preparation);
                }}
              >
                <Box className="w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {preparation.category && (
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-sky-500/20 text-sky-300 backdrop-blur-md border border-sky-500/20">
              {preparation.category}
            </span>
          )}
          {hasModel && (
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20">
              3D
            </span>
          )}
        </div>

        {/* Delete button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-slate-400 hover:text-red-400 hover:bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(preparation.id);
          }}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Info area */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 line-clamp-1">
          {preparation.title}
        </h3>
        {preparation.description && (
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {preparation.description}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3 text-[11px] text-slate-600">
          {hasImage && <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> Foto</span>}
          {hasModel && <span className="flex items-center gap-1"><Box className="w-3 h-3" /> Model 3D</span>}
        </div>
      </div>
    </motion.div>
  );
}
