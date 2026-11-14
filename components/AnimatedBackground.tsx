"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070b]">
      {/* Precision Glass Grid Lattice */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle Dot Mesh */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />

      {/* Top Center Ambient Halo */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-white/[0.06] via-cyan-500/[0.04] to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Chromatic Glass Orb 1: Cyan / Emerald Glow (Top Left) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/6 -left-36 w-[34rem] h-[34rem] bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent rounded-full blur-[140px]"
      />

      {/* Chromatic Glass Orb 2: Deep Indigo / Violet Aurora (Top Right) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          x: [0, -35, 25, 0],
          y: [0, 45, -35, 0],
          scale: [1, 0.94, 1.06, 1],
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-36 w-[38rem] h-[38rem] bg-gradient-to-bl from-indigo-600/20 via-purple-600/12 to-transparent rounded-full blur-[160px]"
      />

      {/* Chromatic Glass Orb 3: Warm Amber Accent (Center Bottom) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          x: [0, 30, -20, 0],
          y: [0, -25, 30, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-500/15 via-rose-500/08 to-transparent rounded-full blur-[150px]"
      />
    </div>
  );
}
