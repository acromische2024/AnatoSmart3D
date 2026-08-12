'use client';

import { motion } from 'framer-motion';

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary orb - top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-500/8 blur-3xl animate-float" />
      {/* Secondary orb - bottom left */}
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-cyan-500/6 blur-3xl animate-float-delayed" />
      {/* Tertiary orb - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/4 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
