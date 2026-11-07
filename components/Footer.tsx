"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "What I Do", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer aria-label="Site Footer" className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl py-14 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Personal Info */}
          <div className="space-y-1">
            <h3 className="text-xl font-normal text-white">
              {personal.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-zinc-400">
              {personal.role} <span className="text-zinc-600">·</span> {personal.university}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors focus-visible:underline focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
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
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            {/* Back to top */}
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 transition-all ml-2 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="text-[11px] text-zinc-600">
            Engineered with Next.js, TypeScript &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
