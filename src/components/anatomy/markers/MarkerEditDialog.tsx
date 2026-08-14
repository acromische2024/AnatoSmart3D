'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

export type MarkerFormData = {
  label: string;
  description: string;
  color: string;
};

interface MarkerEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Partial<MarkerFormData>;
  onSave: (data: MarkerFormData) => Promise<void>;
}

const COLORS = [
  { label: 'Merah (Arteri/Otot)', value: '#ef4444' },
  { label: 'Biru (Vena)', value: '#3b82f6' },
  { label: 'Kuning (Saraf)', value: '#eab308' },
  { label: 'Hijau (Limfatik)', value: '#22c55e' },
  { label: 'Cyan (Standar)', value: '#06b6d4' },
  { label: 'Putih (Tulang/Umum)', value: '#f8fafc' },
];

export function MarkerEditDialog({
  open,
  onOpenChange,
  initialData,
  onSave,
}: MarkerEditDialogProps) {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#06b6d4');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLabel(initialData?.label || '');
      setDescription(initialData?.description || '');
      setColor(initialData?.color || '#06b6d4');
    }
  }, [open, initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim()) return;
    
    setLoading(true);
    try {
      await onSave({ label: label.trim(), description: description.trim(), color });
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-navy border-sky-500/20 text-foreground">
        <DialogHeader>
          <DialogTitle>
            {initialData?.label ? 'Edit Penanda' : 'Tambah Penanda Baru'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Nama Struktur <span className="text-red-400">*</span>
            </label>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Contoh: Os Femur"
              className="bg-navy-light border-sky-500/15"
              autoFocus
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Deskripsi</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat..."
              className="bg-navy-light border-sky-500/15 min-h-[80px]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Warna Pin</label>
            <div className="grid grid-cols-6 gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setColor(c.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    color === c.value ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.label}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-sky-500/20 text-slate-300"
              onClick={() => onOpenChange(false)}
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={!label.trim() || loading}
              className="flex-1 bg-sky-500 text-navy hover:bg-sky-400"
            >
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Simpan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
