import React from 'react';
import { Sparkles, Clock, ArrowRight, Code2, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenModal, countdown }) {
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HANDS-ON LIVE WORKSHOP • ZERO FLUFF</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Clock className="w-3.5 h-3.5" />
            <span>3 HOURS OF PURE EXECUTION</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Go From Prompt Amateur to <br className="hidden sm:inline" />
            <span className="text-gradient">Autonomous AI Agent Architect</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Skip 6 months of fragmented YouTube tutorials. In one intensive 3-hour live masterclass, build real multi-agent systems, production RAG pipelines, and automated intelligence workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onOpenModal('VIP All-Access Pass', 99)}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <span>Secure Your Early-Bird Pass ($49)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#curriculum"
              className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-slate-300 hover:text-white bg-[#161926] hover:bg-[#23283b] border border-[#23283b] rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>View 3-Hour Syllabus</span>
            </a>
          </div>

          {/* Trust Metrics Row */}
          <div className="pt-2 pb-6 border-y border-[#23283b]/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">3 Hours</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Live + Interactive</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">4 Starter Repos</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Production Code Included</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">2,500+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Engineers Trained</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4.96 / 5.0</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Average Rating</div>
            </div>
          </div>

          {/* Live Countdown Timer Card */}
          <div className="mt-8 max-w-xl mx-auto glass-card rounded-2xl p-5 border border-purple-500/30 shadow-2xl">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>Registration Closes When Timer Hits Zero:</span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-[#090a0f]/80 border border-[#23283b] rounded-xl p-2.5">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white block">
                  {pad(countdown.days)}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Days</span>
              </div>
              <div className="bg-[#090a0f]/80 border border-[#23283b] rounded-xl p-2.5">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-purple-300 block">
                  {pad(countdown.hours)}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-[#090a0f]/80 border border-[#23283b] rounded-xl p-2.5">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 block">
                  {pad(countdown.minutes)}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Mins</span>
              </div>
              <div className="bg-[#090a0f]/80 border border-[#23283b] rounded-xl p-2.5">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 block">
                  {pad(countdown.seconds)}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Secs</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-400 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>30-Day Money-Back Guarantee • Lifetime HD Recording Included</span>
            </div>
          </div>

        </div>

        {/* Live Terminal Window Mockup */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-[#0f111a] shadow-purple-900/30">
            <div className="bg-[#161926]/90 px-4 py-3 border-b border-[#23283b] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  agent-orchestrator.ts — Live Multi-Agent Execution Loop
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                  ● STATUS: RUNNING (3 TOOLS ACTIVE)
                </span>
              </div>
            </div>

            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2 bg-[#090a0f]/95">
              <div className="flex items-start gap-2 text-slate-500">
                <span className="text-purple-400">❯</span>
                <span>npx tsx ./src/agent/masterclass-demo.ts --goal="Analyze Q3 AI market trends and compile executive brief"</span>
              </div>
              <div className="text-slate-400 pl-4 border-l-2 border-purple-500/30 space-y-1 py-1">
                <p className="text-purple-300">[Orchestrator] Plan generated: 3 sub-tasks identified</p>
                <p className="text-cyan-400">[Tool: WebSearch] Querying arXiv & TechCrunch for "Reasoning Models + Agent Tool Use"...</p>
                <p className="text-slate-400">Fetched 18 papers & articles in 410ms (embedding cosine similarity &gt; 0.88)</p>
                <p className="text-emerald-400">[Tool: VectorRAG] Synthesizing cross-document chunks with hybrid BM25 + dense re-ranking...</p>
                <p className="text-amber-300">[Self-Reflection] Guardrail check passed: 0% hallucination detected across citation graph.</p>
                <p className="text-fuchsia-300">[Tool: CodeExecution] Generated executive chart in SVG format and dispatched webhook to Slack.</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>SUCCESS: Autonomous Agent workflow completed in 1.84s (Cost: $0.0034)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
