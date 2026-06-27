"use client";

/**
 * Section 4 — Operational Capabilities.
 * Four-step methodology rendered as a numbered grid.
 * Arabic numeral accent, teal rule, step title + body.
 * Reuses approved content from content.methodology.
 * Softbone tone. 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function OperationalCapabilities() {
  const { lang } = useLang();
  const m = content.methodology;

  return (
    <Section id="capabilities" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader
            overline={m.overline[lang]}
            heading={m.h2[lang]}
            rule
          />
          <p className="mt-s4 max-w-reading text-body-m text-muted md:text-body">
            {m.intro[lang]}
          </p>
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s5 md:grid-cols-2 lg:grid-cols-4">
          {m.steps.map((step, i) => (
            <RevealItem key={i} className="flex flex-col">
              {/* Step number — large, de-emphasised */}
              <span
                className="select-none text-display font-light leading-none tracking-tighter text-teal/15"
                aria-hidden="true"
              >
                {lang === "ar" ? step.numAr : step.numEn}
              </span>

              {/* Teal rule */}
              <div className="mt-s2 h-px w-8 bg-teal" aria-hidden="true" />

              <h3 className="mt-s3 text-h3-m font-semibold text-ink md:text-h3">
                {step.title[lang]}
              </h3>
              <p className="mt-s2 text-body-m leading-relaxed text-muted">{step.body[lang]}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
