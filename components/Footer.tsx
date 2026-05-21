"use client";

/**
 * Footer — structure, not content. No motion.
 * Three columns (brand / contact / legal), conditional trust
 * strip (renders only when a CR number is set), copyright line.
 * Separated from the page by the single 1px Watad Line divider.
 * On mobile the language toggle lives here, not in the header.
 */

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config, whatsappUrl, mailtoUrl } from "@/lib/config";
import { Container, Wordmark } from "./ui";

function FooterLangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-s1 text-caption md:hidden">
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={lang === "ar" ? "text-ink" : "text-muted opacity-40"}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
      <span className="text-muted opacity-40" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-ink" : "text-muted opacity-40"}
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
  const showTrustStrip = config.crNumber.trim().length > 0;

  return (
    <footer className="border-t border-line bg-bone py-s7">
      <Container>
        <div className="grid grid-cols-1 gap-s6 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Wordmark variant="ink" className="h-7 w-auto" />
            <p className="mt-s3 text-body-m text-ink">{f.brandDescriptor[lang]}</p>
            <p className="text-body-m text-muted">{f.brandRegions[lang]}</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-overline font-medium uppercase tracking-[0.08em] text-muted">
              {f.contactLabel[lang]}
            </p>
            <ul className="mt-s3 space-y-s2 text-body-m">
              <li>
                <a
                  href={mailtoUrl}
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {config.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 hover:underline"
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
            <ul className="mt-s3 space-y-s2 text-body-m">
              <li>
                <a
                  href="/privacy"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {f.privacy[lang]}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {f.terms[lang]}
                </a>
              </li>
              {showTrustStrip && (
                <li className="text-muted">
                  {f.crLabel[lang]} {config.crNumber}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Conditional trust strip — hidden entirely until CR issued */}
        {showTrustStrip && (
          <p className="mt-s6 border-t border-line pt-s4 text-caption text-muted">
            {f.trustStrip[lang]}
          </p>
        )}

        {/* Copyright + mobile language toggle */}
        <div className="mt-s6 flex flex-col gap-s3 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-muted">{f.copyright[lang]}</p>
          <FooterLangToggle />
        </div>
      </Container>
    </footer>
  );
}
