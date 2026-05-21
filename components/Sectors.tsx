"use client";

/**
 * Section 2 — Sectors / لمن نعمل.
 * Overline + H2 + lead + 8 plain-text sector cards (4x2 desktop,
 * staggered 80ms) + closing line. No icons, no hover, no fills.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Sectors() {
  const { lang } = useLang();
  const s = content.sectors;

  return (
    <Section id="sectors" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader overline={s.overline[lang]} heading={s.h2[lang]} rule />
          <p className="mt-s4 max-w-reading text-body-m text-muted md:text-body">
            {s.lead[lang]}
          </p>
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s3 sm:grid-cols-2 md:gap-s4 lg:grid-cols-4">
          {s.cards.map((card, i) => (
            <RevealItem
              key={i}
              className="card-hover border border-line bg-bone p-s3 shadow-ambient md:p-s4"
            >
              <p className="text-body-m text-ink md:text-body">{card[lang]}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s6 max-w-reading text-body-m text-ink md:text-body">
            {s.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
