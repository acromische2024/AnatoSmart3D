'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, RotateCcw, LayoutGrid } from 'lucide-react';
import { toast } from 'sonner';

type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string | null;
};

type QuizQuestion = {
  id: string;
  type: 'MULTIPLE_CHOICE' | 'FLASHCARD';
  question: string;
  imageUrl: string | null;
  explanation: string | null;
  correctAnswer: string | null;
  options: QuizOption[];
};

type AnswerState = {
  isAnswered: boolean;
  isCorrect: boolean;
  selectedOption: string | null;
  flashcardAnswer: string;
};

export function AnatoQuizPlayer({ packageId, categorySlug, questionLimit }: { packageId?: string; categorySlug?: string; questionLimit?: number }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, AnswerState>>({});
  const [tempFlashcardAnswer, setTempFlashcardAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  // Helper to load cache
  const getCacheKey = () => `anatoquiz_${categorySlug || ''}_${packageId || ''}_limit_${questionLimit || 'all'}`;
  
  const resetQuiz = () => {
    localStorage.removeItem(getCacheKey());
    setQuestions([...questions].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setUserAnswers({});
    setQuizFinished(false);
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const query = packageId ? `packageId=${packageId}` : categorySlug ? `categorySlug=${categorySlug}` : '';
        if (!query) return;
        const res = await fetch(`/api/quiz?${query}`);
        if (res.ok) {
          const data = await res.json();
          
          // Check local storage for cached progress
          const cached = localStorage.getItem(getCacheKey());
          if (cached) {
            const parsed = JSON.parse(cached);
            setQuestions(parsed.questions);
            setCurrentIndex(parsed.currentIndex);
            setUserAnswers(parsed.userAnswers);
            setQuizFinished(parsed.quizFinished);
          } else {
            // No cache, shuffle new
            let shuffled = data.sort(() => Math.random() - 0.5);
            if (questionLimit && questionLimit > 0) {
              shuffled = shuffled.slice(0, questionLimit);
            }
            setQuestions(shuffled);
          }
        }
      } catch (err) {
        console.error(err);
        toast.error('Gagal memuat kuis');
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [packageId, categorySlug]);

  // Save to local storage whenever progress changes
  useEffect(() => {
    if (questions.length === 0) return;
    
    const cacheKey = getCacheKey();
    if (quizFinished) {
      localStorage.removeItem(cacheKey);
    } else {
      localStorage.setItem(cacheKey, JSON.stringify({
        questions,
        currentIndex,
        userAnswers,
        quizFinished
      }));
    }
  }, [questions, currentIndex, userAnswers, quizFinished]);

  // Sync temp flashcard answer when index changes
  useEffect(() => {
    setTempFlashcardAnswer(userAnswers[currentIndex]?.flashcardAnswer || '');
  }, [currentIndex, userAnswers]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-rose-500/30 border-t-rose-500 rounded-full animate-spin mb-4" />
        <p className="text-slate-400">Memuat pertanyaan AnatoQuiz...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <BrainCircuit className="w-16 h-16 text-slate-700 mb-4" />
        <h3 className="text-xl font-bold text-slate-300">Belum ada soal</h3>
        <p className="text-slate-500 mt-2 max-w-md">Kuis untuk sistem ini belum tersedia. Silakan hubungi admin untuk menambahkan soal.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const score = Object.values(userAnswers).filter(a => a.isCorrect).length;
  const currentAnswer = userAnswers[currentIndex] || {
    isAnswered: false,
    isCorrect: false,
    selectedOption: null,
    flashcardAnswer: ''
  };

  const { isAnswered, isCorrect, selectedOption } = currentAnswer;

  const handleSelectOption = (optionId: string, isCorrectOption: boolean) => {
    if (isAnswered) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        isAnswered: true,
        isCorrect: isCorrectOption,
        selectedOption: optionId,
        flashcardAnswer: ''
      }
    }));
  };

  const checkAnswerFuzzy = (userAns: string, correctAns: string) => {
    if (!correctAns || !userAns) return false;
    
    const abbreviations: Record<string, string> = {
      'm': 'musculus', 'mm': 'musculi',
      'a': 'arteria', 'aa': 'arteriae',
      'v': 'vena', 'vv': 'venae',
      'n': 'nervus', 'nn': 'nervi',
      'lig': 'ligamentum', 'ligg': 'ligamenta',
      'gl': 'glandula', 'proc': 'processus',
      'art': 'articulatio'
    };

    const normalize = (str: string) => {
      return str.toLowerCase()
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
        .map(w => abbreviations[w] || w)
        .join(' ');
    };

    const normalizedUser = normalize(userAns);
    const normalizedCorrect = normalize(correctAns);

    // Partial match after normalization
    if (normalizedCorrect.includes(normalizedUser) || normalizedUser.includes(normalizedCorrect)) {
       return true;
    }

    const levenshtein = (a: string, b: string) => {
      const matrix: number[][] = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
            );
          }
        }
      }
      return matrix[b.length][a.length];
    };

    const distance = levenshtein(normalizedUser, normalizedCorrect);
    const maxLength = Math.max(normalizedUser.length, normalizedCorrect.length);
    const allowedTypos = Math.max(2, Math.floor(maxLength * 0.2));
    
    return distance <= allowedTypos;
  };

  const handleFlashcardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered || !tempFlashcardAnswer.trim()) return;
    
    // Fuzzy match with typo and abbreviation tolerance
    const correct = checkAnswerFuzzy(tempFlashcardAnswer, currentQuestion.correctAnswer || '');
    
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        isAnswered: true,
        isCorrect: !!correct,
        selectedOption: null,
        flashcardAnswer: tempFlashcardAnswer
      }
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Kuis Selesai!</h2>
        <p className="text-slate-400 text-lg mb-8">
          Anda berhasil menjawab <span className="text-white font-bold">{score}</span> dari <span className="text-white font-bold">{questions.length}</span> soal dengan benar.
        </p>
        <Button onClick={resetQuiz} className="bg-rose-600 hover:bg-rose-500 text-white rounded-xl px-8 h-12 font-semibold">
          <RotateCcw className="w-4 h-4 mr-2" />
          Mainkan Lagi
        </Button>
      </div>
    );
  }

  // Parse HTML tags in question text (like <img>, <br>, <strong>)
  const renderHTML = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <div className="bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row gap-8">
      
      {/* Navigation Grid (Sidebar) */}
      <div className="md:w-64 shrink-0 flex flex-col">
        <div className="flex items-center gap-2 mb-4 text-slate-300 font-semibold">
          <LayoutGrid className="w-5 h-5" />
          <span>Navigasi Soal</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, idx) => {
            const ans = userAnswers[idx];
            let bgColor = "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"; // Default
            
            if (ans?.isAnswered) {
              bgColor = ans.isCorrect 
                ? "bg-green-500/20 text-green-300 border-green-500/50 hover:bg-green-500/30" 
                : "bg-red-500/20 text-red-300 border-red-500/50 hover:bg-red-500/30";
            } else if (idx === currentIndex) {
              bgColor = "bg-rose-500/20 text-rose-300 border-rose-500/50 hover:bg-rose-500/30"; // Active
            }
            
            return (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold border transition-all ${bgColor}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        
        <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Total Soal</span>
            <span className="text-sm font-bold text-white">{questions.length}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Terjawab</span>
            <span className="text-sm font-bold text-white">{Object.keys(userAnswers).length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Skor</span>
            <span className="text-sm font-bold text-green-400">{score}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-6 flex flex-col gap-2">
          <Button 
            onClick={resetQuiz}
            variant="outline"
            className="w-full border-slate-500/50 text-slate-400 hover:bg-slate-500/10 hover:text-slate-300"
          >
            Reset Kuis
          </Button>
          <Button 
            onClick={() => setQuizFinished(true)}
            variant="outline"
            className="w-full border-rose-500/50 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300"
          >
            Akhiri Kuis
          </Button>
        </div>
      </div>

      {/* Main Question Area */}
      <div className="flex-1 flex flex-col border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
        
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-semibold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            Soal {currentIndex + 1}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Question */}
            <div className="text-lg sm:text-xl font-medium leading-relaxed text-slate-200">
              {renderHTML(currentQuestion.question)}
            </div>
            
            {currentQuestion.imageUrl && (
              <img src={currentQuestion.imageUrl} alt="Ilustrasi Soal" className="rounded-xl max-h-64 object-contain mx-auto" />
            )}

            {/* Type: Multiple Choice */}
            {currentQuestion.type === 'MULTIPLE_CHOICE' && (
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  let btnStyle = "bg-white/5 hover:bg-white/10 border-white/10";
                  
                  if (isAnswered) {
                    if (opt.isCorrect) {
                      btnStyle = "bg-green-500/20 border-green-500/50 text-green-100"; // Always highlight correct answer
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = "bg-red-500/20 border-red-500/50 text-red-100"; // Highlight wrong choice
                    } else {
                      btnStyle = "bg-white/5 border-white/10 opacity-50"; // Dim others
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 ${btnStyle}`}
                    >
                      <div className="mt-1 shrink-0">
                        {isAnswered && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                        {isAnswered && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                        {!isAnswered && <div className="w-5 h-5 rounded-full border border-slate-500" />}
                        {(isAnswered && !isSelected && !opt.isCorrect) && <div className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 leading-relaxed">
                        {renderHTML(opt.text)}
                        {/* Elimination Explanation */}
                        <AnimatePresence>
                          {isAnswered && opt.explanation && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className={`mt-3 text-sm p-3 rounded-lg ${opt.isCorrect ? 'bg-green-500/10 text-green-200' : 'bg-red-500/10 text-red-200'}`}
                            >
                              {renderHTML(opt.explanation)}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Type: Flashcard */}
            {currentQuestion.type === 'FLASHCARD' && (
              <form onSubmit={handleFlashcardSubmit} className="space-y-4">
                <input
                  type="text"
                  value={tempFlashcardAnswer}
                  onChange={(e) => setTempFlashcardAnswer(e.target.value)}
                  disabled={isAnswered}
                  placeholder="Ketik jawaban Anda di sini..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                />
                {!isAnswered && (
                  <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-white rounded-xl h-12 font-semibold shadow-lg shadow-rose-500/20">
                    Cek Jawaban
                  </Button>
                )}
              </form>
            )}

            {/* Feedback & Next Button */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-6 border-t border-white/10"
                >
                  <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                    <h4 className={`font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? 'Jawaban Benar! 🎉' : 'Jawaban Kurang Tepat'}
                    </h4>
                    {currentQuestion.type === 'FLASHCARD' && !isCorrect && (
                      <p className="text-slate-300 text-sm mb-3">
                        Jawaban yang tepat adalah: <strong className="text-white">{currentQuestion.correctAnswer}</strong>
                      </p>
                    )}
                    {currentQuestion.explanation && (
                      <div className="text-slate-300 text-sm prose prose-invert max-w-none mt-2">
                        <strong className="text-white block mb-1">Pembahasan:</strong>
                        {renderHTML(currentQuestion.explanation)}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleNext} className="bg-white text-black hover:bg-slate-200 rounded-xl px-8 font-semibold">
                      {currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Kuis'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
