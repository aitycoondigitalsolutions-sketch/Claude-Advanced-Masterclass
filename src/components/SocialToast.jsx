import React, { useState, useEffect } from 'react';
import { SOCIAL_ATTENDEES } from '../data/masterclassData';

export default function SocialToast() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial display after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    // Recurring interval
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SOCIAL_ATTENDEES.length);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 16000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const attendee = SOCIAL_ATTENDEES[currentIdx];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 max-w-xs bg-[#0f111a]/95 backdrop-blur-md border border-purple-500/30 rounded-xl p-3 shadow-xl transform transition-all duration-500 pointer-events-none flex items-center gap-3 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs shrink-0">
        ⚡
      </div>
      <div className="text-xs">
        <span className="text-white font-semibold block">{attendee.name}</span>
        <span className="text-slate-400 text-[11px]">
          {attendee.action} ({attendee.time})
        </span>
      </div>
    </div>
  );
}
