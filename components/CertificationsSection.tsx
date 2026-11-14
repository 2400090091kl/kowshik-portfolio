"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CertificationsSection() {
  const { certifications } = PORTFOLIO_DATA;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" aria-label="Professional Certifications" className="py-20 sm:py-28 relative z-10">
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
              Certifications &amp; Achievements
            </h2>
            <span className="polished-count-badge">({certifications.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Verified industry credentials across cloud architecture, artificial intelligence, and software engineering.
          </p>
        </motion.div>

        {/* Certifications Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
              className="polished-card glass-sheen p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 group cursor-default"
            >
              <div className="space-y-4">
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 text-white group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all">
                    <ShieldCheck className="w-5 h-5 text-zinc-200" />
                  </div>
                  <span className="glass-chip px-3 py-1 rounded-full text-xs font-mono text-zinc-300">
                    {cert.year}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-zinc-100 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Issuer: {cert.issuer}</span>
                </p>
              </div>

              {/* Action Button: Verify Credential */}
              <div className="pt-2 border-t border-white/10">
                {cert.credentialUrl ? (
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-secondary w-full py-3 px-4 rounded-full text-zinc-100 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </motion.a>
                ) : (
                  <span className="glass-chip w-full py-3 px-4 rounded-full text-zinc-500 text-xs font-mono flex items-center justify-center gap-2 cursor-default">
                    <span>Verified Completion</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
