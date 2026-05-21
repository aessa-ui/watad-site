"use client";

/**
 * "Sectors We Support" band.
 *
 * Eight sector categories rendered as a bordered card grid.
 * gap-px on the grid container + bg-line creates hairline
 * separators between cells without doubled borders.
 * Cards are bg-bone on a softbone section — subtle tonal contrast.
 *
 * Design principles:
 *  — No fake brands, no logos, no placeholder imagery
 *  — Sector/category signals only (honest)
 *  — Centered text, generous padding, quiet typography
 *  — No hover lift, no shadow, no gradient
 *  — 2-column on mobile, 4-column on desktop
 *  — Both languages always visible inside each card (bilingual
 *    convention for GCC executive audiences — Arabic primary,
 *    English sub-label; does not depend on the language toggle)
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
          <SectionHeader overline={t.overline[lang]} heading={t.h2[lang]} />
        </Reveal>

        {/*
         * grid gap-px bg-line — the 1px gap colour shows the line token,
         * creating hairline separators. Each cell has bg-bone to sit
         * against the softbone section background.
         */}
        <RevealGroup className="mt-s6 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {t.sectors.map((sector, i) => (
            <RevealItem key={i}>
              <div className="flex min-h-[108px] flex-col items-center justify-center bg-bone px-s3 py-s4 text-center md:min-h-[120px] md:px-s4 md:py-s5">
                {/* Arabic — primary label */}
                <p className="text-body-m font-semibold leading-snug text-ink">
                  {sector.ar}
                </p>
                {/* English — secondary label, always shown */}
                <p className="mt-[6px] text-caption leading-tight text-muted">
                  {sector.en}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s5 max-w-reading text-caption text-muted">
            {t.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
