import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/masterclassData';

export default function ProjectsShowcase({ onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = PROJECTS_DATA[activeIdx];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-2 block">
            PORTFOLIO ARTIFACTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            3 Production Projects You Will Ship
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            You won't just leave with notes. You will walk away with working code, tested architectures, and deployable systems you can immediately showcase on your resume or ship for clients.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PROJECTS_DATA.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeIdx === idx
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-[#161926] text-slate-300 hover:text-white border border-[#23283b]"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Dynamic Project Display */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-[#23283b]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                {activeProject.tagline}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                {activeProject.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activeProject.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.stack.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#090a0f] border border-[#23283b] px-2.5 py-1 rounded-md text-slate-300 font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenModal('VIP All-Access Pass', 99)}
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-purple-200 transition-colors"
              >
                <span>Fork Repository Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Code Snippet Box */}
            <div className="bg-[#090a0f]/95 rounded-xl border border-[#23283b] p-4 font-mono text-xs overflow-x-auto text-slate-300 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#23283b]/60 text-[10px] text-slate-500">
                <span>{activeProject.id === 'rag' ? 'rag_pipeline.py' : 'agent_worker.ts'}</span>
                <span className="text-emerald-400">● LIVE RUNNER READY</span>
              </div>
              <pre className="text-purple-200 leading-relaxed overflow-x-auto">
                <code>{activeProject.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
