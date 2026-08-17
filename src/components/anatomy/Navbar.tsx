'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Home, Microscope, Video, BrainCircuit, FileText, Users } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Preparat', href: '/semua?mode=preparat_only', icon: Microscope, key: 'preparat' },
    { label: 'AnatoPlay', href: '/semua?mode=video', icon: Video, key: 'video' },
    { label: 'AnatoQuiz', href: '/semua?mode=kuis', icon: BrainCircuit, key: 'kuis' },
    { label: 'Materi', href: '/semua?mode=materi', icon: FileText, key: 'materi' },
    { label: 'Tentang', href: '/tentang', icon: Users, key: 'tentang' },
  ];

  const isLinkActive = (item: typeof navItems[0]) => {
    if (item.href === '/tentang') {
      return pathname.startsWith('/tentang');
    }
    if (item.href.includes('mode=')) {
      const itemMode = item.href.split('mode=')[1];
      return pathname === '/semua' && mode === itemMode;
    }
    return false;
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, mode]);

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#050511]/90 backdrop-blur-xl border-b border-white/10"
      style={{ viewTransitionName: 'site-header' } as React.CSSProperties}
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none group"
          onClick={() => handleNavigate('/')}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.2)] bg-[#050511] border border-white/10 group-hover:border-sky-400/50 transition-colors">
            <img 
              src="/logo.png" 
              alt="AnatoSmart Logo" 
              className="w-full h-full object-cover pointer-events-none" 
              draggable={false} 
            />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-sky-300 transition-colors">
            AnatoSmart
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 xl:gap-10">
          {navItems.map((item) => {
            const active = isLinkActive(item);
            return (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className={cn(
                  "relative group py-1 text-sm lg:text-base font-medium transition-colors cursor-pointer flex items-center gap-2",
                  active ? "text-white font-bold" : "text-slate-300 hover:text-white"
                )}
              >
                <span>{item.label}</span>
                <span 
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-[2px] bg-sky-400 rounded-full transition-all duration-300 ease-out",
                    active 
                      ? "w-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" 
                      : "w-0 group-hover:w-full"
                  )} 
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <div className="relative w-5 h-5">
            <Menu className={cn(
              "w-5 h-5 absolute inset-0 transition-all duration-300",
              mobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            )} />
            <X className={cn(
              "w-5 h-5 absolute inset-0 transition-all duration-300",
              mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown — CSS-only animation for 60fps */}
      <div
        ref={menuRef}
        className={cn(
          "md:hidden bg-[#08081a]/98 backdrop-blur-lg transition-colors duration-300",
          "mobile-nav-drawer",
          mobileMenuOpen ? "mobile-nav-open border-t border-white/10" : "mobile-nav-closed border-t border-transparent"
        )}
      >
        <div className="min-h-0">
          <div className="p-4 space-y-1.5">
            {navItems.map((item, index) => {
              const active = isLinkActive(item);
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.href)}
                  className={cn(
                    "w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium flex items-center justify-between",
                    "mobile-nav-item",
                    active 
                      ? "bg-sky-500/15 text-sky-200 border border-sky-500/30 font-bold" 
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent active:bg-white/10"
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 30}ms` : '0ms',
                  } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                      active ? "bg-sky-500/20 text-sky-400" : "bg-white/5 text-slate-400"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.label}</span>
                  </div>
                  {active && <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
