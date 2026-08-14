'use client';

import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Marker = {
  id: string;
  label: string;
  description: string | null;
  color: string;
  positionX: number;
  positionY: number;
  positionZ: number;
  order: number;
};

interface MarkerOverlayProps {
  markers: Marker[];
  activeMarkerId: string | null;
  isPlacementMode: boolean;
  onTogglePlacementMode: () => void;
  onSelectMarker: (id: string) => void;
  onEditMarker: (marker: Marker) => void;
  onDeleteMarker: (id: string) => void;
}

export function MarkerOverlay({
  markers,
  activeMarkerId,
  isPlacementMode,
  onTogglePlacementMode,
  onSelectMarker,
  onEditMarker,
  onDeleteMarker,
}: MarkerOverlayProps) {
  return (
    <div className="w-full h-full flex flex-col bg-navy-lighter/30 border-l border-sky-500/10">
      <div className="p-4 border-b border-sky-500/10 flex items-center justify-between">
        <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4 text-sky-400" />
          Penanda Topografi
        </h3>
        <Button
          size="sm"
          variant={isPlacementMode ? 'default' : 'outline'}
          className={
            isPlacementMode
              ? 'bg-sky-500 hover:bg-sky-400 text-navy'
              : 'border-sky-500/20 text-sky-400 hover:bg-sky-500/10'
          }
          onClick={onTogglePlacementMode}
        >
          <Plus className="w-3.5 h-3.5 mr-1" />
          {isPlacementMode ? 'Batal Tambah' : 'Tambah'}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {markers.length === 0 ? (
          <div className="text-center py-8 text-slate-500 text-sm">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-20" />
            <p>Belum ada penanda.</p>
            <p className="text-xs mt-1">Klik "Tambah" untuk menandai area.</p>
          </div>
        ) : (
          markers.map((marker, idx) => (
            <motion.div
              key={marker.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onSelectMarker(marker.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer group ${
                activeMarkerId === marker.id
                  ? 'bg-sky-500/10 border-sky-500/30'
                  : 'bg-navy/50 border-sky-500/10 hover:border-sky-500/20'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 flex-1">
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: marker.color }}
                  />
                  <div>
                    <h4 className="text-sm font-medium text-foreground leading-tight">
                      {marker.label}
                    </h4>
                    {marker.description && (
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {marker.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-7 h-7 text-slate-400 hover:text-sky-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditMarker(marker);
                    }}
                  >
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-7 h-7 text-slate-400 hover:text-red-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteMarker(marker.id);
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
