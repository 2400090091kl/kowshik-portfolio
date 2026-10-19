"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Cloud, Cpu, Layers, Users2, Lightbulb } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;

  const focusIcons = [
    { name: "Computer Science & Information Technology (CSIT)", icon: Cpu },
    { name: "Full-stack development", icon: Layers },
    { name: "Backend development", icon: Code },
    { name: "Cloud technologies", icon: Cloud },
    { name: "Databases", icon: Database },
    { name: "Problem solving", icon: Lightbulb },
    { name: "Technical clubs and leadership", icon: Users2 },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About Me
            </h2>
            <p className="text-xs sm:text-sm text-amber-400 font-mono">
              Background, Interests & Focus Areas
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main About Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-amber-400 font-mono">&gt;</span> Academic & Developer Profile
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {personal.aboutBio}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-900/40 text-sm text-slate-300 font-mono space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">University</span>
                <span className="text-amber-300 font-semibold">{personal.university}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Degree</span>
                <span className="text-slate-200">B.Tech in CSIT</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Duration</span>
                <span className="text-amber-400 font-semibold">2024 – 2028 (Expected)</span>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border-amber-900/30"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-amber-400 font-mono">#</span> Core Focus & Interests
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {focusIcons.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all text-xs sm:text-sm font-medium text-slate-200 group"
                  >
                    <IconComponent className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
