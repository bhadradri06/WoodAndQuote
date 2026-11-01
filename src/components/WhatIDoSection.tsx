import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BRAND_DETAILS } from '../types.ts';
import { RichImagePanel } from './RichImagePanel.tsx';

interface CardData {
  number: string;
  title: string;
  imgSrc: string;
  today: string;
  withWQ: string;
}

const CARDS: CardData[] = [
  {
    number: '01',
    title: 'The Bed Showcase & Wood Choices',
    imgSrc: BRAND_DETAILS.images.work1,
    today: 'Your customers ask what wood you use and how much each bed costs, leaving you to repeat the details in messages.',
    withWQ: 'Your beds are shown with wood choices and a price range, so buyers understand the timber and price before they contact you.',
  },
  {
    number: '02',
    title: 'The Customer Inquiry Form',
    imgSrc: BRAND_DETAILS.images.work2,
    today: 'Buyer requests arrive across phone calls and chat threads without the exact bed design or wood choice noted.',
    withWQ: 'A short form takes the customer\'s name, phone and the design they liked, giving you everything needed to respond.',
  },
  {
    number: '03',
    title: 'The Wood & Money Estimate Tool',
    imgSrc: BRAND_DETAILS.images.work3,
    today: 'Working out timber quantities and pricing for custom bed designs takes manual calculation after your shop closes.',
    withWQ: 'Behind the site sits a small tool that works out the wood and a money estimate for any bed you type in.',
  },
];

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for pinned desktop section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate transform for desktop pinned sideways movement
  // Move cards from right to left
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-58%']);

  return (
    <section id="what-i-do" className="relative bg-[#F6F1E7]">
      {/* Desktop Pinned Implementation (when motion is enabled) */}
      {!shouldReduceMotion && (
        <div ref={containerRef} className="hidden lg:block relative h-[280vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-8 max-w-7xl mx-auto">
            {/* Pinned Heading */}
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-3">
                What I Set Up
              </p>
              <h2 className="font-serif text-[56px] text-[#14161A] tracking-tight leading-[1.05]">
                Three parts, built for your business.
              </h2>
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
                    className="w-[68vw] max-w-[840px] shrink-0 bg-[#F6F1E7] border border-[#14161A]/12 rounded-[28px] overflow-hidden flex flex-col shadow-sm"
                  >
                    {/* Work Picture filling top 60% */}
                    <div className="relative h-[340px] w-full overflow-hidden">
                      <RichImagePanel
                        src={card.imgSrc}
                        alt={card.title}
                        label={card.number}
                        className="w-full h-full rounded-t-[28px] rounded-b-none"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-serif text-2xl text-[#8B5E3C] font-normal">
                            {card.number}
                          </span>
                          <span className="h-px w-6 bg-[#14161A]/15" />
                          <h3 className="text-2xl font-semibold text-[#14161A] tracking-tight">
                            {card.title}
                          </h3>
                        </div>

                        <div className="space-y-4 mt-6 text-base text-[#14161A]/85 leading-relaxed font-sans">
                          <div>
                            <span className="font-semibold text-[#14161A] block mb-1">
                              Today:
                            </span>
                            <p>{card.today}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-[#0F6B6B] block mb-1">
                              With Wood &amp; Quote:
                            </span>
                            <p>{card.withWQ}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile view & Reduced Motion Fallback (Normal stacked / swipable layout) */}
      <div className={`${shouldReduceMotion ? 'block' : 'lg:hidden'} py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto`}>
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-2">
            What I Set Up
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#14161A] tracking-tight leading-tight">
            Three parts, built for your business.
          </h2>
        </div>

        {/* Horizontal scroll snap on mobile, normal stacked if reduced motion */}
        <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory gap-6 pb-4">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className="w-full sm:w-[85vw] sm:max-w-[420px] shrink-0 bg-[#F6F1E7] border border-[#14161A]/12 rounded-[28px] overflow-hidden flex flex-col shadow-sm sm:snap-center"
            >
              <div className="h-[240px] w-full">
                <RichImagePanel
                  src={card.imgSrc}
                  alt={card.title}
                  label={card.number}
                  className="w-full h-full rounded-t-[28px] rounded-b-none"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl text-[#8B5E3C]">
                      {card.number}
                    </span>
                    <span className="h-px w-4 bg-[#14161A]/15" />
                    <h3 className="text-lg font-semibold text-[#14161A] tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mt-4 text-sm sm:text-base text-[#14161A]/85 leading-relaxed font-sans">
                    <div>
                      <span className="font-semibold text-[#14161A] block mb-1">
                        Today:
                      </span>
                      <p>{card.today}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0F6B6B] block mb-1">
                        With Wood &amp; Quote:
                      </span>
                      <p>{card.withWQ}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
