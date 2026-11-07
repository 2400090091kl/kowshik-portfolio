"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative z-10">
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
              Education
            </h2>
            <span className="polished-count-badge">(01)</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl">
            Academic foundation in Computer Science and Information Technology.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="polished-card p-6 sm:p-10 rounded-3xl relative overflow-hidden max-w-5xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/5">
            {/* Institution & Degree */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                <Building2 className="w-3.5 h-3.5" />
                <span>{education.institution}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal text-white">
                {education.degree}
              </h3>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                  {education.currentYear}
                </span>
                <span>{education.duration}</span>
              </div>
            </div>

            {/* CGPA Badge */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="self-start px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5 shadow-inner cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-white/[0.05] text-white">
                <Award className="w-5 h-5 text-zinc-200" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Cumulative GPA
                </div>
                <div className="text-xl font-bold text-white font-mono">
                  {education.cgpa}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Relevant Coursework */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
              <span>Core Academic Coursework</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, idx) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 hover:border-white/20 hover:text-white transition-colors cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
