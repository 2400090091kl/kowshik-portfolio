"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Radial Top Light - Vibrant Purple/Cyan Blend */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-600/20 via-cyan-500/15 to-transparent blur-[130px] rounded-full" />

      {/* Glowing Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -45, 25, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 45, -35, 0],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 -right-32 w-[32rem] h-[32rem] bg-cyan-500/20 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/3 w-96 h-96 bg-pink-500/15 rounded-full blur-[110px]"
      />
    </div>
  );
}
