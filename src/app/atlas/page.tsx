'use client';

import { Suspense } from 'react';
import { Navbar } from '@/components/anatomy/Navbar';
import { AnatoAtlasExplorer } from '@/components/anatomy/atlas/AnatoAtlasExplorer';

export default function AtlasPage() {
  return (
    <div className="min-h-screen bg-[#050511] flex flex-col overflow-hidden text-white">
      <Suspense fallback={<div className="h-16 bg-[#050511] border-b border-white/10" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1 relative h-[calc(100vh-64px)] w-full">
        <AnatoAtlasExplorer />
      </main>
    </div>
  );
}
