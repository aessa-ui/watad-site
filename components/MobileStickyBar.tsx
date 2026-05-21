"use client";

/**
 * Mobile-only sticky bottom CTA bar (spec S9.6).
 * 56px tall, Watad Bone, 1px Watad Line top border.
 * Appears once the hero has scrolled past; hides within 200px
 * of the Closing CTA so it never overlaps. 200ms slide.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config, whatsappUrl } from "@/lib/config";

function WhatsappGlyph() {
  // Outline chat glyph, stroke 1.5px. Designer to swap for the exact
  // Phosphor "WhatsappLogo" Regular before final publish (spec S10).
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1d1d1f"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 8.4c.3-.7.6-.7 1-.7.3 0 .6 0 .8.5.2.5.7 1.7.7 1.8.1.2 0 .4-.1.6-.2.2-.4.5-.5.6-.2.2-.3.3-.1.6.2.4.9 1.5 2 2.1.9.5 1.2.5 1.5.4.2-.1.6-.6.8-.9.2-.3.4-.2.6-.1.3.1 1.6.8 1.8 1 .2.1.4.2.4.3.1.4 0 1-.3 1.4-.4.5-1.2.9-1.9.9-1.6 0-3.7-1-5.2-2.6C9 13.8 8 11.7 8 10.4c0-.7.3-1.5.8-2Z" />
    </svg>
  );
}

export function MobileStickyBar() {
  const { lang } = useLang();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const closing = document.getElementById("closing");
      const heroCleared = hero
        ? hero.getBoundingClientRect().bottom < 0
        : window.scrollY > 400;
      const nearClosing = closing
        ? closing.getBoundingClientRect().top < window.innerHeight + 200
        : false;
      setVisible(heroCleared && !nearClosing);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 h-14 border-t border-line bg-bone/95 shadow-bar backdrop-blur-sm md:hidden"
      initial={false}
      animate={{ y: visible ? 0 : 64 }}
      transition={{ duration: reduced ? 0 : 0.2, ease: "easeOut" }}
      aria-hidden={!visible}
    >
      <div className="flex h-full items-center justify-between px-6">
        <a
          href={config.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-button font-medium text-ink"
        >
          {content.nav.cta[lang]}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center"
        >
          <WhatsappGlyph />
        </a>
      </div>
    </motion.div>
  );
}
