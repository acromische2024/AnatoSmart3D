'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { uploadFileViaApi } from '@/lib/uploadHelper';
import { Profile } from './ProfileManager';
import { v4 as uuidv4 } from 'uuid';
import { Loader2 } from 'lucide-react';

export function ProfileUploadDialog({
  open,
  onOpenChange,
  onSuccess,
  initialData,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  initialData?: Profile;
}) {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('DOSEN');
  
  const [formData, setFormData] = useState<Partial<Profile>>({
    name: '',
    role: '',
    email: '',
    groupOrYear: '',
    order: 0,
    origin: '',
    birthDate: '',
    favoriteBlock: '',
    hobby: '',
    quotes: '',
    eduSD: '',
    eduSMP: '',
    eduSMA: '',
    eduS1: '',
    eduS2: '',
    eduS3: '',
    linkInstagram: '',
    linkScopus: '',
    linkSinta: '',
    linkScholar: '',
    linkResearch: '',
    description: '',
    organizations: '',
    intellectualProp: '',
    address: '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (initialData) {
      setType(initialData.type);
      setFormData(initialData);
    } else {
      setType('DOSEN');
      setFormData({
        name: '', role: '', email: '', groupOrYear: '', order: 0, origin: '', birthDate: '',
        favoriteBlock: '', hobby: '', quotes: '', eduSD: '', eduSMP: '', eduSMA: '',
        eduS1: '', eduS2: '', eduS3: '', linkInstagram: '', linkScopus: '', linkSinta: '', linkScholar: '',
        linkResearch: '', description: '', organizations: '', intellectualProp: '', address: ''
      });
    }
    setImageFile(null);
  }, [initialData, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role) {
      toast.error('Nama dan Jabatan wajib diisi');
      return;
    }
    
    setLoading(true);
    try {
      let finalImageUrl = initialData?.image || null;
      if (imageFile) {
        finalImageUrl = await uploadFileViaApi(imageFile, 'profiles');
      }

      // Format slug automatically and make it unique if creating new
      const baseSlug = formData.name!.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const slug = formData.slug || `${baseSlug}-${uuidv4().substring(0, 6)}`;

      const payload = {
        ...formData,
        type,
        slug,
        image: finalImageUrl,
        order: Number(formData.order) || 0
      };

      const url = initialData ? `/api/profiles/${initialData.id}` : '/api/profiles';
      const method = initialData ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || 'Gagal menyimpan');
      }

      toast.success('Profil berhasil disimpan');
      onSuccess();
      onOpenChange(false);
    } catch (err: any) {
      console.error(err);
      const msg = err?.message || err?.error_description || err?.toString() || 'Terjadi kesalahan sistem';
      toast.error(msg === '[object Object]' ? 'Terjadi kesalahan sistem' : msg);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[90%] sm:max-w-[700px] bg-[#050511] text-white border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{initialData ? 'Edit Profil' : 'Tambah Profil'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tipe Profil *</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-white">
                  <SelectItem value="DOSEN">Dosen</SelectItem>
                  <SelectItem value="STAFF">Staf / Tendik</SelectItem>
                  <SelectItem value="ASLAB">Asisten Laboratorium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Nama Lengkap *</Label>
              <Input name="name" value={formData.name || ''} onChange={handleChange} className="bg-white/5 border-white/10" required />
            </div>

            <div className="space-y-2">
              <Label>Jabatan / Peran *</Label>
              <Input name="role" value={formData.role || ''} onChange={handleChange} placeholder="e.g. Kepala Lab, Asisten" className="bg-white/5 border-white/10" required />
            </div>

            <div className="space-y-2">
              <Label>Grup (Untuk Dosen) / Angkatan (Aslab)</Label>
              <Input name="groupOrYear" value={formData.groupOrYear || ''} onChange={handleChange} placeholder="e.g. Sie Pendidikan / 2024" className="bg-white/5 border-white/10" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="bg-white/5 border-white/10" />
            </div>

            <div className="space-y-2">
              <Label>Instagram (Link URL atau Username)</Label>
              <Input name="linkInstagram" value={formData.linkInstagram || ''} onChange={handleChange} placeholder="e.g. https://instagram.com/username atau @username" className="bg-white/5 border-white/10" />
            </div>

            <div className="space-y-2">
              <Label>Urutan Tampil (Makin kecil makin di atas)</Label>
              <Input type="number" name="order" value={formData.order || 0} onChange={handleChange} className="bg-white/5 border-white/10" />
            </div>
            
            <div className="space-y-2">
              <Label>Foto Profil (Opsional)</Label>
              <Input 
                type="file" 
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="bg-white/5 border-white/10 file:text-white" 
              />
              {initialData?.image && !imageFile && (
                <p className="text-xs text-sky-400">Gambar sudah ada, pilih file baru untuk mengganti.</p>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 mt-6">
            <h4 className="font-bold text-lg mb-4 text-emerald-400">Detail Spesifik (Opsional)</h4>
            
            {type === 'ASLAB' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Asal</Label><Input name="origin" value={formData.origin || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Tanggal Lahir</Label><Input name="birthDate" value={formData.birthDate || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Hobi</Label><Input name="hobby" value={formData.hobby || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Blok Favorit</Label><Input name="favoriteBlock" value={formData.favoriteBlock || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="md:col-span-2 space-y-2"><Label>Quotes</Label><Input name="quotes" value={formData.quotes || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat SD</Label><Input name="eduSD" value={formData.eduSD || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat SMP</Label><Input name="eduSMP" value={formData.eduSMP || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat SMA</Label><Input name="eduSMA" value={formData.eduSMA || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
              </div>
            )}

            {type === 'DOSEN' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 space-y-2"><Label>Bio Singkat</Label><Textarea name="description" value={formData.description || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="md:col-span-2 space-y-2"><Label>Alamat Institusi</Label><Textarea name="address" value={formData.address || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat S1</Label><Input name="eduS1" value={formData.eduS1 || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat S2</Label><Input name="eduS2" value={formData.eduS2 || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Riwayat S3</Label><Input name="eduS3" value={formData.eduS3 || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Link Scopus</Label><Input name="linkScopus" value={formData.linkScopus || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Link Sinta</Label><Input name="linkSinta" value={formData.linkSinta || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Link Google Scholar</Label><Input name="linkScholar" value={formData.linkScholar || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="space-y-2"><Label>Link Penelitian Lain</Label><Input name="linkResearch" value={formData.linkResearch || ''} onChange={handleChange} className="bg-white/5 border-white/10" /></div>
                <div className="md:col-span-2 space-y-2"><Label>Riwayat Organisasi (Gunakan enter/baris baru untuk list)</Label><Textarea name="organizations" value={formData.organizations || ''} onChange={handleChange} className="bg-white/5 border-white/10" rows={4}/></div>
                <div className="md:col-span-2 space-y-2"><Label>Hak Kekayaan Intelektual (HAKI) (Gunakan enter/baris baru untuk list)</Label><Textarea name="intellectualProp" value={formData.intellectualProp || ''} onChange={handleChange} className="bg-white/5 border-white/10" rows={4}/></div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Batal</Button>
            <Button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-500">
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
