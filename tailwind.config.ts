import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        bone: "#faf9f5",
        softbone: "#f2f0ea",
        teal: "#1f4747",
        gold: "#a48652",
        line: "#e0ddd5",
        muted: "#6b6960",
      },
      fontFamily: {
        // Arabic-first: Plex Sans Arabic carries Arabic + Latin glyphs.
        arabic: ["var(--font-plex-arabic)", "sans-serif"],
        sans: ["var(--font-plex-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
        reading: "680px",
        band: "720px",
      },
      spacing: {
        // Brand spacing tokens (WATAD_BRAND_SYSTEM.md S8)
        "s1": "8px",
        "s2": "16px",
        "s3": "24px",
        "s4": "32px",
        "s5": "48px",
        "s6": "64px",
        "s7": "96px",
        "s8": "128px",
        "s9": "192px",
        // Increased-whitespace v1 baseline (founder-approved 2026-05-20)
        "section-d": "160px",
        "section-t": "128px",
        "section-m": "112px",
        "hero-top-d": "192px",
        "hero-top-m": "128px",
      },
      fontSize: {
        // Type scale — desktop values; mobile handled via responsive classes
        display: ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-m": ["44px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["56px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h1-m": ["36px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h2: ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2-m": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h3-m": ["22px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        // Arabic script needs generous leading — 1.75-1.8 for comfort.
        "body-lg": ["20px", { lineHeight: "1.72" }],
        "body-lg-m": ["18px", { lineHeight: "1.72" }],
        body: ["18px", { lineHeight: "1.78" }],
        "body-m": ["16px", { lineHeight: "1.75" }],
        caption: ["14px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        "caption-m": ["13px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        overline: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        button: ["16px", { lineHeight: "1", letterSpacing: "0.01em" }],
      },
      boxShadow: {
        // Ambient card shadow — barely perceptible depth on flat surfaces
        ambient: "0 2px 8px rgba(29, 29, 31, 0.05)",
        // Card hover lift
        hover: "0 8px 28px rgba(29, 29, 31, 0.09)",
        // Primary CTA — teal-tinted shadow
        btn: "0 1px 3px rgba(31, 71, 71, 0.14), 0 4px 12px rgba(31, 71, 71, 0.06)",
        "btn-hover": "0 2px 6px rgba(31, 71, 71, 0.18), 0 10px 28px rgba(31, 71, 71, 0.14)",
        // Sticky bar shadow upward
        "bar": "0 -4px 20px rgba(29, 29, 31, 0.07)",
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "250": "250ms",
        "600": "600ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
