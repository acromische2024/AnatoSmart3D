'use client';

import { useState, useEffect, use, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { CleanYoutubePlayer } from '@/components/anatomy/CleanYoutubePlayer';
import { Button } from '@/components/ui/button';
import { 
  PlayCircle, 
  FileText, 
  ExternalLink, 
  Box, 
  Video, 
  ChevronLeft, 
  ArrowLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Marker = {
  id: string;
  label: string;
  description: string | null;
  positionX: number;
  positionY: number;
  positionZ: number;
  color: string | null;
  order: number;
};

type Preparation = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  imageUrl: string | null;
  modelUrl: string | null;
  thumbnailUrl: string | null;
  youtubeUrl: string | null;
  documentUrl: string | null;
  markers?: Marker[];
};

export default function PreparatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [currentPrep, setCurrentPrep] = useState<Preparation | null>(null);
  const [preparationsList, setPreparationsList] = useState<Preparation[]>([]);
  const [loading, setLoading] = useState(true);
  const [youtubeTitles, setYoutubeTitles] = useState<string[]>([]);
  const [activeHotspotIndex, setActiveHotspotIndex] = useState<number | null>(null);

  // Fetch titles when youtubeUrl changes
  useEffect(() => {
    if (!currentPrep?.youtubeUrl) {
      setYoutubeTitles([]);
      return;
    }
    const urls = currentPrep.youtubeUrl.split(/[\s,]+/).filter(u => u.trim() !== '');
    Promise.all(
      urls.map((url) =>
        fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`)
          .then((res) => res.json())
          .then((data) => data.title || '')
          .catch(() => '')
      )
    ).then((titles) => setYoutubeTitles(titles));
  }, [currentPrep?.youtubeUrl]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fetch current preparation
        const res = await fetch(`/api/preparations/${resolvedParams.id}`);
        if (!res.ok) throw new Error('Preparat tidak ditemukan');
        const prep: Preparation = await res.json();
        setCurrentPrep(prep);

        // Fetch all preparations to get the ones in the same category
        if (prep.category) {
          const allRes = await fetch('/api/preparations');
          const allData: Preparation[] = await allRes.json();
          if (Array.isArray(allData)) {
            const sameCategory = allData.filter(p => p.category === prep.category);
            setPreparationsList(sameCategory);
          }
        }
      } catch (err) {
        toast.error('Gagal memuat preparat');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [resolvedParams.id]);

  // Render 3D iframe securely
  const getIframeUrl = (url: string) => {
    if (url.includes('p3d.in')) {
      const idMatch = url.match(/p3d\.in\/(?:e\/)?([a-zA-Z0-9]+)/);
      if (idMatch && idMatch[1]) {
        return `https://p3d.in/e/${idMatch[1]}?api=true&controls-hidden=1&link-hidden=1&spin=1`;
      }
    }
    return url;
  };

  const getYoutubeEmbed = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
    if (!match) return url;
    
    const videoId = match[1];
    const timeMatch = url.match(/[?&](?:t|start)=([^&\n]+)/);
    let startParam = '';
    
    if (timeMatch && timeMatch[1]) {
      let timeVal = timeMatch[1].replace('s', '');
      startParam = `?start=${timeVal}`;
    }
    
    return `https://www.youtube.com/embed/${videoId}${startParam}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050511] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!currentPrep) {
    return (
      <div className="min-h-screen bg-[#050511] flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Preparat Tidak Ditemukan</h1>
        <Button onClick={() => router.back()} variant="outline" className="text-black">
          Kembali
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050511] text-white flex flex-col font-sans h-screen overflow-hidden">
      
      {/* Header */}
      <header className="h-16 flex items-center px-4 md:px-6 bg-[#0a0a14] border-b border-white/10 shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white hover:bg-white/10 mr-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali
        </Button>
        <div className="flex items-center gap-3">
          <Box className="w-5 h-5 text-sky-400" />
          <h1 className="font-bold text-lg hidden md:block">{currentPrep.title}</h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Left) */}
        {preparationsList.length > 0 && (
          <div className="hidden md:flex w-[320px] bg-[#0a0a14] border-r border-white/10 flex-col h-full shrink-0">
            <div className="p-6 border-b border-white/5">
              <h3 className="font-bold text-lg text-sky-400 mb-1">Daftar Preparat</h3>
              <p className="text-xs text-slate-500">{currentPrep.category || 'Lainnya'}</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {preparationsList.map((p) => {
                const isActive = p.id === currentPrep.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (!isActive) {
                        router.push(`/preparat/${p.id}`);
                      }
                    }}
                    className={cn(
                      "w-full text-left p-4 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-between group",
                      isActive 
                        ? "bg-sky-500/10 text-sky-300 border border-sky-500/30" 
                        : "hover:bg-white/5 text-slate-300 hover:text-white border border-transparent"
                    )}
                  >
                    <span>{p.title}</span>
                    {!isActive && <ChevronLeft className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 rotate-180 transition-all" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Content Area (Right) */}
        <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar bg-[#050511]">
          <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
            
            <div className="mb-6 md:hidden">
              <h2 className="text-2xl font-bold">{currentPrep.title}</h2>
              <p className="text-sky-400 text-sm">{currentPrep.category}</p>
            </div>

            {/* 3D Model Viewer Container */}
            <div className="w-full bg-black/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative mb-6">
              {currentPrep.modelUrl ? (
                <div className="w-full h-[50vh] md:h-[60vh] min-h-[400px] relative">
                  <iframe
                    ref={iframeRef}
                    src={getIframeUrl(currentPrep.modelUrl)}
                    title={currentPrep.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true"
                    execution-while-not-rendered="true"
                    web-share="true"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
                </div>
              ) : currentPrep.imageUrl ? (
                <div className="w-full h-[50vh] md:h-[60vh] min-h-[400px] relative">
                  <img
                    src={currentPrep.imageUrl}
                    alt={currentPrep.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-[50vh] md:h-[60vh] min-h-[400px] flex flex-col items-center justify-center bg-slate-900/50">
                  <Box className="w-16 h-16 text-slate-700 mb-4" />
                  <p className="text-slate-500 font-medium">Model 3D belum tersedia</p>
                </div>
              )}
            </div>



            {/* Tabs Materi | Video */}
            <Tabs defaultValue="materi" className="w-full">
              <div className="flex border-b border-white/10 mb-6 pb-2">
                <TabsList className="bg-transparent h-auto p-0 gap-8">
                  <TabsTrigger 
                    value="materi" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-sky-400 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-400 rounded-none px-2 py-2 text-base font-semibold text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Materi Preparat
                  </TabsTrigger>
                  <TabsTrigger 
                    value="video" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-rose-400 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-rose-400 rounded-none px-2 py-2 text-base font-semibold text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    AnatoPlay
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="materi" className="mt-0 outline-none pb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="materi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Description */}
                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-white/5">
                      {currentPrep.description ? (
                        <p className="whitespace-pre-wrap">{currentPrep.description}</p>
                      ) : (
                        <p className="italic text-slate-500">Tidak ada deskripsi tersedia untuk preparat ini.</p>
                      )}
                    </div>

                    {/* Document Viewer & Link */}
                    {currentPrep.documentUrl && (
                      <div className="space-y-4">
                        <div className="w-full h-[600px] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                          {(() => {
                            const url = currentPrep.documentUrl || '';
                            const isPdf = url.toLowerCase().includes('.pdf');
                            const iframeSrc = isPdf 
                              ? url 
                              : `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
                            
                            return (
                              <iframe 
                                src={iframeSrc}
                                className="w-full h-full border-none bg-white"
                                title="Document Viewer"
                              />
                            );
                          })()}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl">
                          <div className="flex items-center gap-4 mb-4 sm:mb-0">
                            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                              <FileText className="w-6 h-6 text-sky-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-sky-100">Unduh Dokumen Pendukung</h4>
                              <p className="text-sm text-sky-400/80">Simpan materi PDF/PPT/Word ke perangkatmu</p>
                            </div>
                          </div>
                          <Button
                            className="bg-sky-500 hover:bg-sky-400 text-black font-semibold"
                            onClick={() => window.open(currentPrep.documentUrl || '', '_blank')}
                          >
                            Download Dokumen
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>

              <TabsContent value="video" className="mt-0 outline-none pb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {currentPrep.youtubeUrl ? (
                      <div className="space-y-8">
                        {currentPrep.youtubeUrl.split(/[\s,]+/).filter(url => url.trim() !== '').map((url, i) => (
                          <div key={i} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                            <div className="aspect-video w-full relative">
                              {(() => {
                                const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
                                const videoId = match ? match[1] : null;
                                return videoId ? (
                                  <CleanYoutubePlayer videoId={videoId} className="w-full h-full rounded-none" />
                                ) : (
                                  <iframe
                                    src={getYoutubeEmbed(url)}
                                    title={youtubeTitles[i] ?? `Video ${i + 1}`}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  />
                                );
                              })()}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-32 bg-white/[0.02] border border-white/5 rounded-3xl">
                        <div className="w-20 h-20 rounded-full bg-rose-500/10 flex items-center justify-center mb-6">
                          <PlayCircle className="w-10 h-10 text-rose-500/40" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-300">AnatoPlay tidak tersedia</h4>
                        <p className="text-slate-500 max-w-sm text-center mt-2">
                          Belum ada AnatoPlay penjelasan yang ditautkan untuk preparat ini.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
