/**
 * Motion system — cinematic restraint.
 *
 * Expo ease-out [0.22, 1, 0.36, 1] — the most common "premium"
 * easing curve. Fast initial acceleration, long deceleration tail.
 * Feels more decisive than a plain cubic while staying non-bouncy.
 *
 * Y translate: 22px sections, 16px stagger children.
 * Duration: 650ms sections, 500ms children.
 * Stagger: 90ms between children.
 * Viewport margin: -60px (reveals slightly early — feels responsive).
 *
 * prefers-reduced-motion collapses all to instant via
 * useReducedMotion() guard in components/Reveal.tsx.
 */

import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Section reveal — opacity + 22px upward translate.
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

// Stagger container — orchestrates children only, no own animation.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

// Stagger child — opacity + 16px translate, 500ms.
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// Instant — used when prefers-reduced-motion is active.
export const instant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

// Viewport config — fire once, slightly early.
export const viewportOnce = { once: true, margin: "-60px" } as const;
