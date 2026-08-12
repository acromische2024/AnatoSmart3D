'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Filter, FlaskConical } from 'lucide-react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { HeroSection } from '@/components/anatomy/HeroSection';
import { PreparationCard } from '@/components/anatomy/PreparationCard';
import { UploadDialog } from '@/components/anatomy/UploadDialog';
import { DetailDialog } from '@/components/anatomy/DetailDialog';

type Preparation = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  imageUrl: string | null;
  modelUrl: string | null;
  thumbnailUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

const CATEGORIES = [
  'Semua',
  'Osteologi',
  'Arthrologi',
  'Miologi',
  'Splanchnologi',
  'Angiologi',
  'Neurologi',
  'Histologi',
  'Embriologi',
  'Lainnya',
];

export default function HomePage() {
  const [preparations, setPreparations] = useState<Preparation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selectedPrep, setSelectedPrep] = useState<Preparation | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [showHero, setShowHero] = useState(true);

  const fetchPreparations = useCallback(async () => {
    try {
      const res = await fetch('/api/preparations');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setPreparations(data);
    } catch {
      toast.error('Gagal memuat data preparat');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPreparations();
  }, [fetchPreparations]);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/preparations/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Preparat berhasil dihapus');
      fetchPreparations();
    } catch {
      toast.error('Gagal menghapus preparat');
    }
  };

  const handleSelect = (prep: Preparation) => {
    setSelectedPrep(prep);
    setDetailOpen(true);
  };

  const filtered = preparations.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchCategory = categoryFilter === 'Semua' || p.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const availableCategories = Array.from(
    new Set(preparations.map((p) => p.category).filter(Boolean) as string[])
  );

  const isEmpty = !loading && filtered.length === 0;
  const isFiltered = search || categoryFilter !== 'Semua';

  return (
    <div className="min-h-screen flex flex-col mesh-gradient">
      <BackgroundOrbs />

      {/* Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16 mt-3 px-5 rounded-2xl glass-card glow-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground tracking-tight hidden sm:block">
                Atlas Anatomi
              </span>
            </div>
            <Button
              onClick={() => setUploadOpen(true)}
              className="bg-sky-500 text-navy font-semibold hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">Tambah Preparat</span>
              <span className="sm:hidden">Tambah</span>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Main */}
      <main className="flex-1 relative z-10">
        <motion.div
          animate={{ opacity: showHero ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showHero ? 'auto' : 'none' }}
        >
          <HeroSection />
        </motion.div>

        <section className="relative px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Koleksi Preparat</h2>
                <p className="text-sm text-slate-500 mt-1">{preparations.length} preparat tersedia</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari preparat..."
                  className="pl-10 bg-navy-light/80 border-sky-500/12 text-foreground placeholder:text-slate-600 focus:border-sky-500/30 transition-colors"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48 bg-navy-light/80 border-sky-500/12 text-foreground">
                  <Filter className="w-4 h-4 mr-2 text-slate-500" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-navy-light border-sky-500/15">
                  {CATEGORIES.filter((c) => c === 'Semua' || availableCategories.includes(c)).map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="text-foreground focus:bg-sky-500/10 focus:text-sky-300"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Gallery */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden glass-card">
                    <Skeleton className="aspect-[4/3] w-full bg-navy-lighter" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-4 w-3/4 bg-navy-lighter" />
                      <Skeleton className="h-3 w-1/2 bg-navy-lighter" />
                    </div>
                  </div>
                ))}
              </div>
            ) : isEmpty ? (
              <motion.div
                className="flex flex-col items-center justify-center py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-sky-500/8 border border-sky-500/12 flex items-center justify-center mb-5">
                  <FlaskConical className="w-10 h-10 text-sky-500/30" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isFiltered ? 'Tidak ditemukan' : 'Belum ada preparat'}
                </h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  {isFiltered
                    ? 'Coba ubah kata kunci pencarian atau filter kategori.'
                    : 'Mulai koleksimu dengan menambahkan preparat pertama.'}
                </p>
                {!isFiltered && (
                  <Button
                    onClick={() => setUploadOpen(true)}
                    className="mt-6 bg-sky-500 text-navy font-semibold hover:bg-sky-400"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Preparat
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                layout
              >
                <AnimatePresence>
                  {filtered.map((prep, i) => (
                    <PreparationCard
                      key={prep.id}
                      preparation={prep}
                      index={i}
                      onSelect={handleSelect}
                      onDelete={handleDelete}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-500/8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Atlas Anatomi — Platform Digital Preparat</span>
            </div>
            <span>Desain untuk pembelajaran kedokteran dan ilmu biologi</span>
          </div>
        </div>
      </footer>

      <UploadDialog open={uploadOpen} onOpenChange={setUploadOpen} onSuccess={fetchPreparations} />
      <DetailDialog preparation={selectedPrep} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
