import React, { useState } from 'react';
import { Cpu, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal, countdownText, seatsLeft = 14 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-purple-950 via-[#161926] to-purple-950 border-b border-purple-500/20 text-xs sm:text-sm py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5"></span> LIVE COHORT
            </span>
            <span className="text-slate-300">Next Session: <strong>Saturday, 10:00 AM EST</strong></span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-amber-300 font-medium">⚡ Only {seatsLeft} seats left</span>
          </div>
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <span className="text-slate-400 text-xs hidden lg:inline">Early-bird 70% discount expires in:</span>
            <div className="font-mono text-xs text-purple-300 font-semibold tracking-wider bg-purple-900/40 px-2.5 py-0.5 rounded border border-purple-500/30">
              {countdownText}
            </div>
            <button
              onClick={() => onOpenModal()}
              className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-medium px-3 py-1 rounded transition-colors duration-150"
            >
              Claim Seat
            </button>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090a0f]/80 border-b border-[#23283b]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-lg">
                AI<span className="text-cyan-400">.MASTERCLASS</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                3-Hour Sprint
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#curriculum" className="hover:text-purple-300 transition-colors">Curriculum</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">What You'll Build</a>
            <a href="#instructor" className="hover:text-purple-300 transition-colors">Instructor</a>
            <a href="#bonuses" className="hover:text-purple-300 transition-colors">Bonuses ($997)</a>
            <a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a>
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Zoom Live + Recording</span>
            </div>
            <button
              onClick={() => onOpenModal()}
              className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Reserve Seat</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#23283b] bg-[#0f111a]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              Curriculum
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              What You'll Build
            </a>
            <a
              href="#instructor"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              Instructor
            </a>
            <a
              href="#bonuses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              Bonuses
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#161926] hover:text-purple-300"
            >
              FAQ
            </a>
          </div>
        )}
      </header>
    </>
  );
}
