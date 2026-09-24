import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#23283b]/80 bg-[#090a0f] text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-300 text-sm">AI Masterclass © 2026</span>
          <span>• All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="#curriculum" className="hover:text-white transition-colors">Syllabus</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        <div>
          <span>Designed for modern builders & architects.</span>
        </div>
      </div>
    </footer>
  );
}
