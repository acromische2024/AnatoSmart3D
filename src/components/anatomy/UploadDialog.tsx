'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Upload,
  X,
  Image as ImageIcon,
  Box,
  Loader2,
  FileUp,
  Youtube,
  FileText,
} from 'lucide-react';
import { toast } from 'sonner';
import { getSupabase } from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

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
};

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (prep: Preparation) => void;
  initialData?: Preparation;
  categories: SystemCategory[];
}

export function UploadDialog({ open, onOpenChange, onSuccess, initialData, categories }: UploadDialogProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [modelUrlInput, setModelUrlInput] = useState('');
  const [youtubeUrlInput, setYoutubeUrlInput] = useState('');
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!initialData;

  const resetForm = useCallback(() => {
    setTitle('');
    setDescription('');
    setCategory('');
    setImageFile(null);
    setModelFile(null);
    setModelUrlInput('');
    setYoutubeUrlInput('');
    setDocumentFile(null);
    setImagePreview(null);
  }, []);

  useEffect(() => {
    if (open) {
      if (initialData) {
        setTitle(initialData.title);
        setDescription(initialData.description || '');
        setCategory(initialData.category || '');
        setYoutubeUrlInput(initialData.youtubeUrl || '');
        if (initialData.modelUrl && initialData.modelUrl.includes('p3d.in')) {
          setModelUrlInput(initialData.modelUrl);
        }
        if (initialData.imageUrl) {
          setImagePreview(initialData.imageUrl);
        }
      } else {
        resetForm();
      }
    }
  }, [open, initialData, resetForm]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleModelSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setModelFile(file);
    }
  };

  const handleDocumentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      toast.error('Judul preparat wajib diisi');
      return;
    }

    setUploading(true);
    try {
      let imageUrl: string | null = null;
      let modelUrl: string | null = null;
      let documentUrl: string | null = null;
      let youtubeUrl: string | null = youtubeUrlInput.trim() || null;

      // Upload image if selected
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `images/${fileName}`;
        
        const supabase = getSupabase();
        const { error: uploadError } = await supabase.storage
          .from('anatomy-assets')
          .upload(filePath, imageFile);
          
        if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`);
        
        const { data: { publicUrl } } = supabase.storage
          .from('anatomy-assets')
          .getPublicUrl(filePath);
          
        imageUrl = publicUrl;
      }

      // Upload 3D model if selected
      if (modelFile) {
        const fileExt = modelFile.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `models/${fileName}`;
        
        const supabase = getSupabase();
        const { error: uploadError } = await supabase.storage
          .from('anatomy-assets')
          .upload(filePath, modelFile);
          
        if (uploadError) throw new Error(`Model upload failed: ${uploadError.message}`);
        
        const { data: { publicUrl } } = supabase.storage
          .from('anatomy-assets')
          .getPublicUrl(filePath);
          
        modelUrl = publicUrl;
      } else if (modelUrlInput.trim()) {
        modelUrl = modelUrlInput.trim();
      }

      // Upload document if selected
      if (documentFile) {
        const fileExt = documentFile.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `documents/${fileName}`;
        
        const supabase = getSupabase();
        const { error: uploadError } = await supabase.storage
          .from('anatomy-assets')
          .upload(filePath, documentFile);
          
        if (uploadError) throw new Error(`Document upload failed: ${uploadError.message}`);
        
        const { data: { publicUrl } } = supabase.storage
          .from('anatomy-assets')
          .getPublicUrl(filePath);
          
        documentUrl = publicUrl;
      }

      // Create or update preparation record
      const url = isEditing ? `/api/preparations/${initialData.id}` : '/api/preparations';
      const method = isEditing ? 'PUT' : 'POST';

      const payload: any = {
        title: title.trim(),
        description: description.trim() || null,
        category: category || null,
        youtubeUrl,
      };

      if (imageUrl) {
        payload.imageUrl = imageUrl;
        payload.thumbnailUrl = imageUrl;
      }
      if (modelUrl) {
        payload.modelUrl = modelUrl;
        
        // Gunakan thumbnail p3d.in jika tidak ada gambar custom
        const hasCustomImage = isEditing ? !!initialData?.imageUrl : false;
        if (!imageUrl && !hasCustomImage && modelUrl.includes('p3d.in')) {
          const match = modelUrl.match(/p3d\.in\/(?:e\/)?([a-zA-Z0-9]+)/);
          if (match && match[1]) {
             payload.thumbnailUrl = `https://p3d.in/model_data/snapshot/${match[1]}`;
          }
        }
      }
      if (documentUrl) {
        payload.documentUrl = documentUrl;
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create preparation');
      const prep = await res.json();

      toast.success(isEditing ? `Preparat "${prep.title}" berhasil diperbarui!` : `Preparat "${prep.title}" berhasil ditambahkan!`);
      resetForm();
      onOpenChange(false);
      onSuccess(prep);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      toast.error(`Gagal: ${errorMessage}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) resetForm(); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-navy-light border-sky-500/15 text-foreground p-0">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Upload className="w-5 h-5 text-sky-400" />
              {isEditing ? 'Edit Preparat' : 'Tambah Preparat Baru'}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              {isEditing ? 'Ubah informasi atau perbarui media preparat ini.' : 'Unggah foto dan/atau model 3D dari preparat anatomi.'}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-5">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Judul Preparat <span className="text-red-400">*</span>
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="contoh: Osteologi - Femur Kanan"
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Kategori</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-navy border-sky-500/15 text-foreground">
                  <SelectValue placeholder="Pilih kategori..." />
                </SelectTrigger>
                <SelectContent className="bg-navy-light border-sky-500/15">
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name} className="text-foreground focus:bg-sky-500/10 focus:text-sky-300">
                      {cat.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Lainnya" className="text-foreground focus:bg-sky-500/10 focus:text-sky-300">
                    Lainnya
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Deskripsi</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Deskripsi singkat mengenai preparat ini..."
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40 min-h-[80px] resize-none"
              />
            </div>

            {/* Image upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Foto Preparat
              </label>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />
              <AnimatePresence mode="wait">
                {imagePreview ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative rounded-xl overflow-hidden border border-sky-500/15"
                  >
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 text-white hover:bg-red-500/50"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview(null);
                        if (imageInputRef.current) imageInputRef.current.value = '';
                      }}
                    >
                      <X className="w-3.5 h-3.5" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="upload"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => imageInputRef.current?.click()}
                    className="w-full h-32 rounded-xl border-2 border-dashed border-sky-500/20 hover:border-sky-500/40 flex flex-col items-center justify-center gap-2 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                      <FileUp className="w-5 h-5 text-sky-400/60 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      Klik atau drag gambar ke sini
                    </span>
                    <span className="text-[10px] text-slate-600">JPG, PNG, WebP</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* 3D Model upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Box className="w-4 h-4" /> Model 3D (File atau Link p3d.in)
              </label>
              
              {!modelFile && (
                <div className="mb-2">
                  <Input
                    value={modelUrlInput}
                    onChange={(e) => {
                      setModelUrlInput(e.target.value);
                      if (e.target.value) setModelFile(null);
                    }}
                    placeholder="Link p3d.in (contoh: https://p3d.in/e/xxxx)"
                    className="bg-navy border-cyan-500/15 text-foreground placeholder:text-slate-600 focus:border-cyan-500/40"
                    disabled={!!modelFile}
                  />
                  {!modelUrlInput && (
                    <div className="flex items-center justify-center my-2 text-xs text-slate-500">
                      <span className="bg-slate-700 h-[1px] flex-1 opacity-20"></span>
                      <span className="px-2">ATAU</span>
                      <span className="bg-slate-700 h-[1px] flex-1 opacity-20"></span>
                    </div>
                  )}
                </div>
              )}

              {!modelUrlInput && (
                <>
                  <input
                    ref={modelInputRef}
                    type="file"
                    accept=".glb,.gltf"
                    className="hidden"
                    onChange={handleModelSelect}
                  />
                  <AnimatePresence mode="wait">
                    {modelFile ? (
                      <motion.div
                        key="model-preview"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex items-center gap-3 p-3 rounded-xl border border-sky-500/15 bg-navy"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                          <Box className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground truncate">{modelFile.name}</p>
                          <p className="text-xs text-slate-500">{(modelFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-7 h-7 rounded-full text-slate-400 hover:text-red-400"
                          onClick={() => {
                            setModelFile(null);
                            if (modelInputRef.current) modelInputRef.current.value = '';
                          }}
                        >
                          <X className="w-3.5 h-3.5" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="model-upload"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => modelInputRef.current?.click()}
                        className="w-full h-24 rounded-xl border-2 border-dashed border-cyan-500/20 hover:border-cyan-500/40 flex flex-col items-center justify-center gap-2 transition-colors duration-300 group cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                          <Box className="w-5 h-5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                          Upload model 3D (.glb, .gltf)
                        </span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            {/* YouTube Video URL */}
            <div className="space-y-2 border-t border-sky-500/10 pt-4">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-400" /> Tautan AnatoPlay (YouTube)
              </label>
              <Textarea
                value={youtubeUrlInput}
                onChange={(e) => setYoutubeUrlInput(e.target.value)}
                placeholder="https://youtu.be/xxx, https://youtu.be/yyy (Pisahkan dengan koma atau Enter untuk multiple video)"
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40 min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" /> File Materi (PDF, Word, PPT)
              </label>
              <input
                ref={documentInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                className="hidden"
                onChange={handleDocumentSelect}
              />
              <AnimatePresence mode="wait">
                {documentFile ? (
                  <motion.div
                    key="document-preview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-emerald-500/15 bg-navy"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">{documentFile.name}</p>
                      <p className="text-xs text-slate-500">{(documentFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7 rounded-full text-slate-400 hover:text-red-400"
                      onClick={() => {
                        setDocumentFile(null);
                        if (documentInputRef.current) documentInputRef.current.value = '';
                      }}
                    >
                      <X className="w-3.5 h-3.5" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="document-upload"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => documentInputRef.current?.click()}
                    className="w-full h-16 rounded-xl border-2 border-dashed border-emerald-500/20 hover:border-emerald-500/40 flex items-center justify-center gap-3 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <FileUp className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      Upload File Materi
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              className="flex-1 border-sky-500/20 text-slate-300 hover:bg-sky-500/10 hover:text-sky-300"
              onClick={() => { resetForm(); onOpenChange(false); }}
            >
              Batal
            </Button>
            <Button
              className="flex-1 bg-sky-500 text-navy font-semibold hover:bg-sky-400 transition-colors"
              onClick={handleSubmit}
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mengunggah...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  {isEditing ? 'Simpan Perubahan' : 'Tambah Preparat'}
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
