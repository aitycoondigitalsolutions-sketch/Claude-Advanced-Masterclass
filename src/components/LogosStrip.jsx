import React from 'react';
import { Triangle, Terminal } from 'lucide-react';

export default function LogosStrip() {
  return (
    <section className="py-10 border-y border-[#23283b]/50 bg-[#0f111a]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Engineers, Product Managers & Founders from Top Tech Companies Attend
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-extrabold text-lg sm:text-xl tracking-tighter text-slate-300 flex items-center gap-1.5">
            <Triangle className="w-4 h-4 text-purple-400 fill-purple-400" /> Vercel
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-300">
            stripe
          </span>
          <span className="font-bold text-lg sm:text-xl tracking-wider text-slate-300">
            G<span className="text-red-400">o</span><span className="text-amber-400">o</span>g<span className="text-emerald-400">l</span>e
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-300 flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-cyan-400" /> Linear
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-300">
            AWS
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-300">
            Y Combinator
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-300">
            Meta
          </span>
        </div>
      </div>
    </section>
  );
}
