"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function ContactSection() {
  const { contact } = PORTFOLIO_DATA.personal;
  const shouldReduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" aria-label="Contact and Inquiries" className="py-20 sm:py-28 relative z-10">
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
              Let&apos;s Talk
            </h2>
            <span className="polished-count-badge">(04)</span>
            <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl">
            Have an internship opportunity, project in mind, or want to collaborate? Send a message and I&apos;ll respond shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="polished-card p-6 sm:p-8 lg:p-10 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  Communication Channels
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white">
                  Get in touch directly
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Open for software engineering internships, cloud architecture projects, and technical collaborations.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 pt-2">
                {/* Email Card */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-white/[0.04] text-white">
                      <Mail className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white truncate block transition-colors focus-visible:underline focus-visible:outline-none"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(contact.email, "email")}
                    className="p-2.5 rounded-lg text-zinc-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-white/[0.04] text-white">
                      <Phone className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${contact.phoneRaw || contact.phone}`}
                        className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white transition-colors font-mono focus-visible:underline focus-visible:outline-none"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(contact.phoneRaw || contact.phone, "phone")}
                    className="p-2.5 rounded-lg text-zinc-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                    title="Copy Phone to Clipboard"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* LinkedIn Card */}
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 transition-colors group focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-white/[0.04] text-white">
                      <LinkedinIcon className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Professional Network
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white truncate block">
                        LinkedIn Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 transition-colors group focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-white/[0.04] text-white">
                      <GithubIcon className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Open Source &amp; Code
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white truncate block font-mono">
                        github.com/2400090091kl
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </motion.a>
              </div>

              {/* Reply Promise Note */}
              <div className="pt-2 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typically responding within 24–48 hours.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="polished-card p-6 sm:p-8 lg:p-10 rounded-3xl relative">
              <h3 className="text-xl sm:text-2xl font-light text-white mb-6">
                Send a Direct Message
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-normal text-white">Message Sent Successfully</h4>
                  <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review it and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Project Type / Subject */}
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Internship Opportunity"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  {/* Submit Button with Magnetic Feel */}
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-white text-black font-semibold text-sm shadow-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 font-mono focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
