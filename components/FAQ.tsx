"use client";

/**
 * Section 7 — FAQ.
 * Five collapsed rows, click to expand. 250ms height transition,
 * 200ms chevron rotation. Rows stagger in at 80ms. No accordion
 * bounce — height transitions only. Reduced-motion safe.
 */

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content, type Bi } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="#6b6960"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M4 6l4 4 4-4" />
    </motion.svg>
  );
}

function FaqRow({ item }: { item: { q: Bi; a: Bi } }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <RevealItem className="border-b border-line first:border-t">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-s3 py-s3 text-start"
      >
        <span className="text-body-m font-medium text-ink md:text-body">
          {item.q[lang]}
        </span>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-reading pb-s3 text-body-m text-muted">
              {item.a[lang]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  );
}

export function FAQ() {
  const { lang } = useLang();
  const f = content.faq;

  return (
    <Section id="faq" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader overline={f.overline[lang]} heading={f.h2[lang]} />
        </Reveal>

        <RevealGroup className="mt-s6 max-w-reading">
          {f.items.map((item, i) => (
            <FaqRow key={i} item={item} />
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
