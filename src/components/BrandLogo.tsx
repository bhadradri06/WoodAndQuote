import React, { useState } from 'react';

interface BrandLogoProps {
  onInk?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ onInk = false, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const [srcIndex, setSrcIndex] = useState(0);
  const sources = ['/PICTURES/logo.png', '/pictures/logo.png', '/logo.png'];

  const handleImgError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(srcIndex + 1);
    } else {
      setImgError(true);
    }
  };

  const logoGraphic = !imgError ? (
    <img
      src={sources[srcIndex]}
      alt="Wood & Quote logo"
      onError={handleImgError}
      className="h-8 w-auto object-contain max-w-[160px]"
    />
  ) : (
    <span className="flex items-center gap-2 font-serif text-lg tracking-tight font-semibold text-[#14161A]">
      <span className="w-5 h-5 rounded-md bg-[#0F6B6B] text-[#F6F1E7] inline-flex items-center justify-center text-xs font-serif italic font-bold">
        W
      </span>
      <span>Wood & Quote</span>
    </span>
  );

  if (onInk) {
    return (
      <div className={`inline-flex items-center px-3 py-1.5 rounded-xl bg-[#F6F1E7] shadow-sm border border-[#F6F1E7]/20 ${className}`}>
        {logoGraphic}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      {logoGraphic}
    </div>
  );
};
