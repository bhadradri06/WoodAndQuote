import React from 'react';
import { BRAND_DETAILS } from '../types.ts';
import { MagneticButton } from './MagneticButton.tsx';

export const FinalSection: React.FC = () => {
  return (
    <section
      data-ink="true"
      className="relative w-full bg-[#14161A] text-[#F6F1E7] py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden text-center"
    >
      {/* Real Film Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#8B5E3C] mb-6">
          Wood &amp; Quote
        </p>

        {/* Big serif headline */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-10 text-balance">
          Let's give your evenings back to your craft and your business.
        </h2>

        {/* Booking Button in Accent Colour */}
        <div className="mb-8">
          <MagneticButton
            href={BRAND_DETAILS.bookingLink}
            variant="accent"
            className="text-lg px-8 py-4"
          >
            Book a 30 minute call
          </MagneticButton>
        </div>

        {/* WhatsApp and Email under it as plain links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#F6F1E7]/80 font-sans">
          <a
            href={BRAND_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F6F1E7] transition-colors underline underline-offset-4"
          >
            Message me on WhatsApp
          </a>
          <span className="hidden sm:inline text-[#F6F1E7]/30">·</span>
          <a
            href={BRAND_DETAILS.emailUrl}
            className="hover:text-[#F6F1E7] transition-colors underline underline-offset-4"
          >
            {BRAND_DETAILS.email}
          </a>
        </div>
      </div>
    </section>
  );
};
