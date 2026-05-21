"use client";

/**
 * Section 5 — Commitment / الالتزام.
 * Full-bleed Watad Soft-Bone band. Centered H2 (<=720px line),
 * two-sentence statement, inline anchor to Engagements, and a
 * trust micro-band separated by a 48px Watad Line rule.
 * The whole band is a single 600ms reveal.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section } from "./ui";
import { Reveal } from "./Reveal";

export function Commitment() {
  const { lang } = useLang();
  const c = content.commitment;

  return (
    <Section id="commitment" tone="softbone">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-band text-center">
            <h2 className="text-h2-m font-semibold tracking-[-0.01em] text-ink md:text-h2">
              {c.h2[lang]}
            </h2>

            <p className="mt-s5 text-body-m text-ink md:text-body">
              {c.body1[lang]}
            </p>
            <p className="mt-s3 text-body-m text-ink md:text-body">
              {c.body2[lang]}
            </p>

            <a
              href="#engagements"
              className="mt-s4 inline-block text-body-m text-teal underline-offset-4 hover:underline"
            >
              {c.anchor[lang]}
            </a>

            <div
              className="mx-auto my-s5 h-px w-12 bg-line"
              aria-hidden="true"
            />

            <p className="text-caption text-muted">{c.microBand[lang]}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
