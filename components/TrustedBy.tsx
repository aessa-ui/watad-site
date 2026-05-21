"use client";

/**
 * Section 2 — Who We Work With.
 * Honest sector/category text only — no logo placeholders,
 * no fabricated client names. Softbone tone.
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

        {/* Sector pills — flowing horizontal list */}
        <RevealGroup className="mt-s6 flex flex-wrap items-center justify-center gap-x-s2 gap-y-s2">
          {t.sectors.map((sector, i) => (
            <RevealItem key={i}>
              <span className="inline-block rounded-full border border-line bg-bone px-s3 py-[6px] text-caption font-medium text-ink">
                {sector[lang]}
              </span>
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
