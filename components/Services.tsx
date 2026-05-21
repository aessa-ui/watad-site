"use client";

/**
 * Section 3 — Services.
 * Three service pillars: Pipeline Generation, Commercial
 * Infrastructure, Accountability & Reporting.
 * Large typographic number accent + teal rule below.
 * Bone tone. 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Services() {
  const { lang } = useLang();
  const s = content.services;

  return (
    <Section id="services">
      <Container>
        <Reveal>
          <SectionHeader overline={s.overline[lang]} heading={s.h2[lang]} rule />
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s6 md:grid-cols-3 md:gap-s5">
          {s.items.map((item, i) => (
            <RevealItem key={i} className="flex flex-col">
              {/* Large number accent */}
              <span
                className="select-none text-[72px] font-light leading-none tracking-tighter text-teal/15"
                aria-hidden="true"
              >
                {item.number[lang]}
              </span>

              {/* Teal rule separator */}
              <div className="mt-s3 h-px w-10 bg-teal" aria-hidden="true" />

              <h3 className="mt-s3 text-h3-m font-semibold text-ink md:text-h3">
                {item.title[lang]}
              </h3>
              <p className="mt-s3 text-body-m leading-relaxed text-muted md:text-body">
                {item.body[lang]}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
