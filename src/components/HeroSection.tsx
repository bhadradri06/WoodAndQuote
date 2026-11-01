import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BRAND_DETAILS } from '../types.ts';
import { RichImagePanel } from './RichImagePanel.tsx';
import { MagneticButton } from './MagneticButton.tsx';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Arch picture moves a little slower than the page (parallax)
  const archY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0px', '0px'] : ['0px', '70px']
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 mt-10 lg:mt-0 flex flex-col items-start">
          {/* Target Audience Line */}
          <div className="overflow-hidden mb-5">
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#0F6B6B]"
            >
              For Furniture shops, corporate office and Individuals as well in Hyderabad
            </motion.p>
          </div>

          {/* Headline in very large serif type */}
          <h1 className="font-serif text-[#14161A] text-[44px] leading-[1.02] sm:text-[62px] lg:text-[76px] xl:text-[84px] tracking-tight font-normal mb-6 text-balance">
            <span className="block overflow-hidden">
              <motion.span
                initial={shouldReduceMotion ? {} : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Know the wood.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={shouldReduceMotion ? {} : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Know the <span className="italic font-serif text-[#8B5E3C]">price</span>.
              </motion.span>
            </span>
          </h1>

          {/* Plain sentence explaining what is set up */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#14161A]/85 leading-[1.65] max-w-[62ch] mb-9 font-sans"
          >
            I build a one page site where your beds are shown with wood choices and a price range, plus a short form that takes the customer's name, phone and the design they liked, with a small tool behind it that works out the wood and a money estimate for any bed you type in.
          </motion.p>

          {/* CTAs: Book a 30 minute call & WhatsApp */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              href={BRAND_DETAILS.bookingLink}
              variant="accent"
              className="w-full sm:w-auto text-center"
            >
              Book a 30 minute call
            </MagneticButton>

            <a
              href={BRAND_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-[#14161A] hover:text-[#0F6B6B] transition-colors whitespace-nowrap"
            >
              <svg
                className="w-5 h-5 fill-current text-[#0F6B6B]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.777.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.181-2.585-5.766-5.767-5.766zm3.385 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.072-2.18-.549-1.899-.787-3.123-2.73-3.218-2.855-.095-.125-.769-1.023-.769-1.95 0-.927.487-1.382.66-1.574.173-.193.38-.241.507-.241.127 0 .254.002.365.007.118.006.275-.045.431.33.162.391.554 1.353.604 1.453.05.101.083.219.017.35-.067.132-.1.213-.199.329-.098.115-.207.257-.296.345-.099.098-.202.204-.087.401.115.197.512.845 1.097 1.366.753.672 1.388.88 1.585.978.197.099.313.083.428-.05.116-.132.495-.575.627-.773.132-.197.265-.164.444-.099.18.066 1.144.54 1.341.639.197.098.33.148.378.23.049.082.049.477-.095.882z" />
              </svg>
              <span>Message me on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Arch Photo Frame */}
        <div className="lg:col-span-5 w-full flex justify-center pb-6 sm:pb-0">
          <motion.div
            style={{ y: archY }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
          >
            {/* Arch frame with entry clip-wipe on the photo only */}
            <motion.div
              initial={shouldReduceMotion ? {} : { clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/5.4] rounded-t-[140px] sm:rounded-t-[180px] lg:rounded-t-[220px] rounded-b-none overflow-hidden"
            >
              <RichImagePanel
                src={BRAND_DETAILS.images.me}
                alt="Bhadra Kommu, founder of Wood & Quote"
                label="BK"
                arch={true}
                className="w-full h-full border border-[#14161A]/10"
              />
            </motion.div>

            {/* Floating corner card - placed outside clipPath so it is fully visible and never cut off */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-3 right-3 sm:-bottom-4 sm:-right-4 z-30 bg-white/95 border-2 border-[#14161A]/15 rounded-2xl px-5 py-3.5 shadow-xl backdrop-blur-md flex items-center gap-3.5 max-w-[calc(100%-1.5rem)]"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#8B5E3C] ring-4 ring-[#8B5E3C]/25 shrink-0" />
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#14161A] leading-tight">
                  Bhadra Kommu
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-[#0F6B6B] tracking-tight mt-0.5 whitespace-nowrap">
                  Founder of Wood &amp; Quote
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
