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
  Upload,
  X,
  Image as ImageIcon,
  Loader2,
  FileUp,
  FileText,
  Trash2,
} from 'lucide-react';
import { toast } from 'sonner';
import { getSupabase } from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

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

interface CategoryUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (cat: SystemCategory) => void;
  initialData?: SystemCategory;
}

export function CategoryUploadDialog({ open, onOpenChange, onSuccess, initialData }: CategoryUploadDialogProps) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [extraVideoUrl, setExtraVideoUrl] = useState('');
  const [order, setOrder] = useState<number>(0);
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Document (materi) upload state
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const [existingDocs, setExistingDocs] = useState<string[]>([]);
  const docInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!initialData;

  const resetForm = useCallback(() => {
    setName('');
    setSlug('');
    setDescription('');
    setYoutubeUrl('');
    setExtraVideoUrl('');
    setOrder(0);
    setImageFile(null);
    setImagePreview(null);
    setDocumentFiles([]);
    setExistingDocs([]);
  }, []);

  useEffect(() => {
    if (open) {
      if (initialData) {
        setName(initialData.name);
        setSlug(initialData.slug);
        setDescription(initialData.description || '');
        setYoutubeUrl(initialData.youtubeUrl || '');
        setExtraVideoUrl((initialData as any).extraVideoUrl || '');
        setOrder(initialData.order);
        if (initialData.imageUrl) {
          setImagePreview(initialData.imageUrl);
        }
        // Parse existing document URLs
        if (initialData.documentUrl) {
          const docs = initialData.documentUrl.split(/[,]+/).map(u => u.trim()).filter(u => u !== '');
          setExistingDocs(docs);
        } else {
          setExistingDocs([]);
        }
        setDocumentFiles([]);
      } else {
        resetForm();
      }
    }
  }, [open, initialData, resetForm]);

  // Auto-generate slug from name if not editing
  useEffect(() => {
    if (!isEditing && name) {
      setSlug(name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [name, isEditing]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDocSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setDocumentFiles(prev => [...prev, ...files]);
    }
    // Reset input so user can re-select the same file
    if (docInputRef.current) docInputRef.current.value = '';
  };

  const removeNewDoc = (index: number) => {
    setDocumentFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingDoc = (index: number) => {
    setExistingDocs(prev => prev.filter((_, i) => i !== index));
  };

  const getFileName = (url: string) => {
    const parts = url.split('/').pop() || 'Dokumen';
    // Remove UUID prefix if present (format: uuid_originalname.ext)
    const underscoreIndex = parts.indexOf('_');
    if (underscoreIndex > 0 && underscoreIndex < 40) {
      return decodeURIComponent(parts.slice(underscoreIndex + 1));
    }
    return decodeURIComponent(parts);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !slug.trim()) {
      toast.error('Nama dan Slug wajib diisi');
      return;
    }

    setUploading(true);
    try {
      let imageUrl: string | null = null;

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

      // Upload document files
      const newDocUrls: string[] = [];
      if (documentFiles.length > 0) {
        const supabase = getSupabase();
        for (const file of documentFiles) {
          const fileExt = file.name.split('.').pop();
          const originalName = file.name;
          const fileName = `${uuidv4()}_${originalName}`;
          const filePath = `documents/${fileName}`;
          
          const { error: docUploadError } = await supabase.storage
            .from('anatomy-assets')
            .upload(filePath, file);
            
          if (docUploadError) {
            toast.error(`Gagal upload ${originalName}: ${docUploadError.message}`);
            continue;
          }
          
          const { data: { publicUrl } } = supabase.storage
            .from('anatomy-assets')
            .getPublicUrl(filePath);
            
          newDocUrls.push(publicUrl);
        }
      }

      // Combine existing + new document URLs
      const allDocUrls = [...existingDocs, ...newDocUrls];
      const documentUrl = allDocUrls.length > 0 ? allDocUrls.join(',') : null;

      const url = isEditing ? `/api/categories/${initialData.id}` : '/api/categories';
      const method = isEditing ? 'PUT' : 'POST';

      const payload: any = {
        name: name.trim(),
        slug: slug.trim(),
        description: description.trim() || null,
        youtubeUrl: youtubeUrl.trim() || null,
        extraVideoUrl: extraVideoUrl.trim() || null,
        documentUrl,
        order: Number(order) || 0,
      };

      if (imageUrl) {
        payload.imageUrl = imageUrl;
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to create/update category');
      }
      const cat = await res.json();

      toast.success(isEditing ? `Kategori "${cat.name}" berhasil diperbarui!` : `Kategori "${cat.name}" berhasil ditambahkan!`);
      resetForm();
      onOpenChange(false);
      onSuccess(cat);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Gagal menyimpan kategori. Silakan coba lagi.');
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
              {isEditing ? 'Edit Kategori Sistem' : 'Tambah Kategori Sistem'}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              {isEditing ? 'Ubah informasi kategori ini.' : 'Tambahkan kategori baru (seperti Sistem Neuro, dll).'}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Nama Kategori <span className="text-red-400">*</span>
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="contoh: SISTEM NEURO"
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40 uppercase"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Slug (URL) <span className="text-red-400">*</span>
              </label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="contoh: neuro"
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40 lowercase"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Overview / Deskripsi Sistem</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Deskripsi materi pada sistem ini (akan muncul di halaman kategori)..."
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40 min-h-[100px] resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Urutan (Order)</label>
              <Input
                type="number"
                value={order}
                onChange={(e) => setOrder(parseInt(e.target.value) || 0)}
                className="bg-navy border-sky-500/15 text-foreground focus:border-sky-500/40"
              />
              <p className="text-xs text-slate-500">Urutan penampilan di Halaman Utama (Bento Grid).</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Video YouTube Kategori (Overview Sistem)</label>
              <Input
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40"
              />
              <p className="text-xs text-slate-500">Video penjelasan pengantar untuk sistem ini.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Video Tambahan (Tanpa 3D Model)</label>
              <Input
                value={extraVideoUrl}
                onChange={(e) => setExtraVideoUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..., https://..."
                className="bg-navy border-sky-500/15 text-foreground placeholder:text-slate-600 focus:border-sky-500/40"
              />
              <p className="text-xs text-slate-500">Pisahkan dengan koma atau spasi jika lebih dari satu video.</p>
            </div>

            {/* Image upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Hero / Thumbnail Image
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

            {/* Document (Materi) upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" /> Upload Materi (Dokumen)
              </label>
              <input
                ref={docInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                multiple
                className="hidden"
                onChange={handleDocSelect}
              />

              {/* Existing docs list */}
              {existingDocs.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500">Dokumen yang sudah ada:</p>
                  {existingDocs.map((url, i) => (
                    <div key={`existing-${i}`} className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-2">
                      <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs text-slate-300 truncate flex-1">{getFileName(url)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 rounded-full hover:bg-red-500/20 text-slate-500 hover:text-red-400 shrink-0"
                        onClick={() => removeExistingDoc(i)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* New docs list */}
              {documentFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500">Dokumen baru untuk diupload:</p>
                  {documentFiles.map((file, i) => (
                    <div key={`new-${i}`} className="flex items-center gap-2 bg-sky-500/5 border border-sky-500/10 rounded-lg p-2">
                      <FileText className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-xs text-slate-300 truncate flex-1">{file.name}</span>
                      <span className="text-[10px] text-slate-500 shrink-0">{(file.size / 1024).toFixed(0)} KB</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 rounded-full hover:bg-red-500/20 text-slate-500 hover:text-red-400 shrink-0"
                        onClick={() => removeNewDoc(i)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => docInputRef.current?.click()}
                className="w-full h-24 rounded-xl border-2 border-dashed border-emerald-500/20 hover:border-emerald-500/40 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <FileUp className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  Klik untuk tambah dokumen materi
                </span>
                <span className="text-[10px] text-slate-600">PDF, Word, PPT, Excel</span>
              </button>
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
                  Menyimpan...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  {isEditing ? 'Simpan Perubahan' : 'Tambah Kategori'}
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
