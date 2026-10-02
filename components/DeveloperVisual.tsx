"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, ShieldCheck, CheckCircle2, Play } from "lucide-react";

export default function DeveloperVisual() {
  const [activeTab, setActiveTab] = useState<"code" | "config" | "output">("code");

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none">
      <div className="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Window Top Bar */}
        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-xs text-slate-400 font-mono">kowshik@developer-workspace</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-cyan-400">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active</span>
          </div>
        </div>

        {/* Tab Header */}
        <div className="flex items-center border-b border-slate-800/80 bg-slate-950/40 px-2 pt-2 gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md text-xs font-mono border-t border-x transition-colors ${
              activeTab === "code"
                ? "bg-slate-900 border-slate-800 text-cyan-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md text-xs font-mono border-t border-x transition-colors ${
              activeTab === "config"
                ? "bg-slate-900 border-slate-800 text-cyan-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Profile.json</span>
          </button>
          <button
            onClick={() => setActiveTab("output")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md text-xs font-mono border-t border-x transition-colors ${
              activeTab === "output"
                ? "bg-slate-900 border-slate-800 text-cyan-300 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>terminal.log</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-5 min-h-[300px] flex flex-col justify-between leading-relaxed">
          {activeTab === "code" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1.5 font-mono"
            >
              <div>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">SoftwareEngineer</span> {"{"}
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">name</span>:{" "}
                <span className="text-emerald-300">&quot;Kumara Veera Kowshik Parsha&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">education</span>:{" "}
                <span className="text-emerald-300">&quot;B.Tech CSE @ KL University&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">duration</span>:{" "}
                <span className="text-emerald-300">&quot;2024 - 2028 (Expected)&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">cgpa</span>:{" "}
                <span className="text-amber-300">7.34</span>;
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">specializations</span>: [
              </div>
              <div className="pl-8 text-sky-300">
                &quot;Full-Stack Development&quot;, &quot;Backend Systems&quot;, &quot;Cloud Technologies&quot;
              </div>
              <div className="pl-4">];</div>
              <div>{"}"}</div>
              <br />
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">kowshik</span>:{" "}
                <span className="text-yellow-300">SoftwareEngineer</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">status</span>:{" "}
                <span className="text-emerald-300">&quot;Ready for Technical Collaborations & Opportunities&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">coreTech</span>: [<span className="text-orange-300">&quot;Java&quot;</span>, <span className="text-yellow-300">&quot;Spring Boot&quot;</span>, <span className="text-cyan-300">&quot;React.js&quot;</span>, <span className="text-sky-300">&quot;AWS&quot;</span>, <span className="text-indigo-300">&quot;MySQL&quot;</span>],
              </div>
              <div>{"};"}</div>
            </motion.div>
          )}

          {activeTab === "config" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1.5 font-mono text-slate-300"
            >
              <div>{"{"}</div>
              <div className="pl-4">
                <span className="text-cyan-400">&quot;university&quot;</span>: <span className="text-emerald-300">&quot;Koneru Lakshmaiah Education Foundation&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">&quot;leadershipRoles&quot;</span>: [
              </div>
              <div className="pl-8 text-sky-300">&quot;President - ForensiXplore Club&quot;,</div>
              <div className="pl-8 text-sky-300">&quot;Technical Member - Broadband Networks Club&quot;</div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-cyan-400">&quot;certificationsCount&quot;</span>: <span className="text-amber-300">5</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">&quot;openToWork&quot;</span>: <span className="text-purple-400">true</span>
              </div>
              <div>{"}"}</div>
            </motion.div>
          )}

          {activeTab === "output" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2 font-mono text-xs text-slate-300"
            >
              <div className="text-slate-500">$ npx build-portfolio --target=kowshik-parsha</div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>[SUCCESS] Profile loaded: Kumara Veera Kowshik Parsha</span>
              </div>
              <div className="text-cyan-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>[VERIFIED] OCI 2025 Architect Associate & AWS Graduate</span>
              </div>
              <div className="text-sky-300 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-sky-400" />
                <span>[SYSTEM] Ready for software development & internship roles</span>
              </div>
              <div className="pt-2 text-slate-500">
                Compilation finished clean in 0.42s.
              </div>
            </motion.div>
          )}

          {/* Bottom Card Footer */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>UTF-8</span>
            </div>
            <span>TypeScript / Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}
