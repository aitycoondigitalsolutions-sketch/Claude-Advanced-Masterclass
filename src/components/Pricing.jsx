import React from 'react';
import { Tag, Check, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRICING_DATA } from '../data/masterclassData';

export default function Pricing({ onOpenModal }) {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-3">
            <Tag className="w-3.5 h-3.5" /> EARLY-BIRD PRICING NOW ACTIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Invest in Your AI Mastery
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            One afternoon of focused learning that will pay dividends across your entire career. Transparent pricing with an unconditional 30-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_DATA.map((tier) => {
            const isFeatured = tier.isFeatured;

            return (
              <div
                key={tier.id}
                className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-2 border-purple-500 relative shadow-2xl shadow-purple-900/40 transform lg:-translate-y-2'
                    : 'border-[#23283b]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" /> MOST POPULAR (84% CHOOSE THIS)
                  </div>
                )}

                <div>
                  <div className={`text-xs font-mono font-bold uppercase tracking-widest mb-2 ${isFeatured ? 'text-cyan-400 mt-2' : 'text-slate-400'}`}>
                    {tier.tierLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="text-sm text-slate-300 mt-2 mb-6">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">${tier.price}</span>
                    <span className="text-lg text-slate-500 line-through">${tier.originalPrice}</span>
                    <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                      {tier.discount}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-sm text-slate-200">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        {isFeatured && i === 0 ? (
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#23283b]">
                  <button
                    onClick={() => onOpenModal(tier.name, tier.price)}
                    className={`w-full py-4 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:scale-[1.02] shadow-lg shadow-purple-600/30'
                        : 'text-white bg-[#161926] hover:bg-[#23283b] border border-[#23283b]'
                    }`}
                  >
                    <span>{tier.buttonText}</span>
                    {isFeatured && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money-Back Guarantee Callout */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#0f111a]/80 border border-[#23283b] flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-white text-base">30-Day 100% Money-Back Guarantee</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              If by the end of Hour 1 you don't feel you've gotten 10x your money's worth, simply send an email and receive a full, unconditional refund immediately. You risk nothing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
