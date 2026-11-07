"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Clock,
  Award,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#projects", icon: Briefcase },
  { name: "What I Do", href: "#skills", icon: Layers },
  { name: "Experience", href: "#experience", icon: Clock },
  { name: "Education", href: "#education", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sectionIds = navItems.map((item) => item.href.substring(1));

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="polished-dock rounded-full px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-1.5 shadow-2xl pointer-events-auto max-w-full overflow-x-auto no-scrollbar">
        {/* Brand Chip */}
        <a
          href="#home"
          className="flex items-center gap-2 pl-2 pr-3 py-1 text-xs font-mono font-bold tracking-wider text-white hover:text-zinc-300 transition-colors border-r border-white/10 shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{PORTFOLIO_DATA.personal.shortName}</span>
        </a>

        {/* Dock Nav Buttons */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            const isHovered = hoveredTab === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {/* Active Bubble Pill Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockBubble"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Hover effect when not active */}
                {!isActive && isHovered && (
                  <motion.span
                    layoutId="hoverDockBubble"
                    className="absolute inset-0 bg-white/[0.05] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon className="w-3.5 h-3.5 relative z-10 shrink-0" />
                <span className="relative z-10 hidden md:inline">{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Quick CTA */}
        <a
          href="#contact"
          className="ml-1 pl-2.5 pr-3 py-1 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono font-semibold transition-all flex items-center gap-1 shadow-sm shrink-0"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}
