"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CertificationsSection() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Certifications
            </h2>
            <p className="text-xs sm:text-sm text-amber-400 font-mono">
              Verified Professional & Industry Credentials
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-900/40 text-xs font-mono text-amber-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono text-amber-400 mb-6 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Issuer: {cert.issuer}</span>
                </p>
              </div>

              {/* Verify Credential Button */}
              <div>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/40 text-amber-300 hover:text-amber-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-500 text-xs font-mono font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
                  >
                    <span>Issued Credential</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
