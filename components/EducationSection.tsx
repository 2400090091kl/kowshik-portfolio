"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education
            </h2>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono">
              Academic Qualifications & Coursework
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4 hidden sm:block" />
        </div>

        {/* Card Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden max-w-4xl mx-auto border-purple-900/40"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
            {/* Institution & Degree */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm">
                <Building2 className="w-4 h-4" />
                <span>{education.institution}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {education.degree}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-mono">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{education.duration}</span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="self-start px-4 py-3 rounded-xl bg-slate-900/90 border border-purple-500/40 flex items-center gap-3 font-mono shadow-inner">
              <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Cumulative GPA</div>
                <div className="text-lg font-bold text-cyan-300">{education.cgpa}</div>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 space-y-4">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Relevant Coursework</span>
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {education.coursework.map((course, idx) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 hover:border-purple-500/40 hover:text-purple-300 transition-all"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
