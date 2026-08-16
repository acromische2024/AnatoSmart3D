'use client';

import { Suspense } from 'react';
import { Navbar } from './Navbar';

export function HomeHeader() {
  return (
    <Suspense fallback={<div className="h-16 bg-[#050511]" />}>
      <Navbar />
    </Suspense>
  );
}
