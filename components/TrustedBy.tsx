"use client";

/**
 * Section 2 — Where Watad fits.
 * Six service-firm patterns rendered as rich cards.
 *
 * Each card:
 *   — Category name (language-aware — AR or EN, not both)
 *   — Teal rule accent
 *   — 3–4 sub-segment examples as a dotted list
 *   — "How Watad fits" footer separated by a hairline rule
 *
 * Design principles:
 *   — Premium, calm, operational — no icons, no gradients, no SaaS vibe
 *   — All detail visible by default (mobile-safe; no hover-only content)
 *   — 1-col mobile / 2-col tablet / 3-col desktop
 *   — 80ms stagger via RevealGroup
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function TrustedBy() {
  const { lang } = useLang();
  const t = content.trustedBy;

  return (
    <Section id="trusted-by" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader overline={t.overline[lang]} heading={t.h2[lang]} rule />
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s4 md:grid-cols-2 lg:grid-cols-3">
          {t.sectors.map((sector, i) => (
            <RevealItem key={i}>
              <div className="flex h-full flex-col border border-line bg-bone p-s4 md:p-s5">

                {/* Category name — language-aware only, not bilingual */}
                <h3 className="text-h3-m font-semibold text-ink md:text-h3">
                  {lang === "ar" ? sector.ar : sector.en}
                </h3>

                {/* Teal rule */}
                <div className="mt-s2 h-px w-8 bg-teal" aria-hidden="true" />

                {/* Sub-segments — always visible on all screen sizes */}
                <ul
                  className="mt-s3 flex flex-1 flex-col gap-[6px]"
                  aria-label={lang === "ar" ? "أمثلة" : "Examples"}
                >
                  {(lang === "ar"
                    ? sector.subsegments.ar
                    : sector.subsegments.en
                  ).map((seg, j) => (
                    <li key={j} className="flex items-start gap-s1">
                      <span
                        className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-muted/50"
                        aria-hidden="true"
                      />
                      <span className="text-body-m leading-relaxed text-muted">
                        {seg}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* How Watad fits — hairline separator, always visible */}
                <div className="mt-s3 border-t border-line/60 pt-s3">
                  <p className="mb-[6px] text-caption font-semibold text-teal">
                    {t.fitLabel[lang]}
                  </p>
                  <p className="text-body-m leading-relaxed text-ink/75">
                    {sector.fit[lang]}
                  </p>
                </div>

              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s6 max-w-reading text-caption text-muted">
            {t.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
