import React from 'react';

interface SectionLuxurySuitsProps {
  onShopPurpleLabel: () => void;
  onShopCollection: () => void;
}

export const SectionLuxurySuits: React.FC<SectionLuxurySuitsProps> = ({
  onShopPurpleLabel,
  onShopCollection,
}) => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white border-b-[2px] border-white">
      {/* Left Column: Ralph Lauren Purple Label */}
      <div className="relative w-full h-[600px] sm:h-[680px] md:h-[720px] overflow-hidden group">
        <img
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1800&auto=format&fit=crop"
          alt="Ralph Lauren Purple Label Fall"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.9] contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

        <div className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-7 sm:left-10 lg:left-12 right-7 z-10">
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
            RALPH LAUREN PURPLE LABEL
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
            Fall
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
            Distinctive suiting returns with confidence and restraint, expressed through generous fits and effortless drape
          </p>
          <div>
            <button
              onClick={onShopPurpleLabel}
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
      </div>

      {/* Right Column: Ralph Lauren Collection */}
      <div className="relative w-full h-[600px] sm:h-[680px] md:h-[720px] overflow-hidden group">
        <img
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1800&auto=format&fit=crop"
          alt="Ralph Lauren Collection Fall"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.9] contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

        <div className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-7 sm:left-10 lg:left-12 right-7 z-10">
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
            RALPH LAUREN COLLECTION
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
            Fall
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
            Languid silhouettes, heirloom knits, and lived-in textures reinvent timeless elements with new adornment
          </p>
          <div>
            <button
              onClick={onShopCollection}
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
      </div>
    </section>
  );
};
