"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "./icons/SocialIcons";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Selected Work
            </h2>
            <span className="polished-count-badge">({projects.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl">
            Projects showcasing software engineering, cloud systems, and full-stack analytics with purpose.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="polished-card p-6 sm:p-10 rounded-3xl relative overflow-hidden group"
            >
              {/* Ambient radial highlight */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-colors duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Meta, Overview, Features & Stack */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Status Pill */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300">
                      {project.category || "Software Solution"}
                    </span>
                    {project.status && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {project.status}
                      </span>
                    )}
                    {project.year && (
                      <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-xs font-mono text-zinc-500">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    {project.tagline && (
                      <p className="text-sm font-mono text-zinc-400 mt-1.5">
                        {project.tagline}
                      </p>
                    )}
                  </div>

                  {/* Main Description */}
                  <div className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-2">
                    {project.description.map((desc, dIdx) => (
                      <p key={dIdx}>{desc}</p>
                    ))}
                  </div>

                  {/* Key Features Bullet Points */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Key Features &amp; Architecture
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300 font-light">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contribution if present */}
                  {project.contribution && (
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 font-mono space-y-1">
                      <span className="text-zinc-400 uppercase tracking-wider block text-[10px]">
                        My Contribution
                      </span>
                      <p className="font-sans text-xs text-zinc-300">
                        {project.contribution}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Chips with Micro-Hover */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 hover:border-white/25 hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with Magnetic Feel */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {project.githubUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs font-mono flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-sm"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    ) : (
                      <span className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-mono flex items-center gap-2 cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Repository Private</span>
                      </span>
                    )}

                    {project.liveUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/15 hover:border-white/30 text-white text-xs font-mono flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </motion.a>
                    ) : (
                      <span
                        title="Demo link inactive until backend APIs are active"
                        className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-mono flex items-center gap-1.5 cursor-not-allowed"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Live Demo Inactive</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Custom Visual Telemetry / UI Mockup with Entrance Reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="lg:col-span-5 w-full"
                >
                  <div className="rounded-2xl p-4 bg-zinc-950/90 border border-white/10 shadow-2xl space-y-4 font-mono text-xs group-hover:border-white/20 transition-colors">
                    {/* Window Top Controls */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="ml-1 text-[11px] text-zinc-400">
                          {idx === 0 ? "matchmind.telemetry.ui" : idx === 1 ? "azure.monitor.kql" : "sensor.telemetry.h"}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                        {idx === 0 ? "FastAPI / React" : idx === 1 ? "Azure Cloud" : "IoT Microcontroller"}
                      </span>
                    </div>

                    {/* Specific Mockup Content based on project */}
                    {idx === 0 && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                            <span>Match Event Telemetry</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              Live Ingestion
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2 rounded bg-black/40 border border-white/5">
                              <span className="text-zinc-500 block text-[10px]">Arsenal</span>
                              <span className="text-sm font-bold text-white">49% Poss</span>
                            </div>
                            <div className="p-2 rounded bg-black/40 border border-white/5">
                              <span className="text-zinc-500 block text-[10px]">Man City</span>
                              <span className="text-sm font-bold text-white">51% Poss</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-[11px]">
                          <div className="flex justify-between text-zinc-400">
                            <span>Analyst / Fan Dual Mode</span>
                            <span className="text-zinc-300">Active</span>
                          </div>
                          <div className="flex justify-between text-zinc-400">
                            <span>Broadcast Overlay</span>
                            <span className="text-zinc-300">Synchronized</span>
                          </div>
                          <div className="flex justify-between text-zinc-400">
                            <span>REST Ingestion Endpoint</span>
                            <span className="text-emerald-400 font-mono">/api/custom-matches</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                            <span>Azure VM Health Status</span>
                            <span className="text-emerald-400">Online 99.98%</span>
                          </div>
                          <div className="space-y-1.5">
                            <div>
                              <div className="flex justify-between text-[10px] text-zinc-400 mb-0.5">
                                <span>CPU Utilization</span>
                                <span>42% (Threshold: 80%)</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                                <div className="h-full bg-emerald-400 w-[42%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[10px] text-zinc-400 mb-0.5">
                                <span>Memory Availability</span>
                                <span>68% Available</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                                <div className="h-full bg-cyan-400 w-[68%]" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-[11px] text-zinc-400 space-y-1">
                          <span className="text-zinc-500 block text-[10px]">{"// KQL Alert Query:"}</span>
                          <p className="text-amber-300/90 font-mono">
                            Perf | where CounterName == &quot;% Processor Time&quot; | summarize avg(CounterValue) by bin(TimeGenerated, 5m)
                          </p>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                            <span>Ultrasonic Proximity Range</span>
                            <span className="text-amber-400">Monitoring</span>
                          </div>
                          <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-zinc-400">Impact Proximity</span>
                            <span className="text-emerald-400 font-bold">&lt; 15 cm</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-[11px] text-zinc-400">
                          <div className="flex justify-between">
                            <span>Controller Response Time</span>
                            <span className="text-white">40 ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Servo Brake Actuation</span>
                            <span className="text-emerald-400">Automated</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Emergency Warning Alert</span>
                            <span className="text-amber-400">Instant Telemetry</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Window Bottom Status */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>Status: Verified &amp; Operational</span>
                      <span className="text-zinc-400">{PORTFOLIO_DATA.personal.name}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
