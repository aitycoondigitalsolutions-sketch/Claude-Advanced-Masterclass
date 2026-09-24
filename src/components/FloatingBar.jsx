import React, { useState, useEffect } from 'react';

export default function FloatingBar({ onOpenModal, seatsLeft = 14 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 bg-[#0f111a]/90 backdrop-blur-lg border-t border-purple-500/30 py-3 px-4 transform transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-purple-500/20 text-purple-300">
            3-Hour Live Sprint
          </span>
          <div>
            <span className="text-sm font-bold text-white block">Next Live Session Saturday</span>
            <span className="text-xs text-amber-400 font-mono">⚡ {seatsLeft} seats left at early-bird rate</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline font-mono text-sm text-slate-300 font-bold">
            $49 <span className="text-xs text-slate-500 line-through">$149</span>
          </span>
          <button
            onClick={() => onOpenModal('VIP All-Access Pass', 99)}
            className="px-5 py-2 text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Reserve Seat Now
          </button>
        </div>
      </div>
    </div>
  );
}
