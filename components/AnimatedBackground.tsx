"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]">
      {/* Subtle Polished Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Top subtle ambient illumination */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-white/[0.04] via-amber-500/[0.03] to-transparent blur-[140px] rounded-full" />

      {/* Very subtle floating ambient orb 1 */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -30, 20, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-white/[0.03] rounded-full blur-[140px]"
      />

      {/* Very subtle floating ambient orb 2 */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 35, -25, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 -right-32 w-[34rem] h-[34rem] bg-amber-500/[0.02] rounded-full blur-[160px]"
      />
    </div>
  );
}
