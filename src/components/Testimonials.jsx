import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/masterclassData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0f111a]/40 border-t border-[#23283b]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
            REAL RESULTS & REVIEWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Past Attendees Say
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Join hundreds of engineers who accelerated their AI journey in an afternoon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border flex flex-col justify-between ${
                t.isFeatured
                  ? 'border-purple-500/30 shadow-lg shadow-purple-900/10'
                  : 'border-[#23283b]'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#23283b]">
                <div className={`w-10 h-10 rounded-full ${t.badgeColor} flex items-center justify-center font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
