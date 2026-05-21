"use client";

/**
 * Floating WhatsApp button — mobile only (md:hidden).
 *
 * A 48×48px circle in Watad Teal, pinned to bottom-right at
 * physical position right-4 bottom-[76px] (above the MobileStickyBar).
 * Appears after 300px scroll with a smooth scale+opacity transition.
 * Reduced-motion: still appears, no scale animation.
 * Desktop: hidden via md:hidden.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappUrl } from "@/lib/config";

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer bubble */}
      <path
        d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
        stroke="#faf9f5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Phone handset path */}
      <path
        d="M8.8 8.4c.3-.7.6-.7 1-.7.3 0 .6 0 .8.5.2.5.7 1.7.7 1.8.1.2 0 .4-.1.6-.2.2-.4.5-.5.6-.2.2-.3.3-.1.6.2.4.9 1.5 2 2.1.9.5 1.2.5 1.5.4.2-.1.6-.6.8-.9.2-.3.4-.2.6-.1.3.1 1.6.8 1.8 1 .2.1.4.2.4.3.1.4 0 1-.3 1.4-.4.5-1.2.9-1.9.9-1.6 0-3.7-1-5.2-2.6C9 13.8 8 11.7 8 10.4c0-.7.3-1.5.8-2Z"
        stroke="#faf9f5"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      // Physical right — always bottom-right regardless of RTL
      className="fixed bottom-[76px] right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-teal shadow-btn md:hidden"
      animate={{
        scale: visible ? 1 : 0,
        opacity: visible ? 1 : 0,
      }}
      initial={{ scale: 0, opacity: 0 }}
      transition={
        reduced
          ? { duration: 0 }
          : { type: "spring", stiffness: 400, damping: 28 }
      }
    >
      <WhatsAppIcon />
    </motion.a>
  );
}
