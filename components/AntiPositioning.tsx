"use client";

/**
 * Section 3 — What we do not do / ما الذي لا نقدّمه.
 * Anti-positioning carries high trust weight in this market.
 * Overline + terse H2 + six-line list, no decoration. 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function AntiPositioning() {
  const { lang } = useLang();
  const a = content.antiPositioning;

  return (
    <Section id="boundaries">
      <Container>
        <Reveal>
          <SectionHeader overline={a.overline[lang]} heading={a.h2[lang]} />
        </Reveal>

        <RevealGroup className="mt-s6 max-w-reading">
          {a.list.map((item, i) => (
            <RevealItem
              key={i}
              className="border-b border-line py-s3 first:border-t"
            >
              <p className="text-body-m text-ink md:text-body">{item[lang]}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
