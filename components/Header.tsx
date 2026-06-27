"use client";

/**
 * Sticky header. Transparent over the hero, transitions to solid
 * Watad Bone with a 1px Watad Line bottom border at 80px scroll
 * (spec S4). Logo leads (right in RTL); language toggle + CTA pill
 * trail. Mobile: hamburger opens a fullscreen overlay nav.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
    <div
      className="flex items-center gap-s1 text-caption"
      aria-label={lang === "ar" ? "اللغة" : "Language"}
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={lang === "ar" ? "text-ink" : "text-muted opacity-60"}
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
        className={lang === "en" ? "text-ink" : "text-muted opacity-60"}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { lang } = useLang();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={lang === "ar" ? "القائمة الرئيسية" : "Navigation menu"}
      className="fixed inset-0 z-40 flex flex-col bg-bone px-6 pb-s7 pt-24"
      initial={{ opacity: reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduced ? 1 : 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <nav className="flex flex-col gap-s5" aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main navigation"}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-h2-m font-light text-ink transition-opacity duration-150 hover:opacity-60"
          >
            {link[lang]}
          </a>
        ))}
      </nav>

      <div className="mt-s6 flex flex-col gap-s4">
        <OutlinePill
          label={content.nav.cta[lang]}
          href={config.calendlyUrl}
          solid
        />
        <LangToggle />
      </div>
    </motion.div>
  );
}

export function Header() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          scrolled || menuOpen
            ? "border-b border-line bg-bone shadow-sm"
            : "border-b border-transparent bg-transparent",
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

          {/* Desktop: lang toggle + CTA */}
          <div className="hidden items-center gap-s3 md:flex">
            <LangToggle />
            <OutlinePill
              label={content.nav.cta[lang]}
              href={config.calendlyUrl}
              solid={scrolled}
            />
          </div>

          {/* Mobile: hamburger toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={
              menuOpen
                ? lang === "ar" ? "أغلق القائمة" : "Close menu"
                : lang === "ar" ? "افتح القائمة" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative flex flex-col gap-[6px]">
              <span
                className={`block h-px w-5 bg-ink origin-center transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink origin-center transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
