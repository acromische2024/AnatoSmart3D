'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChevronLeft,
  BrainCircuit,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileUp,
  PackageOpen,
  Trash2,
  Eye,
  Search,
  Loader2,
  Lightbulb,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundOrbs } from '@/components/anatomy/BackgroundOrbs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

type QuizOption = {
  id: string;
  questionId: string;
  text: string;
  isCorrect: boolean;
  explanation: string | null;
};

type QuizQuestion = {
  id: string;
  packageId: string;
  type: string;
  question: string;
  imageUrl: string | null;
  explanation: string | null;
  correctAnswer: string | null;
  options: QuizOption[];
  createdAt: string;
};

export default function QuizEditorPage() {
  const router = useRouter();
  const [jsonInput, setJsonInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [packageSearch, setPackageSearch] = useState('');

  const [packageName, setPackageName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Package delete dialog
  const [packageToDelete, setPackageToDelete] = useState<any | null>(null);
  const [isDeletingPackage, setIsDeletingPackage] = useState(false);

  // Inspect questions dialog
  const [inspectingPackage, setInspectingPackage] = useState<any | null>(null);
  const [inspectQuestions, setInspectQuestions] = useState<QuizQuestion[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<QuizQuestion | null>(null);
  const [isDeletingQuestion, setIsDeletingQuestion] = useState(false);

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
          Object.values(parsedData).forEach((val) => {
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
          questions: dataToImport,
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

  // Inspect questions
  const handleInspect = async (pkg: any) => {
    setInspectingPackage(pkg);
    setLoadingQuestions(true);
    try {
      const res = await fetch(`/api/quiz?packageId=${pkg.id}`);
      if (!res.ok) throw new Error('Failed to fetch questions');
      const data = await res.json();
      if (Array.isArray(data)) {
        setInspectQuestions(data);
      } else {
        setInspectQuestions([]);
      }
    } catch {
      toast.error('Gagal memuat butir soal');
      setInspectQuestions([]);
    } finally {
      setLoadingQuestions(false);
    }
  };

  // Delete package confirmation
  const handleDeletePackageConfirm = async () => {
    if (!packageToDelete) return;

    try {
      setIsDeletingPackage(true);
      const res = await fetch(`/api/quiz-packages/${packageToDelete.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Gagal menghapus paket kuis');
      }

      toast.success(`Paket kuis "${packageToDelete.name}" berhasil dihapus`);
      setPackages((prev) => prev.filter((p) => p.id !== packageToDelete.id));
      if (inspectingPackage?.id === packageToDelete.id) {
        setInspectingPackage(null);
      }
      setPackageToDelete(null);
    } catch (err: any) {
      toast.error(err.message || 'Gagal menghapus paket kuis');
    } finally {
      setIsDeletingPackage(false);
    }
  };

  // Delete single question confirmation
  const handleDeleteQuestionConfirm = async () => {
    if (!questionToDelete) return;

    try {
      setIsDeletingQuestion(true);
      const res = await fetch(`/api/quiz/${questionToDelete.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Gagal menghapus butir soal');
      }

      toast.success('Butir soal berhasil dihapus');
      setInspectQuestions((prev) => prev.filter((q) => q.id !== questionToDelete.id));

      if (inspectingPackage) {
        setPackages((prev) =>
          prev.map((pkg) =>
            pkg.id === inspectingPackage.id
              ? { ...pkg, _count: { questions: Math.max(0, pkg._count.questions - 1) } }
              : pkg
          )
        );
        setInspectingPackage((prev: any) =>
          prev ? { ...prev, _count: { questions: Math.max(0, prev._count.questions - 1) } } : null
        );
      }
      setQuestionToDelete(null);
    } catch (err: any) {
      toast.error(err.message || 'Gagal menghapus butir soal');
    } finally {
      setIsDeletingQuestion(false);
    }
  };

  const parseClues = (raw: string) => {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
      return [raw];
    } catch {
      return [raw];
    }
  };

  const filteredPackages = packages.filter((pkg) => {
    if (!packageSearch) return true;
    return (
      pkg.name.toLowerCase().includes(packageSearch.toLowerCase()) ||
      pkg.category?.name?.toLowerCase().includes(packageSearch.toLowerCase())
    );
  });

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
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  Buat Paket Kuis Baru
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  Impor output JSON dari AI di sini. Beri nama paket kuis dan tentukan kategori
                  sistemnya.
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
                      {categories.map((c) => (
                        <option key={c.slug} value={c.slug} className="bg-[#050511]">
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-purple-400" />
                    Data JSON Soal
                  </label>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-md">
                    Pilihan Ganda & Flashcard
                  </span>
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
              <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                    <PackageOpen className="w-5 h-5 text-indigo-400" />
                    Daftar Paket Kuis
                  </h3>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-semibold">
                    {packages.length} Paket
                  </span>
                </div>

                {/* Package Search Input */}
                <div className="relative mb-3">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <Input
                    value={packageSearch}
                    onChange={(e) => setPackageSearch(e.target.value)}
                    placeholder="Cari paket..."
                    className="pl-8 h-8 text-xs bg-black/40 border-white/10 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-3 h-[560px] overflow-y-auto custom-scrollbar pr-1 flex-1">
                  {packages.length === 0 ? (
                    <p className="text-slate-500 text-sm text-center py-10">Belum ada paket kuis.</p>
                  ) : filteredPackages.length === 0 ? (
                    <p className="text-slate-500 text-xs text-center py-6">Tidak ditemukan paket kuis yang cocok.</p>
                  ) : (
                    filteredPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all p-3.5 rounded-xl group relative"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h4 className="font-semibold text-white text-sm group-hover:text-purple-200 transition-colors line-clamp-1 flex-1">
                            {pkg.name}
                          </h4>
                          <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0">
                            {pkg.category?.name || pkg.categorySlug}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-400 mt-2 pt-2 border-t border-white/5">
                          <span className="text-xs text-slate-400 font-medium">
                            {pkg._count?.questions ?? 0} Soal
                          </span>

                          <div className="flex items-center gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleInspect(pkg)}
                              className="h-7 px-2 text-slate-400 hover:text-purple-300 hover:bg-purple-500/20 text-xs"
                              title="Lihat Butir Soal"
                            >
                              <Eye className="w-3.5 h-3.5 mr-1" />
                              Lihat
                            </Button>

                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setPackageToDelete(pkg)}
                              className="h-7 px-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/20 text-xs"
                              title="Hapus Paket Kuis"
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-1 text-rose-400" />
                              Hapus
                            </Button>
                          </div>
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

      {/* Package Delete Confirmation Dialog */}
      <AlertDialog
        open={!!packageToDelete}
        onOpenChange={(open) => !open && setPackageToDelete(null)}
      >
        <AlertDialogContent className="bg-slate-900 border border-rose-500/30 text-white max-w-md">
          <AlertDialogHeader>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mb-2 mx-auto sm:mx-0">
              <Trash2 className="w-6 h-6 text-rose-400" />
            </div>
            <AlertDialogTitle className="text-xl font-bold text-white">
              Hapus Paket Kuis?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-300 text-sm mt-2">
              Apakah Anda yakin ingin menghapus paket kuis{' '}
              <strong className="text-white font-semibold">"{packageToDelete?.name}"</strong>?
              <br />
              <span className="block mt-2 text-rose-300 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20 text-xs">
                ⚠️ Seluruh {packageToDelete?._count?.questions ?? 0} soal di dalamnya akan dihapus
                permanen dan tidak dapat dipulihkan.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 gap-2">
            <AlertDialogCancel
              disabled={isDeletingPackage}
              className="bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
            >
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeletingPackage}
              onClick={(e) => {
                e.preventDefault();
                handleDeletePackageConfirm();
              }}
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold border border-rose-400/50 shadow-lg shadow-rose-600/30"
            >
              {isDeletingPackage ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Menghapus...
                </>
              ) : (
                'Ya, Hapus Paket'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Question Inspection & Management Dialog */}
      <Dialog
        open={!!inspectingPackage}
        onOpenChange={(open) => !open && setInspectingPackage(null)}
      >
        <DialogContent className="bg-[#0b0b1f] border border-white/10 text-white max-w-3xl max-h-[85vh] flex flex-col p-6 overflow-hidden">
          <DialogHeader className="pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Detail Paket Kuis</span>
            </div>
            <DialogTitle className="text-xl font-bold text-white flex items-center justify-between gap-3 mt-1">
              <span>{inspectingPackage?.name}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {inspectQuestions.length} Soal
              </span>
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-xs mt-0.5">
              Kategori: {inspectingPackage?.category?.name || inspectingPackage?.categorySlug} | Anda
              dapat meninjau butir soal atau menghapus butir soal tertentu.
            </DialogDescription>
          </DialogHeader>

          {/* Question List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 py-4 space-y-4">
            {loadingQuestions ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-400">
                <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
                <span className="text-sm">Memuat butir soal...</span>
              </div>
            ) : inspectQuestions.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <p className="font-medium text-slate-400">Tidak ada soal dalam paket ini.</p>
              </div>
            ) : (
              inspectQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-black/40 border border-white/10 p-4 rounded-xl space-y-3 relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5">
                        {q.type === 'FLASHCARD' ? 'Flashcard' : 'Pilihan Ganda'}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setQuestionToDelete(q)}
                      className="h-7 px-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 text-xs"
                      title="Hapus Butir Soal Ini"
                    >
                      <Trash2 className="w-3.5 h-3.5 mr-1" />
                      Hapus Soal
                    </Button>
                  </div>

                  {/* Question Content */}
                  {q.type === 'FLASHCARD' ? (
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        Petunjuk / Clue:
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg space-y-1.5 text-xs text-slate-200">
                        {parseClues(q.question).map((clue: string, cIdx: number) => (
                          <div key={cIdx} className="flex gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{clue}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-xs bg-emerald-500/15 border border-emerald-500/30 p-2.5 rounded-lg text-emerald-300">
                        <strong>Jawaban Benar:</strong> {q.correctAnswer}
                      </div>

                      {q.explanation && (
                        <div className="text-xs text-slate-400 bg-white/5 p-2 rounded">
                          <strong>Pembahasan:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <p className="text-sm font-medium text-slate-100">{q.question}</p>

                      {/* Options */}
                      <div className="grid grid-cols-1 gap-1.5 pt-1">
                        {q.options?.map((opt) => (
                          <div
                            key={opt.id}
                            className={`p-2 rounded-lg text-xs flex items-start gap-2 ${
                              opt.isCorrect
                                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 font-semibold'
                                : 'bg-white/5 text-slate-300'
                            }`}
                          >
                            <span className="mt-0.5">
                              {opt.isCorrect ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              ) : (
                                <HelpCircle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                              )}
                            </span>
                            <div className="flex-1">
                              <span>{opt.text}</span>
                              {opt.explanation && !opt.isCorrect && (
                                <span className="block text-[11px] text-slate-400 font-normal mt-0.5 italic">
                                  Eliminasi: {opt.explanation}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {q.explanation && (
                        <div className="text-xs text-slate-400 bg-purple-500/10 border border-purple-500/20 p-2 rounded mt-2">
                          <strong className="text-purple-300">Pembahasan:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Single Question Delete Confirmation */}
      <AlertDialog
        open={!!questionToDelete}
        onOpenChange={(open) => !open && setQuestionToDelete(null)}
      >
        <AlertDialogContent className="bg-slate-900 border border-rose-500/30 text-white max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-bold text-white">
              Hapus Butir Soal Ini?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-300 text-xs mt-1">
              Soal ini akan dihapus secara permanen dari paket kuis. Tindakan ini tidak dapat
              dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-3 gap-2">
            <AlertDialogCancel
              disabled={isDeletingQuestion}
              className="bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 text-xs"
            >
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeletingQuestion}
              onClick={(e) => {
                e.preventDefault();
                handleDeleteQuestionConfirm();
              }}
              className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold"
            >
              {isDeletingQuestion ? (
                <>
                  <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                  Menghapus...
                </>
              ) : (
                'Hapus Soal'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
