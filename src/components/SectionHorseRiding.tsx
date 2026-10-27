import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import { CatalogProductDetail } from './ProductDetailPage';

interface SectionHorseRidingProps {
  onCardClick?: (category: string) => void;
  onSelectProduct?: (product: CatalogProductDetail) => void;
}

export const SectionHorseRiding: React.FC<SectionHorseRidingProps> = ({ onCardClick, onSelectProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const isMovedRef = useRef(false);

  const baseCards = [
    {
      id: 'sh-saddle-01',
      image: 'https://aryezmiltex.com/saddle1',
      title: 'French Dressage Saddle',
      category: 'saddles',
      categoryLabel: 'Saddles',
      specs: 'Deep seated anatomic composite tree, monoflap contour, customized ergonomic knee blocks, vegetable-tanned French calfskin.',
      description: 'Hand-crafted specifically for international grand prix dressage competition. Deep balance point ensures precise pelvis stabilization and seamless leg contact.',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'sh-saddle-02',
      image: 'https://aryezmiltex.com/saddle2',
      title: 'Close-Contact Jump Saddle',
      category: 'saddles',
      categoryLabel: 'Saddles',
      specs: 'Forward-cut flap, molded padded calf knee rolls, shock-absorbing memory foam panels, ultra-durable English hide skirt.',
      description: 'Engineered for superior balance over fences with a close-contact contour allowing maximum freedom through the equine shoulder.',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'sh-saddle-03',
      image: 'https://aryezmiltex.com/saddle3',
      title: 'Monoflap Event Saddle',
      category: 'saddles',
      categoryLabel: 'Saddles',
      specs: 'Monoflap single-billet system, external thigh support blocks, wool-flocked independent panels, full-grain oiled leather.',
      description: 'Designed for demanding cross-country and multi-phase eventing. Direct communication flap with moisture-resistant hand-rubbed finish.',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'sh-saddle-04',
      image: 'https://aryezmiltex.com/saddle4',
      title: 'All-Purpose English Saddle',
      category: 'saddles',
      categoryLabel: 'Saddles',
      specs: 'Semi-deep seat, interchangeable gullet plate system, padded knee rolls with calfskin seat and knee inserts.',
      description: 'The quintessential versatile saddle for schooling, flatwork, and jumping. Balanced tree geometry supports correct rider alignment across disciplines.',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'sh-saddle-05',
      image: 'https://aryezmiltex.com/saddle5',
      title: 'Signature Jumping Saddle',
      category: 'saddles',
      categoryLabel: 'Saddles',
      specs: 'Ultra-light carbon fiber composite tree, square cantle, non-slip textured calf flaps, reinforced stirrup leather keepers.',
      description: 'Championship-tier jumping saddle featuring lightweight construction and instantaneous seat grip in competitive jump-offs.',
      linkText: 'VIEW SADDLE',
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

  // Continuous slide towards the right - only active when visible
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
        // Sliding towards the right - gentle smooth motion
        el.scrollLeft -= 0.8;

        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0 && el.scrollLeft <= 5) {
          el.scrollLeft += setWidth;
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
      id="equestrian-products-section"
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
            SELLERIA LUXURY MASTER SADDLERY
          </span>
          <h2
            className="text-black font-normal tracking-[0.02em] capitalize"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              lineHeight: '1.15',
            }}
          >
            Bestselling Saddles
          </h2>
        </div>

        {/* Direction Indicator & Navigation Arrow */}
        <div className="flex items-center gap-3">
          <button
            onClick={nudgeLeft}
            aria-label="Scroll horse riding equipment left"
            className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#1E5631] bg-white hover:bg-[#F0F6F2] flex items-center justify-center transition-all cursor-pointer shadow-xs text-black hover:text-[#1E5631]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nudgeRight}
            aria-label="Scroll horse riding equipment right"
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
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm group-hover:shadow-md transition-shadow duration-500 rounded-sm">
                <img
                  referrerPolicy="no-referrer"
                  src={card.image}
                  alt={`Selleria Luxury ${card.title}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info */}
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
