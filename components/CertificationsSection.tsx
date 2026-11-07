"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CertificationsSection() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Certifications &amp; Achievements
            </h2>
            <span className="polished-count-badge">({certifications.length})</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl">
            Verified industry certifications in cloud architecture, DevOps, AI, and backend microservices.
          </p>
        </motion.div>

        {/* Certifications Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="polished-card p-6 rounded-3xl flex flex-col justify-between space-y-6 group cursor-default"
            >
              <div className="space-y-4">
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-zinc-200" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400">
                    {cert.year}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-normal text-white group-hover:text-zinc-100 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Issuer: {cert.issuer}</span>
                </p>
              </div>

              {/* Action Button with Magnetic Feel */}
              <div className="pt-2 border-t border-white/5">
                {cert.credentialUrl ? (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-zinc-200 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </motion.a>
                ) : (
                  <span className="w-full py-2.5 px-4 rounded-full bg-white/[0.01] border border-white/5 text-zinc-600 text-xs font-mono flex items-center justify-center gap-2 cursor-default">
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
