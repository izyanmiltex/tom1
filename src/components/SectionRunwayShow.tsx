import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface SectionRunwayShowProps {
  onExploreRunway: () => void;
}

export const SectionRunwayShow: React.FC<SectionRunwayShowProps> = ({ onExploreRunway }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative w-full h-[550px] sm:h-[650px] overflow-hidden bg-black mt-1 group select-none">
      {/* Background Image of NYC Fashion Runway Show with Audience */}
      <img
        referrerPolicy="no-referrer"
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2600&auto=format&fit=crop"
        alt="Ralph Lauren Spring 2027 Runway Show"
        className={`w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-[12000ms] ease-out ${
          isPlaying ? 'scale-105' : 'scale-100'
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/35 sm:to-transparent pointer-events-none" />

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
          Spring 2027 Runway Show
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
          Ralph Lauren returns home to New York City with a romantic fashion experience
        </p>

        <div>
          <button
            onClick={onExploreRunway}
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
            EXPLORE NOW
          </button>
        </div>
      </div>

      {/* Video Pause / Play Button in Bottom Right */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause runway ambient stream' : 'Play runway ambient stream'}
          className="w-8 h-8 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-white stroke-none" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-white stroke-none ml-0.5" />
          )}
        </button>
      </div>
    </section>
  );
};
