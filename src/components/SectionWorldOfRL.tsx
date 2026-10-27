import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionWorldOfRLProps {
  onCardClick: (category: string) => void;
}

export const SectionWorldOfRL: React.FC<SectionWorldOfRLProps> = ({ onCardClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.group') as HTMLElement;
      const scrollAmount = firstCard ? firstCard.offsetWidth + 16 : 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'goodwood',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'RALPH LAUREN',
      title: 'Goodwood',
      description: 'Refined tailoring and classic motoring style',
      linkText: 'SHOP NOW',
      category: 'men',
    },
    {
      id: 'outerwear-men',
      image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'POLO RALPH LAUREN',
      title: 'Outerwear',
      description: 'Iconic layers designed for the elements',
      linkText: 'SHOP MEN',
      category: 'men',
    },
    {
      id: 'outerwear-women',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'POLO RALPH LAUREN',
      title: 'Outerwear',
      description: 'Chic silhouettes and timeless textures',
      linkText: 'SHOP WOMEN',
      category: 'women',
    },
    {
      id: 'rl-888',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'RALPH LAUREN',
      title: 'The RL 888',
      description: 'The defining modern icon of craftsmanship',
      linkText: 'SHOP NOW',
      category: 'accessories',
    },
    {
      id: 'home-collection',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'RALPH LAUREN HOME',
      title: 'Saddlebrook Home',
      description: 'Heirloom textiles and artisanal comfort',
      linkText: 'EXPLORE HOME',
      category: 'home',
    },
    {
      id: 'purple-label-collection',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      subBrand: 'RALPH LAUREN PURPLE LABEL',
      title: 'Sartorial Elegance',
      description: 'Peak lapels and bespoke Italian wools',
      linkText: 'DISCOVER MORE',
      category: 'men',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white w-full overflow-hidden">
      {/* Section Header: Full Width with generous margins */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          {/* Heading: Reduced by 20% from 53.5237px (53.5237px * 0.80 = 42.819px) */}
          <h2
            className="mb-2 tracking-normal font-normal break-words"
            style={{
              fontFamily: '"Times New Roman", Times, RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              fontSize: '42.819px',
              lineHeight: '1.1',
              fontWeight: 400,
              color: '#000000',
            }}
          >
            World of RL
          </h2>

          {/* Description: 22.8px, line-height proportional, #000000 */}
          <p
            className="max-w-2xl font-normal mt-2 sm:mt-3"
            style={{
              fontFamily: '"Times New Roman", Times, RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              fontSize: '22.8px',
              lineHeight: 'normal',
              fontWeight: 400,
              color: '#000000',
            }}
          >
            Explore seasonal collections, iconic accessories, and more
          </p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center space-x-3 self-end md:self-auto">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous cards"
            className="w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next cards"
            className="w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-Width Slider Grids: Edge-to-edge scrolling track with 30% increased card size */}
      <div className="w-full">
        <div
          ref={scrollRef}
          className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-6 scrollbar-none snap-x px-6 sm:px-10 md:px-14 lg:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardClick(card.category)}
              className="w-[calc((100vw-60px)/3.5)] sm:w-[calc((100vw-88px)/3.5)] md:w-[calc((100vw-104px)/3.5)] lg:w-[calc((100vw-112px)/3.5)] min-w-[140px] flex-none snap-start cursor-pointer group"
            >
              {/* Card Container: Aspect ratio adjusted to increase card height by 10% */}
              <div className="relative aspect-[15/22] sm:aspect-[8/11] w-full overflow-hidden bg-gray-100">
                <img
                  referrerPolicy="no-referrer"
                  src={card.image}
                  alt={`${card.subBrand} ${card.title}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Ambient dark gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Card Content Overlay */}
                <div className="absolute bottom-5 sm:bottom-6 left-4 sm:left-5 right-4 sm:right-5 z-10">
                  {/* Subtitle / Brand: Increased by 15% from 7.68px (7.68px * 1.15 = 8.832px) */}
                  <span
                    className="font-rl-grid-subtitle uppercase block mb-1 drop-shadow-sm truncate"
                    style={{
                      fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
                      fontSize: '8.832px',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      color: '#ffffff',
                      letterSpacing: '0.18em',
                    }}
                  >
                    {card.subBrand}
                  </span>

                  {/* Heading: Increased by 10% from 36.4px (36.4px * 1.1 = 40.04px) */}
                  <h3
                    className="font-rl-grid-heading text-white drop-shadow-md mb-3 truncate"
                    style={{
                      fontFamily: '"Times New Roman", Times, RL_DroidKufi, LeJeuneDeck-Regular, Georgia, serif',
                      fontSize: '40.04px',
                      lineHeight: '46px',
                      fontWeight: 400,
                      color: '#ffffff',
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Button: Reduced font size */}
                  <div>
                    <span
                      className="font-rl-grid-button uppercase relative pb-0.5 border-b border-white hover:opacity-75 transition-opacity inline-block"
                      style={{
                        fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                        fontSize: '10.2px',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#ffffff',
                        letterSpacing: '0.18em',
                      }}
                    >
                      {card.linkText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
