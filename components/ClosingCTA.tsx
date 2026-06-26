"use client";

/**
 * Section 7 — Closing CTA.
 * Dark teal (bg-teal) section — the visual anchor before the footer.
 * H2 + 15-minute framing + dual CTA (Calendly + WhatsApp).
 * Bone text throughout. Single reveal — reads as one statement.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config, whatsappUrl } from "@/lib/config";
import { Container, Section, PrimaryCTA } from "./ui";
import { Reveal } from "./Reveal";
import { WhatsappIcon } from "./WhatsappIcon";

export function ClosingCTA() {
  const { lang } = useLang();
  const c = content.closing;

  return (
    <Section id="closing" tone="dark">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-band text-center">
            <h2 className="text-h2-m font-semibold tracking-[-0.01em] text-bone md:text-h2">
              {c.h2[lang]}
            </h2>
            <p className="mx-auto mt-s4 max-w-reading text-body-m text-bone/70 md:text-body">
              {c.body[lang]}
            </p>
            <div className="mt-s6 flex flex-col items-center justify-center gap-s3 sm:flex-row">
              <PrimaryCTA
                label={c.cta[lang]}
                href={config.calendlyUrl}
                variant="bone"
                fullWidthMobile
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-button font-medium text-bone/70 transition-colors duration-150 hover:text-bone"
              >
                <WhatsappIcon />
                {c.ctaSecondary[lang]}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
