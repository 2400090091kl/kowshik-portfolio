"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ChevronDown,
  Layers,
  Terminal,
  Activity,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "./icons/SocialIcons";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

  const toggleProjectExpand = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="projects" aria-label="Selected Engineering Projects" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light text-white tracking-tight">
              Selected Work
            </h2>
            <span className="polished-count-badge">({projects.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Featured engineering projects spanning full-stack analytics platforms, cloud monitoring telemetry, and embedded systems.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => {
            const isExpanded = !!expandedProjects[idx];

            // Primary 3-4 concise highlight bullets for clean hierarchy
            const primaryHighlights = project.features ? project.features.slice(0, 4) : [];
            const secondaryFeatures = project.features && project.features.length > 4 ? project.features.slice(4) : [];

            return (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="polished-card glass-sheen p-6 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden group hover:border-white/30 transition-all duration-300"
              >
                {/* Ambient radial highlight */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-colors duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Project Meta, Overview, Highlights & Actions */}
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

                    {/* Project Title & Tagline */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-normal text-white group-hover:text-zinc-100 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-sm sm:text-base font-serif italic text-zinc-400">
                          &ldquo;{project.tagline}&rdquo;
                        </p>
                      )}
                    </div>

                    {/* Main Description */}
                    <div className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-2">
                      {project.description.map((desc, dIdx) => (
                        <p key={dIdx}>{desc}</p>
                      ))}
                    </div>

                    {/* Concise Key Highlights (3–4 bullets) */}
                    {primaryHighlights.length > 0 && (
                      <div className="space-y-2.5 pt-1">
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Key Capabilities</span>
                        </div>
                        <div className="space-y-2">
                          {primaryHighlights.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Chips with Micro-Hover */}
                    <div className="pt-2">
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Layers className="w-3 h-3 text-zinc-500" />
                        <span>Core Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -1 }}
                            className="px-2.5 py-1 rounded-lg glass-chip text-xs font-mono text-zinc-300 hover:text-white cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Architecture & Deep Dive Toggle */}
                    {(secondaryFeatures.length > 0 || project.contribution) && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleProjectExpand(idx)}
                          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1.5 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded group/toggle"
                          aria-expanded={isExpanded}
                        >
                          <Terminal className="w-3.5 h-3.5 text-zinc-500 group-hover/toggle:text-white transition-colors" />
                          <span className="underline underline-offset-4 decoration-zinc-700 group-hover/toggle:decoration-zinc-400">
                            {isExpanded ? "Hide Technical Deep-Dive" : "View Technical Architecture & Full Details"}
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-white" : "text-zinc-500"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3.5 p-4 sm:p-5 rounded-2xl glass-frame space-y-4 text-xs font-mono">
                                {/* Secondary Features */}
                                {secondaryFeatures.length > 0 && (
                                  <div className="space-y-2">
                                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                                      Additional Capabilities
                                    </span>
                                    <div className="space-y-1.5">
                                      {secondaryFeatures.map((secFeature, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-2 text-zinc-300 font-sans text-xs sm:text-sm font-light">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                                          <span>{secFeature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Contribution */}
                                {project.contribution && (
                                  <div className="pt-2 border-t border-white/10 space-y-1">
                                    <span className="text-zinc-400 uppercase tracking-wider block text-[10px]">
                                      Engineering Contribution
                                    </span>
                                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                                      {project.contribution}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Action Buttons: Polished GitHub and Verified Live-Demo Interactions */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {project.githubUrl ? (
                        <motion.a
                          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full glass-btn-primary font-semibold text-xs font-mono flex items-center gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Repository</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      ) : (
                        <span className="px-5 py-2.5 rounded-full glass-chip text-zinc-500 text-xs font-mono flex items-center gap-2 cursor-not-allowed">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Repository Private</span>
                        </span>
                      )}

                      {project.liveUrl ? (
                        <motion.a
                          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full glass-btn-secondary text-white text-xs font-mono flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </motion.a>
                      ) : (
                        <span
                          title="Backend API verification in progress — source code available in repository"
                          className="px-4 sm:px-5 py-2.5 rounded-full glass-chip text-zinc-400 text-xs font-mono flex items-center gap-2 cursor-help"
                        >
                          <Lock className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Demo Inactive (API Verification)</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Custom Visual Telemetry / Interactive UI Mockup with Entrance Reveal */}
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="lg:col-span-5 w-full"
                  >
                    <div className="rounded-2xl p-4 sm:p-5 glass-frame space-y-4 font-mono text-xs group-hover:border-white/25 transition-all shadow-2xl">
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
                        <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {idx === 0 ? "FastAPI / React" : idx === 1 ? "Azure Cloud" : "IoT Microcontroller"}
                        </span>
                      </div>

                      {/* Specific Mockup Content based on project */}
                      {idx === 0 && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5">
                            <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                              <span>Match Event Telemetry</span>
                              <span className="text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                Live Ingestion
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-zinc-500 block text-[10px]">Arsenal</span>
                                <span className="text-sm font-bold text-white">49% Poss</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-zinc-500 block text-[10px]">Man City</span>
                                <span className="text-sm font-bold text-white">51% Poss</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-[11px]">
                            <div className="flex justify-between text-zinc-400">
                              <span>Analyst / Fan Dual Mode</span>
                              <span className="text-emerald-400 font-semibold">Active</span>
                            </div>
                            <div className="flex justify-between text-zinc-400">
                              <span>Broadcast Overlay</span>
                              <span className="text-zinc-300">Synchronized</span>
                            </div>
                            <div className="flex justify-between text-zinc-400">
                              <span>REST Ingestion Endpoint</span>
                              <span className="text-amber-300 font-mono">/api/custom-matches</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5">
                            <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                              <span>Azure VM Health Status</span>
                              <span className="text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Online 99.98%
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
                                  <span>CPU Utilization</span>
                                  <span>42% (Threshold: 80%)</span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                                  <div className="h-full bg-emerald-400 w-[42%]" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
                                  <span>Memory Availability</span>
                                  <span>68% Available</span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                                  <div className="h-full bg-cyan-400 w-[68%]" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-black/60 border border-white/5 text-[11px] text-zinc-400 space-y-1">
                            <span className="text-zinc-500 block text-[10px]">{"// KQL Alert Query:"}</span>
                            <p className="text-amber-300/90 font-mono text-[10.5px] leading-relaxed">
                              Perf | where CounterName == &quot;% Processor Time&quot; | summarize avg(CounterValue) by bin(TimeGenerated, 5m)
                            </p>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5">
                            <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                              <span>Ultrasonic Proximity Range</span>
                              <span className="text-amber-400">Monitoring Active</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                              <span className="text-zinc-400">Impact Proximity</span>
                              <span className="text-emerald-400 font-bold">&lt; 15 cm</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-[11px] text-zinc-400">
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
                      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>Status: Verified &amp; Operational</span>
                        <span className="text-zinc-400">{PORTFOLIO_DATA.personal.name}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
