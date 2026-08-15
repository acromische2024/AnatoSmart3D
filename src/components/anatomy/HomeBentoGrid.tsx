'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MonitorPlay } from 'lucide-react';
import { useRouter } from 'next/navigation';

export type SystemCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  order: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08 } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export function HomeBentoGrid({ categories }: { categories: SystemCategory[] }) {
  const router = useRouter();

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 px-1 sm:px-0 xl:grid-cols-4 2xl:gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Promo / Banner Card — BENTO HERO */}
      <motion.div 
        variants={cardVariants}
        className="relative min-h-[220px] sm:min-h-[260px] lg:h-[280px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 flex flex-col justify-center text-center cursor-pointer group hover:border-sky-500/50 transition-colors xl:col-span-2 xl:row-span-2 xl:min-h-[420px] 2xl:min-h-[480px] xl:hover:shadow-[0_0_60px_rgba(14,165,233,0.15)] xl:hover:bg-white/[0.07]"
        onClick={() => router.push('/semua')}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-sky-500/20 blur-[40px] sm:blur-[50px] rounded-full group-hover:bg-sky-500/30 transition-colors xl:w-48 xl:h-48 xl:blur-[80px]" />
        <div className="relative z-10 flex flex-col items-center">
          <MonitorPlay className="w-10 h-10 sm:w-12 sm:h-12 text-sky-400 mb-3 sm:mb-4 xl:w-16 xl:h-16 xl:mb-6" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 xl:text-3xl xl:mb-4">Semua Koleksi</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6 max-w-[180px] sm:max-w-[200px] mx-auto leading-relaxed xl:text-base xl:max-w-[280px] xl:mb-8">
            Papan Kanban lengkap untuk seluruh preparat dan video.
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-300 xl:text-base">Kanban Board</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1 xl:text-sm">Eksplorasi total</p>
            </div>
            <Button variant="outline" className="rounded-full border-white/30 bg-white/10 backdrop-blur-md text-white group-hover:bg-white group-hover:text-black transition-colors px-4 sm:px-6 text-xs sm:text-sm pointer-events-none xl:px-8 xl:py-5 xl:text-base">
              BUKA
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Category Cards — BENTO VARIASI UKURAN */}
      {categories.map((cat, i) => {
        const isFeatured = i % 4 === 0 || i % 4 === 3;
        return (
          <motion.div 
            key={cat.id}
            variants={cardVariants}
            className={`group relative min-h-[220px] sm:min-h-[260px] lg:h-[280px] rounded-2xl sm:rounded-[32px] overflow-hidden cursor-pointer bg-slate-900 border border-white/10 xl:hover:shadow-[0_0_50px_rgba(255,255,255,0.06)] xl:hover:border-white/20 ${isFeatured ? 'xl:col-span-2' : ''} ${!isFeatured ? 'xl:min-h-[320px]' : 'xl:min-h-[280px]'}`}
            onClick={() => router.push(`/sistem/${cat.slug}`)}
          >
            {cat.imageUrl && (
              <img 
                src={cat.imageUrl} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 xl:group-hover:scale-110 xl:duration-1000" 
                loading={i < 4 ? "eager" : "lazy"}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050511]/90 via-[#050511]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 xl:from-sky-500/5 xl:to-purple-500/5" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex items-end justify-between xl:p-10">
              <div className="pr-3 sm:pr-4 min-w-0 flex-1">
                <h3 className="text-base sm:text-xl font-bold uppercase tracking-wider mb-1 sm:mb-2 truncate xl:text-2xl xl:mb-3">{cat.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium line-clamp-2 xl:text-base xl:line-clamp-3">{cat.description || 'Pelajari Lebih Lanjut'}</p>
              </div>
              <Button variant="outline" className="shrink-0 rounded-full border-white/30 bg-white/10 backdrop-blur-md text-white group-hover:bg-white group-hover:text-black transition-all duration-500 ease-out px-4 sm:px-6 text-xs sm:text-sm pointer-events-none xl:group-hover:-translate-y-1 xl:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] xl:px-7 xl:py-5">
                VISIT
              </Button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
