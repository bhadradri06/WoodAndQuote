import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BRAND_DETAILS } from '../types.ts';
import { RichImagePanel } from './RichImagePanel.tsx';

interface CardData {
  number: string;
  title: string;
  shortName: string;
  imgSrc: string;
  today: string;
  withWQ: string;
}

const CARDS: CardData[] = [
  {
    number: '01',
    title: 'The Bed Showcase & Wood Choices',
    shortName: 'Bed Showcase',
    imgSrc: BRAND_DETAILS.images.work1,
    today: 'Your customers ask what wood you use and how much each bed costs, leaving you to repeat the details in messages.',
    withWQ: 'Your beds are shown with wood choices and a price range, so buyers understand the timber and price before they contact you.',
  },
  {
    number: '02',
    title: 'The Customer Inquiry Form',
    shortName: 'Inquiry Form',
    imgSrc: BRAND_DETAILS.images.work2,
    today: 'Buyer requests arrive across phone calls and chat threads without the exact bed design or wood choice noted.',
    withWQ: 'A short form takes the customer\'s name, phone and the design they liked, giving you everything needed to respond.',
  },
  {
    number: '03',
    title: 'The Wood & Money Estimate Tool',
    shortName: 'Estimate Tool',
    imgSrc: BRAND_DETAILS.images.work3,
    today: 'Working out timber quantities and pricing for custom bed designs takes manual calculation after your shop closes.',
    withWQ: 'Behind the site sits a small tool that works out the wood and a money estimate for any bed you type in.',
  },
];

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress for pinned desktop section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate transform for desktop pinned sideways movement
  // Total 3 cards: transforms from 0% to -66% so Card 03 comes fully into view
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  // Track active card based on scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.33) {
        setActiveIndex(0);
      } else if (latest < 0.67) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    });
  }, [scrollYProgress]);

  return (
    <section id="what-i-do" className="relative bg-[#F6F1E7]">
      {/* Desktop Pinned Implementation (when motion is enabled) */}
      {!shouldReduceMotion && (
        <div ref={containerRef} className="hidden lg:block relative h-[280vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-6 xl:px-12 max-w-7xl mx-auto py-6">
            {/* Header with Title and Active Step Badges */}
            <div className="mb-5 flex items-end justify-between gap-6 shrink-0">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#0F6B6B] mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F6B6B]" />
                  What I Set Up · 3 Key Parts
                </p>
                <h2 className="font-serif text-3xl xl:text-4xl text-[#14161A] tracking-tight leading-tight">
                  Three parts, built for your business.
                </h2>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-1.5 rounded-full border border-[#14161A]/10 shadow-xs">
                {CARDS.map((card, i) => (
                  <div
                    key={card.number}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeIndex === i
                        ? 'bg-[#0F6B6B] text-[#F6F1E7] shadow-xs'
                        : 'text-[#14161A]/60 hover:text-[#14161A]'
                    }`}
                  >
                    <span>{card.number}</span>
                    <span className="hidden xl:inline font-sans">{card.shortName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sliding Cards Container */}
            <div className="relative w-full overflow-visible">
              <motion.div
                style={{ x }}
                className="flex gap-8 items-stretch will-change-transform"
              >
                {CARDS.map((card) => (
                  <div
                    key={card.number}
                    className="w-[82vw] max-w-[880px] shrink-0 bg-[#FDFBF7] border border-[#14161A]/12 rounded-[24px] overflow-hidden grid grid-cols-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Left: 16:9 Image container - uncropped with object-top */}
                    <div className="col-span-7 relative bg-[#23262B] flex items-center justify-center overflow-hidden border-r border-[#14161A]/8">
                      <div className="w-full aspect-[16/9]">
                        <RichImagePanel
                          src={card.imgSrc}
                          alt={card.title}
                          label={card.number}
                          objectFit="cover"
                          objectPosition="object-top"
                          className="w-full h-full rounded-none"
                        />
                      </div>
                    </div>

                    {/* Right: Card Details with clear text alignment */}
                    <div className="col-span-5 p-6 xl:p-7 flex flex-col justify-between bg-[#FDFBF7]">
                      <div>
                        {/* Step number badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-serif text-2xl text-[#8B5E3C] font-semibold">
                            {card.number}
                          </span>
                          <span className="h-px w-5 bg-[#14161A]/15" />
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0F6B6B]">
                            Part {card.number}
                          </span>
                        </div>

                        {/* Card Title */}
                        <h3 className="font-serif text-2xl xl:text-[26px] font-bold text-[#14161A] tracking-tight leading-snug mb-4">
                          {card.title}
                        </h3>

                        {/* Problem & Solution Comparison Blocks */}
                        <div className="space-y-3 font-sans">
                          {/* Today */}
                          <div className="bg-white/80 border border-[#14161A]/10 rounded-xl p-3 shadow-2xs">
                            <span className="font-semibold text-[#14161A] block text-xs uppercase tracking-wider mb-1">
                              Today:
                            </span>
                            <p className="text-xs xl:text-sm text-[#14161A]/80 leading-relaxed">
                              {card.today}
                            </p>
                          </div>

                          {/* With Wood & Quote */}
                          <div className="bg-[#0F6B6B]/8 border border-[#0F6B6B]/20 rounded-xl p-3 shadow-2xs">
                            <span className="font-semibold text-[#0F6B6B] block text-xs uppercase tracking-wider mb-1">
                              With Wood &amp; Quote:
                            </span>
                            <p className="text-xs xl:text-sm text-[#14161A]/90 leading-relaxed font-medium">
                              {card.withWQ}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Status Tag */}
                      <div className="pt-3 mt-2 border-t border-[#14161A]/8 flex items-center justify-between text-[11px] text-[#14161A]/50 uppercase tracking-wider font-semibold">
                        <span>Setup Included</span>
                        <span>0{card.number} / 03</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile view & Reduced Motion Fallback */}
      <div className={`${shouldReduceMotion ? 'block' : 'lg:hidden'} py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto`}>
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F6B6B]" />
            What I Set Up · 3 Key Parts
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#14161A] tracking-tight leading-tight">
            Three parts, built for your business.
          </h2>
        </div>

        {/* Stacked Cards for Mobile with 16:9 images that preserve all text */}
        <div className="space-y-8">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className="w-full bg-[#FDFBF7] border border-[#14161A]/12 rounded-[24px] overflow-hidden flex flex-col shadow-sm"
            >
              {/* Native 16:9 aspect ratio prevents clipping */}
              <div className="relative w-full aspect-[16/9] bg-[#23262B] overflow-hidden border-b border-[#14161A]/8">
                <RichImagePanel
                  src={card.imgSrc}
                  alt={card.title}
                  label={card.number}
                  objectFit="cover"
                  objectPosition="object-top"
                  className="w-full h-full rounded-none"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-2xl text-[#8B5E3C] font-semibold">
                      {card.number}
                    </span>
                    <span className="h-px w-5 bg-[#14161A]/15" />
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#0F6B6B]">
                      Part {card.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#14161A] tracking-tight mb-4">
                    {card.title}
                  </h3>

                  <div className="space-y-3 font-sans">
                    <div className="bg-white/80 border border-[#14161A]/10 rounded-xl p-4 shadow-2xs">
                      <span className="font-semibold text-[#14161A] block text-xs uppercase tracking-wider mb-1">
                        Today:
                      </span>
                      <p className="text-sm sm:text-base text-[#14161A]/80 leading-relaxed">
                        {card.today}
                      </p>
                    </div>

                    <div className="bg-[#0F6B6B]/8 border border-[#0F6B6B]/20 rounded-xl p-4 shadow-2xs">
                      <span className="font-semibold text-[#0F6B6B] block text-xs uppercase tracking-wider mb-1">
                        With Wood &amp; Quote:
                      </span>
                      <p className="text-sm sm:text-base text-[#14161A]/90 leading-relaxed font-medium">
                        {card.withWQ}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#14161A]/8 flex items-center justify-between text-xs text-[#14161A]/50 uppercase tracking-wider font-semibold">
                  <span>Setup Included</span>
                  <span>Part {card.number} of 03</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
