import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'accent' | 'pill' | 'ink' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  children,
  variant = 'accent',
  className = '',
  onClick,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion) return;
    const element = ref.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.28;
    const y = (clientY - (top + height / 2)) * 0.28;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'inline-flex items-center justify-center font-sans tracking-tight transition-colors duration-200 select-none cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    // Accent button: Warm Walnut background with ink text, as instructed ("Text on the accent is ink")
    accent:
      'bg-[#8B5E3C] text-[#14161A] font-semibold text-base sm:text-lg px-7 py-3.5 rounded-full hover:bg-[#9d6b46] shadow-sm hover:shadow-md focus-visible:outline-[#8B5E3C]',
    // Top bar pill
    pill:
      'bg-[#8B5E3C] text-[#14161A] font-medium text-sm px-5 py-2 rounded-full hover:bg-[#9d6b46] shadow-xs focus-visible:outline-[#8B5E3C]',
    // Ink button
    ink:
      'bg-[#14161A] text-[#F6F1E7] font-semibold text-base px-7 py-3.5 rounded-full hover:bg-[#23262B] shadow-sm focus-visible:outline-[#14161A]',
    // Hairline outline button
    outline:
      'border border-[#14161A]/20 text-[#14161A] font-medium text-base px-6 py-3 rounded-full hover:border-[#14161A]/50 hover:bg-[#14161A]/5 focus-visible:outline-[#14161A]',
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
};
