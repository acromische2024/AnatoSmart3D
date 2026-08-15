'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const blurFocusVariants: Variants = {
  hidden: { filter: 'blur(10px)', y: 20, opacity: 0 },
  visible: { filter: 'blur(0px)', y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

type NavLink = {
  label: string;
  href: string;
};

export function HomeHeader({ navLinks }: { navLinks: NavLink[] }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="relative z-50 pt-4 sm:pt-6 px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-24"
      variants={blurFocusVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="flex items-center justify-between mx-auto max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div 
          className="flex items-center gap-3 xl:gap-4 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)] xl:w-12 xl:h-12 xl:rounded-2xl xl:shadow-[0_0_25px_rgba(255,255,255,0.25)] bg-[#050511]">
            <img src="/logo.png" alt="AnatoSmart Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight xl:text-2xl">
            AnatoSmart
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 xl:gap-10 xl:text-base">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => router.push(link.href)}
              className="relative group hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full xl:h-[2px]" />
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                router.push(link.href);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
