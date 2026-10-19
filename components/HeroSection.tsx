"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Existing Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-mono shadow-md shadow-amber-950/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{personal.university}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I am <br />
                <span className="text-gradient drop-shadow-sm">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-400 font-mono pt-1">
                {personal.role} <span className="text-slate-500">|</span> {personal.subRole}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              &quot;{personal.heroBio}&quot;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-semibold text-sm shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-mono group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-amber-500/40 text-slate-200 font-semibold text-sm hover:bg-amber-950/40 hover:border-amber-400 hover:text-amber-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-mono"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase font-mono text-slate-500 tracking-wider">Connect:</span>
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-amber-900/40 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-amber-900/40 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-amber-900/40 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo with Vibrant Purple/Cyan/Blue Gradient Glow Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-sm sm:max-w-md lg:max-w-none w-full flex justify-center">
              {/* Outer Ambient Glow Ring Background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl p-2.5 bg-slate-950/90 border border-amber-500/30 overflow-hidden shadow-2xl shadow-amber-950/60 max-w-[340px] sm:max-w-[380px] w-full">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src="/profile.jpeg"
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Bottom Floating Badge inside Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-500/30 text-xs font-mono flex items-center justify-between text-slate-200 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="font-semibold text-amber-300">B.Tech CSIT</span>
                    </div>
                    <span className="text-slate-400">2024–2028</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-400 transition-colors p-2"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
