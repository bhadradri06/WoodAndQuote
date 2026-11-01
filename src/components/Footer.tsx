import React from 'react';
import { BRAND_DETAILS } from '../types.ts';
import { BrandLogo } from './BrandLogo.tsx';

export const Footer: React.FC = () => {
  return (
    <footer
      data-ink="true"
      className="relative w-full bg-[#14161A] text-[#F6F1E7] border-t border-[#F6F1E7]/10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Real Film Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Logo on cream panel & City */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <BrandLogo onInk={true} />
          <span className="text-sm text-[#F6F1E7]/60 font-sans">
            {BRAND_DETAILS.city}
          </span>
        </div>

        {/* Center: The three contact links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#F6F1E7]/80 font-sans">
          <a
            href={BRAND_DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F6F1E7] transition-colors"
          >
            Book a 30 minute call
          </a>
          <span className="text-[#F6F1E7]/30">·</span>
          <a
            href={BRAND_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F6F1E7] transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-[#F6F1E7]/30">·</span>
          <a
            href={BRAND_DETAILS.emailUrl}
            className="hover:text-[#F6F1E7] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Year and Business Name */}
        <div className="text-sm text-[#F6F1E7]/50 font-sans">
          2026 {BRAND_DETAILS.businessName}
        </div>
      </div>
    </footer>
  );
};
