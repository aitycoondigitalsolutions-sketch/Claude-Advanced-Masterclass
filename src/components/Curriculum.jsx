import React from 'react';
import { Layers, ChevronRight, Calendar } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/masterclassData';

export default function Curriculum({ onOpenModal }) {
  return (
    <section id="curriculum" className="py-20 bg-[#0f111a]/60 border-t border-[#23283b]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" /> HOUR-BY-HOUR BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What We Build in 3 Intense Hours
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Every single minute is engineered for maximum signal. No slides reading, no theory lectures. Code along in real-time or watch and fork our production repositories.
          </p>
        </div>

        {/* Hour Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {CURRICULUM_DATA.map((module) => {
            const isHour2 = module.hour === "02";
            const badgeBg = module.hour === "01" 
              ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
              : module.hour === "02"
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
              : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";

            const tagColor = module.hour === "01"
              ? "text-cyan-400"
              : module.hour === "02"
              ? "text-emerald-400"
              : "text-amber-400";

            return (
              <div
                key={module.hour}
                className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all ${
                  isHour2 
                    ? "border-purple-500/40 relative shadow-xl shadow-purple-900/10"
                    : "border-[#23283b] hover:border-purple-500/40"
                }`}
              >
                {isHour2 && (
                  <div className="absolute -top-3 right-6 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                    Core Breakthrough
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#23283b]">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1.5 rounded-xl font-mono font-bold text-sm border ${badgeBg}`}>
                      HOUR {module.hour}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{module.title}</h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {module.time} • {module.badge}
                      </span>
                    </div>
                  </div>
                  <span className={`self-start sm:self-auto text-xs px-2.5 py-1 rounded bg-[#090a0f] ${tagColor} font-mono border border-[#23283b]`}>
                    {module.demoTag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  {module.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{t.title}:</strong> {t.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button Under Curriculum */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('General Pass', 49)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Enroll in the Masterclass Now ($49)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
