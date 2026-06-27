"use client";

/**
 * Footer — premium redesign.
 *
 * Structure:
 *   [Brand statement row]  — large wordmark + tagline + booking link
 *   [1px divider]
 *   [Links grid]           — contact | legal | (regions)
 *   [Optional trust strip] — hidden until CR number is set
 *   [Copyright bar]        — copyright + mobile language toggle
 *
 * No motion — footer is a static trust anchor, not an animation canvas.
 * Mobile: stacks cleanly, lang toggle shown in copyright bar.
 */

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config, whatsappUrl, mailtoUrl } from "@/lib/config";
import { Container, Wordmark } from "./ui";

function FooterLangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-s2 text-caption">
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={[
          "transition-colors duration-150",
          lang === "ar" ? "text-ink" : "text-muted opacity-60 hover:opacity-80",
        ].join(" ")}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
      <span className="text-muted opacity-30" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={[
          "transition-colors duration-150",
          lang === "en" ? "text-ink" : "text-muted opacity-60 hover:opacity-80",
        ].join(" ")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export function Footer() {
  const { lang } = useLang();
  const f = content.footer;
  const n = content.nav;
  const showTrustStrip = config.crNumber.trim().length > 0;

  return (
    <footer className="border-t border-line bg-bone" aria-label="Footer">
      <Container>
        {/* ── Brand statement row ──────────────────────────────── */}
        <div className="flex flex-col gap-s5 pb-s6 pt-s7 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark variant="ink" className="h-8 w-auto md:h-9" />
            <p className="mt-s3 max-w-[340px] text-body-m text-ink">
              {f.brandDescriptor[lang]}
            </p>
            <p className="text-body-m text-muted">{f.brandRegions[lang]}</p>
          </div>

          {/* Booking CTA — subtle teal link */}
          <a
            href={config.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-body-m font-medium text-teal underline-offset-4 transition-opacity duration-150 hover:opacity-70"
            aria-label={n.cta[lang]}
          >
            <span>{n.cta[lang]}</span>
            {/* Arrow respects reading direction */}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
              {lang === "ar" ? "←" : "→"}
            </span>
          </a>
        </div>

        {/* Thin divider */}
        <div className="border-t border-line" aria-hidden="true" />

        {/* ── Links grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-s6 pb-s6 pt-s6 sm:grid-cols-2 md:grid-cols-3">
          {/* Contact */}
          <div>
            <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
              {f.contactLabel[lang]}
            </p>
            <ul className="mt-s3 space-y-s2 text-body-m" role="list">
              <li>
                <a
                  href={mailtoUrl}
                  className="text-ink underline-offset-4 transition-colors duration-150 hover:text-teal hover:underline"
                >
                  {config.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 transition-colors duration-150 hover:text-teal hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-muted">{config.website}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
              {f.legalLabel[lang]}
            </p>
            <ul className="mt-s3 space-y-s2 text-body-m" role="list">
              <li>
                <Link
                  href="/privacy"
                  className="text-ink underline-offset-4 transition-colors duration-150 hover:text-teal hover:underline"
                >
                  {f.privacy[lang]}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-ink underline-offset-4 transition-colors duration-150 hover:text-teal hover:underline"
                >
                  {f.terms[lang]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions + language toggle (desktop) */}
          <div className="hidden md:block">
            <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
              {lang === "ar" ? "نطاق الخدمة" : "Coverage"}
            </p>
            <ul className="mt-s3 space-y-s1 text-body-m text-muted" role="list">
              {lang === "ar" ? (
                <>
                  <li>المملكة العربية السعودية</li>
                  <li>منطقة الخليج العربي</li>
                </>
              ) : (
                <>
                  <li>Saudi Arabia</li>
                  <li>Gulf Region</li>
                </>
              )}
            </ul>
            <div className="mt-s4">
              <FooterLangToggle />
            </div>
          </div>
        </div>

        {/* Conditional trust strip */}
        {showTrustStrip && (
          <p className="whitespace-pre-line border-t border-line pt-s4 pb-s2 text-caption text-muted">
            {f.trustStrip[lang]}
          </p>
        )}

        {/* ── Copyright bar ────────────────────────────────────── */}
        <div className="flex flex-col gap-s3 border-t border-line py-s5 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-muted">{f.copyright[lang]}</p>
          {/* Mobile lang toggle */}
          <div className="md:hidden">
            <FooterLangToggle />
          </div>
        </div>
      </Container>
    </footer>
  );
}
