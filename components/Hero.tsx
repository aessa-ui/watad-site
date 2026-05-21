"use client";

/**
 * Hero. Static on load — the only block that never fades (spec S4).
 * Two-beat Display headline, single-sentence subhead, one primary
 * CTA, text-only trust strip. Heaviest whitespace on the page.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config } from "@/lib/config";
import { Container, PrimaryCTA } from "./ui";

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

        <p className="mx-auto mt-s5 max-w-reading text-body-lg-m text-ink md:text-body-lg">
          {h.subhead[lang]}
        </p>

        <div className="mt-s5 flex justify-center">
          <PrimaryCTA
            label={h.cta[lang]}
            href={config.calendlyUrl}
            fullWidthMobile
          />
        </div>

        <p className="mt-s5 text-caption text-muted">{h.trust[lang]}</p>
      </Container>
    </section>
  );
}
