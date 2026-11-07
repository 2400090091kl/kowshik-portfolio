"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function HeroSection() {
  const { personal, education } = PORTFOLIO_DATA;

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
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 flex flex-col justify-between items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Photo-First Anchor): Prominent Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center order-1 lg:order-1"
          >
            <div className="relative group max-w-[340px] sm:max-w-[400px] w-full">
              {/* Dynamic Ambient Backlight Glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.75, 0.5],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-amber-500/15 to-white/5 rounded-[2.75rem] blur-2xl pointer-events-none"
              />

              {/* Main Photo Frame */}
              <div className="relative rounded-[2.25rem] p-3 sm:p-3.5 bg-zinc-950/85 backdrop-blur-2xl border border-white/15 overflow-hidden shadow-2xl shadow-black/80">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden bg-zinc-900 border border-white/10">
                  <Image
                    src="/profile.jpeg"
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 420px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 pointer-events-none" />

                  {/* Top-Right Floating Telemetry Chip */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{education.currentYear} · CSIT</span>
                  </motion.div>

                  {/* Bottom Glass Badge inside Photo */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-xs font-mono space-y-1.5 shadow-xl">
                    <div className="flex items-center justify-between text-zinc-200">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">KL University</span>
                      </div>
                      <span className="text-zinc-400 text-[11px]">CGPA: {education.cgpa}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between border-t border-white/10 pt-1.5">
                      <span>Cloud &amp; Full-Stack</span>
                      <span className="text-emerald-400 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Available for Internships
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Professional Title, Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-2">
            {/* Status / Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.university}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Seeking SWE Internships</span>
            </motion.div>

            {/* Main Heading with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]">
                I&apos;m <span className="font-semibold text-white">{personal.name}</span>
                <br />
                <span className="font-serif italic font-normal text-zinc-400 hover:text-zinc-200 transition-colors">
                  Software Engineer
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider uppercase pt-1">
                {personal.role} <span className="text-zinc-600">·</span> {personal.subRole}
              </p>
            </motion.div>

            {/* Refined Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personal.heroBio}
            </motion.p>

            {/* Discipline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 transition-all flex items-center gap-2 font-mono group"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-200 font-semibold text-xs sm:text-sm hover:bg-zinc-800 hover:border-white/25 hover:text-white transition-all flex items-center gap-2 font-mono"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Let&apos;s Talk</span>
              </motion.a>

              {/* Social Icons with Magnetic Hover feel */}
              <div className="flex items-center gap-2 pl-2">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${personal.contact.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clear Animated Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="pt-6 sm:pt-8 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group cursor-pointer z-10"
        aria-label="Scroll to explore portfolio"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 group-hover:text-zinc-200 transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1 group-hover:border-white/40 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-white/75"
          />
        </motion.div>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors -mt-1" />
      </motion.a>
    </section>
  );
}
