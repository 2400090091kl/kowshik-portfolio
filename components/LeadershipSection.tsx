"use client";

import { motion } from "framer-motion";
import { Users2, Crown, Network, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function LeadershipSection() {
  const { leadership } = PORTFOLIO_DATA;

  return (
    <section id="leadership" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <Users2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Leadership & Achievements
            </h2>
            <p className="text-xs sm:text-sm text-amber-400 font-mono">
              Technical Club Initiatives & Responsibility
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadership.map((item, idx) => {
            const isPresident = item.role.includes("President");
            const Icon = isPresident ? Crown : Network;

            return (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border-amber-900/40"
              >
                <div>
                  {/* Top Role & Duration */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-900/40 text-xs font-mono text-amber-300">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Role Title & Org */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm font-mono text-amber-400 mb-4">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    &quot;{item.description}&quot;
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
