'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BrainCircuit } from 'lucide-react';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { AnatoQuizPlayer } from '@/components/anatomy/AnatoQuizPlayer';
import { useEffect, useState } from 'react';

type SystemCategory = {
  name: string;
  slug: string;
};

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const packageIdParam = searchParams.get('packageId');
  const limitParam = searchParams.get('limit');
  
  const [categoryName, setCategoryName] = useState<string>('Memuat Kategori...');
  
  const selectedPackage = packageIdParam === 'ALL' ? undefined : (packageIdParam || undefined);
  const questionLimit = limitParam && limitParam !== 'ALL' ? parseInt(limitParam, 10) : undefined;

  useEffect(() => {
    async function fetchData() {
      try {
        const resCat = await fetch('/api/categories');
        if (resCat.ok) {
          const dataCat = await resCat.json();
          const cat = dataCat.find((c: SystemCategory) => c.slug === slug);
          if (cat) setCategoryName(cat.name);
          else setCategoryName('Kategori Tidak Ditemukan');
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [slug]);

  const handleBack = () => {
    router.push(`/semua?mode=kuis`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] overflow-x-hidden text-white font-sans">
      <BackgroundOrbs />

      {/* Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16 mt-3 px-5 rounded-2xl glass-card glow-border border-purple-500/30 bg-[#050511]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                onClick={handleBack}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold tracking-tight hidden sm:block uppercase text-purple-100">
                AnatoQuiz - {categoryName}
              </span>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key="quiz-player"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <AnatoQuizPlayer packageId={selectedPackage} categorySlug={slug} questionLimit={questionLimit} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
