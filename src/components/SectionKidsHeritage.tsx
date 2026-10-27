import React from 'react';

interface SectionKidsHeritageProps {
  onShopBoys: () => void;
  onShopGirls: () => void;
}

export const SectionKidsHeritage: React.FC<SectionKidsHeritageProps> = ({
  onShopBoys,
  onShopGirls,
}) => {
  return (
    <section className="relative w-full h-[550px] sm:h-[650px] overflow-hidden bg-black mt-1 group">
      {/* Background Image of Boy in Corduroy & Tartan Outdoors with fishing rod / birch tree */}
      <img
        referrerPolicy="no-referrer"
        src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=2600&auto=format&fit=crop"
        alt="Polo Ralph Lauren Kids Autumn Heritage"
        className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/75 sm:via-black/30 sm:to-transparent pointer-events-none" />

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
          POLO RALPH LAUREN
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
          Autumn Heritage
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
          Charming layers and heritage detailing inspired by the warmth of the season
        </p>

        <div className="flex items-center space-x-8">
          <button
            onClick={onShopBoys}
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
            SHOP BOYS
          </button>
          <button
            onClick={onShopGirls}
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
            SHOP GIRLS
          </button>
        </div>
      </div>
    </section>
  );
};
