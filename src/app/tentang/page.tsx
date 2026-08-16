'use client';

import { useState, useEffect, Suspense } from 'react';
import { Navbar } from '@/components/anatomy/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { 
  ChevronLeft, 
  Menu, 
  X, 
  Users, 
  GraduationCap, 
  Microscope, 
  Loader2, 
  Mail, 
  MapPin, 
  Calendar, 
  Quote, 
  BookOpen, 
  ExternalLink, 
  Instagram,
  Heart,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { Profile } from '@/components/anatomy/ProfileManager';

export default function TentangPage() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("2024");
  const [isMounted, setIsMounted] = useState(false);
  
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  useEffect(() => {
    setIsMounted(true);
    async function fetchProfiles() {
      try {
        const res = await fetch('/api/profiles');
        const data = await res.json();
        setProfiles(data);
        
        // Auto select the first available ASLAB year tab if any
        const aslabYears = Array.from(new Set(data.filter((p: Profile) => p.type === 'ASLAB' && p.groupOrYear).map((p: Profile) => p.groupOrYear)));
        if (aslabYears.length > 0 && !aslabYears.includes("2024")) {
          setActiveTab(aslabYears[0] as string);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Preparat', href: '/semua?mode=preparat_only' },
    { label: 'AnatoPlay', href: '/semua?mode=video' },
    { label: 'AnatoQuiz', href: '/semua?mode=kuis' },
  ];

  if (!isMounted) return null;

  // Group Profiles
  const dosenAndStaff = profiles.filter(p => p.type === 'DOSEN' || p.type === 'STAFF');
  dosenAndStaff.sort((a, b) => a.order - b.order);

  const aslabs = profiles.filter(p => p.type === 'ASLAB');
  const aslabYears = Array.from(new Set(aslabs.map(p => p.groupOrYear).filter(Boolean))) as string[];
  aslabYears.sort();

  const renderInstagramBadge = (linkInstagram?: string | null) => {
    if (!linkInstagram) return null;
    const raw = linkInstagram.trim();
    if (!raw) return null;

    let username = raw;
    let href = raw;

    if (raw.includes('instagram.com/')) {
      const match = raw.match(/instagram\.com\/([a-zA-Z0-9_.]+)/);
      if (match && match[1]) {
        username = `@${match[1]}`;
      }
      if (!raw.startsWith('http')) {
        href = `https://${raw}`;
      }
    } else {
      const cleanUser = raw.replace(/^@/, '');
      username = `@${cleanUser}`;
      href = `https://instagram.com/${cleanUser}`;
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 px-4 py-2 rounded-xl hover:border-pink-500/40 hover:from-pink-500/20 hover:to-purple-500/20 text-pink-300 transition-all group cursor-pointer text-sm font-medium"
      >
        <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
        <span>{username}</span>
      </a>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050511] overflow-x-hidden text-white font-sans selection:bg-sky-500/30">
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/30 blur-[80px] sm:blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[40%] bg-cyan-600/20 blur-[60px] sm:blur-[120px] rounded-full" />
      </div>

      <BackgroundOrbs />

      <Suspense fallback={<div className="h-16 bg-[#050511]" />}>
        <Navbar />
      </Suspense>

      <main className="flex-1 relative z-10 flex flex-col items-center p-4 sm:p-6 py-12 lg:py-20">
        
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
              Struktur Organisasi
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              Dedikasi kami adalah memberikan pengalaman belajar anatomi terbaik. Kenali para dosen, staf ahli, dan barisan asisten laboratorium yang senantiasa mendukung perjalanan akademis Anda.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-sky-500 mb-4" />
            <p className="text-slate-400">Memuat profil...</p>
          </div>
        ) : (
          <>
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
                {dosenAndStaff.map((person) => {
                  const isKepala = person.role.toLowerCase().includes('kepala');
                  
                  return (
                    <div 
                      key={person.id}
                      onClick={() => setSelectedProfile(person)}
                      className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] select-none ${isKepala ? 'md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto border-sky-500/20 shadow-[0_0_30px_rgba(14,165,233,0.05)]' : ''}`}
                    >
                      <div className={`mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#050511] shadow-xl group-hover:scale-105 transition-transform duration-500 bg-slate-800 flex items-center justify-center ${isKepala ? 'w-40 h-40' : 'w-32 h-32'}`}>
                        {person.image ? (
                          <img 
                            src={person.image} 
                            alt={person.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                            draggable={false}
                          />
                        ) : (
                          <span className="text-3xl font-bold text-slate-400">{person.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className={`font-bold mb-1 ${isKepala ? 'text-2xl text-white' : 'text-xl text-slate-200'}`}>{person.name}</h3>
                        <p className={`font-medium mb-3 ${isKepala ? 'text-sky-300 text-base' : 'text-sky-400 text-sm'}`}>{person.role}</p>
                        {person.groupOrYear && (
                          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mb-3">{person.groupOrYear}</span>
                        )}
                        <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Klik untuk lihat detail</span>
                          <ArrowRight className="w-3 h-3" />
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.section>

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
              </div>

              {aslabYears.length > 0 && (
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                  {aslabYears.map((year) => (
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
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                  {aslabs.filter(a => a.groupOrYear === activeTab).map((aslab) => (
                    <div 
                      key={aslab.id}
                      onClick={() => setSelectedProfile(aslab)}
                      className="group bg-[#111118] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-[#161620] transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
                    >
                      <div className="aspect-[4/5] w-full overflow-hidden bg-slate-800 relative flex items-center justify-center">
                        {aslab.image ? (
                          <img 
                            src={aslab.image} 
                            alt={aslab.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
                            draggable={false}
                          />
                        ) : (
                          <span className="text-5xl font-bold text-slate-500">{aslab.name.charAt(0)}</span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent pointer-events-none" />
                      </div>
                      <div className="p-4 text-center relative -mt-6">
                        <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors line-clamp-1">{aslab.name}</h3>
                        <p className="text-xs text-slate-400 font-medium line-clamp-1">{aslab.role}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

            </motion.section>
          </>
        )}
      </main>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <Dialog open={!!selectedProfile} onOpenChange={(open) => { if (!open) setSelectedProfile(null); }}>
          <DialogContent className="w-full max-w-[95%] sm:max-w-[750px] bg-[#090915] text-white border-white/10 max-h-[90vh] overflow-y-auto p-0 rounded-3xl">
            <div className="relative p-6 sm:p-8">
              
              {/* Header section with image and basic info */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border-2 border-white/10 shadow-xl relative">
                  {selectedProfile.image ? (
                    <img 
                      src={selectedProfile.image} 
                      alt={selectedProfile.name} 
                      className="w-full h-full object-cover pointer-events-none select-none"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-slate-500">
                      {selectedProfile.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {selectedProfile.type} {selectedProfile.groupOrYear && `• ${selectedProfile.groupOrYear}`}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">{selectedProfile.name}</h2>
                  <p className="text-lg text-sky-400 font-medium mb-4">{selectedProfile.role}</p>

                  {/* Badges / Contact info */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {selectedProfile.email && (
                      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedProfile.email}</span>
                      </div>
                    )}
                    {renderInstagramBadge(selectedProfile.linkInstagram)}
                    {selectedProfile.origin && (
                      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedProfile.origin}</span>
                      </div>
                    )}
                    {selectedProfile.birthDate && (
                      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedProfile.birthDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quote if exists */}
              {selectedProfile.quotes && (
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 p-5 rounded-2xl mb-6 relative overflow-hidden">
                  <Quote className="absolute top-3 right-3 w-12 h-12 text-purple-500/10 pointer-events-none" />
                  <p className="text-sm sm:text-base font-serif italic text-purple-200 relative z-10">"{selectedProfile.quotes}"</p>
                </div>
              )}

              {/* Detail fields Grid */}
              <div className="space-y-6 text-sm text-slate-300">
                
                {/* Description */}
                {selectedProfile.description && (
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-2">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-sky-400" /> Bio / Deskripsi
                    </h4>
                    <p className="leading-relaxed whitespace-pre-wrap text-slate-300">{selectedProfile.description}</p>
                  </div>
                )}

                {/* Hobi & Blok Favorit (for Aslab) */}
                {(selectedProfile.hobby || selectedProfile.favoriteBlock) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProfile.favoriteBlock && (
                      <div className="bg-white/5 border border-white/5 p-4 rounded-2xl space-y-1">
                        <h4 className="text-xs uppercase text-slate-400 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Blok Favorit
                        </h4>
                        <p className="font-medium text-white">{selectedProfile.favoriteBlock}</p>
                      </div>
                    )}
                    {selectedProfile.hobby && (
                      <div className="bg-white/5 border border-white/5 p-4 rounded-2xl space-y-1">
                        <h4 className="text-xs uppercase text-slate-400 font-bold flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-rose-400" /> Hobi
                        </h4>
                        <p className="font-medium text-white">{selectedProfile.hobby}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Education */}
                {(selectedProfile.eduSD || selectedProfile.eduSMP || selectedProfile.eduSMA || selectedProfile.eduS1 || selectedProfile.eduS2 || selectedProfile.eduS3) && (
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-3">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-400" /> Riwayat Pendidikan
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedProfile.eduSD && <div className="p-2.5 rounded-xl bg-white/5"><strong>SD:</strong> {selectedProfile.eduSD}</div>}
                      {selectedProfile.eduSMP && <div className="p-2.5 rounded-xl bg-white/5"><strong>SMP:</strong> {selectedProfile.eduSMP}</div>}
                      {selectedProfile.eduSMA && <div className="p-2.5 rounded-xl bg-white/5"><strong>SMA:</strong> {selectedProfile.eduSMA}</div>}
                      {selectedProfile.eduS1 && <div className="p-2.5 rounded-xl bg-white/5"><strong>S1:</strong> {selectedProfile.eduS1}</div>}
                      {selectedProfile.eduS2 && <div className="p-2.5 rounded-xl bg-white/5"><strong>S2:</strong> {selectedProfile.eduS2}</div>}
                      {selectedProfile.eduS3 && <div className="p-2.5 rounded-xl bg-white/5"><strong>S3:</strong> {selectedProfile.eduS3}</div>}
                    </div>
                  </div>
                )}

                {/* Academic Links */}
                {(selectedProfile.linkScopus || selectedProfile.linkSinta || selectedProfile.linkScholar || selectedProfile.linkResearch) && (
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-3">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-emerald-400" /> Tautan Akademik & Publikasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.linkScopus && (
                        <a href={selectedProfile.linkScopus} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors">
                          <span>Scopus</span> <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {selectedProfile.linkSinta && (
                        <a href={selectedProfile.linkSinta} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors">
                          <span>SINTA</span> <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {selectedProfile.linkScholar && (
                        <a href={selectedProfile.linkScholar} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors">
                          <span>Google Scholar</span> <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {selectedProfile.linkResearch && (
                        <a href={selectedProfile.linkResearch} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors">
                          <span>Research / Website</span> <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Organizations */}
                {selectedProfile.organizations && (
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-2">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" /> Riwayat Organisasi
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                      {selectedProfile.organizations.split('\n').filter(Boolean).map((org, i) => (
                        <li key={i}>{org}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal footer / full page link */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setSelectedProfile(null)} className="text-slate-400 hover:text-white">
                  Tutup
                </Button>
                {selectedProfile.type !== 'ASLAB' && (
                  <Button 
                    onClick={() => router.push(`/tentang/${selectedProfile.slug}`)} 
                    className="bg-sky-600 hover:bg-sky-500 text-white font-medium gap-2"
                  >
                    <span>Buka Halaman Penuh</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>

            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
