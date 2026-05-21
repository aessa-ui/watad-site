"use client";

/**
 * Shared UI primitives — Wordmark, PrimaryCTA, OutlinePill,
 * Section, Container, SectionHeader.
 * Visual specs: WATAD_WEBSITE_V1_FRAMER_EXECUTION.md S5-S8.
 */

import type { ReactNode } from "react";

/* ── Wordmark ──────────────────────────────────────────────
   Rendered as inline SVG text so background stays transparent
   and the fill switches cleanly between Ink and Bone.
   Serif is a system fallback only — no serif webfont is loaded
   (spec S5). ─────────────────────────────────────────────── */
export function Wordmark({
  variant = "ink",
  className = "h-7 w-auto",
}: {
  variant?: "ink" | "bone";
  className?: string;
}) {
  const fill = variant === "ink" ? "#1d1d1f" : "#faf9f5";
  return (
    <svg
      viewBox="0 0 168 56"
      className={className}
      role="img"
      aria-label="Watad"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="43"
        fontFamily="'IBM Plex Serif', Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize={46}
        letterSpacing={-1}
        fill={fill}
        direction="ltr"
      >
        Watad
      </text>
    </svg>
  );
}

/* ── PrimaryCTA — filled Watad Teal ──────────────────────── */
export function PrimaryCTA({
  label,
  href,
  fullWidthMobile = false,
}: {
  label: string;
  href: string;
  fullWidthMobile?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "hover-ink-overlay inline-flex items-center justify-center overflow-hidden",
        "rounded-[4px] bg-teal px-s5 py-[14px] text-button font-medium text-bone",
        // Ambient teal shadow + lift on hover — premium depth
        "shadow-btn hover:shadow-btn-hover",
        "transition-[transform,box-shadow] duration-200",
        "hover:-translate-y-[1px]",
        fullWidthMobile ? "w-full sm:w-auto" : "",
      ].join(" ")}
    >
      <span className="relative z-10">{label}</span>
    </a>
  );
}

/* ── OutlinePill — sticky-header CTA ──────────────────────── */
export function OutlinePill({
  label,
  href,
  solid = false,
}: {
  label: string;
  href: string;
  solid?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center",
        "rounded-full border px-s2 py-s1 text-button font-medium",
        // Fill-on-hover: ghost → solid ink. Clean, decisive.
        "border-ink text-ink",
        "transition-[background-color,color,box-shadow] duration-200",
        "hover:bg-ink hover:text-bone",
        solid ? "bg-bone" : "bg-transparent",
      ].join(" ")}
    >
      {label}
    </a>
  );
}

/* ── Layout: Container + Section ──────────────────────────── */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-container px-6 md:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  tone = "bone",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "bone" | "softbone";
}) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-24 py-section-m md:py-section-t lg:py-section-d",
        tone === "softbone" ? "bg-softbone" : "bg-bone",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

/* ── SectionHeader — overline + H2 (+ optional Teal rule) ──── */
export function SectionHeader({
  overline,
  heading,
  rule = false,
  centered = false,
}: {
  overline: string;
  heading: string;
  rule?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
        {overline}
      </p>
      <h2 className="mt-s4 text-h2-m font-semibold tracking-[-0.01em] text-ink md:text-h2">
        {heading}
      </h2>
      {rule && (
        <div
          className={`mt-s4 h-px w-12 bg-teal ${centered ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
