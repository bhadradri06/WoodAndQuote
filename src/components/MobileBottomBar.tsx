import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_DETAILS } from '../types.ts';

export const MobileBottomBar: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after hero section has largely scrolled away
      if (window.scrollY > 480) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#F6F1E7]/95 backdrop-blur-md border-t border-[#14161A]/12 px-4 py-3 shadow-lg"
        >
          <a
            href={BRAND_DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 flex items-center justify-center bg-[#8B5E3C] text-[#14161A] font-semibold text-sm rounded-full shadow-xs active:scale-[0.98] transition-transform"
          >
            Book a 20 minute call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
