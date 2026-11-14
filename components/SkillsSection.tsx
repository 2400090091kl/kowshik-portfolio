"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Database,
  Cpu,
  Code2,
  Layout,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { whatIDo, skills } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("All");

  const domainIcons: Record<string, React.ElementType> = {
    "Web & Full-Stack Development": Layout,
    "Cloud & Infrastructure Monitoring": Cloud,
    "Backend Services & Databases": Database,
    "Core Computer Science": Cpu,
  };

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredSkills =
    activeSkillCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeSkillCategory);

  return (
    <section id="skills" aria-label="Technical Capabilities & Skills" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12 sm:mb-14"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light text-white tracking-tight">
              What I Do
            </h2>
            <span className="polished-count-badge">({whatIDo.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Engineering digital platforms, automated cloud telemetry, and scalable full-stack applications with clarity and precision.
          </p>
        </motion.div>

        {/* 4-Card Polished Domain Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {whatIDo.map((item, idx) => {
            const Icon = domainIcons[item.title] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="polished-card glass-sheen p-6 sm:p-8 lg:p-10 rounded-3xl flex flex-col justify-between space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 text-white group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all">
                      <Icon className="w-5 h-5 text-zinc-200" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      className="glass-chip px-3 py-1 rounded-full text-xs sm:text-sm font-mono text-zinc-300 group-hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Technical Skills Matrix */}
        <div className="pt-10 border-t border-white/10 space-y-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-2xl font-light text-white">
                Technical Skills Matrix
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-1">
                Verified breakdown of languages, frameworks, cloud platforms, and tooling.
              </p>
            </div>

            {/* Filter Tabs with Active Bubble Indicator */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 border relative focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none ${
                    activeSkillCategory === cat
                      ? "bg-white/95 text-black border-white font-semibold shadow-[0_0_24px_rgba(255,255,255,0.7)] backdrop-blur-md scale-[1.03]"
                      : "glass-chip text-zinc-300 hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] hover:scale-105"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Categorized Skills Grid with Smooth AnimatePresence Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillCategory}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredSkills.map((group, gIdx) => (
                <motion.div
                  key={group.category}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: gIdx * 0.04 }}
                  whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: "rgba(255,255,255,0.28)" }}
                  className="polished-card glass-sheen p-6 rounded-2xl space-y-4 transition-all"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                      {group.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 glass-chip px-2 py-0.5 rounded-full">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="glass-chip px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 cursor-default"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
