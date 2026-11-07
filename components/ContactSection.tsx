"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function ContactSection() {
  const { contact } = PORTFOLIO_DATA.personal;
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
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Let&apos;s Talk
          </h2>
          <span className="polished-count-badge">(04)</span>
          <div className="flex-1 h-px bg-white/10 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mb-12">
          Have an internship opportunity, project in mind, or want to collaborate? Send a message and I&apos;ll respond shortly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="polished-card p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  Communication Channels
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white">
                  Get in touch directly
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Open for software engineering internships, technical collaborations, and project discussions.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 pt-2">
                {/* Email Card */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                      <Mail className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white truncate block transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.email, "email")}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                      <Phone className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${contact.phoneRaw || contact.phone}`}
                        className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white transition-colors font-mono"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.phoneRaw || contact.phone, "phone")}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
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
                </a>

                {/* GitHub Card */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                      <GithubIcon className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Open Source & Code
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white truncate block font-mono">
                        github.com/2400090091kl
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Reply Promise Note */}
              <div className="pt-2 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>I usually reply within 24–48 hours.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="polished-card p-6 sm:p-8 rounded-3xl relative">
              <h3 className="text-xl sm:text-2xl font-light text-white mb-6">
                Send a Message
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-normal text-white">Message Sent Successfully</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Project Type / Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Internship / Collaboration"
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 font-mono"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
