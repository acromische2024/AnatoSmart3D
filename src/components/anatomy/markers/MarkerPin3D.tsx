'use client';

import { Html } from '@react-three/drei';
import { MapPin } from 'lucide-react';

interface MarkerPin3DProps {
  position: [number, number, number];
  color: string;
  label: string;
  isActive: boolean;
  onClick: (e: any) => void;
}

export function MarkerPin3D({
  position,
  color,
  label,
  isActive,
  onClick,
}: MarkerPin3DProps) {
  return (
    <Html position={position} center distanceFactor={10} zIndexRange={[100, 0]}>
      <div
        className={`group cursor-pointer flex flex-col items-center transform transition-transform duration-200 ${
          isActive ? 'scale-125' : 'hover:scale-110'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onClick(e);
        }}
      >
        <div
          className="px-2 py-1 mb-1 rounded-md bg-navy/80 backdrop-blur-sm border text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ borderColor: color }}
        >
          {label}
        </div>
        <div
          className="w-6 h-6 flex items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}80` }}
        >
          <MapPin className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-1 h-8 -mt-2 bg-gradient-to-b from-transparent to-black/30 origin-top transform rotate-180" />
      </div>
    </Html>
  );
}
