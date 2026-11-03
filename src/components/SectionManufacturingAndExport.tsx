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
    italy: [526, 122],
    spain: [492, 126],
    saudiarabia: [598, 182],
    dubai: [622, 172],
    uk: [495, 90],
    russia: [680, 85],
  };

  const countries: CountryPin[] = [
    {
      id: 'india',
      name: 'India',
      role: 'Manufacturing Hub',
      label: 'India (Factory)',
      sub: 'Main Tannery & Saddlery Workshop',
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
      id: 'italy',
      name: 'Italy',
      role: 'Export Destination',
      label: 'Italy',
      sub: 'Luxury Tack & Saddlery Boutiques',
      x: COUNTRY_COORDS.italy[0],
      y: COUNTRY_COORDS.italy[1],
      labelPos: 'right',
      transitAir: '2-3 Days Direct Air',
      transitSea: '18 Days Genoa Port',
      volume: 'Bespoke OEM Tack',
      hub: 'Milan Malpensa (MXP)',
    },
    {
      id: 'spain',
      name: 'Spain',
      role: 'Export Destination',
      label: 'Spain',
      sub: 'Classical & Showjumping Stables',
      x: COUNTRY_COORDS.spain[0],
      y: COUNTRY_COORDS.spain[1],
      labelPos: 'left',
      transitAir: '3 Days DDP Air',
      transitSea: '19 Days Valencia Port',
      volume: 'Bridle & Saddle Supply',
      hub: 'Madrid-Barajas (MAD)',
    },
    {
      id: 'saudiarabia',
      name: 'Saudi Arabia',
      role: 'Export Destination',
      label: 'Saudi Arabia',
      sub: 'Royal Stables & Equestrian Clubs',
      x: COUNTRY_COORDS.saudiarabia[0],
      y: COUNTRY_COORDS.saudiarabia[1],
      labelPos: 'bottom',
      transitAir: '24-48 Hours Express',
      transitSea: '7 Days Jeddah Islamic Port',
      volume: 'High-Volume Premium Tack',
      hub: 'Riyadh King Khalid (RUH)',
    },
    {
      id: 'dubai',
      name: 'Dubai',
      role: 'Export Destination',
      label: 'Dubai',
      sub: 'Endurance Stables & Tack Boutiques',
      x: COUNTRY_COORDS.dubai[0],
      y: COUNTRY_COORDS.dubai[1],
      labelPos: 'right',
      transitAir: '24-36 Hours Direct',
      transitSea: '5 Days Jebel Ali Port',
      volume: 'Frequent Air Cargo',
      hub: 'Dubai International (DXB)',
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      role: 'Export Destination',
      label: 'UK',
      sub: 'Heritage Saddlery & Riding Academies',
      x: COUNTRY_COORDS.uk[0],
      y: COUNTRY_COORDS.uk[1],
      labelPos: 'top',
      transitAir: '2-3 Days Direct',
      transitSea: '18 Days Ocean',
      volume: 'Weekly Air Cargo',
      hub: 'London Heathrow (LHR)',
    },
    {
      id: 'russia',
      name: 'Russia',
      role: 'Export Destination',
      label: 'Russia',
      sub: 'Equestrian Centres & Cold-Weather Gear',
      x: COUNTRY_COORDS.russia[0],
      y: COUNTRY_COORDS.russia[1],
      labelPos: 'top',
      transitAir: '3-4 Days Air Cargo',
      transitSea: '22 Days St. Petersburg',
      volume: 'Seasonal Bulk Shipments',
      hub: 'Moscow Sheremetyevo (SVO)',
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
            {/* India to Italy */}
            <path
              d="M 697 186 Q 605 140 526 122"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'italy' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Spain */}
            <path
              d="M 697 186 Q 585 142 492 126"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'spain' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Saudi Arabia */}
            <path
              d="M 697 186 Q 645 180 598 182"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'saudiarabia' ? '2.4' : '1.4'}
              strokeDasharray="6,6"
              className="animated-route opacity-70"
            />
            {/* India to Dubai */}
            <path
              d="M 697 186 Q 658 175 622 172"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'dubai' ? '2.4' : '1.4'}
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
            {/* India to Russia */}
            <path
              d="M 697 186 Q 700 125 680 85"
              fill="none"
              stroke="#1E5631"
              strokeWidth={activePin === 'russia' ? '2.4' : '1.4'}
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

      {/* Interactive Destination Selector Pill Bar for Mobile & Desktop */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {countries.map((c) => {
            const isSelected = (activePin === c.id) || (!activePin && c.id === 'india');
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActivePin(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1E5631] text-white shadow-sm ring-2 ring-[#1E5631]/30'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-[#F0F6F2] hover:text-[#1E5631] border border-neutral-200'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${c.isManufacturer ? 'bg-amber-400' : 'bg-current'}`} />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Logistics Specs Card */}
        <div className="mt-4 p-4 rounded-xl bg-neutral-50/90 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1E5631]/10 text-[#1E5631] flex items-center justify-center shrink-0 font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-black text-sm">
                {activeCountryData.name} {activeCountryData.isManufacturer ? '— Global Manufacturing & Tannery Hub' : '— Export Partner Destination'}
              </p>
              <p className="text-neutral-500 font-mono text-[11px]">{activeCountryData.sub}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-700">
            <div className="flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-[#1E5631]" />
              <span><strong>Air Cargo:</strong> {activeCountryData.transitAir}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Ship className="w-3.5 h-3.5 text-[#1E5631]" />
              <span><strong>Sea Freight:</strong> {activeCountryData.transitSea}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-[#1E5631]" />
              <span><strong>Hub:</strong> {activeCountryData.hub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
