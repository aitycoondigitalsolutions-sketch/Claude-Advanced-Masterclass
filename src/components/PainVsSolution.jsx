import React from 'react';
import { X, Check, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PainVsSolution() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">The AI Skill Gap</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why 95% of Developers Are Trapped in "Prompting Hell"
          </p>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Copy-pasting prompts into chat interfaces won't keep you relevant in 2026. Companies don't hire prompt writers—they hire engineers who can architect reliable autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Wrong Way Card */}
          <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-7 relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Amateur Approach</h3>
                <p className="text-xs text-red-400 font-medium">Fragile, manual & surface-level</p>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Relying on basic ChatGPT chat windows without understanding tool execution or structured output schemas.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Naive RAG tutorials that hallucinate, blow through token budgets, and fail on messy enterprise data.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Over-bloated frameworks with 50 abstractions that break the moment you need real production reliability.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Spending months binge-watching outdated course libraries without deploying a single working agent.</span>
              </li>
            </ul>
          </div>

          {/* The Masterclass Way Card */}
          <div className="bg-gradient-to-b from-purple-900/40 to-[#161926] border border-purple-500/40 rounded-2xl p-7 relative shadow-xl shadow-purple-900/20">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              The 3-Hour Fast-Track
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Masterclass Blueprint</h3>
                <p className="text-xs text-purple-400 font-medium">Production-ready, battle-tested patterns</p>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Autonomous Agent Architecture:</strong> Learn ReAct loops, planning mechanisms, and dynamic tool orchestration with zero boilerplate.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Production RAG:</strong> Master chunking, hybrid search (BM25 + dense), re-ranking, and strict citation guardrails that eliminate hallucinations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>4 Complete GitHub Starter Repos:</strong> Walk away with code you can fork, customize, and ship for your company or clients immediately.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Direct Live Q&A:</strong> Get your specific architecture questions answered live by an industry veteran who ships AI daily.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
