import React, { useRef, useEffect } from 'react';

export interface HeroLakeSectionProps {
  topSubheading?: string | null;
  heading?: string;
  belowSubheading?: string;
  ctaText?: string;
  showCta?: boolean;
  videoUrl?: string;
  onExplore?: () => void;
}

export const HeroLakeSection: React.FC<HeroLakeSectionProps> = ({
  topSubheading = 'RIDE MORE, WORRY LESS',
  heading = 'Premium Equestrian Equipment for Global Markets',
  belowSubheading = 'WHERE CRAFTSMANSHIP MEETS LUXURY',
  ctaText = 'VIEW ALL PRODUCTS',
  showCta = true,
  videoUrl = 'https://izyanmiltex.com/saddle.mp4',
  onExplore,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Set reduced playback speed (0.6x for elegant, smooth cinematic pacing)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.6;
    }
  }, []);

  const handleApplyPlaybackRate = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  };

  return (
    <section className="relative w-full h-[93vh] min-h-[585px] max-h-[990px] overflow-hidden bg-black select-none flex items-center justify-center">
      {/* Background Video of Premium Handcrafted Leather Horse Saddle */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          key={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={handleApplyPlaybackRate}
          onPlay={handleApplyPlaybackRate}
          poster="/assets/equestrian-saddle.jpg"
          className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.1] scale-[1.02]"
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
          {/* Fallback image if video cannot load */}
          <img
            referrerPolicy="no-referrer"
            src="/assets/equestrian-saddle.jpg"
            alt="Handcrafted Leather Horse Saddle Craftsmanship"
            className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.1]"
          />
        </video>

        {/* Cinematic Vignette & Deep Pure Black Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/30 to-black/85 pointer-events-none" />
      </div>

      {/* Hero Content: Centered Heading, Subheading, Description, Underlined CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16 sm:pt-24">
        
        {/* Top Subheading (if provided) */}
        {topSubheading && (
          <span
            className="uppercase tracking-[0.32em] text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block text-xs sm:text-sm font-semibold"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
            }}
          >
            {topSubheading}
          </span>
        )}

        {/* Main Headline */}
        <h1
          className="text-white font-normal tracking-[0.02em] sm:tracking-[0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight mb-3 sm:mb-4 max-w-4xl mx-auto capitalize"
          style={{
            fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
            fontSize: 'clamp(28px, 4.8vw, 56px)',
          }}
        >
          {heading}
        </h1>

        {/* Below Subheading */}
        {belowSubheading && (
          <p
            className="uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-white/80 tracking-[0.24em] text-[11px] sm:text-xs md:text-sm font-medium mb-6 sm:mb-8"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
            }}
          >
            {belowSubheading}
          </p>
        )}

        {/* Primary CTA (if enabled) */}
        {showCta && (
          <div className="relative z-30 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onExplore) {
                  onExplore();
                } else {
                  window.location.hash = 'products';
                }
              }}
              className="uppercase tracking-[0.24em] text-white/90 hover:text-white underline underline-offset-8 decoration-white/70 hover:decoration-white decoration-1 hover:decoration-2 transition-all duration-300 font-semibold text-xs sm:text-sm bg-transparent cursor-pointer py-2.5 px-3 focus:outline-none"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
              }}
            >
              {ctaText}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
