"use client";

/**
 * Proof Layer — one artifact preview card (rendered ×3, data-driven).
 * Shows the STRUCTURE of a Watad artifact; values are redaction bars or "—".
 * No client data, no numbers, no outcomes. "Sample Structure" labelled.
 */

import type { Bi } from "@/lib/content";
import { useLang } from "@/lib/LanguageContext";

type Artifact = {
  key: string;
  title: Bi;
  caption: Bi;
  rows: Bi[];
};

const ROW_WIDTHS = ["72%", "58%", "65%", "50%", "61%", "54%"];

export function ProofArtifactCard({
  artifact,
  sampleTag,
  decisionLabel,
  decisionStates,
}: {
  artifact: Artifact;
  sampleTag: Bi;
  decisionLabel: Bi;
  decisionStates: Bi[];
}) {
  const { lang } = useLang();
  const isAccount = artifact.key === "account-intelligence";
  const isDay30 = artifact.key === "day30";

  return (
    <div className="flex h-full flex-col border border-line bg-softbone p-s4 md:p-s5">
      <span className="self-start rounded-full bg-teal/10 px-s2 py-[2px] text-caption text-teal">
        {sampleTag[lang]}
      </span>

      {/* Account Intelligence leads with the decision logic */}
      {isAccount && (
        <div className="mt-s3">
          <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
            {decisionLabel[lang]}
          </p>
          <div className="mt-s2 flex flex-wrap gap-s1">
            {decisionStates.map((d, i) => (
              <span
                key={d.en}
                className={
                  i === 0
                    ? "rounded-[4px] bg-teal px-s2 py-[2px] text-caption font-medium text-bone"
                    : "rounded-[4px] border border-line px-s2 py-[2px] text-caption text-muted"
                }
              >
                {lang === "ar" ? d.ar : d.en}
              </span>
            ))}
          </div>
        </div>
      )}

      <h3 className="mt-s3 text-h3-m font-semibold text-ink md:text-h3">
        {artifact.title[lang]}
      </h3>

      <div className="mt-s3 flex flex-1 flex-col gap-s2">
        {artifact.rows.map((row, i) =>
          isDay30 ? (
            // Day-30: commercial-impact metric names, values redacted as "—"
            <div
              key={row.en}
              className="flex items-center justify-between border-b border-line/50 pb-s1 text-body-m"
            >
              <span className="text-ink/80">{row[lang]}</span>
              <span className="text-muted" aria-hidden="true">
                —
              </span>
            </div>
          ) : (
            // Account / Weekly: section labels + redaction bars
            <div key={row.en} className="flex items-center gap-s3">
              <span className="w-[42%] shrink-0 text-caption text-muted">
                {row[lang]}
              </span>
              <span
                className="h-2.5 flex-1 rounded bg-muted/20"
                style={{ maxWidth: ROW_WIDTHS[i % ROW_WIDTHS.length] }}
                aria-hidden="true"
              />
            </div>
          )
        )}
      </div>

      <p className="mt-s4 text-body-m text-muted">{artifact.caption[lang]}</p>
    </div>
  );
}
