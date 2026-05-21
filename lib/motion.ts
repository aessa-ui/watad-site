/**
 * Motion system — cinematic restraint.
 * WATAD_WEBSITE_V1_FRAMER_EXECUTION.md S3 + S4.
 *
 * Budget: section slow-fade + slight upward translate (600ms, ease cubic),
 * 80ms stagger inside multi-item groups. Nothing else moves.
 * prefers-reduced-motion collapses all of this to instant —
 * handled in components/Reveal.tsx via useReducedMotion().
 */

import type { Variants } from "framer-motion";

// Section reveal — opacity + 18px upward translate, 700ms, cubic ease.
// The Y motion is subtle enough to feel cinematic, not bouncy.
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Container for staggered groups — orchestrates children only, no own animation.
// Children inherit variant state; container div stays at natural opacity: 1.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// Child inside a staggered group — opacity + 14px translate, 550ms.
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Instant variant — used when prefers-reduced-motion is set.
// Must explicitly zero Y to cancel any inherited transform.
export const instant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

// Shared viewport config for scroll reveals — fire once, slightly early.
export const viewportOnce = { once: true, margin: "-80px" } as const;
