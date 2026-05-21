"use client";

/**
 * Section 6 — Engagement Profiles (Case Studies).
 * Three anonymised engagement profiles: B2B Services, Enterprise
 * Technology, Facility Management. No fabricated metrics.
 * Commercial details confidential — describes operating structure.
 * Softbone tone. Card hover. 80ms stagger.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function CaseStudies() {
  const { lang } = useLang();
  const c = content.caseStudies;

  return (
    <Section id="case-studies" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader overline={c.overline[lang]} heading={c.h2[lang]} rule />
          <p className="mt-s4 max-w-reading text-body-m text-muted md:text-body">
            {c.lead[lang]}
          </p>
        </Reveal>

        <RevealGroup className="mt-s6 grid grid-cols-1 gap-s4 lg:grid-cols-3">
          {c.profiles.map((profile, i) => (
            <RevealItem
              key={i}
              className="card-hover flex flex-col border border-line bg-bone p-s4 shadow-ambient md:p-s5"
            >
              {/* Category overline */}
              <p className="text-overline font-medium uppercase tracking-[0.08em] text-teal">
                {profile.category[lang]}
              </p>

              {/* Engagement type */}
              <h3 className="mt-s3 text-h3-m font-semibold text-ink md:text-h3">
                {profile.engagement[lang]}
              </h3>

              {/* Description */}
              <p className="mt-s3 flex-1 text-body-m leading-relaxed text-muted">
                {profile.description[lang]}
              </p>

              {/* Region footer */}
              <div className="mt-s4 border-t border-line pt-s3">
                <p className="text-caption text-muted">{profile.region[lang]}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-s6 max-w-reading text-caption text-muted">
            {c.closing[lang]}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
