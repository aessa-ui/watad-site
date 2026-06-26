"use client";

/**
 * Watad homepage — eight sections, canon-safe.
 * Header (fixed) →
 *   1. Hero
 *   2. TrustedBy (sector text only — no logos)
 *   3. Services (3 pillars)
 *   4. OperationalCapabilities (4-step methodology)
 *   5. WhyWatad (3 differentiators)
 *   6. Engagements (honest engagement model — Pilot / Continued / Custom)
 *   7. ClosingCTA (dark teal anchor)
 * → Footer.
 * MobileStickyBar (booking + WhatsApp). Arabic-primary, English mirror.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { OperationalCapabilities } from "@/components/OperationalCapabilities";
import { ProofLayer } from "@/components/ProofLayer";
import { WhyWatad } from "@/components/WhyWatad";
import { Engagements } from "@/components/Engagements";
import { ClosingCTA } from "@/components/ClosingCTA";
import { FAQ } from "@/components/FAQ";
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
        <Services />
        <OperationalCapabilities />
        <TrustedBy />
        <WhyWatad />
        <ProofLayer />
        <Engagements />
        <FAQ />
        <ClosingCTA />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
