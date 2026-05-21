"use client";

/**
 * Section 2 — Trusted By / Who We Work With.
 * Text-only sector grid (no logos) — 8 sectors in a 4-col grid.
 * Softbone tone. Grid lines via gap + bg-line trick.
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
          <SectionHeader
            overline={t.overline[lang]}
            heading={t.h2[lang]}
            centered
          />
          <p className="mx-auto mt-s4 max-w-reading text-center text-body-m text-muted md:text-body">
            {t.lead[lang]}
          </p>
        </Reveal>

        {/* Grid lines via 1px bg-line gap between bg-softbone cells */}
        <RevealGroup className="mt-s6 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-4">
          {t.sectors.map((sector, i) => (
            <RevealItem
              key={i}
              className="flex items-center justify-center bg-softbone px-s3 py-s4 text-center text-body-m font-medium text-ink"
            >
              {sector[lang]}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s5 text-center text-caption text-muted">
            {t.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
