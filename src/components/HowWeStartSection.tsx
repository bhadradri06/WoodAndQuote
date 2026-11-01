import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BRAND_DETAILS } from '../types.ts';

export const HowWeStartSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['100%', '100%'] : ['0%', '100%']
  );

  const steps = [
    {
      num: '1',
      title: 'A 30 minute call',
      description:
        'We talk through your furniture shop, corporate office, or project work, the beds you offer, and the wood choices your customers ask for.',
    },
    {
      num: '2',
      title: 'A plan for your business',
      description:
        'I map out your one page site, catalog presentation, the inquiry form, and the estimation tool needed for your work.',
    },
    {
      num: '3',
      title: 'I set it up and show your team',
      description:
        'I build your one page site, configure the wood and money tool behind it, and show your team how everything operates.',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="mb-14 sm:mb-20 text-center">
        <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-3">
          The Process
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#14161A] tracking-tight">
          How we start
        </h2>
      </div>

      <div className="relative pl-8 sm:pl-16">
        {/* Thin vertical line background */}
        <div
          aria-hidden="true"
          className="absolute left-3.5 sm:left-7 top-4 bottom-24 w-[2px] bg-[#14161A]/12"
        />

        {/* Vertical line filling with accent colour (#8B5E3C) as you scroll */}
        <motion.div
          aria-hidden="true"
          style={{ height: lineHeight }}
          className="absolute left-3.5 sm:left-7 top-4 w-[2px] bg-[#8B5E3C] origin-top will-change-[height]"
        />

        {/* The 3 steps */}
        <div className="space-y-14 sm:space-y-18">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex items-start">
              {/* Step node on the line */}
              <div className="absolute -left-8 sm:-left-16 flex items-center justify-center">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F6F1E7] border-2 border-[#8B5E3C] text-[#8B5E3C] font-serif text-sm sm:text-base font-semibold flex items-center justify-center shadow-xs">
                  {step.num}
                </span>
              </div>

              {/* Step content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#14161A] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-[#14161A]/85 font-sans leading-relaxed max-w-[62ch]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The price line, sitting under step 3 exactly as written in Price */}
        {BRAND_DETAILS.price && (
          <div className="mt-14 pt-8 border-t border-[#14161A]/12">
            <div className="inline-block bg-[#14161A]/5 border border-[#14161A]/10 rounded-2xl px-6 py-4">
              <span className="text-xs uppercase tracking-wider text-[#0F6B6B] font-semibold block mb-1">
                Pricing
              </span>
              <p className="text-xl sm:text-2xl font-semibold text-[#14161A] tracking-tight">
                {BRAND_DETAILS.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
