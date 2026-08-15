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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Plus, Search, Filter, Settings, ChevronLeft, FlaskConical, LayoutGrid, Pencil, Trash2, BrainCircuit, Users } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { PreparationCard } from '@/components/anatomy/PreparationCard';
import { UploadDialog } from '@/components/anatomy/UploadDialog';
import { CategoryUploadDialog } from '@/components/anatomy/CategoryUploadDialog';
import { ProfileManager } from '@/components/anatomy/ProfileManager';

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
  createdAt: string;
  updatedAt: string;
};

type SystemCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  order: number;
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

export default function EditorDashboard() {
  const router = useRouter();
  
  const [preparations, setPreparations] = useState<Preparation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [uploadOpen, setUploadOpen] = useState(false);
  const [editingPrep, setEditingPrep] = useState<Preparation | null>(null);

  // Categories State
  const [categories, setCategories] = useState<SystemCategory[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryUploadOpen, setCategoryUploadOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<SystemCategory | null>(null);

  const fetchPreparations = useCallback(async () => {
    try {
      const res = await fetch('/api/preparations');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPreparations(data);
      } else {
        setPreparations([]);
      }
    } catch {
      toast.error('Gagal memuat data preparat');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch('/api/categories');
      if (!res.ok) throw new Error('Failed to fetch categories');
      const data = await res.json();
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    } catch {
      toast.error('Gagal memuat data kategori');
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  useEffect(() => {
    fetchPreparations();
    fetchCategories();
  }, [fetchPreparations, fetchCategories]);

  const handleDelete = async (id: string) => {
    if (!confirm('Hapus preparat ini?')) return;
    try {
      const res = await fetch(`/api/preparations/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Preparat berhasil dihapus');
      fetchPreparations();
    } catch {
      toast.error('Gagal menghapus preparat');
    }
  };

  const handleEdit = (prep: Preparation) => {
    setEditingPrep(prep);
    setUploadOpen(true);
  };

  const handleSelect = (prep: Preparation) => {
    router.push(`/preparat/${prep.id}`);
  };

  const handleCategoryDelete = async (id: string) => {
    if (!confirm('Hapus kategori ini? Data preparat di dalamnya mungkin terdampak.')) return;
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete category');
      toast.success('Kategori berhasil dihapus');
      fetchCategories();
    } catch {
      toast.error('Gagal menghapus kategori');
    }
  };

  const handleCategoryEdit = (cat: SystemCategory) => {
    setEditingCategory(cat);
    setCategoryUploadOpen(true);
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
          <nav className="flex items-center justify-between h-16 mt-3 px-5 rounded-2xl glass-card glow-border border-rose-500/30">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                onClick={() => router.push('/')}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold tracking-tight hidden sm:block uppercase text-rose-100">
                Editor Dashboard
              </span>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Main */}
      <main className="flex-1 relative z-10 pt-28">
        <section className="relative px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <Tabs defaultValue="preparat" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Manajemen Data</h2>
                  <p className="text-sm text-slate-400 mt-1">Kelola data preparat dan kartu beranda</p>
                </div>
                
                <TabsList className="bg-white/5 border border-white/10">
                  <TabsTrigger value="preparat" className="data-[state=active]:bg-rose-500/20 data-[state=active]:text-rose-300">
                    <FlaskConical className="w-4 h-4 mr-2" />
                    Preparat
                  </TabsTrigger>
                  <TabsTrigger value="kategori" className="data-[state=active]:bg-rose-500/20 data-[state=active]:text-rose-300">
                    <LayoutGrid className="w-4 h-4 mr-2" />
                    Kategori Sistem
                  </TabsTrigger>
                  <TabsTrigger value="profil" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
                    <Users className="w-4 h-4 mr-2" />
                    Manajemen Profil
                  </TabsTrigger>
                  <TabsTrigger value="kuis" onClick={() => router.push('/davey2kpubg/kuis')} className="data-[state=active]:bg-rose-500/20 data-[state=active]:text-rose-300">
                    <BrainCircuit className="w-4 h-4 mr-2" />
                    AnatoQuiz
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab: Preparat */}
              <TabsContent value="preparat" className="mt-0">
                <div className="flex justify-end mb-4">
                  <Button
                    onClick={() => {
                      setEditingPrep(null);
                      setUploadOpen(true);
                    }}
                    className="bg-rose-600 text-white font-semibold hover:bg-rose-500 shadow-lg shadow-rose-500/20 border border-rose-400/50"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Tambah Preparat
                  </Button>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Cari preparat..."
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-rose-500/50"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full sm:w-48 bg-white/5 border-white/10 text-white">
                      <Filter className="w-4 h-4 mr-2 text-slate-500" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                      {CATEGORIES.filter((c) => c === 'Semua' || availableCategories.includes(c)).map((cat) => (
                        <SelectItem key={cat} value={cat} className="focus:bg-rose-500/20 focus:text-rose-300 cursor-pointer">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Preparat Gallery */}
                {loading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden glass-card">
                        <Skeleton className="aspect-[4/3] w-full bg-slate-800/50" />
                        <div className="p-4 space-y-2">
                          <Skeleton className="h-4 w-3/4 bg-slate-800/50" />
                          <Skeleton className="h-3 w-1/2 bg-slate-800/50" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : isEmpty ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-slate-400">Belum ada preparat yang cocok.</p>
                  </div>
                ) : (
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" layout>
                    <AnimatePresence>
                      {filtered.map((prep, i) => (
                        <PreparationCard
                          key={prep.id}
                          preparation={prep}
                          index={i}
                          onSelect={handleSelect}
                          onDelete={handleDelete}
                          onEdit={handleEdit}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </TabsContent>

              {/* Tab: Kategori Sistem */}
              <TabsContent value="kategori" className="mt-0">
                <div className="flex justify-end mb-8">
                  <Button
                    onClick={() => {
                      setEditingCategory(null);
                      setCategoryUploadOpen(true);
                    }}
                    className="bg-indigo-600 text-white font-semibold hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 border border-indigo-400/50"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Tambah Kategori Sistem
                  </Button>
                </div>

                {loadingCategories ? (
                  <p>Memuat kategori...</p>
                ) : categories.length === 0 ? (
                  <p className="text-slate-400 text-center py-10">Belum ada kategori sistem.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                      <div key={cat.id} className="relative group bg-slate-900 rounded-3xl overflow-hidden border border-white/10 h-64">
                        {cat.imageUrl && (
                          <img src={cat.imageUrl} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-[#050511]/40 to-transparent" />
                        
                        {/* Actions */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white hover:text-sky-400 hover:bg-sky-500/20"
                            onClick={() => handleCategoryEdit(cat)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white hover:text-red-400 hover:bg-red-500/20"
                            onClick={() => handleCategoryDelete(cat.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="absolute bottom-6 left-6 pr-6">
                          <h3 className="text-xl font-bold uppercase tracking-wider mb-1">{cat.name}</h3>
                          <p className="text-xs text-slate-300 line-clamp-2">{cat.description || 'Tidak ada deskripsi'}</p>
                          <div className="mt-3 text-[10px] text-slate-400 font-medium">Order: {cat.order} | Slug: {cat.slug}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Tab: Profil */}
              <TabsContent value="profil" className="mt-0">
                <ProfileManager />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <UploadDialog 
        open={uploadOpen} 
        onOpenChange={(open) => {
          setUploadOpen(open);
          if (!open) setEditingPrep(null);
        }} 
        categories={categories}
        onSuccess={fetchPreparations} 
        initialData={editingPrep || undefined}
      />
      
      <CategoryUploadDialog
        open={categoryUploadOpen}
        onOpenChange={(open) => {
          setCategoryUploadOpen(open);
          if (!open) setEditingCategory(null);
        }}
        onSuccess={fetchCategories}
        initialData={editingCategory || undefined}
      />
    </div>
  );
}
