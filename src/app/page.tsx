"use client";

import { FadeIn, SocialLinks } from './components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-background to-background/80 text-foreground font-sans p-4">
      <main className="flex flex-col items-center gap-8">
        <FadeIn>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-center">
            Vitus Putra
          </h1>
        </FadeIn>
        <FadeIn delay={500}>
          <p className="text-lg sm:text-2xl text-center max-w-xl opacity-80">
            Software Engineer at Cisco, committed to excellence and innovation.
          </p>
        </FadeIn>
        <FadeIn delay={1000}>
          <SocialLinks />
        </FadeIn>
      </main>
    </div>
  );
}
