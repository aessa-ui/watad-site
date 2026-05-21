"use client";

/**
 * Watad homepage — premium Tier-1 B2B, eight sections.
 * Header (fixed) →
 *   1. Hero (upgraded — dual CTA + proof chips)
 *   2. TrustedBy (sector text grid)
 *   3. Services (3 pillars)
 *   4. OperationalCapabilities (4-step methodology)
 *   5. WhyWatad (3 differentiators)
 *   6. CaseStudies (engagement profiles)
 *   7. ClosingCTA (dark teal anchor)
 * → Footer.
 * Plus mobile sticky CTA bar. Arabic-primary, English mirror.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { OperationalCapabilities } from "@/components/OperationalCapabilities";
import { WhyWatad } from "@/components/WhyWatad";
import { CaseStudies } from "@/components/CaseStudies";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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
        <TrustedBy />
        <Services />
        <OperationalCapabilities />
        <WhyWatad />
        <CaseStudies />
        <ClosingCTA />
      </main>

      <Footer />
      {/* Mobile CTAs: sticky bar (booking + whatsapp) + floating whatsapp circle */}
      <MobileStickyBar />
      <FloatingWhatsApp />
    </>
  );
}
