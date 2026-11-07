"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, BookOpen, Building2, CheckCircle2, GraduationCap, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  const academicHighlights = [
    { label: "Degree Program", value: "B.Tech in CSIT", desc: "Four-year undergraduate engineering degree" },
    { label: "Grading Scale", value: "10.0 Scale", desc: "Cumulative Grade Point Average standard" },
    { label: "Academic Standing", value: "3rd Year", desc: "Expected Graduation in 2028" },
  ];

  return (
    <section id="education" aria-label="Education & Academics" className="py-20 sm:py-28 relative z-10">
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
              Education
            </h2>
            <span className="polished-count-badge">(01)</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Rigorous undergraduate foundation in Computer Science and Information Technology.
          </p>
        </motion.div>

        {/* Proportional Two-Column Layout - Eliminates Excessive Empty Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Degree, University & Coursework (7 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 polished-card p-6 sm:p-10 rounded-3xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              {/* Institution Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{education.institution}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  {education.currentYear} · Enrolled
                </span>
              </div>

              {/* Degree Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                  {education.degree}
                </h3>
                <p className="text-sm font-mono text-zinc-400 mt-2">
                  Academic Tenure: <span className="text-zinc-200">{education.duration}</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Pursuing comprehensive coursework covering fundamental data structures, relational database systems, cloud architectures, and modern web application development with applied software engineering projects.
              </p>
            </div>

            {/* Core Coursework Badges */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                <span>Core Academic Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <motion.span
                    key={course}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + idx * 0.03, duration: 0.3 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -1 }}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 hover:border-white/25 hover:text-white transition-colors cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cumulative GPA & Academic Standing Breakdown (5 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Card 1: Striking GPA Hero Block */}
            <div className="polished-card p-6 sm:p-8 rounded-3xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Academic Performance
                </span>
                <div className="p-2.5 rounded-2xl bg-white/[0.04] text-amber-300">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                  {education.cgpa}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
                  Cumulative Grade Point Average (CGPA)
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Consistently Good Standing
                </span>
                <span>KL University CSIT</span>
              </div>
            </div>

            {/* Card 2: Academic Program Highlights & Fast Navigation */}
            <div className="polished-card p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-zinc-300" />
                <span>Program Highlights</span>
              </div>

              <div className="space-y-3">
                {academicHighlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="text-zinc-500 block text-[10px] font-mono uppercase">
                        {item.label}
                      </span>
                      <span className="text-white font-medium sm:text-sm">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-zinc-400 text-[11px] font-mono text-right max-w-[130px] sm:max-w-[160px]">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Navigation link to Certifications */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#certifications"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-between transition-all group"
                >
                  <span>Explore 5 Industry Certifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
