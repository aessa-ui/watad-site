"use client";

/**
 * Section 6 — Engagements / نموذج التعاقد.
 * Overline + H2 + selectivity opening + three plain cards
 * (Pilot / Continued Operations / Custom Scope) + closing line.
 * NO public pricing anywhere — by design (spec S6). 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Engagements() {
  const { lang } = useLang();
  const e = content.engagements;

  return (
    <Section id="engagements">
      <Container>
        <Reveal>
          <SectionHeader overline={e.overline[lang]} heading={e.h2[lang]} rule />
          <p className="mt-s4 max-w-reading text-body-m text-muted md:text-body">
            {e.opening[lang]}
          </p>
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s3 md:gap-s4 lg:grid-cols-3">
          {e.cards.map((card, i) => (
            <RevealItem
              key={i}
              className="card-hover flex flex-col border border-line bg-bone p-s4 shadow-ambient md:p-s5"
            >
              <h3 className="text-h3-m font-semibold text-ink md:text-h3">
                {card.title[lang]}
              </h3>

              <div className="mt-s3 flex flex-1 flex-col gap-s2">
                {card.points.map((point, j) => (
                  <p
                    key={j}
                    className={
                      j === 0
                        ? "text-body-m text-ink"
                        : "text-body-m text-muted"
                    }
                  >
                    {point[lang]}
                  </p>
                ))}
              </div>

              <a
                href="#closing"
                className="mt-s4 inline-block text-body-m text-teal underline-offset-4 hover:underline"
              >
                {e.cardLink[lang]}
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s6 max-w-reading text-caption text-muted">
            {e.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
