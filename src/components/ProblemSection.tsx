import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'motion/react';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress, shouldReduceMotion }) => {
  const start = index / total;
  const end = Math.min(1, (index + 1) / total);
  
  // Transition opacity from muted cream (0.22) to full cream (1.0)
  const opacity = useTransform(progress, [start, end], [0.22, 1]);

  if (shouldReduceMotion) {
    return <span className="inline-block mr-[0.25em] text-[#F6F1E7]">{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.25em] text-[#F6F1E7] transition-opacity duration-150"
    >
      {word}
    </motion.span>
  );
};

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 40%'],
  });

  const sentence =
    'You spend your evening answering the same questions about wood varieties and bed prices again and again, while your buyers wait, lose patience, and look elsewhere before you finish typing your reply.';
  const words = sentence.split(' ');

  return (
    <section
      ref={containerRef}
      data-ink="true"
      className="relative w-full bg-[#14161A] text-[#F6F1E7] py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Real Film Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#8B5E3C] mb-8">
          The Problem
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.25] tracking-tight text-balance">
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </h2>
      </div>
    </section>
  );
};
