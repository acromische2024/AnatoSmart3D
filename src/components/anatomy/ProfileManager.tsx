'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, Plus, Users, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { ProfileUploadDialog } from './ProfileUploadDialog';

export type Profile = {
  id: string;
  slug: string;
  type: string;
  name: string;
  role: string;
  image: string | null;
  email: string | null;
  groupOrYear: string | null;
  order: number;
  origin: string | null;
  birthDate: string | null;
  favoriteBlock: string | null;
  hobby: string | null;
  quotes: string | null;
  eduSD: string | null;
  eduSMP: string | null;
  eduSMA: string | null;
  eduS1: string | null;
  eduS2: string | null;
  eduS3: string | null;
  linkScopus: string | null;
  linkSinta: string | null;
  linkScholar: string | null;
  linkResearch: string | null;
  description: string | null;
  organizations: string | null;
  intellectualProp: string | null;
  address: string | null;
};

export function ProfileManager() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  
  const fetchProfiles = useCallback(async () => {
    try {
      const res = await fetch('/api/profiles');
      if (!res.ok) throw new Error('Failed to fetch profiles');
      const data = await res.json();
      setProfiles(data);
    } catch {
      toast.error('Gagal memuat data profil');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus profil ini?')) return;
    try {
      const res = await fetch(`/api/profiles/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Profil berhasil dihapus');
      fetchProfiles();
    } catch {
      toast.error('Gagal menghapus profil');
    }
  };

  const handleEdit = (profile: Profile) => {
    setEditingProfile(profile);
    setUploadOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button
          onClick={() => {
            setEditingProfile(null);
            setUploadOpen(true);
          }}
          className="bg-emerald-600 text-white font-semibold hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 border border-emerald-400/50"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Tambah Profil
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-slate-500" /></div>
      ) : profiles.length === 0 ? (
        <div className="text-center py-20 text-slate-400 border border-white/5 rounded-3xl bg-white/5">
          <Users className="w-12 h-12 mx-auto text-slate-500 mb-3 opacity-50" />
          <p>Belum ada data profil. Klik Tambah Profil untuk memulai.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {profiles.map((profile) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => handleEdit(profile)}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6 relative group hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all cursor-pointer hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={(e) => { e.stopPropagation(); handleEdit(profile); }} 
                    className="h-8 w-8 bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 hover:text-sky-300 transition-colors"
                    title="Edit Profil"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={(e) => { e.stopPropagation(); handleDelete(profile.id); }} 
                    className="h-8 w-8 bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 hover:text-rose-300 transition-colors"
                    title="Hapus Profil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 pr-16">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-800 border-2 border-emerald-500/20 shrink-0 shadow-md">
                    {profile.image ? (
                      <img src={profile.image} alt={profile.name} className="w-full h-full object-cover opacity-100" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-700 text-slate-400 text-xl font-bold">
                        {profile.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-lg leading-tight line-clamp-2 text-white group-hover:text-emerald-300 transition-colors">{profile.name}</h3>
                    <p className="text-emerald-400 text-sm font-medium line-clamp-1">{profile.role}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] uppercase font-bold text-slate-300">
                      {profile.type} {profile.groupOrYear && `• ${profile.groupOrYear}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {uploadOpen && (
        <ProfileUploadDialog 
          open={uploadOpen}
          onOpenChange={(open) => {
            setUploadOpen(open);
            if (!open) setEditingProfile(null);
          }}
          onSuccess={fetchProfiles}
          initialData={editingProfile || undefined}
        />
      )}
    </div>
  );
}
