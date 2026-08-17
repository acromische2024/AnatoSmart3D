'use client';

import { useState, useEffect, Suspense, ViewTransition } from 'react';
import { Navbar } from '@/components/anatomy/Navbar';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  FlaskConical, 
  ChevronLeft, 
  Video, 
  BrainCircuit,
  BookOpen,
  Microscope,
  ChevronRight,
  PlayCircle,
  FileText
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';

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

export default function SystemDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const [category, setCategory] = useState<SystemCategory | null>(null);
  const [preparations, setPreparations] = useState<Preparation[]>([]);
  const [loading, setLoading] = useState(true);
  // State to store fetched YouTube titles for preparation videos
  const [prepVideoTitles, setPrepVideoTitles] = useState<Record<string, string>>({});
  const [mobileTab, setMobileTab] = useState('preparat'); // Default ke preparat di mobile!
  const [extraVideoTitles, setExtraVideoTitles] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, prepRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/preparations')
        ]);
        
        const catData = await catRes.json();
        const prepData = await prepRes.json();
        
        let foundCat: SystemCategory | null = null;
        if (Array.isArray(catData)) {
          foundCat = catData.find((c: any) => c.slug === slug) || null;
          setCategory(foundCat);
        }
        
        if (Array.isArray(prepData)) {
          setPreparations(prepData.filter((p: Preparation) => 
            p.category === (foundCat?.name || slug)
          ));
        }
        
        // Fetch extra video titles
        if (foundCat?.extraVideoUrl) {
          const titles: Record<string, string> = {};
          const extraUrls = foundCat.extraVideoUrl.split(/[\s,]+/).filter((u: string) => u.trim() !== '');
          await Promise.all(extraUrls.map(async (url: string) => {
            try {
              const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
              const videoId = match ? match[1] : null;
              if (videoId) {
                const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
                if (oembedRes.ok) {
                  const oembedData = await oembedRes.json();
                  if (oembedData.title) titles[videoId] = oembedData.title;
                }
              }
            } catch (err) {}
          }));
          setExtraVideoTitles(titles);
        }
        
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // After preparations are loaded, fetch original YouTube titles for each preparation video
    (async () => {
      const titles: Record<string, string> = {};
      await Promise.all(preparations.map(async (prep) => {
        if (prep.youtubeUrl) {
          const urls = prep.youtubeUrl.split(/[\s,]+/).filter((u) => u.trim() !== '');
          await Promise.all(urls.map(async (url) => {
            const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
            const videoId = match ? match[1] : null;
            if (videoId && !titles[videoId]) {
              try {
                const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
                if (oembedRes.ok) {
                  const data = await oembedRes.json();
                  if (data.title) titles[videoId] = data.title;
                }
              } catch (e) {}
            }
          }));
        }
      }));
      setPrepVideoTitles(titles);
    })();
  }, [slug]);

  const getVideosForCategory = () => {
    if (!category) return { categoryVideos: [] as string[], preparationVideos: [] as any[] };
    const catName = category.name;
    const catYoutubeUrl = category.youtubeUrl;
    const catExtraVideoUrl = category.extraVideoUrl;
    
    const preps = preparations;
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
      categoryVideos: catYoutubeUrl ? catYoutubeUrl.split(/[\s,]+/).filter(u => u.trim() !== '') : [],
      preparationVideos: Array.from(uniqueVideosMap.values())
    };
  };

  const [isDiving, setIsDiving] = useState<string | null>(null);

  const handlePrepClick = (id: string) => {
    setIsDiving(id);
    setTimeout(() => {
      router.push(`/preparat/${id}`);
    }, 400);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050511] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-[#050511] flex items-center justify-center text-white">
        <p>Sistem tidak ditemukan</p>
      </div>
    );
  }

  const { categoryVideos, preparationVideos } = getVideosForCategory();
  const totalVideos = categoryVideos.length + preparationVideos.length;

  // Komponen Preparat List (reusable)
  const PreparatList = ({ compact = false }: { compact?: boolean }) => (
    <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'}>
      {preparations.length === 0 ? (
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 text-center col-span-full">
          <Microscope className="w-10 h-10 text-slate-700 mx-auto mb-3" />
          <p className="text-sm text-slate-500">Belum ada preparat untuk sistem ini.</p>
        </div>
      ) : (
        preparations.map((prep, i) => (
          <motion.div
            key={prep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => handlePrepClick(prep.id)}
            className={`group bg-[#111118] border border-white/5 cursor-pointer hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300
              ${compact 
                ? 'p-3 rounded-xl flex items-center gap-3 hover:-translate-y-1' 
                : 'rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)]'
              }`}
          >
            {prep.thumbnailUrl && !compact && (
              <div className="w-full h-40 sm:h-48 overflow-hidden bg-slate-800">
                <img 
                  src={prep.thumbnailUrl} 
                  alt={prep.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            )}
            {prep.thumbnailUrl && compact && (
              <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0">
                <img src={prep.thumbnailUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            )}
            <div className={compact ? 'flex-1 min-w-0' : 'p-4'}>
              <h4 className={`font-semibold text-slate-200 group-hover:text-sky-300 transition-colors line-clamp-1 ${compact ? 'text-sm' : 'text-sm lg:text-base mb-1'}`}>
                {prep.title}
              </h4>
              {!compact && (
                <p className="text-xs lg:text-sm text-slate-500 line-clamp-2">
                  {prep.description || 'Tidak ada deskripsi'}
                </p>
              )}
            </div>
            {compact && <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 group-hover:translate-x-1 transition-transform group-hover:text-sky-400" />}
          </motion.div>
        ))
      )}
    </div>
  );

  const videoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const videoItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } }
  };

  // Komponen Video List
  const VideoList = () => {
    return (
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={videoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {totalVideos === 0 ? (
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 text-center col-span-full">
            <Video className="w-10 h-10 text-slate-700 mx-auto mb-3" />
            <p className="text-sm text-slate-500">Belum ada video untuk sistem ini.</p>
          </div>
        ) : (
          <>
            {categoryVideos.map((url, index) => {
              const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
              const videoId = match ? match[1] : null;
              const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url;
              return (
                <motion.div key={`main-${index}`} variants={videoItemVariants} className="group bg-[#111118] border border-rose-500/20 rounded-2xl overflow-hidden shadow-md sm:col-span-2 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(225,29,72,0.2)] transition-all duration-300">
                  <div className="aspect-video relative bg-slate-800">
                    {videoId ? (
                      <iframe src={embedUrl} title="Intro" className="absolute inset-0 w-full h-full border-0" allowFullScreen />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full">
                        <PlayCircle className="w-10 h-10 text-slate-600 group-hover:scale-125 group-hover:text-rose-500 transition-all duration-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-400 text-[10px] font-bold uppercase mb-1">Utama</span>
                    <h4 className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Pengantar {category.name} {categoryVideos.length > 1 ? `(Part ${index + 1})` : ''}</h4>
                  </div>
                </motion.div>
              );
            })}
            {preparationVideos.map((prep, vi) => {
            const match = prep.originalUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
            const videoId = match ? match[1] : null;
            const timeMatch = prep.originalUrl.match(/[?&](?:t|start)=([^&\n]+)/);
            const startParam = timeMatch && timeMatch[1] ? `?start=${timeMatch[1].replace('s', '')}` : '';
            const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}${startParam}` : prep.originalUrl;
            return (
              <motion.div variants={videoItemVariants} key={vi} className="group bg-[#111118] border border-white/5 rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:border-white/20 transition-all duration-300">
                <div className="aspect-video relative bg-slate-800">
                  {videoId ? (
                    <iframe src={embedUrl} title={prep.titles[0]} className="absolute inset-0 w-full h-full border-0" allowFullScreen />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <PlayCircle className="w-10 h-10 text-slate-600 group-hover:scale-125 group-hover:text-white transition-all duration-300" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm text-slate-200 line-clamp-2">{prepVideoTitles[videoId] ?? prep.titles[0]}</h4>
                </div>
              </motion.div>
            );
          })}
        </>
      )}
    </motion.div>
    );
  };

  // Komponen Materi
  const MateriContent = () => {
    const getFileName = (url: string) => {
      const parts = url.split('/').pop() || 'Dokumen';
      const underscoreIndex = parts.indexOf('_');
      if (underscoreIndex > 0 && underscoreIndex < 40) {
        return decodeURIComponent(parts.slice(underscoreIndex + 1));
      }
      return decodeURIComponent(parts);
    };

    // Collect all docs: category-level + preparat-level, deduplicated
    const allDocs: { url: string; label: string; source: 'category' | 'preparat' }[] = [];
    const seenUrls = new Set<string>();

    // Category-level docs
    if (category.documentUrl) {
      const catUrls = category.documentUrl.split(/[,]+/).map(u => u.trim()).filter(u => u !== '');
      catUrls.forEach(url => {
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          allDocs.push({ url, label: getFileName(url), source: 'category' });
        }
      });
    }

    // Preparat-level docs
    preparations.forEach(prep => {
      if (prep.documentUrl) {
        const prepUrls = prep.documentUrl.split(/[,]+/).map(u => u.trim()).filter(u => u !== '');
        prepUrls.forEach(url => {
          if (!seenUrls.has(url)) {
            seenUrls.add(url);
            allDocs.push({ url, label: `${prep.title}`, source: 'preparat' });
          }
        });
      }
    });

    if (allDocs.length === 0) {
      return (
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-5 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-sky-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg sm:text-xl mb-3">Materi Overview</h3>
              <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
                <p>
                  {category.description || 'Sistem ini merupakan bagian penting dari anatomi tubuh manusia. Pelajari lebih lanjut melalui preparat 3D interaktif dan video pembelajaran yang tersedia.'}
                </p>
                <p className="text-slate-500 text-sm">
                  Belum ada dokumen materi yang diupload untuk sistem ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Description */}
        {category.description && (
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-5 sm:p-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {category.description}
            </p>
          </div>
        )}
        {/* Document cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {allDocs.map((doc, i) => {
            const isCat = doc.source === 'category';
            return (
              <div key={i} className={`bg-[#111118] border rounded-2xl p-4 flex items-center justify-between hover:bg-white/[0.02] transition-all duration-200 ${isCat ? 'border-emerald-500/10 hover:border-emerald-500/30' : 'border-sky-500/10 hover:border-sky-500/30'}`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${isCat ? 'bg-emerald-500/10' : 'bg-sky-500/10'}`}>
                    <FileText className={`w-5 h-5 ${isCat ? 'text-emerald-400' : 'text-sky-400'}`} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-white truncate">{isCat ? doc.label : doc.label}</h4>
                    <p className={`text-xs truncate ${isCat ? 'text-emerald-400/60' : 'text-sky-400/60'}`}>
                      {isCat ? 'Materi Kategori' : `Materi Preparat`}
                    </p>
                  </div>
                </div>
                <button 
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg shrink-0 ml-2 transition-colors ${isCat ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400' : 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-400'}`}
                  onClick={() => window.open(doc.url, '_blank')}
                >
                  Buka
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Komponen Kuis
  const KuisContent = () => (
    <div 
      onClick={() => router.push(`/kuis/${category.slug}`)}
      className="bg-[#111118] border border-white/5 p-5 sm:p-6 rounded-2xl cursor-pointer hover:border-purple-500/50 hover:bg-[#1a1a24] hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 group flex items-center gap-4"
    >
      <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
        <BrainCircuit className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-base text-slate-200 group-hover:text-white transition-colors mb-1">
          Uji Kompetensi: {category.name}
        </h4>
        <p className="text-sm text-slate-500">
          Mulai kerjakan soal pilihan ganda & isian singkat.
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
    </div>
  );

  return (
    <motion.div 
      animate={isDiving ? { scale: 1.05, filter: 'blur(8px)', opacity: 0 } : { scale: 1, filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
      className="min-h-screen flex flex-col bg-[#050511] text-white font-sans overflow-x-hidden"
    >
      <BackgroundOrbs />

      <Suspense fallback={<div className="h-16 bg-[#050511]" />}>
        <Navbar />
      </Suspense>

      <ViewTransition name="page-content">
      {/* Hero Section — Full width */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 mt-2 sm:mt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-[200px] sm:h-[280px] lg:h-[320px] xl:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {category.imageUrl ? (
            <img 
              src={category.imageUrl} 
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050511]/95 via-[#050511]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-wider mb-1 sm:mb-2">
              {category.name}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          MOBILE VIEW (< lg): Tab Switcher Sticky
          ========================================== */}
      <div className="lg:hidden mt-4 sm:mt-6 px-4 sm:px-6 relative">
        {/* Sticky Tab Bar */}
        <div className="sticky top-0 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-[#050511]/90 backdrop-blur-xl border-b border-white/5">
          <div className="w-full flex justify-between items-center relative h-10">
            {['materi', 'preparat', 'video', 'kuis'].map(tab => {
              const isActive = mobileTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setMobileTab(tab)}
                  className={`flex-1 relative pb-2 text-xs font-semibold capitalize transition-all z-10 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="relative z-20">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        tab === 'materi' ? 'bg-white' :
                        tab === 'preparat' ? 'bg-sky-500' :
                        tab === 'video' ? 'bg-rose-500' : 'bg-purple-500'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-4 pb-8 space-y-4">
          <AnimatePresence mode="wait">
            {mobileTab === 'materi' && (
              <motion.div key="materi" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <MateriContent />
              </motion.div>
            )}
            {mobileTab === 'preparat' && (
              <motion.div key="preparat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-slate-400">Preparat 3D</h3>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-full">{preparations.length}</span>
                </div>
                <PreparatList compact />
              </motion.div>
            )}
            {mobileTab === 'video' && (
              <motion.div key="video" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <VideoList />
              </motion.div>
            )}
            {mobileTab === 'kuis' && (
              <motion.div key="kuis" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <KuisContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ==========================================
          DESKTOP VIEW (≥ lg): Master-Detail 2 Kolom
          ========================================== */}
      <div className="hidden lg:block mt-6 lg:mt-8 px-6 lg:px-10 xl:px-16 pb-12">
        <div className="grid grid-cols-12 gap-8 xl:gap-10 max-w-[1600px] mx-auto">
          
          {/* KOLOM KIRI: Konten Utama */}
          <div className="col-span-8 xl:col-span-9 space-y-8">
            
            {/* Materi Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-sky-400" />
                <h2 className="font-bold text-xl">Materi Overview</h2>
              </div>
              <MateriContent />
            </section>

            {/* Video */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-rose-400" />
                  <h2 className="font-bold text-xl">AnatoPlay</h2>
                </div>
                <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">{totalVideos} video</span>
              </div>
              <VideoList />
            </section>

            {/* Kuis */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-5 h-5 text-purple-400" />
                <h2 className="font-bold text-xl">AnatoQuiz</h2>
              </div>
              <KuisContent />
            </section>
          </div>

          {/* KOLOM KANAN: Sidebar Preparat (Sticky) */}
          <aside className="col-span-4 xl:col-span-3">
            <div className="sticky top-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-sky-400" />
                  <h2 className="font-bold text-lg">Preparat 3D</h2>
                </div>
                <span className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full">{preparations.length}</span>
              </div>
              
              <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-4 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                {preparations.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-4">Belum ada preparat</p>
                ) : (
                  preparations.map((prep) => (
                    <div
                      key={prep.id}
                      onClick={() => router.push(`/preparat/${prep.id}`)}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-transparent hover:border-sky-500/30 cursor-pointer transition-all"
                    >
                      {prep.thumbnailUrl ? (
                        <img src={prep.thumbnailUrl} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                          <Microscope className="w-5 h-5 text-slate-600" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-slate-200 group-hover:text-white truncate">{prep.title}</h4>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>

        </div>
      </div>
      </ViewTransition>
    </motion.div>
  );
}
