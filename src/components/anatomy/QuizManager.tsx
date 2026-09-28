'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import {
  Plus,
  Search,
  Filter,
  Trash2,
  Eye,
  BrainCircuit,
  BookOpen,
  Loader2,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  FileQuestion,
  Calendar,
} from 'lucide-react';
import { toast } from 'sonner';

export type QuizPackage = {
  id: string;
  name: string;
  categorySlug: string;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
  _count: {
    questions: number;
  };
};

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

type SystemCategory = {
  id: string;
  name: string;
  slug: string;
};

export function QuizManager() {
  const router = useRouter();

  const [packages, setPackages] = useState<QuizPackage[]>([]);
  const [categories, setCategories] = useState<SystemCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');

  // Package delete dialog state
  const [packageToDelete, setPackageToDelete] = useState<QuizPackage | null>(null);
  const [isDeletingPackage, setIsDeletingPackage] = useState(false);

  // Inspect questions dialog state
  const [inspectingPackage, setInspectingPackage] = useState<QuizPackage | null>(null);
  const [inspectQuestions, setInspectQuestions] = useState<QuizQuestion[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<QuizQuestion | null>(null);
  const [isDeletingQuestion, setIsDeletingQuestion] = useState(false);

  const fetchPackages = useCallback(async () => {
    try {
      const res = await fetch('/api/quiz-packages');
      if (!res.ok) throw new Error('Failed to fetch quiz packages');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPackages(data);
      } else {
        setPackages([]);
      }
    } catch {
      toast.error('Gagal memuat data paket kuis');
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
      }
    } catch {
      toast.error('Gagal memuat daftar kategori');
    }
  }, []);

  useEffect(() => {
    fetchPackages();
    fetchCategories();
  }, [fetchPackages, fetchCategories]);

  // Open question inspection
  const handleInspect = async (pkg: QuizPackage) => {
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

  // Confirm delete package
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

  // Confirm delete single question
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

      // Update question count in package list
      if (inspectingPackage) {
        setPackages((prev) =>
          prev.map((pkg) =>
            pkg.id === inspectingPackage.id
              ? { ...pkg, _count: { questions: Math.max(0, pkg._count.questions - 1) } }
              : pkg
          )
        );
        setInspectingPackage((prev) =>
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

  const filteredPackages = packages.filter((pkg) => {
    const matchSearch =
      !search ||
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.category.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter === 'Semua' || pkg.categorySlug === categoryFilter;
    return matchSearch && matchCategory;
  });

  const parseClues = (raw: string) => {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
      return [raw];
    } catch {
      return [raw];
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 text-white">
            <BrainCircuit className="w-5 h-5 text-purple-400" />
            Manajemen AnatoQuiz
          </h3>
          <p className="text-sm text-slate-400 mt-0.5">
            Kelola, tinjau, dan hapus paket kuis maupun butir soal yang tersedia
          </p>
        </div>

        <Button
          onClick={() => router.push('/davey2kpubg/kuis')}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-500/20 border border-purple-400/40"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Buat / Impor Paket Kuis
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari paket kuis berdasarkan nama atau kategori..."
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500/50"
          />
        </div>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-56 bg-white/5 border-white/10 text-white">
            <Filter className="w-4 h-4 mr-2 text-slate-500" />
            <SelectValue placeholder="Semua Kategori" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-white/10 text-white">
            <SelectItem value="Semua" className="focus:bg-purple-500/20 focus:text-purple-300">
              Semua Kategori
            </SelectItem>
            {categories.map((c) => (
              <SelectItem
                key={c.slug}
                value={c.slug}
                className="focus:bg-purple-500/20 focus:text-purple-300 cursor-pointer"
              >
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Package List Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
          <span>Memuat data paket kuis...</span>
        </div>
      ) : filteredPackages.length === 0 ? (
        <div className="glass-card p-12 text-center rounded-2xl border border-white/5">
          <FileQuestion className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-300 font-semibold text-lg">Belum Ada Paket Kuis</p>
          <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
            {search || categoryFilter !== 'Semua'
              ? 'Tidak ada paket kuis yang sesuai dengan pencarian atau filter yang dipilih.'
              : 'Belum ada paket kuis yang diimpor. Klik tombol "Buat / Impor Paket Kuis" untuk menambahkan soal baru.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group bg-slate-900/60"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {pkg.category?.name || pkg.categorySlug}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/10 text-slate-300">
                      {pkg._count.questions} Soal
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors line-clamp-2">
                    {pkg.name}
                  </h4>

                  <div className="flex items-center text-xs text-slate-400 gap-1.5 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>
                      Dibuat {new Date(pkg.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleInspect(pkg)}
                    className="border-white/10 hover:bg-purple-500/20 hover:text-purple-300 text-slate-300 flex-1 text-xs"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                    Lihat Soal
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPackageToDelete(pkg)}
                    className="text-slate-400 hover:text-rose-400 hover:bg-rose-500/15 border border-transparent hover:border-rose-500/30 text-xs px-3"
                    title="Hapus Paket Kuis"
                  >
                    <Trash2 className="w-4 h-4 text-rose-400 mr-1" />
                    Hapus
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

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
                ⚠️ Seluruh {packageToDelete?._count.questions} soal dan opsi jawaban di dalamnya akan
                dihapus permanen dan tidak dapat dipulihkan.
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
              Kategori: {inspectingPackage?.category.name} | Anda dapat meninjau butir soal atau
              menghapus soal spesifik di bawah ini.
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
                        {q.options.map((opt) => (
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
