import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g. 2.5 seconds)
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isClosing && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] bg-[#030308] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
            <div className="w-[50vw] h-[50vw] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          {/* Masked Text Reveal with Shimmer */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Base Text (Dark/Ghost) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/5 select-none">
              AnatoSmart
            </h1>

            {/* Shimmer / Reveal Effect overlay */}
            <motion.h1
              className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold select-none text-transparent bg-clip-text bg-gradient-to-r from-transparent via-purple-300 to-transparent"
              initial={{ backgroundPosition: '200% 0' }}
              animate={{ backgroundPosition: '-200% 0' }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: 'linear' 
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              AnatoSmart
            </motion.h1>
            
            {/* Solid text masking (from left to right) */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white select-none">
                AnatoSmart
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
