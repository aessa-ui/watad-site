/**
 * Watad site configuration — external links and placeholders.
 *
 * ────────────────────────────────────────────────────────────────
 *  ACTION REQUIRED BEFORE PUBLISH — replace every value marked TODO.
 *  Per WATAD_WEBSITE_V1_FRAMER_EXECUTION.md S12 "Placeholders filled
 *  before going live". Until then the site runs in preview with
 *  non-functional booking / WhatsApp links — safe for local review.
 * ────────────────────────────────────────────────────────────────
 */

export const config = {
  calendlyUrl: "https://calendly.com/a-essa-watadops/watad-15-minute-introductory-call",

  whatsappNumber: "966599998815",

  // Confirmed — one of the three active inboxes.
  email: "hello@watadops.com",

  // Confirmed brand domain.
  website: "watadops.com",
  siteUrl: "https://watadops.com",

  // HQ city — spec recommends Riyadh.
  cityAr: "الرياض",
  cityEn: "Riyadh",

  // Verified legal relationship. Watad is a trade name operating UNDER the
  // registered entity below — Watad is NOT itself a separately registered
  // company. Do not imply otherwise. (CR confirmed in project CLAUDE.md.)
  legalEntityAr: "شركة روابط التمكين التجارية",
  crNumber: "1009035052",

  // Copyright year.
  year: 2026,
} as const;

export const whatsappUrl = `https://wa.me/${config.whatsappNumber}`;
export const mailtoUrl = `mailto:${config.email}`;
