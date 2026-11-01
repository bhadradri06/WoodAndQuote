import React, { useState } from 'react';
import { BRAND_DETAILS } from '../types.ts';
import { MagneticButton } from './MagneticButton.tsx';

export const AboutSection: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const [photoSrcIndex, setPhotoSrcIndex] = useState(0);
  const photoSources = [
    BRAND_DETAILS.images.me,
    '/assets/aistudio/me_a702c50c.png',
    '/PICTURES/me.jpg',
    '/pictures/me.jpg',
    '/me.jpg',
  ];

  const handlePhotoError = () => {
    if (photoSrcIndex < photoSources.length - 1) {
      setPhotoSrcIndex(photoSrcIndex + 1);
    } else {
      setPhotoError(true);
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-[#F6F1E7] border border-[#14161A]/12 rounded-[28px] p-8 sm:p-14 shadow-xs">
        {/* Author Header */}
        <div className="flex items-center gap-5 mb-8">
          {/* Small and round me.jpg with rich panel fallback */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#8B5E3C]/30 bg-gradient-to-br from-[#14161A] to-[#8B5E3C] flex items-center justify-center">
            {!photoError ? (
              <img
                src={photoSources[photoSrcIndex]}
                alt="Bhadra Kommu"
                referrerPolicy="no-referrer"
                onError={handlePhotoError}
                className="w-full h-full object-cover"
              />
            ) : null}
            <span
              className={`font-serif text-2xl text-transparent select-none ${
                !photoError ? 'hidden' : 'block'
              }`}
              style={{
                WebkitTextStroke: '1px rgba(246, 241, 231, 0.7)',
              }}
            >
              BK
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-1">
              Founder
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#14161A] tracking-tight">
              A note from Bhadra Kommu
            </h2>
          </div>
        </div>

        {/* Letter Body in slightly larger reading size */}
        <div className="space-y-5 text-lg sm:text-xl text-[#14161A]/90 font-sans leading-[1.65]">
          <p>
            I am IT professional with 15 years of experience in IT and working as associate architect at technology.
          </p>
          <p>
            I work directly with furniture shops, corporate office and Individuals as well in Hyderabad. I build clean, reliable digital setups so your customers know your wood options and price range before taking up your evening with questions.
          </p>
          <p>
            When we work together, you work only with me.
          </p>
        </div>

        {/* Signature in handwritten-style Google font (Caveat) */}
        <div className="mt-10 pt-6 border-t border-[#14161A]/10">
          <p
            className="text-4xl sm:text-5xl text-[#8B5E3C] select-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Bhadra
          </p>
          <p className="text-sm sm:text-base font-semibold text-[#14161A] font-sans mt-1.5">
            Bhadra Kommu · Founder of Wood &amp; Quote
          </p>

          <div className="mt-8">
            <MagneticButton
              href={BRAND_DETAILS.bookingLink}
              variant="accent"
            >
              Book a 30 minute call with Bhadra
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
