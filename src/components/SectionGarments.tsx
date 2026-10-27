import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import { CatalogProductDetail } from './ProductDetailPage';

interface SectionGarmentsProps {
  onCardClick?: (category: string) => void;
  onSelectProduct?: (product: CatalogProductDetail) => void;
}

export const SectionGarments: React.FC<SectionGarmentsProps> = ({ onCardClick, onSelectProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const isMovedRef = useRef(false);

  const baseCards = [
    {
      id: 'sh-belt-01',
      image: 'https://aryezmiltex.com/belt1',
      title: 'Stirrup Buckle Bridle Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: '1.5-inch English bridle leather, solid cast brass miniature stirrup buckle, hand-burnished and beveled edges, numbered sizing holes.',
      description: 'Equestrian lifestyle staple crafted from heavy vegetable-tanned hide. The iconic stirrup buckle pays homage to classic saddle craft.',
      linkText: 'VIEW BELT',
    },
    {
      id: 'sh-belt-02',
      image: 'https://aryezmiltex.com/belt2',
      title: 'Hand-Tooled Western Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: 'Deep hand-carved floral and leaf pattern, hand-dyed antique two-tone finish, engraved western silver-plated removable buckle set.',
      description: 'Each belt is individually hand-tooled by master leather artisans. Perfect for jeans, riding breeches, or upscale western attire.',
      linkText: 'VIEW BELT',
    },
    {
      id: 'sh-belt-03',
      image: 'https://aryezmiltex.com/belt3',
      title: 'Argentine Embroidered Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: 'Thick brown saddle leather, hand-embroidered pampa diamond wax threads in navy/cream, brushed brass buckle, 1.4-inch width.',
      description: 'Iconic polo heritage belt meticulously hand-woven in Argentina. Takes several hours of hand-embroidery per belt to complete.',
      linkText: 'VIEW BELT',
    },
    {
      id: 'sh-belt-04',
      image: 'https://aryezmiltex.com/belt4',
      title: 'Hair-On Cowhide Western Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: 'Natural speckled hair-on cowhide inlay, alligator-embossed leather border with contrast whipstitch, crystal studded silver buckle.',
      description: 'Striking texture contrast that catches the light. Built with heavy harness backing for lifetime durability.',
      linkText: 'VIEW BELT',
    },
    {
      id: 'sh-belt-05',
      image: 'https://aryezmiltex.com/belt5',
      title: 'Snaffle Bit Reversible Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: 'Reversible black/cognac French calfskin leather, polished gold-tone eggbutt snaffle bit buckle, 1.25-inch width.',
      description: 'Chic dual-sided luxury belt designed for breeches or tailored trousers. Easily rotates between classic black and rich cognac.',
      linkText: 'VIEW BELT',
    },
    {
      id: 'sh-belt-06',
      image: 'https://aryezmiltex.com/belt6',
      title: 'Rawhide Braided Tooled Belt',
      category: 'belt',
      categoryLabel: 'Belts',
      specs: 'Hand-braided natural rawhide center chevron weave, tooled leather billet and buckle ends, antiqued bronze floral buckle.',
      description: 'Textured western craftsmanship highlighting traditional rawhide braiding and deep floral tooling.',
      linkText: 'VIEW BELT',
    },
  ];

  // 3 sets of cards for completely seamless infinite loop with high rendering efficiency
  const cards = [...baseCards, ...baseCards, ...baseCards];
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Continuous slide towards the left - only active when visible
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isVisible) return;

    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }

    let animationFrameId: number;

    const step = () => {
      if (!isDragging && !isHovered && el) {
        // Sliding towards the left: gentle continuous motion
        el.scrollLeft += 0.8;

        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0 && el.scrollLeft >= setWidth * 2) {
          el.scrollLeft -= setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isVisible, isHovered]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const setWidth = el.scrollWidth / 3;
    if (setWidth <= 0) return;

    if (el.scrollLeft >= setWidth * 2) {
      el.scrollLeft -= setWidth;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += setWidth;
    }
  };

  const nudgeLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const nudgeRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 360, behavior: 'smooth' });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    isMovedRef.current = false;
    startXRef.current = e.pageX;
    scrollLeftStartRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.pageX - startXRef.current;
    if (Math.abs(dx) > 5) {
      isMovedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - dx;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="garments-products-section"
      ref={containerRef}
      className="w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-t border-neutral-200 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      {/* Section Header */}
      <div className="w-full px-6 sm:px-10 lg:px-12 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span
            className="uppercase tracking-[0.25em] text-[#1E5631] text-xs font-semibold block mb-2"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
            }}
          >
            SELLERIA LUXURY ARTISAN LEATHER
          </span>
          <h2
            className="text-black font-normal tracking-[0.02em] capitalize"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              lineHeight: '1.15',
            }}
          >
            Bestselling Belts
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={nudgeLeft}
            aria-label="Scroll garments left"
            className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#1E5631] bg-white hover:bg-[#F0F6F2] flex items-center justify-center transition-all cursor-pointer shadow-xs text-black hover:text-[#1E5631]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nudgeRight}
            aria-label="Scroll garments right"
            className="w-10 h-10 rounded-full bg-[#1E5631] hover:bg-[#164225] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Infinite Carousel Track */}
      <div className="relative w-full overflow-hidden select-none">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-6 sm:px-10 scrollbar-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => {
                if (!isMovedRef.current) {
                  if (onSelectProduct) {
                    onSelectProduct({
                      id: card.id,
                      name: card.title,
                      category: card.category,
                      categoryLabel: card.categoryLabel,
                      image: card.image,
                      specs: card.specs,
                      description: card.description,
                    });
                  } else if (onCardClick) {
                    onCardClick(card.category);
                  }
                }
              }}
              className="flex-none w-[280px] sm:w-[320px] md:w-[360px] group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm group-hover:shadow-md transition-shadow duration-500 rounded-sm">
                <img
                  referrerPolicy="no-referrer"
                  src={card.image}
                  alt={`Selleria Luxury ${card.title}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3
                    className="text-white text-2xl sm:text-[26px] font-normal tracking-[0.02em] mb-3"
                    style={{
                      fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                    }}
                  >
                    {card.title}
                  </h3>

                  <button
                    className="inline-flex items-center text-white border-b-2 border-white pb-0.5 hover:text-[#A2D4B1] hover:border-[#A2D4B1] transition-colors uppercase tracking-[0.2em] text-[11px] font-semibold cursor-pointer"
                    style={{
                      fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                    }}
                  >
                    <span>{card.linkText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
