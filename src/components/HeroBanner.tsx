import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  onShopCategory: (category: string) => void;
  onExploreStories: () => void;
}

const CAMPAIGNS = [
  {
    id: 'campaign-1',
    subtitle: 'SPRING 2026 CAMPAIGN',
    title: 'An American Odyssey in Elegance',
    description: 'Timeless tailored silhouettes, rich nautical navy hues, and the effortless spirit of classic coastal luxury.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'Shop Men',
    ctaSecondary: 'Shop Women',
    primaryTarget: 'men',
    secondaryTarget: 'women',
  },
  {
    id: 'campaign-2',
    subtitle: 'RALPH LAUREN PURPLE LABEL',
    title: 'The Pinnacle of Sartorial Craftsmanship',
    description: 'Handcrafted in Italy using the world’s most precious fibers, bespoke barathea silk, and sculpted silhouettes.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'Discover Purple Label',
    ctaSecondary: 'View Tailoring',
    primaryTarget: 'men',
    secondaryTarget: 'men',
  },
  {
    id: 'campaign-3',
    subtitle: 'HERITAGE COLLECTION',
    title: 'The Iconic Cable-Knit & The Polo Shirt',
    description: 'Generations of refined comfort. Pure Mongolian cashmere and breathable cotton mesh crafted for enduring style.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'Shop The Icons',
    ctaSecondary: 'Read Story',
    primaryTarget: 'all',
    secondaryTarget: 'story',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onShopCategory, onExploreStories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeCampaign = CAMPAIGNS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  };

  return (
    <section className="relative w-full h-[75vh] min-h-[550px] max-h-[820px] overflow-hidden bg-[#0B1F12]">
      {/* Background Image with subtle zoom animation */}
      {CAMPAIGNS.map((camp, idx) => (
        <div
          key={camp.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            referrerPolicy="no-referrer"
            src={camp.image}
            alt={camp.title}
            className="w-full h-full object-cover object-top scale-105 transition-transform duration-[7000ms] ease-out"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent sm:from-black/70 sm:via-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16 sm:pb-24">
        <div className="max-w-2xl text-white space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#A2D4B1]">
            {activeCampaign.subtitle}
          </p>
          <h1 className="font-serif-brand text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white leading-[1.15]">
            {activeCampaign.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed max-w-xl">
            {activeCampaign.description}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              id="hero-cta-primary-btn"
              onClick={() => onShopCategory(activeCampaign.primaryTarget)}
              className="px-8 py-3.5 bg-white text-[#1E5631] hover:bg-[#1E5631] hover:text-white border border-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-200 shadow-lg cursor-pointer"
            >
              {activeCampaign.ctaPrimary}
            </button>

            <button
              id="hero-cta-secondary-btn"
              onClick={() => {
                if (activeCampaign.secondaryTarget === 'story') {
                  onExploreStories();
                } else {
                  onShopCategory(activeCampaign.secondaryTarget);
                }
              }}
              className="px-8 py-3.5 bg-transparent text-white hover:bg-white/15 border border-white/80 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-200 backdrop-blur-xs cursor-pointer"
            >
              {activeCampaign.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-3 text-white">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="p-2 rounded-full border border-white/40 hover:bg-white/20 transition-colors backdrop-blur-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex space-x-2 px-2">
          {CAMPAIGNS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="p-2 rounded-full border border-white/40 hover:bg-white/20 transition-colors backdrop-blur-xs cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
