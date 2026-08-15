import { db as prisma } from '@/lib/db';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { HomeHeader } from '@/components/anatomy/HomeHeader';
import { HomeBentoGrid } from '@/components/anatomy/HomeBentoGrid';
import { Rocket } from 'lucide-react';

export const revalidate = 60; // Revalidate static data every 60 seconds

export default async function HomePage() {
  const categories = await prisma.systemCategory.findMany({
    orderBy: { order: 'asc' },
  });

  const navLinks = [
    { label: 'Preparat', href: '/semua?mode=preparat_only' },
    { label: 'AnatoPlay', href: '/semua?mode=video' },
    { label: 'AnatoQuiz', href: '/semua?mode=kuis' },
    { label: 'Materi', href: '/semua?mode=materi' },
    { label: 'Tentang', href: '/tentang' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] overflow-x-hidden text-white font-sans selection:bg-sky-500/30">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[40%] bg-cyan-600/20 blur-[60px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-rose-600/20 blur-[80px] sm:blur-[150px] rounded-full" />
      </div>

      <BackgroundOrbs />

      {/* Navbar Header Component */}
      <HomeHeader navLinks={navLinks} />

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col items-center p-4 sm:p-6 py-8 sm:py-12 lg:py-20 xl:py-28 2xl:py-32">
        
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center text-center px-2 xl:max-w-[1400px] 2xl:max-w-[1600px] xl:mb-20 2xl:mb-24">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-rose-500/20 xl:w-20 xl:h-20 xl:mb-8 xl:rounded-3xl xl:shadow-rose-500/30">
              <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white xl:w-10 xl:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight max-w-3xl xl:text-7xl 2xl:text-8xl xl:max-w-5xl 2xl:max-w-6xl">
              Jelajahi Anatomi Tubuh Manusia dalam 3D
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl px-2 sm:px-0 xl:text-2xl xl:max-w-3xl 2xl:max-w-4xl xl:leading-relaxed">
              Pahami struktur tubuh manusia secara mendetail melalui visualisasi 3D interaktif. Pilih sistem organ di bawah ini dan mulai eksplorasi belajar Anda sekarang.
            </p>
          </div>
        </div>

        {/* Bento Cards Grid */}
        <HomeBentoGrid categories={categories} />

      </main>
    </div>
  );
}
