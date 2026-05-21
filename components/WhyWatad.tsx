"use client";

/**
 * Section 5 — Why Watad.
 * Three differentiators: Contractual Commitment, Sector
 * Exclusivity, Execution Not Advice.
 * Each card: teal inline-start border + title + body.
 * Bone tone. Logical border properties — correct in RTL.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function WhyWatad() {
  const { lang } = useLang();
  const w = content.whyWatad;

  return (
    <Section id="why-watad">
      <Container>
        <Reveal>
          <SectionHeader overline={w.overline[lang]} heading={w.h2[lang]} rule />
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s5 md:grid-cols-3">
          {w.items.map((item, i) => (
            <RevealItem
              key={i}
              className="border-s-2 border-teal ps-s4"
            >
              <h3 className="text-h3-m font-semibold text-ink md:text-h3">
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
