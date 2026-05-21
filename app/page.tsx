"use client";

/**
 * Watad homepage — single page, eight content sections.
 * Header (fixed) → Hero → Sectors → Anti-positioning → Methodology
 * → Commitment → Engagements → FAQ → Closing CTA → Footer.
 * Plus mobile sticky CTA bar. Arabic-primary, English mirror.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sectors } from "@/components/Sectors";
import { AntiPositioning } from "@/components/AntiPositioning";
import { Methodology } from "@/components/Methodology";
import { Commitment } from "@/components/Commitment";
import { Engagements } from "@/components/Engagements";
import { FAQ } from "@/components/FAQ";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-s3 focus:py-s2 focus:text-bone"
      >
        {content.nav.skipToContent[lang]}
      </a>

      <Header />

      <main id="content">
        <Hero />
        <Sectors />
        <AntiPositioning />
        <Methodology />
        <Commitment />
        <Engagements />
        <FAQ />
        <ClosingCTA />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
