import React from 'react';

interface SectionBestSellingEquestrianProps {
  onSelectProduct?: (productId: string) => void;
}

export const SectionBestSellingEquestrian: React.FC<SectionBestSellingEquestrianProps> = ({
  onSelectProduct,
}) => {
  const equestrianProducts = [
    {
      id: 'dressage-saddle',
      name: 'Luxury Dressage Saddle',
      subBrand: 'SELLERIA LUXURY',
      image: '/assets/equestrian-saddle.jpg',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'anatomical-bridle',
      name: 'Anatomical Leather Bridle',
      subBrand: 'SELLERIA LUXURY',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',
      linkText: 'VIEW BRIDLE',
    },
    {
      id: 'jump-saddle',
      name: 'Close-Contact Jump Saddle',
      subBrand: 'SELLERIA LUXURY',
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1200&auto=format&fit=crop',
      linkText: 'VIEW SADDLE',
    },
    {
      id: 'padded-halter',
      name: 'Padded Leather Halter',
      subBrand: 'SELLERIA LUXURY',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1200&auto=format&fit=crop',
      linkText: 'VIEW HALTER',
    },
    {
      id: 'quilted-pad',
      name: 'Performance Quilted Saddle Pad',
      subBrand: 'SELLERIA LUXURY',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
      linkText: 'VIEW SADDLE PAD',
    },
    {
      id: 'stirrup-leathers',
      name: 'Reinforced Stirrup Leathers',
      subBrand: 'SELLERIA LUXURY',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      linkText: 'VIEW ACCESSORIES',
    },
  ];

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-neutral-200">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span
            className="uppercase tracking-[0.25em] text-[#1E5631] text-xs font-semibold block mb-2"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
            }}
          >
            SELLERIA LUXURY FLAGSHIP
          </span>
          <h2
            className="text-black font-normal tracking-[0.02em] capitalize mb-3"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              fontSize: 'clamp(32px, 5vw, 54px)',
            }}
          >
            Best Selling Equestrian Products
          </h2>
          <p
            className="text-neutral-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
          >
            Handcrafted with premium full-grain leather, trusted by riders, trainers, and equestrian brands across the world.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {equestrianProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct && onSelectProduct(prod.id)}
              className="w-full relative group cursor-pointer overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0F2B18]">
                <img
                  referrerPolicy="no-referrer"
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Card Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span
                    className="uppercase block mb-1 text-[#A2D4B1] text-[10px] tracking-[0.2em] font-semibold"
                    style={{
                      fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                    }}
                  >
                    {prod.subBrand}
                  </span>

                  <h3
                    className="text-white text-2xl sm:text-[26px] font-normal tracking-[0.02em] mb-3 drop-shadow-md"
                    style={{
                      fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                    }}
                  >
                    {prod.name}
                  </h3>

                  {/* Clean CTA */}
                  <div className="inline-flex items-center text-white border-b-2 border-white pb-0.5 hover:text-[#A2D4B1] hover:border-[#A2D4B1] transition-colors">
                    <span
                      className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                      style={{
                        fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                      }}
                    >
                      {prod.linkText}
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
