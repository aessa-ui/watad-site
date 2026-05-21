"use client";

/**
 * Section 8 — Closing CTA.
 * H2 + 15-minute framing paragraph + one primary CTA.
 * Single reveal — the block reads as one statement.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config } from "@/lib/config";
import { Container, Section, PrimaryCTA } from "./ui";
import { Reveal } from "./Reveal";

export function ClosingCTA() {
  const { lang } = useLang();
  const c = content.closing;

  return (
    <Section id="closing">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-band text-center">
            <h2 className="text-h2-m font-semibold tracking-[-0.01em] text-ink md:text-h2">
              {c.h2[lang]}
            </h2>
            <p className="mx-auto mt-s4 max-w-reading text-body-m text-muted md:text-body">
              {c.body[lang]}
            </p>
            <div className="mt-s6 flex justify-center">
              <PrimaryCTA
                label={c.cta[lang]}
                href={config.calendlyUrl}
                fullWidthMobile
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
