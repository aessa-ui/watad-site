"use client";

/**
 * Sticky header. Transparent over the hero, transitions to solid
 * Watad Bone with a 1px Watad Line bottom border at 80px scroll
 * (spec S4). Logo leads (right in RTL); language toggle + CTA pill
 * trail. On mobile the language toggle moves to the footer.
 */

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config } from "@/lib/config";
import { Wordmark, OutlinePill } from "./ui";

const navLinks = [
  { ar: "ما نقدّمه", en: "Services", href: "#services" },
  { ar: "كيف نعمل", en: "How we work", href: "#capabilities" },
  { ar: "لماذا وتد", en: "Why Watad", href: "#why-watad" },
  { ar: "أسئلة", en: "FAQ", href: "#faq" },
] as const;

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-s1 text-caption" aria-label="Language">
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

export function Header() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled ? "border-b border-line bg-bone shadow-sm" : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10 lg:px-20">
        <a href="#hero" aria-label="Watad — home">
          <Wordmark variant="ink" className="h-7 w-auto md:h-8" />
        </a>

        <nav
          className="hidden items-center gap-s5 md:flex"
          aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main navigation"}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-caption text-muted transition-colors duration-150 hover:text-ink"
            >
              {link[lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-s3">
          <LangToggle />
          <OutlinePill
            label={content.nav.cta[lang]}
            href={config.calendlyUrl}
            solid={scrolled}
          />
        </div>
      </div>
    </header>
  );
}
