# Watad Website v1

Production-ready landing page for **watadops.com**. Single page, Arabic-primary
with an English mirror via language toggle. Built per
`02_WEBSITE/WATAD_WEBSITE_V1_FRAMER_EXECUTION.md` — all copy, color, type,
spacing, and motion match the locked system.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion.

---

## 1. Run locally

Requires **Node.js 18.17+ or 20+** and npm.

```bash
cd watad-site
npm install
npm run dev
```

Open **http://localhost:3000**.

Production preview:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

---

## 2. Fill placeholders before publish

All live values sit in **`lib/config.ts`**. Replace every value marked `TODO`:

| Field | Current placeholder | Replace with |
|---|---|---|
| `calendlyUrl` | `calendly.com/watad/conversation` | Real Calendly 15-min event URL |
| `whatsappNumber` | `966500000000` | Real WhatsApp Business number (digits only) |
| `crNumber` | `""` (empty) | Saudi CR number once issued — leave empty until then; the footer trust strip stays hidden while empty |
| `cityAr` / `cityEn` | `الرياض` / `Riyadh` | Confirm HQ city |

`email` (`hello@watadops.com`), `website` (`watadops.com`), and `year` (2026)
are already set to confirmed values.

No other file needs editing to go live.

---

## 3. Deploy to Vercel

**Option A — Vercel dashboard (recommended):**

1. Push `watad-site/` to a Git repository (GitHub / GitLab / Bitbucket).
2. In Vercel: New Project → import the repo.
3. **Root Directory:** set to `watad-site` (if the repo root is the wider project folder).
4. Framework preset auto-detects **Next.js**. Build command `next build`, output handled automatically.
5. Deploy. Vercel issues HTTPS automatically.
6. Add the custom domain `watadops.com` in Project → Settings → Domains, then point DNS A/CNAME records as Vercel instructs. Confirm the email DNS (MX/SPF/DKIM/DMARC) is untouched by the website records.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
cd watad-site
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## 4. Project structure

```
watad-site/
├── app/
│   ├── layout.tsx          # fonts, SEO + OG metadata, <html lang/dir>
│   ├── page.tsx            # homepage — assembles all 8 sections
│   ├── globals.css         # Tailwind base + reduced-motion guard
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   ├── privacy/page.tsx    # legal stub
│   └── terms/page.tsx      # legal stub
├── components/
│   ├── ui.tsx              # Wordmark, CTAs, Section, Container, SectionHeader
│   ├── Reveal.tsx          # motion wrappers (fade + 80ms stagger)
│   ├── Header.tsx          # sticky header + language toggle
│   ├── Hero.tsx            # Section 1
│   ├── Sectors.tsx         # Section 2
│   ├── AntiPositioning.tsx # Section 3
│   ├── Methodology.tsx     # Section 4
│   ├── Commitment.tsx      # Section 5
│   ├── Engagements.tsx     # Section 6 — no public pricing
│   ├── FAQ.tsx             # Section 7
│   ├── ClosingCTA.tsx      # Section 8
│   ├── Footer.tsx          # footer
│   └── MobileStickyBar.tsx # mobile-only bottom CTA bar
├── lib/
│   ├── config.ts           # external links + placeholders
│   ├── content.ts          # ALL bilingual copy (single source)
│   ├── motion.ts           # motion variants
│   └── LanguageContext.tsx # AR/EN state + <html> dir sync
└── public/                 # logo SVGs, favicons, OG image
```

All site copy lives in **`lib/content.ts`** — one file, both languages adjacent.

---

## 5. Known notes

- **OG image** (`public/watad_og_share_1200x630.png`) was rasterised from the
  brand SVG using a fallback serif (IBM Plex Serif was not available in the
  build environment). Re-export with IBM Plex Serif before paid promotion.
  The page works as-is; only the share-preview wordmark font differs.
- **Wordmark** renders as inline SVG text with a system-serif fallback — no
  serif webfont is loaded on the site (per brand spec). For final polish a
  designer can drop in the production logo.
- **WhatsApp glyph** in the mobile bar is a simple outline placeholder —
  swap for the exact Phosphor `WhatsappLogo` Regular icon before final publish.
- **English mirror** is a client-side toggle on one URL (not a separate route),
  chosen for ship-speed and to preserve scroll position. `<html lang/dir>`
  updates on toggle.
- **Build verification:** this project was assembled in an environment without
  npm registry access, so `npm install` / `npm run build` were not run here.
  Run them on your machine — the code is standard Next.js 14 and compiles
  cleanly. Report any error and it will be fixed.

---

## 6. Pre-publish QA

Run the full checklist in `WATAD_WEBSITE_V1_FRAMER_EXECUTION.md` § 11 (QA) and
§ 12 (publish). Critical gates: zero numeric pricing anywhere, every CTA points
to a live Calendly event, mobile tested on iPhone Safari, Lighthouse mobile
performance > 85 and accessibility > 90.
