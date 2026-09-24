import React, { useState, useEffect } from 'react';
import { X, Check, CheckCircle, CalendarPlus, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ isOpen, onClose, initialTier = 'VIP All-Access Pass', initialPrice = 99 }) {
  const [tier, setTier] = useState(initialTier);
  const [price, setPrice] = useState(initialPrice);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Software Engineer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Synchronize when initial values change
  useEffect(() => {
    if (isOpen) {
      setTier(initialTier);
      setPrice(initialPrice);
      setIsSuccess(false);
    }
  }, [isOpen, initialTier, initialPrice]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleTierChange = (e) => {
    const selected = e.target.value;
    setTier(selected);
    if (selected.includes('General')) setPrice(49);
    else if (selected.includes('VIP')) setPrice(99);
    else setPrice(349);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTicketId(`#AIM-${Math.floor(10000 + Math.random() * 90000)}`);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if confetti unavailable
      }
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090a0f]/85 backdrop-blur-md">
      <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-purple-500/40 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#161926] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* State 1: Form View */}
        {!isSuccess ? (
          <div>
            <div className="mb-5 text-left">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                Live Cohort Registration
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Claim Your Masterclass Seat
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Join the 3-hour live intensive and receive full repo starter kits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Selected Pass Tier
                </label>
                <select
                  value={tier}
                  onChange={handleTierChange}
                  className="w-full bg-[#090a0f] border border-[#23283b] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="General Pass">General Admission Pass — $49 (Early-Bird)</option>
                  <option value="VIP All-Access Pass">VIP All-Access Pass + Source Repos — $99</option>
                  <option value="Team Pack (5 Seats)">Team Pack (5 Seats + Consultation) — $349</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Mercer"
                  className="w-full bg-[#090a0f] border border-[#23283b] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address (For Zoom invite & repos)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#090a0f] border border-[#23283b] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Role / Primary Goal
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#090a0f] border border-[#23283b] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="Software Engineer">Software Engineer / Tech Lead</option>
                  <option value="Founder">Founder / CTO</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="AI Researcher">Data Scientist / AI Specialist</option>
                  <option value="Other">Other Tech Professional</option>
                </select>
              </div>

              {/* Order Summary Pill */}
              <div className="bg-[#090a0f]/80 border border-[#23283b] rounded-xl p-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Investment:</span>
                <span className="font-bold text-white text-base">${price} USD</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Confirming Seat...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Reservation</span>
                    <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                🔒 30-Day Money-Back Guarantee. Zoom details sent immediately.
              </p>

            </form>
          </div>
        ) : (
          /* State 2: Confirmation / Success View */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">You're In! Seat Confirmed 🎉</h3>
            <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
              We've sent the Zoom invitation link, calendar invite, and Discord onboarding info to <strong className="text-purple-300">{email}</strong>.
            </p>

            {/* Ticket Summary Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#090a0f] border border-[#23283b] text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Ticket ID:</span>
                <span className="text-cyan-400 font-bold">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pass Type:</span>
                <span className="text-slate-200">{tier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Event Date:</span>
                <span className="text-emerald-400">Saturday, 10:00 AM - 1:00 PM EST</span>
              </div>
            </div>

            {/* Add to Calendar & Done Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+3-Hour+AI+Masterclass&details=Live+Zoom+Session+and+AI+Agent+Architecture+Workshop&dates=20261003T140000Z%2F20261003T170000Z"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 rounded-lg bg-[#161926] hover:bg-[#23283b] text-xs font-semibold text-slate-200 border border-[#23283b] flex items-center justify-center gap-1.5 transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Calendar</span>
              </a>
              <button
                onClick={onClose}
                className="px-3 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
