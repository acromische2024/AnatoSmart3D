'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FlaskConical, Rocket, MonitorPlay, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/anatomy/LoadingScreen';

type SystemCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  order: number;
};
let hasShownLoadingScreen = false;

export default function HomePage() {
  const router = useRouter();
  const [categories, setCategories] = useState<SystemCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Jika ini render pertama kali (atau refresh), tampilkan loading screen.
  // Jika kembali via client-side routing, jangan tampilkan.
  const [showLoadingScreen, setShowLoadingScreen] = useState(!hasShownLoadingScreen);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  useEffect(() => {
    if (!hasShownLoadingScreen) {
      hasShownLoadingScreen = true;
    }
    setHasCheckedSession(true);
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('Expected array, got:', data);
          setCategories([]);
        }
      } catch (err) {
        console.error('Failed to fetch categories', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const navigateTo = (system: string) => {
    router.push(`/sistem/${system}`);
  };

  const navLinks = [
    { label: 'Preparat', href: '/semua?mode=preparat_only' },
    { label: 'AnatoPlay', href: '/semua?mode=video' },
    { label: 'AnatoQuiz', href: '/semua?mode=kuis' },
    { label: 'Materi', href: '/semua?mode=materi' },
    { label: 'Tentang', href: '/tentang' },
  ];

  const blurFocusVariants: Variants = {
    hidden: { filter: 'blur(10px)', y: 20, opacity: 0 },
    visible: { filter: 'blur(0px)', y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  if (!hasCheckedSession) {
    return <div className="min-h-screen bg-[#050511]" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] overflow-x-hidden text-white font-sans selection:bg-sky-500/30">
      
      {showLoadingScreen && <LoadingScreen onComplete={() => setShowLoadingScreen(false)} />}
      
      {/* Background gradients — dikurangi blur radius di mobile untuk performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[40%] bg-cyan-600/20 blur-[60px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-rose-600/20 blur-[80px] sm:blur-[150px] rounded-full" />
      </div>

      <BackgroundOrbs />

      {/* Navbar — ditambahkan hamburger menu untuk mobile */}
      <motion.header 
        className="relative z-50 pt-4 sm:pt-6 px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-24"
        variants={blurFocusVariants}
        initial="hidden"
        animate={!showLoadingScreen ? "visible" : "hidden"}
      >
        <nav className="flex items-center justify-between mx-auto max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
          <div className="flex items-center gap-3 xl:gap-4">
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
                className="relative group hover:text-white transition-colors"
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

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col items-center p-4 sm:p-6 py-8 sm:py-12 lg:py-20 xl:py-28 2xl:py-32">
        
        {/* Hero Section — padding & font disesuaikan per breakpoint */}
        <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center text-center px-2 xl:max-w-[1400px] 2xl:max-w-[1600px] xl:mb-20 2xl:mb-24">
          <motion.div 
            variants={blurFocusVariants}
            initial="hidden"
            animate={!showLoadingScreen ? "visible" : "hidden"}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-rose-500/20 xl:w-20 xl:h-20 xl:mb-8 xl:rounded-3xl xl:shadow-rose-500/30">
              <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white xl:w-10 xl:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight max-w-3xl xl:text-7xl 2xl:text-8xl xl:max-w-5xl 2xl:max-w-6xl">
              Jelajahi Anatomi Tubuh Manusia dalam 3D
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl px-2 sm:px-0 xl:text-2xl xl:max-w-3xl 2xl:max-w-4xl xl:leading-relaxed">
              Pahami struktur tubuh manusia secara mendetail melalui visualisasi 3D interaktif. Pilih sistem organ di bawah ini dan mulai eksplorasi belajar Anda sekarang.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid — Bento Layout Desktop */}
        <motion.div 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 px-1 sm:px-0 xl:grid-cols-4 2xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={!showLoadingScreen ? "visible" : "hidden"}
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
                onClick={() => navigateTo(cat.slug)}
              >
                {cat.imageUrl && (
                  <img src={cat.imageUrl} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 xl:group-hover:scale-110 xl:duration-1000" />
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
      </main>
    </div>
  );
}
