'use client';

import { motion } from 'framer-motion';
import { Microscope, Layers, Scan } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Decorative line grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] border border-sky-500/5 rounded-full animate-rotate-slow"
          style={{ borderStyle: 'dashed' }}
        />
      </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] border border-cyan-500/8 rounded-full animate-rotate-slow"
          style={{
            borderStyle: 'dashed',
            animationDirection: 'reverse',
            animationDuration: '30s',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-sky-300/80 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Digital Anatomy Collection</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-foreground">Atlas</span>{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Anatomi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Jelajahi koleksi preparat anatomi melalui foto resolusi tinggi dan model 3D interaktif.
          Platform pembelajaran digital untuk kedokteran dan ilmu biologi.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { icon: Microscope, label: 'Preparat', value: 'Interaktif' },
            { icon: Scan, label: 'Model 3D', value: 'Eksplorasi' },
            { icon: Layers, label: 'Koleksi', value: 'Lengkap' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-sky-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-sky-500/30 flex justify-center pt-2"
          animate={{}}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-sky-400/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
