"use client";

/**
 * Proof Layer (V1 — final).
 * Placed after OperationalCapabilities, before WhyWatad.
 * Three artifact previews are the proof. (Operating-view preview deferred to V2.)
 * Trust reinforcement (human-led + verification + confidentiality),
 * then the existing booking CTA to capture trust at its peak.
 * No fabricated clients/logos/numbers/outcomes. Existing primitives only.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config } from "@/lib/config";
import { Container, Section, SectionHeader, PrimaryCTA } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProofArtifactCard } from "./ProofArtifactCard";

export function ProofLayer() {
  const { lang } = useLang();
  const p = content.proof;

  return (
    <Section id="proof" tone="bone">
      <Container>
        <Reveal>
          <SectionHeader
            overline={p.overline[lang]}
            heading={p.heading[lang]}
            rule
          />
        </Reveal>

        <Reveal>
          <p className="mt-s4 max-w-reading text-body-m text-muted">
            {p.integrity[lang]}
          </p>
        </Reveal>

        {/* Artifacts — the proof */}
        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s4 md:grid-cols-2 lg:grid-cols-3">
          {p.artifacts.map((a) => (
            <RevealItem key={a.key}>
              <ProofArtifactCard
                artifact={a}
                sampleTag={p.sampleTag}
                decisionLabel={p.decisionLabel}
                decisionStates={p.decisionStates}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Trust reinforcement — human-led, verification, confidentiality */}
        <Reveal>
          <div className="mt-s6 max-w-reading space-y-s2">
            <p className="text-body-m text-ink/80 md:text-body">{p.humanLed[lang]}</p>
            <p className="text-body-m text-ink/80 md:text-body">{p.verification[lang]}</p>
            <p className="text-caption text-muted">{p.confidentiality[lang]}</p>
          </div>
        </Reveal>

        {/* Capture trust at its peak — existing booking CTA */}
        <Reveal>
          <div className="mt-s6">
            <PrimaryCTA label={content.nav.cta[lang]} href={config.calendlyUrl} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
