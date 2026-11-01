import React from 'react';
import { TopBar } from './components/TopBar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { WhatIDoSection } from './components/WhatIDoSection.tsx';
import { BeforeAfterSection } from './components/BeforeAfterSection.tsx';
import { HowWeStartSection } from './components/HowWeStartSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { QuestionsSection } from './components/QuestionsSection.tsx';
import { FinalSection } from './components/FinalSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#14161A] selection:bg-[#8B5E3C]/20 selection:text-[#14161A] relative font-sans">
      {/* Top Bar */}
      <TopBar />

      <main>
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: The Problem (Ink) */}
        <ProblemSection />

        {/* Section 4: What I Do (Pinned on desktop) */}
        <WhatIDoSection />

        {/* Section 5: Before and After */}
        <BeforeAfterSection />

        {/* Section 6: How We Start */}
        <HowWeStartSection />

        {/* Section 7: About Me */}
        <AboutSection />

        {/* Section 8: Questions */}
        <QuestionsSection />

        {/* Section 9: Final Invitation (Ink) */}
        <FinalSection />
      </main>

      {/* Section 10: Footer (Ink) */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <MobileBottomBar />
    </div>
  );
}
