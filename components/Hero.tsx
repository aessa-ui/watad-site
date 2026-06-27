"use client";

/**
 * Hero. Static on load — the only block that never fades (spec S4).
 * Two-beat Display headline, single-sentence subhead, dual CTA
 * (Calendly + WhatsApp), proof chips, text-only trust strip.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config, whatsappUrl } from "@/lib/config";
import { Container, PrimaryCTA } from "./ui";
import { WhatsappIcon } from "./WhatsappIcon";

export function Hero() {
  const { lang } = useLang();
  const h = content.hero;

  return (
    <section
      id="hero"
      className="hero-atmosphere bg-bone pb-section-m pt-hero-top-m text-center md:pb-section-t lg:pb-section-d lg:pt-hero-top-d"
    >
      <Container>
        <h1 className="font-light text-display-m tracking-[-0.02em] text-ink md:text-display">
          <span className="block">{h.headline1[lang]}</span>
          <span className="mt-6 block md:mt-8">{h.headline2[lang]}</span>
        </h1>

        <p className="mx-auto mt-s5 max-w-reading text-body-lg-m text-ink/75 md:text-body-lg">
          {h.subhead[lang]}
        </p>

        {/* Dual CTA: primary booking + secondary WhatsApp */}
        <div className="mt-s5 flex flex-col items-center justify-center gap-s3 sm:flex-row">
          <PrimaryCTA
            label={h.cta[lang]}
            href={config.calendlyUrl}
            fullWidthMobile
          />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-s4 py-[10px] text-button font-medium text-ink transition-[border-color,color] duration-150 hover:border-teal hover:text-teal"
          >
            <WhatsappIcon />
            {h.ctaSecondary[lang]}
          </a>
        </div>

        {/* Proof chips */}
        <div className="mt-s5 flex flex-wrap items-center justify-center gap-x-s3 gap-y-s2">
          {h.proofChips.map((chip, i) => (
            <span key={i} className="flex items-center gap-x-s3">
              <span className="text-caption text-muted">{chip[lang]}</span>
              {i < h.proofChips.length - 1 && (
                <span className="text-muted opacity-30" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>

        <p className="mt-s3 text-caption text-muted/70">{h.trust[lang]}</p>
      </Container>
    </section>
  );
}
