import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { CatalogProductDetail } from './ProductDetailPage';

interface SectionHaltersAndBridlesProps {
  onCardClick?: (category: string) => void;
  onSelectProduct?: (product: CatalogProductDetail) => void;
}

export const SectionHaltersAndBridles: React.FC<SectionHaltersAndBridlesProps> = ({ onCardClick, onSelectProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const isMovedRef = useRef(false);

  const baseCards = [
    {
      id: 'sh-bridle-03',
      image: 'https://aryezmiltex.com/birdle1',
      title: 'Monoflap Dressage Bridle',
      category: 'bridles',
      categoryLabel: 'Bridles',
      specs: 'Ergonomic pressure-relief headpiece, curved channel-set Swarovski crystal browband, wide patent leather crank noseband, solid stainless steel buckles.',
      description: 'Engineered for grand prix dressage with an anatomical crownpiece that respects delicate nerve passages. Patent noseband creates stunning ring presence.',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'sh-halter-01',
      image: 'http://aryezmiltex.com/halter1',
      title: 'Siena Braided Halter Set',
      category: 'halters',
      categoryLabel: 'Halters',
      specs: 'Hand-braided vegetable-tanned leather crown and noseband, matching terracotta lead rope with brass bull snap, heavy-duty solid brass hardware, adjustable chin strap.',
      description: 'Crafted with heritage leather braiding and solid brass fittings, this matching terracotta halter and lead set exemplifies artisanal elegance for championship presentations.',
      linkText: 'VIEW HALTER',
    },
    {
      id: 'sh-bridle-04',
      image: 'https://aryezmiltex.com/birdle2',
      title: 'Elite Padded Crank Bridle',
      category: 'bridles',
      categoryLabel: 'Bridles',
      specs: 'Full-grain English leather, ultra-plush white calfskin padded lining, Swedish crank closure with chin pad, rounded cheeks.',
      description: 'Provides sublime facial comfort and subtle contrast aesthetics. Hand-stitched with 12 stitches per inch for generational strength.',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'sh-halter-02',
      image: 'http://aryezmiltex.com/halter2',
      title: 'Grand Prix Shipping Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      specs: 'Full-grain English bridle leather, ultra-soft hypoallergenic fleece lining, dual-crown buckle adjustment, quick-snap throatlatch, polished stainless steel hardware.',
      description: 'Engineered for first-class equine travel and show ring preparation. Plush fleece padding eliminates rub marks while heavyweight leather guarantees enduring strength.',
      linkText: 'VIEW HALTER',
    },
    {
      id: 'sh-bridle-06',
      image: 'https://aryezmiltex.com/birdle4',
      title: 'Mexican Figure-8 Jump Bridle',
      category: 'bridles',
      categoryLabel: 'Bridles',
      specs: 'Figure-8 grackle noseband with real sheepskin center disk, anatomical crownpiece, stainless steel buckles, rubber grip reins.',
      description: 'Designed for show jumpers that pull or cross their jaw. Gives the rider refined control while maintaining uncompromised breathing.',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'sh-halter-03',
      image: 'http://aryezmiltex.com/halter3',
      title: 'Ergonomic Padded Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      specs: 'Contoured ergonomic crownpiece, soft calfskin padded noseband and cheeks, triple-ply reinforced stitching, brushed brass hardware with throat snap.',
      description: 'Designed for everyday barn luxury and turnout comfort. Features an anatomical cutaway poll to alleviate sensitive nerve pressure behind the ears.',
      linkText: 'VIEW HALTER',
    },
    {
      id: 'sh-bridle-07',
      image: 'https://aryezmiltex.com/birdle5',
      title: 'Rolled Leather Double Bridle',
      category: 'bridles',
      categoryLabel: 'Bridles',
      specs: 'Supple hand-rolled leather cheeks and throatlatch, wide anatomical crank noseband, includes two pairs of leather reins (snaffle and curb).',
      description: 'Bespoke master craftsmanship for FEI dressage levels. Delicate rolled leather accentuates equine facial contours without bulk.',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'sh-halter-04',
      image: 'http://aryezmiltex.com/halter4',
      title: 'French Calfskin Show Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      specs: 'Double-stitched vegetable-tanned calfskin, customizable solid brass nameplate, rolled throatlatch, dual-crown adjustment, hand-burnished oil edges.',
      description: 'Championship-ready presentation halter tailored for prestigious sales rings and breed shows. Supple French calfskin offers exquisite hand feel and lasting luster.',
      linkText: 'VIEW HALTER',
    },
    {
      id: 'sh-bridle-08',
      image: 'https://aryezmiltex.com/birdle6',
      title: 'Ergonomic Flash Eventing Bridle',
      category: 'bridles',
      categoryLabel: 'Bridles',
      specs: 'Integrated anatomical crown with flush flash attachment, soft calfskin padded browband, stainless steel hardware, web reins included.',
      description: 'Versatile everyday performance bridle. Contoured crownpiece avoids sensitive ear base pressure during daily schooling.',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'sh-halter-05',
      image: 'http://aryezmiltex.com/halter5',
      title: 'Two-Tone Floral Carved Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      specs: 'Intricate hand-carved floral tooling along noseband and cheeks, heavy harness leather backing, antiqued bronze-finish hardware, adjustable curb strap.',
      description: 'A celebration of traditional western and equestrian leather artistry. Every floral motif is individually carved by master saddlers for distinctive individuality.',
      linkText: 'VIEW HALTER',
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
        // Sliding continuous gentle motion
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
      id="halters-bridles-products-section"
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
            SELLERIA LUXURY ANATOMIC TACK
          </span>
          <h2
            className="text-black font-normal tracking-[0.02em] capitalize"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              lineHeight: '1.15',
            }}
          >
            Bestselling Halters and Bridles
          </h2>
        </div>

        {/* Direction Indicator & Navigation Arrow */}
        <div className="flex items-center gap-3">
          <button
            onClick={nudgeLeft}
            aria-label="Scroll halters and bridles left"
            className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#1E5631] bg-white hover:bg-[#F0F6F2] flex items-center justify-center transition-all cursor-pointer shadow-xs text-black hover:text-[#1E5631]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nudgeRight}
            aria-label="Scroll halters and bridles right"
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
                  onError={(e) => {
                    // Fallback to high quality equestrian tack image if domain is unavailable
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop';
                  }}
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
