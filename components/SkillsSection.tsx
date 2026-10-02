"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Code2, Layout, Server, Database, Cloud, Terminal, Palette } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    Programming: Code2,
    "Web Development": Layout,
    Backend: Server,
    Databases: Database,
    Cloud: Cloud,
    Tools: Terminal,
    "UI/UX": Palette,
  };

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono">
              Core Technical Stack & Tools
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/50 text-cyan-300 font-semibold shadow-sm"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-purple-900/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup, idx) => {
            const CategoryIcon = categoryIcons[categoryGroup.category] || Code2;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-slate-800/80 pb-3">
                    <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:border-purple-400 hover:text-cyan-300 hover:bg-slate-800/80 transition-all flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
