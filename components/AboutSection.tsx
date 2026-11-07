"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Target, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal, education } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  // 4 Interactive Navigation Shortcuts formatted to fit with 100% precision
  const keyMetrics = [
    {
      label: "Cumulative GPA",
      primaryValue: education.cgpa,
      secondaryLabel: "CGPA Scale",
      detail: "KL University Academics",
      destination: "View Education",
      href: "#education",
    },
    {
      label: "Academic Program",
      primaryValue: "B.Tech",
      secondaryLabel: "CSIT · 3rd Year",
      detail: "2024 – 2028 Expected",
      destination: "View Coursework",
      href: "#education",
    },
    {
      label: "Certifications",
      primaryValue: "5",
      secondaryLabel: "Certifications",
      detail: "Oracle OCI, AWS, Google",
      destination: "Explore Credentials",
      href: "#certifications",
    },
    {
      label: "Leadership",
      primaryValue: "Club",
      secondaryLabel: "President",
      detail: "ForensiXplore Club",
      destination: "View Experience",
      href: "#experience",
    },
  ];

  return (
    <section id="about" aria-label="About Kowshik" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light text-white tracking-tight">
            About Me
          </h2>
          <span className="polished-count-badge">(01)</span>
          <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Narrative Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 polished-card p-6 sm:p-10 rounded-3xl relative overflow-hidden space-y-8 group"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Background &amp; Philosophy
              </span>
              <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 font-light leading-relaxed">
                &ldquo;{personal.aboutBio}&rdquo;
              </p>
            </div>

            {/* University & Career Objective Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Building2 className="w-3.5 h-3.5 text-zinc-300" />
                  <span>University Institution</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {personal.university}
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {personal.academicYear} · {education.duration}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Career Objective</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  Software Engineering Internships
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for immediate placement
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
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + aIdx * 0.04, duration: 0.4 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-300 flex items-center gap-2 hover:border-white/30 hover:bg-white/[0.06] hover:text-white transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                    <span>{area}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Interactive Navigation Metric Cards (Guaranteed No-Overflow Sizing) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {keyMetrics.map((metric, idx) => (
              <motion.a
                key={metric.label}
                href={metric.href}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="polished-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4 group cursor-pointer hover:border-white/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                aria-label={`${metric.label}: ${metric.primaryValue} ${metric.secondaryLabel}. Click to jump to ${metric.destination}`}
              >
                {/* Header Label & Navigation Arrow */}
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold truncate pr-1">
                    {metric.label}
                  </span>
                  <div className="p-1 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-white/40 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Metric Big Value - Structured so long words like "Certifications" fit 100% inside */}
                <div className="space-y-0.5">
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    {metric.primaryValue}
                  </div>
                  <div className="text-base sm:text-lg font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors leading-snug">
                    {metric.secondaryLabel}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono pt-1 truncate">
                    {metric.detail}
                  </div>
                </div>

                {/* Destination hint indicator */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <span>{metric.destination}</span>
                  <span className="text-amber-300 font-medium group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
