'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BrainCircuit, Upload, CheckCircle2, AlertCircle, FileUp, PackageOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import { toast } from 'sonner';

export default function QuizEditorPage() {
  const router = useRouter();
  const [jsonInput, setJsonInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  
  const [packageName, setPackageName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchCategories();
    fetchPackages();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (Array.isArray(data)) {
        setCategories(data);
        if (data.length > 0) setSelectedCategory(data[0].slug);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPackages = async () => {
    try {
      const res = await fetch('/api/quiz-packages');
      const data = await res.json();
      if (Array.isArray(data)) setPackages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        setJsonInput(text);
        toast.success(`Berhasil memuat isi file ${file.name}`);
      } catch (err) {
        toast.error('Gagal membaca isi file JSON');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleImport = async () => {
    if (!packageName.trim()) {
      toast.error('Masukkan nama paket kuis terlebih dahulu');
      return;
    }
    if (!selectedCategory) {
      toast.error('Pilih kategori sistem terlebih dahulu');
      return;
    }
    if (!jsonInput.trim()) {
      toast.error('Masukkan data JSON terlebih dahulu');
      return;
    }

    try {
      setLoading(true);
      // Try to parse the JSON first
      let parsedData;
      try {
        parsedData = JSON.parse(jsonInput);
      } catch (err) {
        toast.error('Format JSON tidak valid');
        setLoading(false);
        return;
      }

      // Support "Soal Gabungan" by extracting all possible question arrays
      let dataToImport: any[] = [];
      if (Array.isArray(parsedData)) {
        dataToImport = parsedData;
      } else if (typeof parsedData === 'object' && parsedData !== null) {
        if (Array.isArray(parsedData.cards)) dataToImport.push(...parsedData.cards);
        if (Array.isArray(parsedData.multiple_choice)) dataToImport.push(...parsedData.multiple_choice);
        if (Array.isArray(parsedData.soal)) dataToImport.push(...parsedData.soal);
        if (Array.isArray(parsedData.questions)) dataToImport.push(...parsedData.questions);
        if (Array.isArray(parsedData.gabungan)) dataToImport.push(...parsedData.gabungan);
        
        // If it was an object but didn't match any known array keys, fallback to trying values
        if (dataToImport.length === 0) {
           Object.values(parsedData).forEach(val => {
             if (Array.isArray(val)) dataToImport.push(...val);
           });
        }
      }

      if (!Array.isArray(dataToImport) || dataToImport.length === 0) {
        toast.error('Format tidak didukung. Tidak menemukan array soal/flashcard.');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/quiz-packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: packageName,
          categorySlug: selectedCategory,
          questions: dataToImport
        }),
      });

      const result = await res.json();
      
      if (res.ok) {
        toast.success(`Berhasil membuat paket kuis dengan ${result.count} soal!`);
        setJsonInput('');
        setPackageName('');
        fetchPackages(); // refresh list
      } else {
        toast.error(result.error || 'Gagal mengimpor soal');
      }
    } catch (error) {
      console.error(error);
      toast.error('Terjadi kesalahan jaringan');
    } finally {
      setLoading(false);
    }
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
          <nav className="flex items-center justify-between h-16 mt-3 px-5 rounded-2xl glass-card glow-border border-purple-500/30">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                onClick={() => router.push('/davey2kpubg')}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold tracking-tight hidden sm:block uppercase text-purple-100">
                Paket Kuis Editor
              </span>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Main */}
      <main className="flex-1 relative z-10 pt-28">
        <section className="relative px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Importer Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Buat Paket Kuis Baru</h2>
                <p className="text-sm text-slate-400 mt-2">
                  Impor output JSON dari AI di sini. Beri nama paket kuis dan tentukan kategori sistemnya.
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/5 space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Nama Paket Kuis</label>
                    <input 
                      type="text"
                      value={packageName}
                      onChange={(e) => setPackageName(e.target.value)}
                      placeholder="Contoh: Latihan Otot Saraf 1"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Sistem Kategori</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-purple-500/50 appearance-none"
                    >
                      {categories.map(c => (
                        <option key={c.slug} value={c.slug} className="bg-[#050511]">{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-purple-400" />
                    Data JSON Soal
                  </label>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-md">Pilihan Ganda & Flashcard</span>
                </div>
                
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder={`[\n  {\n    "metadata": { "blok": "Sistem Saraf" },\n    "pertanyaan": "...",\n    "pilihan": [...]\n  }\n]`}
                  className="w-full h-80 bg-black/40 border border-white/10 rounded-xl p-4 text-sm font-mono text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 resize-none transition-all"
                  spellCheck="false"
                />

                <div className="flex justify-between items-center pt-2">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    Blok di dalam metadata JSON akan diabaikan
                  </div>
                  
                  <div className="flex gap-3">
                    <input
                      type="file"
                      accept=".json"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()} 
                      className="border-white/10 hover:bg-white/10 text-slate-300 font-semibold px-4"
                    >
                      <FileUp className="w-4 h-4 mr-2" />
                      Pilih File
                    </Button>
                    
                    <Button 
                      onClick={handleImport} 
                      disabled={loading || !jsonInput.trim()}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 border border-purple-400/30 font-semibold px-6"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                      )}
                      Simpan Paket
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Existing Packages */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 rounded-2xl border border-white/5 h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <PackageOpen className="w-5 h-5 text-indigo-400" />
                  Daftar Paket Kuis
                </h3>
                <div className="space-y-3 h-[600px] overflow-y-auto custom-scrollbar pr-2">
                  {packages.length === 0 ? (
                    <p className="text-slate-500 text-sm text-center py-10">Belum ada paket kuis.</p>
                  ) : (
                    packages.map(pkg => (
                      <div key={pkg.id} className="bg-black/30 border border-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-white mb-1">{pkg.name}</h4>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">{pkg.category.name}</span>
                          <span>{pkg._count.questions} soal</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
