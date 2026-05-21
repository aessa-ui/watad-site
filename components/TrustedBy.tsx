"use client";

/**
 * Section 2 — Who We Work With.
 *
 * Logo placeholder strip (8 monochrome pill marks) — replace each
 * with a real client <img> or <svg> logo before launch.
 * Below: elegant sector list as flowing text pills.
 * Softbone tone.
 *
 * Placeholder design: pill-shaped rectangles of varying widths at
 * 20% opacity. Industry-standard treatment for pre-launch logo rows
 * (used by Stripe, Linear, Vercel, etc.).
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

// Varying widths create organic visual rhythm, as real logos would.
// Replace each entry with a real logo element when available.
const LOGO_SLOTS = [
  { width: 88 },
  { width: 70 },
  { width: 112 },
  { width: 80 },
  { width: 104 },
  { width: 74 },
  { width: 96 },
  { width: 118 },
];

function LogoPlaceholder({ width, index }: { width: number; index: number }) {
  return (
    <div
      className="flex h-12 w-full items-center justify-center"
      aria-label={`Client ${index + 1}`}
      role="img"
    >
      {/* Monochrome pill mark — replace with real logo */}
      <div
        className="rounded bg-ink opacity-[0.2] transition-opacity duration-300 group-hover:opacity-[0.5]"
        style={{ width: `${width}px`, height: "11px" }}
        aria-hidden="true"
      />
    </div>
  );
}

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

        {/* Logo placeholder strip */}
        <Reveal>
          <div className="mt-s6 border-y border-line py-s5">
            <div className="grid grid-cols-2 gap-s2 sm:grid-cols-4 sm:gap-s3 lg:grid-cols-8">
              {LOGO_SLOTS.map((slot, i) => (
                <div key={i} className="group">
                  <LogoPlaceholder width={slot.width} index={i} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Sector pills — flowing horizontal list */}
        <RevealGroup className="mt-s5 flex flex-wrap items-center justify-center gap-x-s2 gap-y-s2">
          {t.sectors.map((sector, i) => (
            <RevealItem key={i}>
              <span className="inline-block rounded-full border border-line bg-bone px-s3 py-[6px] text-caption font-medium text-muted transition-colors duration-200 hover:border-teal/30 hover:text-ink">
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
