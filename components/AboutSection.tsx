"use client";

import { motion } from "framer-motion";
import { Building2, Target, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal, education } = PORTFOLIO_DATA;

  const keyMetrics = [
    { label: "Cumulative GPA", value: education.cgpa, detail: "KL University Academics" },
    { label: "Academic Program", value: "B.Tech CSIT", detail: "2024 – 2028 (Expected)" },
    { label: "Verified Credentials", value: "5 Certifications", detail: "Oracle OCI, AWS, Google" },
    { label: "Campus Leadership", value: "Club President", detail: "ForensiXplore Club" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            About Me
          </h2>
          <span className="polished-count-badge">(01)</span>
          <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 polished-card p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-6 group"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                A little about me
              </span>
              <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed">
                &ldquo;{personal.aboutBio}&rdquo;
              </p>
            </div>

            {/* University & Career Objective Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Building2 className="w-3.5 h-3.5 text-zinc-300" />
                  <span>University</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {personal.university}
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {personal.academicYear} · {education.duration}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Career Objective</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Software Engineering Internships
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Open for opportunities
                </div>
              </div>
            </div>

            {/* Core Focus Badges */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Core Engineering Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.focusAreas.map((area, aIdx) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + aIdx * 0.04, duration: 0.4 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-300 flex items-center gap-1.5 hover:border-white/20 hover:text-white transition-colors cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-zinc-400" />
                    <span>{area}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4-Metric Grid with Staggered Entrance */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyMetrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="polished-card p-5 rounded-2xl flex flex-col justify-between space-y-3 cursor-default"
              >
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    {metric.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
