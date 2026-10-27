import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ExploreCard {
  id: string;
  title: string;
  image: string;
  category: string;
  alt: string;
}

interface SectionMoreToExploreProps {
  onCardClick?: (category: string) => void;
}

export const SectionMoreToExplore: React.FC<SectionMoreToExploreProps> = ({ onCardClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidthPct, setIndicatorWidthPct] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const isMovedRef = useRef(false);

  const cards: ExploreCard[] = [
    {
      id: 'dressage-saddle',
      title: 'Dressage Saddle',
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1400&auto=format&fit=crop',
      category: 'accessories',
      alt: 'Selleria Luxury Handcrafted Dressage Saddle',
    },
    {
      id: 'anatomical-bridle',
      title: 'Anatomical Bridle',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop',
      category: 'accessories',
      alt: 'Selleria Luxury Ergonomic Leather Bridle',
    },
    {
      id: 'leather-halter',
      title: 'Leather Halter',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1400&auto=format&fit=crop',
      category: 'accessories',
      alt: 'Selleria Luxury Vegetable Tanned Leather Halter',
    },
    {
      id: 'quilted-pad',
      title: 'Quilted Saddle Pad',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1400&auto=format&fit=crop',
      category: 'accessories',
      alt: 'Selleria Luxury Performance Quilted Saddle Pad',
    },
    {
      id: 'jumping-tack',
      title: 'Jumping Saddle & Tack',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1400&auto=format&fit=crop',
      category: 'accessories',
      alt: 'Selleria Luxury Close Contact Jumping Saddle and Leather Tack',
    },
  ];

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollRight(el.scrollLeft < maxScroll - 10);

    if (maxScroll > 0) {
      const progress = Math.min(1, Math.max(0, el.scrollLeft / maxScroll));
      setScrollProgress(progress);
      const visibleRatio = el.clientWidth / el.scrollWidth;
      setIndicatorWidthPct(Math.max(18, Math.min(40, visibleRatio * 100)));
    } else {
      setScrollProgress(0);
      setIndicatorWidthPct(100);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>('.explore-card')?.offsetWidth || 340;
    const scrollAmount = (cardWidth + 16) * 1.5;
    el.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
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

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    const track = e.currentTarget;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, clickX / rect.width));
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: pct * maxScroll, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-t border-neutral-200 overflow-hidden">
      <div className="w-full pl-6 sm:pl-10 md:pl-14 lg:pl-16 pr-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Static Column: Editorial Heading & Enhanced Description */}
          <div className="w-full lg:w-[320px] xl:w-[360px] flex-none flex flex-col justify-start self-start pr-6 sm:pr-8 pt-2">
            <div>
              <span
                className="uppercase tracking-[0.25em] text-neutral-500 text-xs font-medium block mb-2"
                style={{
                  fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                }}
              >
                CURATED SELECTION
              </span>
              <h2
                className="break-words font-normal text-black"
                style={{
                  fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                  fontSize: 'clamp(38px, 5vw, 62px)',
                  lineHeight: '1.15',
                }}
              >
                Popular<br />Products
              </h2>

              <p
                className="font-normal mt-4 sm:mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed"
                style={{
                  fontFamily: '"Times New Roman", Times, Georgia, serif',
                }}
              >
                Engineered for performance and endurance, our signature equestrian collection
                represents the highest pinnacle of leather craftsmanship, anatomic comfort,
                and competition reliability.
              </p>
            </div>
          </div>

          {/* Right Column: Carousel Track with 5 Equestrian Products */}
          <div className="relative flex-1 w-full overflow-hidden select-none pr-6 sm:pr-10 md:pr-14 lg:pr-16">
            <div
              ref={scrollRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={`flex gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-none snap-x ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => {
                    if (!isMovedRef.current && onCardClick) {
                      onCardClick(card.category);
                    }
                  }}
                  className="explore-card flex-none w-[270px] sm:w-[310px] md:w-[340px] snap-start group cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-xs group-hover:shadow-md transition-shadow duration-500 rounded-sm">
                    <img
                      referrerPolicy="no-referrer"
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-0 right-0 px-5 text-center z-10">
                      <span
                        className="uppercase tracking-[0.2em] text-white/70 text-[10px] font-medium block mb-1"
                        style={{
                          fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                        }}
                      >
                        SELLERIA LUXURY
                      </span>
                      <h3
                        className="text-white text-xl sm:text-2xl font-normal tracking-[0.02em] drop-shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]"
                        style={{
                          fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Navigation Arrows */}
            {canScrollLeft && (
              <button
                onClick={() => handleScroll('left')}
                aria-label="Previous products"
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-black border border-neutral-200 shadow-lg items-center justify-center hover:bg-white hover:scale-105 transition-all z-20 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => handleScroll('right')}
                aria-label="Next products"
                className="hidden sm:flex absolute right-8 lg:right-18 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-black border border-neutral-200 shadow-lg items-center justify-center hover:bg-white hover:scale-105 transition-all z-20 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            )}

            {/* Timeline Scrubber Indicator */}
            <div className="w-full mt-4 flex items-center pr-6 sm:pr-10 md:pr-14 lg:pr-16">
              <div
                onClick={handleTimelineClick}
                className="relative w-full h-[3px] bg-neutral-200 cursor-pointer group"
                role="progressbar"
                aria-label="Carousel scroll position"
                aria-valuenow={Math.round(scrollProgress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="absolute top-0 bottom-0 bg-black transition-all duration-150 group-hover:bg-neutral-800"
                  style={{
                    left: `${scrollProgress * (100 - indicatorWidthPct)}%`,
                    width: `${indicatorWidthPct}%`,
                  }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
