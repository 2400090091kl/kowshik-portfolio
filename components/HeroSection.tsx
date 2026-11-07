"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ShieldCheck, ChevronDown, FileText, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function HeroSection() {
  const { personal, education } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  const disciplines = [
    "Full-Stack Development",
    "Cloud & Azure Monitoring",
    "FastAPI & Python",
    "Next.js & React",
    "Data Structures & Algorithms",
    "REST API Engineering",
  ];

  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-[95vh] lg:min-h-screen pt-28 sm:pt-36 pb-14 sm:pb-16 flex flex-col justify-between items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Left Column (Photo-First Anchor): 41.7% Desktop Composition */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transitionConfig}
            className="lg:col-span-5 w-full flex justify-center order-1 lg:order-1"
          >
            <div className="relative group max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] w-full">
              {/* Dynamic Subtle Ambient Halo */}
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -inset-3 bg-gradient-to-tr from-white/10 via-amber-500/10 to-transparent rounded-[3rem] blur-2xl pointer-events-none"
              />

              {/* Main Photo Frame */}
              <div className="relative rounded-[2.5rem] p-3 sm:p-3.5 bg-zinc-950/90 backdrop-blur-2xl border border-white/15 overflow-hidden shadow-2xl shadow-black/90">
                {/* Large Portrait Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10">
                  <Image
                    src="/profile.jpeg"
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
                    className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Vignette Overlay for Contrast & Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 pointer-events-none" />

                  {/* Top-Right Floating Telemetry Chip */}
                  <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-zinc-200 flex items-center gap-2 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{education.currentYear} · CSIT</span>
                  </motion.div>

                  {/* Bottom Glass Badge inside Photo */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 text-xs font-mono space-y-2 shadow-2xl">
                    <div className="flex items-center justify-between text-zinc-200">
                      <div className="flex items-center gap-2 min-w-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold text-white sm:text-sm truncate">KL University</span>
                      </div>
                      <span className="text-zinc-400 text-xs font-mono shrink-0 ml-2">CGPA: {education.cgpa}</span>
                    </div>
                    <div className="text-xs text-zinc-400 flex items-center justify-between border-t border-white/10 pt-2 gap-2">
                      <span className="truncate">Cloud &amp; Full-Stack</span>
                      <span className="text-emerald-400 flex items-center gap-1.5 font-medium shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Available for Internships
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Professional Title, Introduction & Actions (58.3% Desktop Allocation) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left order-2 lg:order-2">
            {/* Status / Availability Pill */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.university}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Seeking SWE Internships</span>
            </motion.div>

            {/* Main Heading with Staggered Entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.05]">
                I&apos;m <span className="font-semibold text-white">{personal.name}</span>
              </h1>
              
              {/* Distinctive Professional Identity */}
              <div className="pt-1.5 space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-zinc-300 font-normal">
                  {personal.role}
                </div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400">
                  {personal.subRole}
                </div>
              </div>
            </motion.div>

            {/* Refined Bio Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {personal.heroBio}
            </motion.p>

            {/* Discipline Badges */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons: Selected Work, Resume, Let's Talk + Social Channels */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Primary CTA: Selected Work */}
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 transition-all flex items-center gap-2 font-mono group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Resume Action */}
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={(personal.contact as { resumeUrl?: string }).resumeUrl || "mailto:2400090091csit@gmail.com?subject=Resume%20Request"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-zinc-900 border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 hover:border-white/35 transition-all flex items-center gap-2 font-mono group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none shadow-sm"
                aria-label="Request or View Resume"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </motion.a>

              {/* Let's Talk CTA */}
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/15 text-zinc-200 font-semibold text-xs sm:text-sm hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all flex items-center gap-2 font-mono focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Let&apos;s Talk</span>
              </motion.a>

              {/* Social Channels: GitHub & LinkedIn */}
              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clear Animated Scroll Indicator */}
      <motion.a
        href="#about"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="pt-6 sm:pt-8 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group cursor-pointer z-10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-lg"
        aria-label="Scroll down to explore about section"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 group-hover:text-zinc-200 transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/25 flex justify-center p-1 group-hover:border-white/50 transition-colors"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-white/80"
          />
        </motion.div>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors -mt-1" />
      </motion.a>
    </section>
  );
}
