import type { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-mesh dark:bg-mesh-dark" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface/90 to-transparent dark:from-black/70" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-8 pt-5 sm:px-6 lg:px-8">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
