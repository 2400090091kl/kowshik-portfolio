"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Calendar, Clock, CheckCircle2, Lock, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "./icons/SocialIcons";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-amber-400 font-mono">
              Software Solutions & Full-Stack Applications
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Card Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  {project.year && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-900/40 text-amber-300 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-xs">
                      <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 inline-flex items-center gap-2 group-hover:text-amber-300 transition-colors"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {project.description.map((desc, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges & Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 space-y-5">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-amber-900/30 text-xs font-mono text-amber-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-amber-950/60 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-900/80 text-amber-300 hover:text-amber-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <GithubIcon className="w-4 h-4 text-amber-400" />
                      <span>View Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-amber-400" />
                    </a>
                  ) : (
                    <button
                      disabled
                      title="Code repository placeholder"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-500 text-xs font-mono font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository Private</span>
                      <Lock className="w-3 h-3 ml-auto text-slate-600" />
                    </button>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-amber-950/60 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-900/80 text-amber-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      title="Live demo placeholder"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-500 text-xs font-mono font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                      <Lock className="w-3 h-3 ml-auto text-slate-600" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
