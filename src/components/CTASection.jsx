import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

export default function CTASection({ onOpenModal }) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090a0f] via-purple-950/40 to-[#090a0f] border-t border-[#23283b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
          <span>FINAL EARLY-BIRD SEATS REMAINING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Ready to Build Autonomous AI Systems?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Join the live session this Saturday. 3 hours from now, you'll be deploying real agents while others are still copy-pasting chat prompts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal('VIP All-Access Pass', 99)}
            className="w-full sm:w-auto px-9 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-xl hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Claim Your Seat Now ($49)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
          <Lock className="w-3.5 h-3.5" />
          <span>256-Bit SSL Encrypted Checkout • Instant Confirmation & Calendar Invite</span>
        </p>

      </div>
    </section>
  );
}
