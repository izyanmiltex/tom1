import React, { useRef, useState, useEffect } from 'react';

export interface ParallaxCardProps {
  imageUrl: string;
  category: string;
  targetId: string;
  title: string;
  description: string;
  buttonText: string;
  kicker?: string;
  isWide?: boolean;
  imagePosition?: string;
  onSelectCategory?: (category: string) => void;
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({
  imageUrl,
  category,
  targetId,
  title,
  description,
  buttonText,
  kicker,
  isWide = false,
  onSelectCategory,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const lastShiftRef = useRef(0);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
      },
      { rootMargin: '150px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!isIntersectingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
              const totalScrollDistance = windowHeight + rect.height;
              const currentProgress = (windowHeight - rect.top) / totalScrollDistance;
              const shift = Math.round(((currentProgress - 0.5) * 80) * 10) / 10;
              if (Math.abs(shift - lastShiftRef.current) >= 1.5) {
                lastShiftRef.current = shift;
                setOffsetY(shift);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`relative w-full ${
        isWide
          ? 'h-[95vh] sm:h-[110vh] lg:h-[125vh] min-h-[680px] sm:min-h-[820px] lg:min-h-[960px]'
          : 'h-[90vh] sm:h-[105vh] lg:h-[120vh] min-h-[640px] sm:min-h-[760px] lg:min-h-[900px]'
      } flex flex-col justify-start group cursor-pointer bg-[#0B1F12] select-none`}
    >
      {/* 1. End-to-End Full Size Parallax Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-x-0 -top-[7%] h-[114%] w-full bg-cover bg-center filter brightness-[0.88] contrast-[1.05] will-change-transform group-hover:scale-[1.02] transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `url("${imageUrl}")`,
            transform: `translate3d(0, ${offsetY}px, 0)`,
          }}
        />
        {/* Vignette Gradient Overlay with Deep Neutral Black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/85 pointer-events-none" />
      </div>

      {/* 2. Sticky Text: Pins at top-20 / top-24 comfortably below fixed header while scrolling down */}
      <div className="sticky top-20 sm:top-24 md:top-28 z-10 p-7 sm:p-10 lg:p-14 w-full max-w-xl pointer-events-auto h-fit self-start">
        <h2
          className="text-white drop-shadow-md mb-2 sm:mb-3 font-normal tracking-[0.02em] capitalize"
          style={{
            fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
            fontSize: isWide ? 'clamp(40px, 5.5vw, 68px)' : 'clamp(36px, 4.5vw, 54px)',
            lineHeight: '1.08',
          }}
        >
          {title}
        </h2>

        <p
          className={`text-white/90 ${
            isWide ? 'text-[15px] sm:text-[17px] max-w-xl mb-5' : 'text-[13px] sm:text-[15px] max-w-md mb-4'
          } font-normal leading-relaxed`}
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
        >
          {description}
        </p>

        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="inline-flex items-center text-white border-b-2 border-white pb-1 hover:text-[#A2D4B1] hover:border-[#A2D4B1] transition-colors uppercase tracking-[0.2em] text-xs font-semibold cursor-pointer"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
            }}
          >
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface SectionPoloHeritageProps {
  onSelectCategory?: (category: string) => void;
  onShopMen?: () => void;
  onShopWomen?: () => void;
}

export const SectionPoloHeritage: React.FC<SectionPoloHeritageProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="category-cards-section" className="w-full bg-white p-2 sm:p-4 space-y-2 sm:space-y-4">
      
      {/* 1. First Row: 2 Columns - Bridles & Halters */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
        <ParallaxCard
          imageUrl="https://izyanmiltex.com/bridles.avif"
          category="bridles"
          targetId="equestrian-products-section"
          title="Bridles"
          description="Anatomically shaped headpieces with soft leather padding and rust-free stainless steel hardware."
          buttonText="Bridle Collection"
          onSelectCategory={onSelectCategory}
        />

        <ParallaxCard
          imageUrl="https://izyanmiltex.com/halters.webp"
          category="halters"
          targetId="equestrian-products-section"
          title="Halters"
          description="Double-layered full-grain leather halters reinforced with solid brass buckles and adjustable nosebands."
          buttonText="Halter Collection"
          onSelectCategory={onSelectCategory}
        />
      </div>

      {/* 2. Middle Row: 1 Column Full Width - Saddlery */}
      <ParallaxCard
        imageUrl="https://izyanmiltex.com/saddlery"
        category="saddles"
        targetId="equestrian-products-section"
        title="Saddlery"
        description="Master-crafted dressage, jumping, and all-purpose saddles built on flexible trees with French and Italian calfskin leather."
        buttonText="Explore Saddlery"
        isWide={true}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. Third Row: 2 Columns - Saddle Pads & Riding Wear */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
        <ParallaxCard
          imageUrl="https://aryezmiltex.com/saddlepad3"
          category="saddle-pads"
          targetId="equestrian-products-section"
          title="Saddle Pads"
          description="Ergonomic quilted cotton and wool-lined pads designed for optimal shock absorption and wither clearance."
          buttonText="Saddle Pad Collection"
          onSelectCategory={onSelectCategory}
        />

        <ParallaxCard
          imageUrl="https://aryezmiltex.com/show%20acket%201"
          category="show-jackets"
          targetId="garments-products-section"
          title="Riding Wear"
          description="Performance competition jackets, four-way stretch breeches, and technical apparel tailored for riders."
          buttonText="Riding Wear Collection"
          onSelectCategory={onSelectCategory}
        />
      </div>

    </section>
  );
};
