"use client";

import { SchedulingProvider } from '../contexts/SchedulingContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SchedulingProvider>
      {children}
    </SchedulingProvider>
  );
}
