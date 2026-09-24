import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/masterclassData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0f111a]/50 border-t border-[#23283b]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-2 block">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Everything you need to know about the masterclass, schedule, and prerequisites.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#23283b] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-purple-300 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 border-t border-[#23283b]/40 pt-4 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
