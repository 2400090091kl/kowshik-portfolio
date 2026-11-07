"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  const disciplines = [
    "Full-Stack Development",
    "Cloud & Azure Monitoring",
    "FastAPI & Python",
    "Next.js & React",
    "Data Structures & Algorithms",
    "REST API Engineering",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>KL University</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Seeking SWE Internships</span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]">
                I&apos;m <span className="font-semibold text-white">{personal.name}</span>
                <br />
                <span className="font-serif italic font-normal text-zinc-400 hover:text-zinc-200 transition-colors">
                  Software Engineer
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider uppercase pt-1">
                {personal.role} <span className="text-zinc-600">·</span> {personal.academicYear}
              </p>
            </div>

            {/* Refined Bio Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.heroBio}
            </p>

            {/* Discipline Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-mono group"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-200 font-semibold text-xs sm:text-sm hover:bg-zinc-800 hover:border-white/25 hover:text-white transition-all flex items-center gap-2 font-mono"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Let&apos;s Talk</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.contact.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Polished 3D Perspective Showcase Card with Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-sm sm:max-w-md lg:max-w-none w-full flex justify-center">
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-white/5 via-amber-500/10 to-transparent rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Card Container Frame */}
              <div className="relative rounded-[2rem] p-3 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl max-w-[340px] sm:max-w-[380px] w-full">
                {/* Portrait Photo Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
                  <Image
                    src="/profile.jpeg"
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 pointer-events-none" />

                  {/* Floating Telemetry Micro-Badge 1: Top Right */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>B.Tech CSIT &apos;28</span>
                  </motion.div>

                  {/* Bottom Floating Glass Card inside Photo */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-black/75 backdrop-blur-xl border border-white/15 text-xs font-mono space-y-1.5 shadow-xl">
                    <div className="flex items-center justify-between text-zinc-300">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">KL University</span>
                      </div>
                      <span className="text-zinc-400 text-[11px]">CGPA: 7.60</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between border-t border-white/10 pt-1.5">
                      <span>Cloud & Full-Stack</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
