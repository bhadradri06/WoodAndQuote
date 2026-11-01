import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Who is this for?',
    answer:
      'For Furniture shops, corporate office and Individuals as well in Hyderabad who sell beds and custom woodwork and want their customers to know wood choices and prices upfront.',
  },
  {
    question: 'What exactly do you set up?',
    answer:
      'I build a one page site where your beds are shown with wood choices and a price range, plus a short form that takes the customer\'s name, phone and the design they liked. Behind it sits a small tool that works out the wood and a money estimate for any bed typed in.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'It is agreed on the call, depending on your current bed designs, catalog details, and wood varieties.',
  },
  {
    question: 'What does it cost?',
    answer:
      'The exact price is shown in the How we start section above, and we confirm all details on our initial call.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a 20 minute call using the booking link on this page so we can talk through your business and plan your setup.',
  },
];

export const QuestionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-14 sm:mb-18 text-center">
        <p className="text-xs font-semibold tracking-wide uppercase text-[#0F6B6B] mb-3">
          Clarity
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#14161A] tracking-tight">
          Questions
        </h2>
      </div>

      <div className="divide-y divide-[#14161A]/12 border-t border-b border-[#14161A]/12">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-6 sm:py-8">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8B5E3C]"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-xl sm:text-2xl md:text-[28px] leading-tight text-[#14161A] group-hover:text-[#8B5E3C] transition-colors">
                  {faq.question}
                </span>

                {/* Plus that turns into a cross (45 deg rotation) */}
                <motion.span
                  animate={shouldReduceMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="shrink-0 w-8 h-8 rounded-full border border-[#14161A]/20 flex items-center justify-center text-lg text-[#14161A] select-none"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-base sm:text-lg text-[#14161A]/80 font-sans leading-relaxed max-w-[65ch]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
