"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Database,
  Cpu,
  Code2,
  Layout,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { whatIDo, skills } = PORTFOLIO_DATA;
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
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              What I Do
            </h2>
            <span className="polished-count-badge">({whatIDo.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl">
            Full-stack developer crafting digital experiences, cloud systems, and scalable applications with clarity and purpose.
          </p>
        </motion.div>

        {/* 4-Card Polished Domain Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {whatIDo.map((item, idx) => {
            const Icon = domainIcons[item.title] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="polished-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-zinc-200" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors"
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
        <div className="pt-8 border-t border-white/10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-light text-white">
                Technical Skills Matrix
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Comprehensive breakdown of verified languages, frameworks, cloud platforms, and tooling.
              </p>
            </div>

            {/* Filter Tabs with Active Bubble Indicator */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all border relative ${
                    activeSkillCategory === cat
                      ? "bg-white text-black border-white font-semibold shadow-sm"
                      : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredSkills.map((group, gIdx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: gIdx * 0.04 }}
                  whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.2)" }}
                  className="p-5 rounded-2xl bg-zinc-950/70 border border-white/10 space-y-3.5 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                      {group.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono text-zinc-300 hover:border-white/25 hover:text-white transition-colors flex items-center gap-1.5 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{skill.name}</span>
                      </motion.span>
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
