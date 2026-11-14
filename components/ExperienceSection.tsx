"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Cloud, ShieldCheck, Activity, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experience, leadership } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  // Combined timeline items with specific contextual icons
  const combinedEntries = [
    {
      type: "experience",
      title: experience[0].title,
      role: experience[0].category,
      duration: experience[0].duration || "Cloud Operations & Architecture",
      highlights: experience[0].highlights,
      tag: "Cloud Operations",
      icon: Cloud,
    },
    {
      type: "leadership",
      title: leadership[0].organization,
      role: leadership[0].role,
      duration: leadership[0].duration,
      highlights: [
        leadership[0].description,
        "Coordinated student executive teams and organized campus-wide cybersecurity awareness initiatives.",
        "Facilitated hands-on technical workshops on digital forensics and system vulnerability assessment.",
      ],
      tag: "Club President",
      icon: ShieldCheck,
    },
    {
      type: "leadership",
      title: leadership[1].organization,
      role: leadership[1].role,
      duration: leadership[1].duration,
      highlights: [
        leadership[1].description,
        "Delivered technical presentations on modern networking protocols and network infrastructure.",
        "Organized collaborative workshops on packet analysis and local network configuration.",
      ],
      tag: "Technical Member",
      icon: Activity,
    },
    {
      type: "experience",
      title: experience[1].title,
      role: experience[1].category,
      duration: experience[1].duration || "Collaborative Full-Stack",
      highlights: experience[1].highlights,
      tag: "Hackathon Platform",
      icon: Code2,
    },
  ];

  return (
    <section id="experience" aria-label="Experience and Leadership Timeline" className="py-20 sm:py-28 relative z-10">
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
              Experience &amp; Leadership
            </h2>
            <span className="polished-count-badge">({combinedEntries.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Practical cloud operations, collaborative full-stack projects, and technical student club leadership.
          </p>
        </motion.div>

        {/* Timeline Container with Illuminated Vertical Rail */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-10 max-w-5xl">
          {combinedEntries.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title + idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Pulsing Checkpoint Node on the rail */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-7 w-4 h-4 rounded-full bg-zinc-950/80 backdrop-blur-md border-2 border-white/50 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]" />

                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                  className="polished-card glass-sheen p-6 sm:p-8 lg:p-10 rounded-3xl relative space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="glass-chip px-3 py-1 rounded-full text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                          <ItemIcon className="w-3.5 h-3.5 text-zinc-300" />
                          <span>{item.tag}</span>
                        </span>
                        <span className="text-xs font-mono text-zinc-400 glass-chip px-2.5 py-0.5 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-normal text-white group-hover:text-zinc-100 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-zinc-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-3 pt-1">
                    {item.highlights.map((bullet, bulletIdx) => {
                      const hasUrl = bullet.includes("http");
                      return (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-3 text-zinc-300 text-xs sm:text-sm lg:text-[0.925rem] font-light leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-1" />
                          <span>
                            {hasUrl
                              ? bullet.split(/(https?:\/\/[^\s]+)/g).map((part, pIdx) =>
                                  part.startsWith("http") ? (
                                    <a
                                      key={pIdx}
                                      href={part}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-white hover:text-cyan-300 underline underline-offset-2 font-mono break-all inline-flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                                    >
                                      <span>{part}</span>
                                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                                    </a>
                                  ) : (
                                    part
                                  )
                                )
                              : bullet}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
