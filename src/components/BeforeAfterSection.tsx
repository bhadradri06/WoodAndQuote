import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const WITHOUT_LINES = [
  'You answer repetitive messages about bed designs and timber options late into your evening.',
  'You sit with paper or spreadsheets working out wood quantities and costs by hand.',
  'You follow up with buyers who asked for prices and never replied back to you.',
  'Serious customers look elsewhere because they had to wait for basic cost estimates.',
];

const WITH_LINES = [
  'Your buyers look through your bed designs with wood choices and price ranges already clear.',
  'New inquiries arrive with the customer\'s name, phone, and the exact bed design they want.',
  'You type in any bed design and the tool works out the wood requirements and money estimate.',
  'Your workday ends when you close your shop, without quote questions waiting in your messages.',
];

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  const lines = activeTab === 'without' ? WITHOUT_LINES : WITH_LINES;

  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-3">
          Your Evening
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14161A] tracking-tight">
          How your day finishes
        </h2>
      </div>

      {/* Two-position switch */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-[#14161A]/8 p-1.5 rounded-full border border-[#14161A]/10">
          <button
            type="button"
            onClick={() => setActiveTab('without')}
            className={`relative z-10 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              activeTab === 'without' ? 'text-[#F6F1E7]' : 'text-[#14161A]/70 hover:text-[#14161A]'
            }`}
          >
            {activeTab === 'without' && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : 'switchIndicator'}
                className="absolute inset-0 bg-[#14161A] rounded-full -z-10 shadow-xs"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            Without Wood &amp; Quote
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('with')}
            className={`relative z-10 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              activeTab === 'with' ? 'text-[#F6F1E7]' : 'text-[#14161A]/70 hover:text-[#14161A]'
            }`}
          >
            {activeTab === 'with' && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : 'switchIndicator'}
                className="absolute inset-0 bg-[#0F6B6B] rounded-full -z-10 shadow-xs"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            With Wood &amp; Quote
          </button>
        </div>
      </div>

      {/* Day-in-the-life 4 lines: stacked in the same place and crossfade */}
      <div className="relative bg-[#F6F1E7] border border-[#14161A]/12 rounded-[28px] p-6 sm:p-10 shadow-xs min-h-[300px] flex items-center">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="space-y-5"
            >
              {lines.map((line, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs mt-0.5 font-serif ${
                      activeTab === 'without'
                        ? 'bg-[#14161A]/10 text-[#14161A]'
                        : 'bg-[#0F6B6B]/15 text-[#0F6B6B] font-semibold'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-base sm:text-lg text-[#14161A] font-sans leading-relaxed">
                    {line}
                  </p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
