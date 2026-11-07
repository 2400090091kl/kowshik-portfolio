"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experience, leadership } = PORTFOLIO_DATA;

  // Combined timeline items
  const combinedEntries = [
    {
      type: "experience",
      title: experience[0].title,
      role: experience[0].category,
      duration: experience[0].duration || "Cloud Operations & Architecture",
      highlights: experience[0].highlights,
      tag: "Cloud Operations",
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
    },
    {
      type: "experience",
      title: experience[1].title,
      role: experience[1].category,
      duration: experience[1].duration || "Collaborative Full-Stack",
      highlights: experience[1].highlights,
      tag: "Hackathon Platform",
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Experience & Leadership
          </h2>
          <span className="polished-count-badge">({combinedEntries.length})</span>
          <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mb-12">
          Practical cloud operations, collaborative full-stack projects, and technical student club leadership.
        </p>

        {/* Timeline / Card List */}
        <div className="space-y-6 max-w-5xl">
          {combinedEntries.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="polished-card p-6 sm:p-8 rounded-3xl relative space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-2.5 pt-1">
                {item.highlights.map((bullet, bulletIdx) => {
                  const hasUrl = bullet.includes("http");
                  return (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-1" />
                      <span>
                        {hasUrl
                          ? bullet.split(/(https?:\/\/[^\s]+)/g).map((part, pIdx) =>
                              part.startsWith("http") ? (
                                <a
                                  key={pIdx}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white hover:underline underline-offset-2 font-mono break-all inline-flex items-center gap-1 transition-colors"
                                >
                                  <span>{part}</span>
                                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
