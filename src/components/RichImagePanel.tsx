import React, { useState } from 'react';

interface RichImagePanelProps {
  src: string;
  alt: string;
  label: string; // e.g., 'BK', '01', '02', '03'
  className?: string;
  arch?: boolean;
  priority?: boolean;
}

export const RichImagePanel: React.FC<RichImagePanelProps> = ({
  src,
  alt,
  label,
  className = '',
  arch = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  // Generate source candidates based on input src
  const fileName = src.split('/').pop() || '';
  const sources = [
    src.startsWith('/PICTURES/') ? src : `/PICTURES/${fileName}`,
    `/pictures/${fileName}`,
    `/${fileName}`,
  ];

  const handleImageError = () => {
    if (currentSrcIndex < sources.length - 1) {
      setCurrentSrcIndex(currentSrcIndex + 1);
    } else {
      setHasError(true);
    }
  };

  // An SVG film grain overlay filter
  const grainOverlay = (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 opacity-5 mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );

  const roundedClasses = arch
    ? 'rounded-t-[140px] sm:rounded-t-[180px] lg:rounded-t-[220px] rounded-b-none'
    : 'rounded-[28px]';

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#14161A] via-[#23262B] to-[#8B5E3C] shadow-lg ${roundedClasses} ${className}`}
    >
      {/* Real Film Grain */}
      {grainOverlay}

      {/* Decorative Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#8B5E3C]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#0F6B6B]/25 blur-3xl"
      />

      {/* Actual image tag */}
      {!hasError && (
        <img
          src={sources[currentSrcIndex]}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={handleImageError}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      )}

      {/* Finished Rich Panel with Huge Outline Serif Type */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none ${
          loaded && !hasError ? 'hidden' : 'flex'
        }`}
      >
        <span
          className="font-serif tracking-tight leading-none text-transparent"
          style={{
            WebkitTextStroke: '1.5px rgba(246, 241, 231, 0.45)',
            fontSize: label.length > 2 ? 'clamp(3rem, 7vw, 5.5rem)' : 'clamp(4.5rem, 11vw, 9rem)',
          }}
        >
          {label}
        </span>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-px w-8 bg-[#8B5E3C]/40" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#F6F1E7]/50 font-medium">
            Wood &amp; Quote
          </span>
          <span className="h-px w-8 bg-[#8B5E3C]/40" />
        </div>
      </div>
    </div>
  );
};
