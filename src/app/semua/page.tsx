'use client';

import { useState, useEffect, Suspense, ViewTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  FlaskConical, 
  ChevronLeft, 
  Video, 
  FileText, 
  PlayCircle, 
  BrainCircuit,
  Search,
  Microscope,
  BookOpen,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Package,
  Layers,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { Navbar } from '@/components/anatomy/Navbar';

type Preparation = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  youtubeUrl: string | null;
  documentUrl: string | null;
};

type SystemCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  youtubeUrl: string | null;
  extraVideoUrl?: string | null;
  documentUrl?: string | null;
  order: number;
};

type QuizPackage = {
  id: string;
  name: string;
  _count: {
    questions: number;
  };
};

function QuizPackageList({ categorySlug, categoryName }: { categorySlug: string; categoryName: string }) {
  const router = useRouter();
  const [packages, setPackages] = useState<QuizPackage[]>([]);
  const [loading, setLoading] = useState(true);
  
  // States for limit selection
  const [selectedPackage, setSelectedPackage] = useState<string | 'ALL' | null>(null);

  useEffect(() => {
    async function fetchPackages() {
      try {
        setLoading(true);
        const res = await fetch(`/api/quiz-packages?category=${categorySlug}`);
        if (res.ok) {
          const data = await res.json();
          setPackages(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, [categorySlug]);

  const totalQuestions = packages.reduce((acc, pkg) => acc + pkg._count.questions, 0);

  const startQuiz = (limit: number | 'ALL') => {
    const pkgParam = selectedPackage === 'ALL' ? 'ALL' : selectedPackage;
    router.push(`/kuis/${categorySlug}?packageId=${pkgParam}&limit=${limit}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500 mb-4" />
        <p>Memuat paket soal...</p>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400 bg-white/5 rounded-2xl border border-white/10">
        <Package className="w-12 h-12 mx-auto text-slate-500 mb-4 opacity-50" />
        <p className="text-lg font-medium text-white mb-2">Belum ada paket kuis</p>
        <p>Kuis untuk sistem ini belum tersedia.</p>
      </div>
    );
  }

  if (selectedPackage) {
    const pkgObj = packages.find(p => p.id === selectedPackage);
    const maxQs = selectedPackage === 'ALL' ? totalQuestions : (pkgObj?._count.questions || 0);

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => setSelectedPackage(null)} className="text-slate-400 hover:text-white mb-4 -ml-4">
            <ChevronLeft className="w-4 h-4 mr-2" /> Kembali
          </Button>
          <h3 className="text-xl font-bold text-white mb-1">Pilih Jumlah Soal</h3>
          <p className="text-slate-400 text-sm">Paket: <span className="text-purple-400 font-semibold">{selectedPackage === 'ALL' ? 'Semua Paket (Gabungan)' : pkgObj?.name}</span> ({maxQs} Soal)</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[10, 20, 30].map(num => (
             <Button
               key={num}
               disabled={maxQs < num}
               onClick={() => startQuiz(num)}
               className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-[#111118] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/20 text-white disabled:opacity-30"
             >
               <span className="text-2xl font-bold text-purple-300">{num}</span>
               <span className="text-xs text-slate-400">Soal</span>
             </Button>
          ))}
          <Button
             onClick={() => startQuiz('ALL')}
             className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-[#111118] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/20 text-white"
           >
             <span className="text-2xl font-bold text-purple-300">Semua</span>
             <span className="text-xs text-slate-400">({maxQs} Soal)</span>
           </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Kartu Semua Soal */}
      <motion.div className="md:col-span-2">
        <button
          onClick={() => setSelectedPackage('ALL')}
          className="w-full text-left group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 hover:from-purple-500/30 hover:to-indigo-600/30 border border-purple-500/30 hover:border-purple-400/50 transition-all"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-purple-300" />
                <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Gabungan</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">Semua Paket Soal</h4>
              <p className="text-purple-200/70 text-sm">Kerjakan total {totalQuestions} soal sekaligus secara acak dari semua paket.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-500 transition-all group-hover:text-white">
              <PlayCircle className="w-6 h-6" />
            </div>
          </div>
        </button>
      </motion.div>

      {/* Kartu Paket Individual */}
      {packages.map((pkg) => (
        <motion.div key={pkg.id}>
          <button
            onClick={() => setSelectedPackage(pkg.id)}
            className="w-full text-left group rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
                  <span className="text-slate-400 group-hover:text-purple-300 font-medium text-xs uppercase tracking-wider transition-colors">Paket Kuis</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-100 transition-colors">{pkg.name}</h4>
                <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{pkg._count.questions} Soal Tersedia</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <PlayCircle className="w-5 h-5" />
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function KanbanBoard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  const [categories, setCategories] = useState<SystemCategory[]>([]);
  const [preparations, setPreparations] = useState<Preparation[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [extraVideoTitles, setExtraVideoTitles] = useState<Record<string, string>>({});
  // State to store fetched YouTube titles for preparation videos
  const [prepVideoTitles, setPrepVideoTitles] = useState<Record<string, string>>({});
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, prepRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/preparations')
        ]);
        
        const catData = await catRes.json();
        const prepData = await prepRes.json();
        
        if (Array.isArray(catData)) {
          const sorted = catData.sort((a: any, b: any) => a.order - b.order);
          setCategories(sorted);
          setActiveCategory(sorted[0]?.id || null);
          
          const titles: Record<string, string> = {};
          await Promise.all(sorted.map(async (cat: SystemCategory) => {
            if (cat.extraVideoUrl) {
              const extraUrls = cat.extraVideoUrl.split(/[\s,]+/).filter((u: string) => u.trim() !== '');
              await Promise.all(extraUrls.map(async (url: string) => {
                try {
                  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
                  const videoId = match ? match[1] : null;
                  if (videoId && !titles[videoId]) {
                    const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
                    if (oembedRes.ok) {
                      const oembedData = await oembedRes.json();
                      if (oembedData.title) titles[videoId] = oembedData.title;
                    }
                  }
                } catch (err) {}
              }));
            }
          }));
          setExtraVideoTitles(titles);
        }
        
        if (Array.isArray(prepData)) setPreparations(prepData);
        
      } catch {
        toast.error('Gagal memuat data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const currentCat = categories.find(c => c.id === activeCategory);

  useEffect(() => {
    if (!currentCat) return;
    const { preparationVideos } = getVideosForCategory(currentCat.name, currentCat.youtubeUrl, currentCat.extraVideoUrl);
    const urls = preparationVideos.map(v => v.originalUrl).filter(Boolean);
    if (urls.length === 0) return;
    const titlesMap: Record<string, string> = {};
    Promise.all(
      urls.map(async (url) => {
        try {
          const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
          const videoId = match ? match[1] : null;
          if (videoId) {
            const res = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`);
            if (res.ok) {
              const data = await res.json();
              if (data.title) titlesMap[videoId] = data.title;
            }
          }
        } catch (e) {}
      })
    ).then(() => setPrepVideoTitles(titlesMap));
  }, [currentCat]);
  
  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPrepsForCategory = (catName: string) => {
    return preparations.filter(p => p.category === catName);
  };

  const getVideosForCategory = (catName: string, catYoutubeUrl: string | null, catExtraVideoUrl?: string | null) => {
    const preps = getPrepsForCategory(catName);
    const uniqueVideosMap = new Map<string, { id?: string, titles: string[], originalUrl: string }>();
    
    preps.forEach(p => {
      if (p.youtubeUrl) {
        const urls = p.youtubeUrl.split(/[\s,]+/).filter(u => u.trim() !== '');
        urls.forEach(url => {
          const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
          const videoId = match ? match[1] : url;
          
          if (!uniqueVideosMap.has(videoId)) {
            uniqueVideosMap.set(videoId, { id: p.id, titles: [p.title], originalUrl: url });
          } else {
            const existing = uniqueVideosMap.get(videoId)!;
            if (!existing.titles.includes(p.title)) existing.titles.push(p.title);
          }
        });
      }
    });

    if (catExtraVideoUrl) {
      const extraUrls = catExtraVideoUrl.split(/[\s,]+/).filter(u => u.trim() !== '');
      extraUrls.forEach((url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
        const videoId = match ? match[1] : url;
        
        if (!uniqueVideosMap.has(videoId)) {
          uniqueVideosMap.set(videoId, { 
            id: `extra-${videoId}`,
            titles: [extraVideoTitles[videoId] || 'Materi Tambahan'], 
            originalUrl: url 
          });
        }
      });
    }
    
    return {
      categoryVideo: catYoutubeUrl,
      preparationVideos: Array.from(uniqueVideosMap.values())
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050511] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] text-white font-sans overflow-hidden">
      <BackgroundOrbs />

      <Suspense fallback={<div className="h-16 bg-[#050511]" />}>
        <Navbar />
      </Suspense>

      <ViewTransition name="page-content">
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden max-w-[1800px] mx-auto w-full">
        
        <div className="lg:hidden p-4 border-b border-white/5 bg-[#050511] z-40 shrink-0">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                <LayoutGrid className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-medium">Sistem Aktif</p>
                <p className="text-sm font-bold text-white">{currentCat?.name || 'Pilih Sistem'}</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${mobileSidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <aside className={`w-full lg:w-80 xl:w-96 bg-[#08081a]/80 border-b lg:border-b-0 lg:border-r border-white/5 flex-col shrink-0 ${mobileSidebarOpen ? 'flex max-h-[50vh] lg:max-h-none' : 'hidden lg:flex'}`}>
          <div className="p-4 border-b border-white/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Cari sistem..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.07] transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
            {filteredCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              const prepCount = getPrepsForCategory(cat.name).length;
              const { preparationVideos } = getVideosForCategory(cat.name, cat.youtubeUrl, cat.extraVideoUrl);
              const videoCount = preparationVideos.length + (cat.youtubeUrl ? 1 : 0);
              
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 group
                    ${isActive 
                      ? 'bg-white/10 border border-white/10 shadow-[0_0_20px_rgba(14,165,233,0.1)]' 
                      : 'hover:bg-white/5 border border-transparent'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden
                    ${isActive ? 'bg-sky-500/20 ring-2 ring-sky-500/30' : 'bg-white/5'}`}>
                    {cat.imageUrl ? (
                      <img src={cat.imageUrl} alt="" className="w-full h-full object-cover opacity-70" />
                    ) : (
                      <FlaskConical className={`w-5 h-5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-sm truncate ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {cat.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Microscope className="w-3 h-3" /> {prepCount}
                      </span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Video className="w-3 h-3" /> {videoCount}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="w-1 h-8 bg-sky-400 rounded-full shrink-0"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#050511]/50">
          <AnimatePresence mode="wait">
            {currentCat && (
              <motion.div
                key={currentCat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-6 lg:p-8 xl:p-10 space-y-6 lg:space-y-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{currentCat.name}</h1>
                    <p className="text-slate-400 text-sm lg:text-base max-w-2xl leading-relaxed">
                      {mode === 'video'
                        ? `Tonton kumpulan video pembelajaran interaktif AnatoPlay untuk mendalami ${currentCat.name.toLowerCase()}.`
                        : mode === 'kuis'
                        ? `Uji kompetensi dan pemahaman Anda tentang ${currentCat.name.toLowerCase()} melalui AnatoQuiz.`
                        : mode === 'preparat_only'
                        ? `Eksplorasi struktur ${currentCat.name.toLowerCase()} secara mendetail melalui koleksi preparat 3D interaktif.`
                        : currentCat.description || 'Pelajari sistem tubuh ini melalui preparat 3D interaktif, video pembelajaran, dan kuis kompetensi.'}
                    </p>
                  </div>
                </div>

                {(!mode || mode === 'preparat_only') && (
                <section>
                  {!mode && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                        <Microscope className="w-4 h-4 text-sky-400" />
                      </div>
                      <h2 className="font-bold text-lg">Preparat 3D</h2>
                    </div>
                    <span className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full">
                      {getPrepsForCategory(currentCat.name).length} item
                    </span>
                  </div>
                  )}

                  {getPrepsForCategory(currentCat.name).length === 0 ? (
                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 text-center">
                      <Microscope className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                      <p className="text-sm text-slate-500">Belum ada preparat untuk sistem ini.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                      {getPrepsForCategory(currentCat.name).map((prep, i) => (
                        <motion.div
                          key={prep.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => router.push(`/preparat/${prep.id}`)}
                          className="group bg-[#111118] border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-sky-500/50 hover:bg-[#161620] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)]"
                        >
                          {prep.thumbnailUrl && (
                            <div className="w-full h-40 sm:h-48 overflow-hidden bg-slate-800">
                              <img 
                                src={prep.thumbnailUrl} 
                                alt={prep.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="font-semibold text-sm lg:text-base text-slate-200 group-hover:text-white mb-1 line-clamp-1">
                              {prep.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-slate-500 line-clamp-2">
                              {prep.description || 'Tidak ada deskripsi'}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </section>
                )}

                {(!mode || mode === 'materi') && (
                <section>
                  {!mode && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h2 className="font-bold text-lg">Materi Pendukung</h2>
                    </div>
                  </div>
                  )}

                  {(() => {
                    // Category-level documents
                    const catDocUrls = currentCat.documentUrl
                      ? currentCat.documentUrl.split(/[,]+/).map(u => u.trim()).filter(u => u !== '')
                      : [];
                    // Preparat-level documents  
                    const prepDocs = getPrepsForCategory(currentCat.name).filter(p => p.documentUrl);
                    const totalDocs = catDocUrls.length + prepDocs.length;
                    
                    if (totalDocs === 0) return (
                      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 text-center">
                        <FileText className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                        <p className="text-sm text-slate-500">Belum ada dokumen materi untuk sistem ini.</p>
                      </div>
                    );

                    const getFileName = (url: string) => {
                      const parts = url.split('/').pop() || 'Dokumen';
                      const underscoreIndex = parts.indexOf('_');
                      if (underscoreIndex > 0 && underscoreIndex < 40) {
                        return decodeURIComponent(parts.slice(underscoreIndex + 1));
                      }
                      return decodeURIComponent(parts);
                    };

                    return (
                      <div className="space-y-4">
                        {/* Category-level documents */}
                        {catDocUrls.length > 0 && (
                          <div className="space-y-3">
                            {mode === 'materi' && catDocUrls.length > 0 && prepDocs.length > 0 && (
                              <h3 className="text-xs font-semibold text-emerald-400/70 uppercase tracking-wider">Materi Kategori</h3>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                              {catDocUrls.map((url, i) => {
                                const fileName = getFileName(url);
                                return (
                                  <div key={`cat-${i}`} className="bg-[#111118] border border-emerald-500/10 rounded-2xl p-5 flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                      <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-emerald-400" />
                                      </div>
                                      <div className="min-w-0">
                                        <h4 className="font-semibold text-sm text-white truncate">{fileName}</h4>
                                        <p className="text-xs text-emerald-400/60 truncate">Materi {currentCat.name}</p>
                                      </div>
                                    </div>
                                    <Button 
                                      size="sm" 
                                      className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 shrink-0 ml-2"
                                      onClick={() => window.open(url, '_blank')}
                                    >
                                      Buka
                                    </Button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Preparat-level documents */}
                        {prepDocs.length > 0 && (
                          <div className="space-y-3">
                            {mode === 'materi' && catDocUrls.length > 0 && prepDocs.length > 0 && (
                              <h3 className="text-xs font-semibold text-sky-400/70 uppercase tracking-wider">Materi Preparat</h3>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                              {prepDocs.map((doc, i) => {
                                const fileName = getFileName(doc.documentUrl || '');
                                return (
                                  <div key={`prep-${i}`} className="bg-[#111118] border border-white/5 rounded-2xl p-5 flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                      <div className="w-10 h-10 shrink-0 rounded-lg bg-sky-500/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-sky-400" />
                                      </div>
                                      <div className="min-w-0">
                                        <h4 className="font-semibold text-sm text-white truncate">{doc.title}</h4>
                                        <p className="text-xs text-slate-500 truncate">{fileName}</p>
                                      </div>
                                    </div>
                                    <Button 
                                      size="sm" 
                                      className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 shrink-0 ml-2"
                                      onClick={() => window.open(doc.documentUrl || '', '_blank')}
                                    >
                                      Buka
                                    </Button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </section>
                )}

                {(!mode || mode === 'video') && (
                <section>
                  {!mode && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                        <Video className="w-4 h-4 text-rose-400" />
                      </div>
                      <h2 className="font-bold text-lg">AnatoPlay</h2>
                    </div>
                  </div>
                  )}

                  {(() => {
                    const { categoryVideo, preparationVideos } = getVideosForCategory(currentCat.name, currentCat.youtubeUrl, currentCat.extraVideoUrl);
                    const totalVideos = (categoryVideo ? 1 : 0) + preparationVideos.length;
                    
                    if (totalVideos === 0) return (
                      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 text-center">
                        <Video className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                        <p className="text-sm text-slate-500">Belum ada video untuk sistem ini.</p>
                      </div>
                    );

                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {categoryVideo && (() => {
                          const match = categoryVideo.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
                          const videoId = match ? match[1] : null;
                          const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : categoryVideo;
                          
                          return (
                            <div className="bg-[#111118] border border-rose-500/20 rounded-2xl overflow-hidden shadow-md sm:col-span-2 xl:col-span-1">
                              <div className="aspect-video relative bg-slate-800">
                                {videoId ? (
                                  <iframe src={embedUrl} title="Intro" className="absolute inset-0 w-full h-full border-0" allowFullScreen />
                                ) : (
                                  <div className="flex items-center justify-center w-full h-full"><PlayCircle className="w-10 h-10 text-slate-600"/></div>
                                )}
                              </div>
                              <div className="p-4">
                                <span className="inline-block px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-400 text-[10px] font-bold uppercase mb-1">Utama</span>
                                <h4 className="font-semibold text-sm text-slate-200">Pengantar {currentCat.name}</h4>
                              </div>
                            </div>
                          );
                        })()}

                        {preparationVideos.map((prep, vi) => {
                          const match = prep.originalUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
                          const videoId = match ? match[1] : null;
                          const timeMatch = prep.originalUrl.match(/[?&](?:t|start)=([^&\n]+)/);
                          const startParam = timeMatch && timeMatch[1] ? `?start=${timeMatch[1].replace('s', '')}` : '';
                          const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}${startParam}` : prep.originalUrl;
                          
                          return (
                            <div key={vi} className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden shadow-md">
                              <div className="aspect-video relative bg-slate-800">
                                {videoId ? (
                                  <iframe src={embedUrl} title={prepVideoTitles[videoId] ?? prep.titles[0]} className="absolute inset-0 w-full h-full border-0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                                ) : (
                                  <div className="flex items-center justify-center w-full h-full"><PlayCircle className="w-10 h-10 text-slate-600"/></div>
                                )}
                              </div>
                              <div className="p-4">
                                <h4 className="font-semibold text-sm text-slate-200 line-clamp-2">{prepVideoTitles[videoId] ?? prep.titles[0]}</h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </section>
                )}
                                {/* SECTION: Kuis (AnatoQuiz) */}
                {(!mode || mode === 'kuis') && (
                <section>
                  {!mode && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <BrainCircuit className="w-4 h-4 text-purple-400" />
                      </div>
                      <h2 className="font-bold text-lg">AnatoQuiz</h2>
                    </div>
                  </div>
                  )}
                  
                  <QuizPackageList categorySlug={currentCat.slug} categoryName={currentCat.name} />
                </section>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      </ViewTransition>
    </div>
  );
}

export default function KanbanPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050511] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <KanbanBoard />
    </Suspense>
  );
}
