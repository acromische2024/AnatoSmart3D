'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Menu, X, Rocket, Users, GraduationCap, Microscope } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';

const dosenStaff = [
  {
    name: "Dr. dr. Nama Dosen, M.Kes",
    role: "Kepala Laboratorium Anatomi",
    image: "/teams/dosen1.png",
    description: "Spesialis Anatomi dan Histologi."
  },
  {
    name: "dr. Nama Staf, Sp.PA",
    role: "Dosen Pengampu",
    image: "/teams/dosen2.png",
    description: "Ahli Patologi Anatomi."
  },
  {
    name: "Bapak Teknisi",
    role: "Teknisi Laboratorium",
    image: "/teams/staff1.png",
    description: "Mengelola spesimen dan preparat lab."
  }
];

const aslabData = {
  "2024": [
    {
      name: "Zydane",
      role: "Asisten Laboratorium (Acromische)",
      image: "/teams/zydane.png",
    },
    {
      name: "Nama Aslab 2",
      role: "Asisten Laboratorium",
      image: "/teams/placeholder.png",
    },
    {
      name: "Nama Aslab 3",
      role: "Asisten Laboratorium",
      image: "/teams/placeholder.png",
    }
  ],
  "2025": [
    {
      name: "Kandidat Aslab 1",
      role: "Calon Asisten Laboratorium",
      image: "/teams/placeholder.png",
    },
    {
      name: "Kandidat Aslab 2",
      role: "Calon Asisten Laboratorium",
      image: "/teams/placeholder.png",
    }
  ]
};

export default function TentangPage() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("2024");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Preparat', href: '/semua?mode=preparat_only' },
    { label: 'AnatoPlay', href: '/semua?mode=video' },
    { label: 'AnatoQuiz', href: '/semua?mode=kuis' },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] overflow-x-hidden text-white font-sans selection:bg-sky-500/30">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[40%] bg-cyan-600/20 blur-[60px] sm:blur-[120px] rounded-full" />
      </div>

      <BackgroundOrbs />

      {/* Navbar */}
      <header className="relative z-50 pt-4 sm:pt-6 px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-24">
        <nav className="flex items-center justify-between mx-auto max-w-7xl xl:max-w-[1400px]">
          <div 
            className="flex items-center gap-3 xl:gap-4 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-[#050511]">
              <img src="/logo.png" alt="AnatoSmart Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight">AnatoSmart</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => router.push(link.href)}
                className="relative group hover:text-white transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button className="relative group text-white transition-colors">
              Tentang
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400" />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => router.push(link.href)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col items-center p-4 sm:p-6 py-12 lg:py-20">
        
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
              <Microscope className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Tentang Laboratorium Anatomi
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              Dedikasi kami adalah memberikan pengalaman belajar anatomi terbaik. Kenali para dosen, staf ahli, dan barisan asisten laboratorium yang senantiasa mendukung perjalanan akademis Anda.
            </p>
          </motion.div>
        </div>

        {/* Section: Dosen & Staf */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-7xl mx-auto mb-24"
        >
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <Users className="w-8 h-8 text-sky-400" />
            <h2 className="text-3xl font-bold">Dosen & Staf</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {dosenStaff.map((person, idx) => (
              <div 
                key={idx}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)]"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#050511] shadow-xl group-hover:scale-105 transition-transform duration-500 bg-slate-800">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + person.name + '&background=0ea5e9&color=fff&size=128'; }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-sky-400 font-medium text-sm mb-3">{person.role}</p>
                  <p className="text-slate-400 text-sm">{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Asisten Laboratorium (Tabs) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-7xl mx-auto mb-20"
        >
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold">Asisten Laboratorium</h2>
            </div>
            <p className="text-slate-400 max-w-2xl">
              Mahasiswa-mahasiswi terpilih yang mendampingi dan memfasilitasi jalannya praktikum anatomi dari generasi ke generasi.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(aslabData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === year 
                  ? 'bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                Angkatan {year}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {aslabData[activeTab as keyof typeof aslabData].map((aslab, idx) => (
                <div 
                  key={idx}
                  className="group bg-[#111118] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-[#161620] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-slate-800 relative">
                    <img 
                      src={aslab.image} 
                      alt={aslab.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + aslab.name + '&background=a855f7&color=fff&size=256'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/20 to-transparent" />
                  </div>
                  <div className="p-4 text-center relative -mt-6">
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">{aslab.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">{aslab.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </motion.section>

      </main>
    </div>
  );
}
