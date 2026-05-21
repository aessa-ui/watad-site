"use client";

/**
 * Section 4 — Methodology / منهجية العمل.
 * Overline + H2 + intro + four numbered blocks. Eastern Arabic
 * numerals (AR) / Latin numerals (EN), both in Watad Teal.
 * 4x1 desktop, 2x2 tablet, 1x4 mobile. 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Methodology() {
  const { lang } = useLang();
  const m = content.methodology;

  return (
    <Section id="methodology">
      <Container>
        <Reveal>
          <SectionHeader overline={m.overline[lang]} heading={m.h2[lang]} rule />
          <p className="mt-s4 max-w-reading text-body-m text-muted md:text-body">
            {m.intro[lang]}
          </p>
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s5 md:grid-cols-2 lg:grid-cols-4">
          {m.steps.map((step, i) => (
            <RevealItem key={i}>
              <span className="block text-[40px] font-light leading-none text-teal md:text-[48px]">
                {lang === "ar" ? step.numAr : step.numEn}
              </span>
              <h3 className="mt-s3 text-h3-m font-semibold text-ink md:text-h3">
                {step.title[lang]}
              </h3>
              <p className="mt-s2 text-body-m text-ink">{step.body[lang]}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
