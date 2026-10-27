import React from 'react';

interface SectionSaddlebrookProps {
  onShopHome: () => void;
}

export const SectionSaddlebrook: React.FC<SectionSaddlebrookProps> = ({ onShopHome }) => {
  return (
    <section className="relative w-full h-[550px] sm:h-[650px] overflow-hidden bg-black mt-1 group">
      {/* Background Image of Woman in Wicker Chair / Rustic Heritage Cabin */}
      <img
        referrerPolicy="no-referrer"
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2600&auto=format&fit=crop"
        alt="Ralph Lauren Home Saddlebrook Collection"
        className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/75 sm:via-black/25 sm:to-transparent pointer-events-none" />

      {/* Overlay text matching screenshot */}
      <div className="absolute bottom-10 sm:bottom-14 left-7 sm:left-12 text-white z-10 max-w-lg">
        <span
          className="font-rl-grid-subtitle uppercase block mb-2 drop-shadow-sm"
          style={{
            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
            fontSize: '10.9398px',
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#ffffff',
            letterSpacing: '0.22em',
          }}
        >
          RALPH LAUREN HOME
        </span>
        <h2
          className="font-rl-grid-heading text-white drop-shadow-md mb-2.5 sm:mb-3"
          style={{
            fontFamily: '"Times New Roman", Times, RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
            fontSize: '56.0612px',
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#ffffff',
          }}
        >
          Saddlebrook
        </h2>
        <p
          className="font-rl-grid-description text-white drop-shadow-sm max-w-[480px] mb-5 sm:mb-6"
          style={{
            fontFamily: '"Times New Roman", Times, RL_DroidKufi, LeJeuneDeck-Regular, Arial, Helvetica, sans-serif',
            fontSize: '17.5521px',
            fontWeight: 400,
            lineHeight: '23.9054px',
            color: '#ffffff',
          }}
        >
          Where heritage textiles and heirloom designs create a sumptuous sense of comfort
        </p>

        <div>
          <button
            onClick={onShopHome}
            className="font-rl-grid-button uppercase relative pb-1 border-b border-white hover:opacity-75 transition-opacity cursor-pointer inline-block"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
              fontSize: '12.6841px',
              fontWeight: 400,
              lineHeight: 'normal',
              color: '#ffffff',
              letterSpacing: '0.22em',
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};
