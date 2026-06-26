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
              className="flex flex-col border border-line bg-bone p-s4 md:p-s5"
            >
              {i === 0 && (
                <span className="mb-s3 self-start rounded-full bg-teal px-s2 py-[2px] text-caption font-medium text-bone">
                  {lang === "ar" ? "ابدأ من هنا" : "Start here"}
                </span>
              )}
              <h3 className="text-h3-m font-semibold text-ink md:text-h3">
                {card.title[lang]}
              </h3>

              <div className="mt-s3 flex flex-1 flex-col">
                {card.points.map((point, j) => (
                  <p
                    key={j}
                    className={[
                      "text-body-m leading-relaxed",
                      j === 0 ? "text-ink pb-s2" : "text-muted border-t border-line/60 pt-s2 pb-s2",
                    ].join(" ")}
                  >
                    {point[lang]}
                  </p>
                ))}
              </div>

              <a
                href="#closing"
                className="mt-s4 inline-flex items-center gap-1 text-body-m text-teal underline-offset-4 hover:underline"
              >
                <span>{e.cardLink[lang]}</span>
                <span aria-hidden="true" className="rtl:hidden">→</span>
                <span aria-hidden="true" className="hidden rtl:inline">←</span>
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
