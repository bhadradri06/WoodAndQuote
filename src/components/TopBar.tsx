import React, { useEffect, useState } from 'react';
import { BRAND_DETAILS } from '../types.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { MagneticButton } from './MagneticButton.tsx';

interface TopBarProps {
  currentTheme?: 'transparent' | 'cream' | 'ink';
}

export const TopBar: React.FC<TopBarProps> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOverInk, setIsOverInk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      // Check if header is currently intersecting any element with data-ink="true"
      const inkSections = document.querySelectorAll<HTMLElement>('[data-ink="true"]');
      let overInk = false;
      const headerHeight = 72;

      inkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section covers the header area
        if (rect.top <= headerHeight && rect.bottom >= 10) {
          overInk = true;
        }
      });

      setIsOverInk(overInk);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAtHeroTop = scrollY < 40;

  // Determine top bar state:
  // 1. Transparent over the hero
  // 2. Ink with cream text while it sits over an ink section
  // 3. Cream with a hairline border once you scroll
  let barStyles = 'bg-transparent text-[#14161A] border-b border-transparent';
  if (!isAtHeroTop) {
    if (isOverInk) {
      barStyles = 'bg-[#14161A] text-[#F6F1E7] border-b border-[#F6F1E7]/12';
    } else {
      barStyles = 'bg-[#F6F1E7] text-[#14161A] border-b border-[#14161A]/12';
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${barStyles}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Logo */}
        <a href="#" className="flex items-center shrink-0">
          <BrandLogo onInk={!isAtHeroTop && isOverInk} />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#what-i-do"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isOverInk && !isAtHeroTop ? 'text-[#F6F1E7]/80 hover:text-[#F6F1E7]' : 'text-[#14161A]/80 hover:text-[#14161A]'
            }`}
          >
            What I do
          </a>
          <a
            href="#how-it-works"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isOverInk && !isAtHeroTop ? 'text-[#F6F1E7]/80 hover:text-[#F6F1E7]' : 'text-[#14161A]/80 hover:text-[#14161A]'
            }`}
          >
            How it works
          </a>
          <a
            href="#about"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isOverInk && !isAtHeroTop ? 'text-[#F6F1E7]/80 hover:text-[#F6F1E7]' : 'text-[#14161A]/80 hover:text-[#14161A]'
            }`}
          >
            About
          </a>
        </nav>

        {/* Zone 3: Primary action pill */}
        <div className="flex items-center shrink-0">
          <MagneticButton
            href={BRAND_DETAILS.bookingLink}
            variant="pill"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
