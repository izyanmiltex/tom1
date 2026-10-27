import React, { useState } from 'react';
import { WORLD_LAND_PATH } from './worldLandPath';
import { Plane, Ship, Package, CheckCircle2, Globe, ArrowUpRight } from 'lucide-react';

interface CountryPin {
  id: string;
  name: string;
  role: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  isManufacturer?: boolean;
  labelPos?: 'top' | 'bottom' | 'left' | 'right';
  transitAir?: string;
  transitSea?: string;
  volume?: string;
  hub?: string;
}

export const SectionManufacturingAndExport: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  // Precise SVG coordinates mapped to Robinson projection viewBox 1000x480
  const COUNTRY_COORDS: Record<string, [number, number]> = {
    india: [697, 186],
    usa: [268, 134],
    uk: [495, 90],
    germany: [523, 98],
    france: [506, 110],
    spain: [492, 126],
    morocco: [486, 150],
    egypt: [558, 158],
    uae: [616, 172],
    australia: [832, 323],
    newzealand: [908, 362],
    southafrica: [545, 318],
    brazil: [378, 276],
    canada: [260, 92],
    japan: [825, 136],
  };

  const countries: CountryPin[] = [
    {
      id: 'india',
      name: 'India',
      role: 'Manufacturing Hub',
      label: 'India',
      sub: 'Main Factory & Tannery',
      x: COUNTRY_COORDS.india[0],
      y: COUNTRY_COORDS.india[1],
      isManufacturer: true,
      labelPos: 'bottom',
      transitAir: 'Origin Plant',
      transitSea: 'Nhava Sheva Port',
      volume: 'Primary Export Hub',
      hub: 'Kanpur Cluster, UP',
    },
    {
      id: 'usa',
      name: 'USA',
      role: 'Export Destination',
      label: 'USA',
      sub: 'Direct Air & Ocean Dispatch',
      x: COUNTRY_COORDS.usa[0],
      y: COUNTRY_COORDS.usa[1],
      labelPos: 'left',
      transitAir: '3-4 Days Express',
      transitSea: '22 Days Freight',
      volume: 'Major Distribution',
      hub: 'JFK / LAX Logistics Hubs',
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      role: 'Export Destination',
      label: 'UK',
      sub: 'Equestrian Boutiques',
      x: COUNTRY_COORDS.uk[0],
      y: COUNTRY_COORDS.uk[1],
      labelPos: 'top',
      transitAir: '2-3 Days Direct',
      transitSea: '18 Days Ocean',
      volume: 'Weekly Air Cargo',
      hub: 'London Heathrow (LHR)',
    },
    {
      id: 'germany',
      name: 'Germany',
      role: 'Export Destination',
      label: 'Germany',
      sub: 'Dressage & Riding Academies',
      x: COUNTRY_COORDS.germany[0],
      y: COUNTRY_COORDS.germany[1],
      labelPos: 'top',
      transitAir: '3 Days DDP',
      transitSea: '20 Days Port Hamburg',
      volume: 'Bulk OEM Contracts',
      hub: 'Frankfurt Cargo City (FRA)',
    },
    {
      id: 'france',
      name: 'France',
      role: 'Export Destination',
      label: 'France',
      sub: 'Saddlery & Luxury Tack',
      x: COUNTRY_COORDS.france[0],
      y: COUNTRY_COORDS.france[1],
      labelPos: 'bottom',
      transitAir: '3 Days Air',
      transitSea: '21 Days Sea',
      volume: 'Custom Collections',
      hub: 'Paris Charles de Gaulle (CDG)',
    },
    {
      id: 'uae',
      name: 'UAE & Middle East',
      role: 'Export Destination',
      label: 'UAE',
      sub: 'Royal Stables & Endurance Clubs',
      x: COUNTRY_COORDS.uae[0],
      y: COUNTRY_COORDS.uae[1],
      labelPos: 'right',
      transitAir: '24-48 Hours Express',
      transitSea: '6 Days Jebel Ali',
      volume: 'High-Frequency Air',
      hub: 'Dubai International (DXB)',
    },
    {
      id: 'australia',
      name: 'Australia',
      role: 'Export Destination',
      label: 'Australia',
      sub: 'Polo & Showjumping Tack',
      x: COUNTRY_COORDS.australia[0],
      y: COUNTRY_COORDS.australia[1],
      labelPos: 'right',
      transitAir: '4-5 Days Air',
      transitSea: '16 Days Direct Sea',
      volume: 'Seasonal Bulk Shipments',
      hub: 'Sydney Kingsford Smith (SYD)',
    },
    {
      id: 'canada',
      name: 'Canada',
      role: 'Export Destination',
      label: 'Canada',
      sub: 'Equestrian Tack Wholesalers',
      x: COUNTRY_COORDS.canada[0],
      y: COUNTRY_COORDS.canada[1],
      labelPos: 'top',
      transitAir: '4 Days Air',
      transitSea: '24 Days Sea',
      volume: 'Retailer Supply',
      hub: 'Toronto Pearson (YYZ)',
    },
    {
      id: 'japan',
      name: 'Japan',
      role: 'Export Destination',
      label: 'Japan',
      sub: 'Precision Equestrian Goods',
      x: COUNTRY_COORDS.japan[0],
      y: COUNTRY_COORDS.japan[1],
      labelPos: 'right',
      transitAir: '3-4 Days Air',
      transitSea: '14 Days Tokyo Port',
      volume: 'Premium Small Batch',
      hub: 'Tokyo Narita (NRT)',
    },
    {
      id: 'southafrica',
      name: 'South Africa',
      role: 'Export Destination',
      label: 'South Africa',
      sub: 'Equestrian Centres',
      x: COUNTRY_COORDS.southafrica[0],
      y: COUNTRY_COORDS.southafrica[1],
      labelPos: 'bottom',
      transitAir: '4 Days Air',
      transitSea: '16 Days Durban Port',
      volume: 'Direct B2B',
      hub: 'Johannesburg (JNB)',
    },
  ];

  const activeCountryData = countries.find((c) => c.id === activePin) || countries[0];

  return (
    <section className="w-full bg-white pt-7 sm:pt-10 pb-7 sm:pb-10 border-t border-b border-neutral-200 overflow-hidden">
      {/* Centered Heading in title case as requested */}
      <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6">
        <span
          className="uppercase block mb-2 font-semibold text-[#1E5631] text-xs tracking-[0.25em]"
          style={{
            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
          }}
        >
          WORLDWIDE LOGISTIC NETWORK
        </span>
        <h2
          className="text-black capitalize text-center leading-tight mb-2"
          style={{
            fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            fontWeight: 400,
          }}
        >
          Export Partners
        </h2>
        <p
          className="text-neutral-600 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
        >
          Supplying equestrian boutiques, tack shops, and global partners across 45+ countries.
        </p>
      </div>

      {/* Full-Width Interactive SVG Map Canvas (Optimized larger size on mobile) */}
      <div className="w-full relative aspect-[1.5/1] sm:aspect-[2.1/1] min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[580px] px-1 sm:px-6 md:px-10 lg:px-16">
        <svg
          viewBox="0 0 1000 480"
          className="w-full h-full select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <style>
            {`
              @keyframes dashTravel {
                to {
                  stroke-dashoffset: -48;
                }
              }
              .animated-route {
                animation: dashTravel 2.4s linear infinite;
              }
              @keyframes pulsePin {
                0% { transform: scale(1); opacity: 0.9; }
                50% { transform: scale(1.6); opacity: 0; }
                100% { transform: scale(1); opacity: 0; }
              }
              .pulsing-wave {
                transform-origin: center;
                animation: pulsePin 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
            `}
          </style>

          <defs>
            {/* High-Contrast Monochrome and Forest Pin Gradients */}
            <radialGradient id="pin-black-gradient" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#404040" />
              <stop offset="60%" stopColor="#171717" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            <radialGradient id="pin-forest-gradient" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#287040" />
              <stop offset="60%" stopColor="#1E5631" />
              <stop offset="100%" stopColor="#0F2B18" />
            </radialGradient>

            <radialGradient id="pin-white-gradient" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e5e5e5" />
              <stop offset="100%" stopColor="#a3a3a3" />
            </radialGradient>

            {/* Pin Drop Shadow */}
            <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background Canvas */}
          <rect width="1000" height="480" fill="#ffffff" />

          {/* World Continents Landmass: Subtle Light Gray with a hint of forest tone */}
          <path
            d={WORLD_LAND_PATH}
            fill="#eef2ef"
            stroke="#d3ded6"
            strokeWidth="0.6"
          />

          {/* Animated Flight / Cargo Curves emanating from India (697, 186) in Forest Green */}
          <g className="pointer-events-none">
            {/* India to USA */}
            <path
              d="M 697 186 Q 440 60 268 134"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'usa' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to UK */}
            <path
              d="M 697 186 Q 590 125 495 90"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'uk' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Germany */}
            <path
              d="M 697 186 Q 610 135 523 98"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'germany' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to France */}
            <path
              d="M 697 186 Q 600 145 506 110"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'france' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to UAE */}
            <path
              d="M 697 186 Q 655 178 616 172"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'uae' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Australia */}
            <path
              d="M 697 186 Q 770 270 832 323"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'australia' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Canada */}
            <path
              d="M 697 186 Q 430 40 260 92"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'canada' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Japan */}
            <path
              d="M 697 186 Q 760 150 825 136"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'japan' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to South Africa */}
            <path
              d="M 697 186 Q 620 260 545 318"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'southafrica' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
          </g>

          {/* India Pulse Ripple Effect */}
          <circle
            cx={COUNTRY_COORDS.india[0]}
            cy={COUNTRY_COORDS.india[1]}
            r="16"
            fill="none"
            stroke="#1E5631"
            strokeWidth="1.5"
            className="pulsing-wave"
          />

          {/* Render Interactive Country Pins */}
          {countries.map((loc) => {
            const isHovered = activePin === loc.id;
            const isMfg = loc.isManufacturer;

            let textX = loc.x;
            let textY = loc.y + 16;
            let textAnchor: 'middle' | 'start' | 'end' = 'middle';

            if (loc.labelPos === 'top') {
              textY = loc.y - 20;
            } else if (loc.labelPos === 'left') {
              textX = loc.x - 12;
              textY = loc.y - 6;
              textAnchor = 'end';
            } else if (loc.labelPos === 'right') {
              textX = loc.x + 14;
              textY = loc.y - 6;
              textAnchor = 'start';
            }

            return (
              <g
                key={loc.id}
                className="cursor-pointer group"
                onMouseEnter={() => setActivePin(loc.id)}
                onClick={() => setActivePin(loc.id)}
              >
                {/* Pin Ground Shadow */}
                <ellipse
                  cx={loc.x}
                  cy={loc.y + 1}
                  rx={isMfg ? 7 : 4.5}
                  ry={isMfg ? 3 : 2}
                  fill="#000000"
                  opacity={isHovered ? 0.35 : 0.2}
                />

                {/* Pin Teardrop Shape */}
                <path
                  d={`
                    M ${loc.x} ${loc.y}
                    C ${loc.x - (isMfg ? 7 : 5)} ${loc.y - (isMfg ? 7 : 5)},
                      ${loc.x - (isMfg ? 8 : 6)} ${loc.y - (isMfg ? 16 : 13)},
                      ${loc.x} ${loc.y - (isMfg ? 17 : 14)}
                    C ${loc.x + (isMfg ? 8 : 6)} ${loc.y - (isMfg ? 17 : 14)},
                      ${loc.x + (isMfg ? 7 : 5)} ${loc.y - (isMfg ? 7 : 5)},
                      ${loc.x} ${loc.y}
                    Z
                  `}
                  fill={isMfg ? 'url(#pin-forest-gradient)' : isHovered ? '#1E5631' : 'url(#pin-black-gradient)'}
                  filter="url(#pin-shadow)"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  className="transition-transform duration-200 group-hover:scale-125"
                  style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                />

                {/* Center Core Dot */}
                <circle
                  cx={loc.x}
                  cy={loc.y - (isMfg ? 11 : 9)}
                  r={isMfg ? 2.8 : 2.2}
                  fill="#ffffff"
                />

                {/* Country Label */}
                <text
                  x={textX}
                  y={textY}
                  textAnchor={textAnchor}
                  fill="#171717"
                  fontSize={isMfg ? '11px' : '9px'}
                  fontWeight={isMfg || isHovered ? '700' : '600'}
                  fontFamily='RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif'
                  letterSpacing="0.04em"
                  className="transition-all duration-200 drop-shadow-xs"
                >
                  {loc.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
};
