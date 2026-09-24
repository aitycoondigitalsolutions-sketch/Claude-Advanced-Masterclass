import React from 'react';
import { Terminal, Check, Star } from 'lucide-react';

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar / Stylized Badge */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-1 shadow-xl shadow-purple-500/30">
                <div className="w-full h-full bg-[#090a0f] rounded-[14px] flex flex-col items-center justify-center text-center p-3">
                  <Terminal className="w-12 h-12 text-purple-400 mb-2" />
                  <span className="text-xs font-mono text-slate-300 font-semibold">Lead Architect</span>
                  <span className="text-[10px] text-cyan-400">AI Systems & Agents</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-[#090a0f] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border-2 border-[#090a0f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#090a0f]"></span> Verified Host
              </div>
            </div>

            {/* Bio Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                <span>Your Masterclass Instructor</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Antony Praveen</h3>
              <p className="text-sm font-medium text-slate-400 mt-1 mb-4">
                AI Systems Architect & Senior Engineering Leader • Ex-Principal Engineer
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                "Over the past 3 years, I've designed and deployed autonomous agent pipelines processing millions of requests in production. My teaching philosophy is grounded in one rule: <strong>zero academic fluff, 100% practical implementation</strong>. If you can't run it in your terminal, it doesn't belong in this masterclass."
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-[#090a0f] px-3 py-1.5 rounded-lg border border-[#23283b]">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> 10,000+ Students Mentored
                </span>
                <span className="flex items-center gap-1.5 bg-[#090a0f] px-3 py-1.5 rounded-lg border border-[#23283b]">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> 12+ Production AI Apps Shipped
                </span>
                <span className="flex items-center gap-1.5 bg-[#090a0f] px-3 py-1.5 rounded-lg border border-[#23283b]">
                  <Star className="w-3.5 h-3.5 text-amber-400" /> Top-Rated Speaker
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
