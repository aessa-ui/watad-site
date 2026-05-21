"use client";

/**
 * Section 5 — Why Watad.
 * Three differentiators: Contractual Commitment, Sector
 * Exclusivity, Execution Not Advice.
 * Card: teal inline-start border (logical — correct in RTL) +
 * hover:bg-softbone/70 + hover:border-teal opacity lift.
 * Bone tone.
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

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s4 md:grid-cols-3 md:gap-s5">
          {w.items.map((item, i) => (
            <RevealItem key={i}>
              {/*
               * Outer: hover background + padding (negative margin
               * so the bg bleeds to the visual edge on hover).
               * Inner: logical border-s (inline-start) — correct in RTL
               * without directional class overrides. ps-s4 = padding-start.
               */}
              <div className="group -mx-s2 cursor-default rounded-sm px-s2 py-s3 transition-colors duration-200 hover:bg-softbone/70">
                <div className="border-s-2 border-teal ps-s4 transition-colors duration-200 group-hover:border-teal/60">
                  <h3 className="text-h3-m font-semibold text-ink transition-colors duration-200 group-hover:text-teal md:text-h3">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-s3 text-body-m leading-relaxed text-muted md:text-body">
                    {item.body[lang]}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
