'use client';

import { TranslationProvider } from '@/lib/translation-context';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  );
}
