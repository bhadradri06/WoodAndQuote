import React, { useState } from 'react';

interface BrandLogoProps {
  onInk?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  onInk = false,
  className = '',
  size = 'lg',
}) => {
  const [imgError, setImgError] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);

  const sources = [
    '/PICTURES/logo.png',
    '/logo.png',
    '/pictures/logo.png',
    '/assets/aistudio/logo.png',
  ];

  const handleImgError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(srcIndex + 1);
    } else {
      setImgError(true);
    }
  };

  const sizeClasses = {
    sm: 'h-9 sm:h-11 max-w-[220px]',
    md: 'h-11 sm:h-13 max-w-[280px]',
    lg: 'h-12 sm:h-15 md:h-16 lg:h-18 max-w-[290px] sm:max-w-[360px] md:max-w-[400px]',
  }[size];

  const logoGraphic = !imgError ? (
    <img
      src={sources[srcIndex]}
      alt="Wood & Quote logo - Handcrafted wood bed with price quote tag"
      onError={handleImgError}
      className={`${sizeClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.02] filter contrast-[1.04]`}
    />
  ) : (
    <span className="flex items-center gap-3 font-serif text-xl tracking-tight font-semibold text-[#14161A]">
      <span className="w-8 h-8 rounded-lg bg-[#0F6B6B] text-[#F6F1E7] inline-flex items-center justify-center text-sm font-serif italic font-bold shadow-xs">
        W
      </span>
      <span>Wood &amp; Quote</span>
    </span>
  );

  if (onInk) {
    return (
      <div
        className={`inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-[#F6F1E7] shadow-md border border-[#14161A]/10 ${className}`}
      >
        {logoGraphic}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center py-1 ${className}`}>
      {logoGraphic}
    </div>
  );
};
