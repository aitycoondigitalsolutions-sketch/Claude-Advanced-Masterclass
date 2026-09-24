import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosStrip from './components/LogosStrip';
import PainVsSolution from './components/PainVsSolution';
import Curriculum from './components/Curriculum';
import ProjectsShowcase from './components/ProjectsShowcase';
import Bonuses from './components/Bonuses';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import FloatingBar from './components/FloatingBar';
import SocialToast from './components/SocialToast';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('VIP All-Access Pass');
  const [selectedPrice, setSelectedPrice] = useState(99);

  // Live countdown timer state (Target: 3 days from now)
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 22,
    seconds: 45
  });

  useEffect(() => {
    const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');
  const countdownBannerText = `${pad(countdown.days)}d : ${pad(countdown.hours)}h : ${pad(countdown.minutes)}m : ${pad(countdown.seconds)}s`;

  const handleOpenModal = (tier = 'VIP All-Access Pass', price = 99) => {
    setSelectedTier(tier);
    setSelectedPrice(price);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#090a0f] text-slate-200 font-sans min-h-screen relative overflow-x-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute top-[65%] -right-32 w-[550px] h-[550px] bg-purple-800/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar
          onOpenModal={handleOpenModal}
          countdownText={countdownBannerText}
          seatsLeft={14}
        />

        <Hero
          onOpenModal={handleOpenModal}
          countdown={countdown}
        />

        <LogosStrip />

        <PainVsSolution />

        <Curriculum
          onOpenModal={handleOpenModal}
        />

        <ProjectsShowcase
          onOpenModal={handleOpenModal}
        />

        <Bonuses />

        <Instructor />

        <Testimonials />

        <Pricing
          onOpenModal={handleOpenModal}
        />

        <FAQ />

        <CTASection
          onOpenModal={handleOpenModal}
        />

        <Footer />

        <FloatingBar
          onOpenModal={handleOpenModal}
          seatsLeft={14}
        />

        <SocialToast />

        <RegistrationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialTier={selectedTier}
          initialPrice={selectedPrice}
        />
      </div>
    </div>
  );
}
