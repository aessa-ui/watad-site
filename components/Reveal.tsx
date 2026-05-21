"use client";

/**
 * Scroll-reveal wrappers. Cinematic restraint — opacity only, 600ms.
 * All three collapse to instant when prefers-reduced-motion is set.
 *
 *  <Reveal>        single 600ms fade on scroll into view
 *  <RevealGroup>   stagger container — children fade 80ms apart
 *  <RevealItem>    a staggered child (must sit inside RevealGroup)
 */

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeIn,
  staggerContainer,
  staggerChild,
  instant,
  viewportOnce,
} from "@/lib/motion";

type Props = { children: ReactNode; className?: string };

export function Reveal({ children, className }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduced ? instant : fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduced ? instant : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? instant : staggerChild}>
      {children}
    </motion.div>
  );
}
