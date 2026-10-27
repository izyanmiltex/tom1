import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  BadgePercent,
  Layers,
  Clock,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { HeroLakeSection } from './HeroLakeSection';
import { SectionCustomOrderAndInquiry } from './SectionCustomOrderAndInquiry';
import { ParallaxCard } from './SectionPoloHeritage';

interface AboutPageProps {
  onNavigateToProducts: (category?: string) => void;
  onNavigateToContact: () => void;
  onNavigateToPrivateLabel: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToProducts,
  onNavigateToContact,
}) => {
  // 6 pillars of excellence matching the home page theme
  const whyChooseUsCards = [
    {
      id: 'materials',
      title: 'PREMIUM QUALITY MATERIALS',
      desc: 'Sourced from trusted global suppliers and certified European tanneries.',
      icon: ShieldCheck,
    },
    {
      id: 'craftsmanship',
      title: 'EXPERT CRAFTSMANSHIP',
      desc: 'Generational master artisans with decades of precision saddlery experience.',
      icon: Award,
    },
    {
      id: 'pricing',
      title: 'COMPETITIVE PRICING',
      desc: 'Highest international export quality at direct manufacturer prices.',
      icon: BadgePercent,
    },
    {
      id: 'oem',
      title: 'OEM & PRIVATE LABEL',
      desc: 'Fully customizable leather tack, hardware, and rider apparel as per your brand.',
      icon: Layers,
    },
    {
      id: 'delivery',
      title: 'ON TIME DELIVERY',
      desc: 'Reliable production schedules and insured worldwide air and sea dispatch.',
      icon: Clock,
    },
    {
      id: 'satisfaction',
      title: 'CUSTOMER SATISFACTION',
      desc: 'Our relentless priority, built on long-term international trade partnerships.',
      icon: HeartHandshake,
    },
  ];

  useEffect(() => {
    if (window.location.hash === '#private-labelling' || window.location.hash === '#private-label') {
      setTimeout(() => {
        const el = document.getElementById('private-labelling-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Top Hero Banner - Precision Manufacturing for Global Markets with Product Video */}
      <HeroLakeSection
        topSubheading={null}
        heading="Precision Manufacturing for Global Markets"
        belowSubheading="Crafted for Performance. Designed for Luxury."
        showCta={false}
        videoUrl="https://aryezmiltex.com/productpagehero"
      />

      {/* Main Narrative & Atelier Gallery (Same style & fonts as Home Page About section) */}
      <section className="py-16 sm:py-24 bg-white text-black w-full border-b border-neutral-200">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Narrative Story & Commitment */}
            <div className="lg:col-span-7 space-y-6">
              <span
                className="uppercase tracking-[0.28em] text-[#1E5631] text-xs font-semibold block"
                style={{
                  fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
                }}
              >
                Our Story
              </span>

              <h2
                className="text-black font-normal tracking-[0.02em] capitalize"
                style={{
                  fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                  fontSize: 'clamp(30px, 3.5vw, 48px)',
                  lineHeight: '1.2',
                }}
              >
                Luxury craftsmanship, precision, and export expertise
              </h2>

              <div
                className="text-neutral-700 text-base sm:text-lg leading-relaxed space-y-4"
                style={{
                  fontFamily: '"Times New Roman", Times, Georgia, serif',
                }}
              >
                <p>
                  We are an OEM manufacturer and exporter of high-quality horse
                  riding equipment, rider apparel, and leather accessories.
                </p>
                <p>
                  Our goal is to deliver durable, comfortable, and stylish products
                  with dependable service to brands and retailers worldwide.
                </p>
                <p className="font-semibold text-[#1E5631] tracking-[0.15em] uppercase text-xs sm:text-sm pt-2">
                  Ride more, worry less.
                </p>
                <p className="pt-2 text-neutral-600">
                  Headquartered in Kanpur, India—the historic global epicenter of leathercraft
                  and saddlery tanning—Selleria Luxury brings together generational master craftsmen,
                  European-certified vegetable tanning methods, and precision modern tooling to serve
                  discerning equestrian brands across North America, Europe, the Middle East, and Oceania.
                </p>
              </div>

              {/* Quick Key Highlights styled with home page brand emerald tones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#F0F6F2] border border-[#1E5631]/20">
                  <div
                    className="text-2xl font-bold text-[#1E5631] mb-1"
                    style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                  >
                    100%
                  </div>
                  <div className="text-xs text-neutral-700 uppercase tracking-wider font-medium">Export Standard</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F0F6F2] border border-[#1E5631]/20">
                  <div
                    className="text-2xl font-bold text-[#1E5631] mb-1"
                    style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                  >
                    0 MOQ
                  </div>
                  <div className="text-xs text-neutral-700 uppercase tracking-wider font-medium">Flexible Sampling</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F0F6F2] border border-[#1E5631]/20 col-span-2 sm:col-span-1">
                  <div
                    className="text-2xl font-bold text-[#1E5631] mb-1"
                    style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                  >
                    Global
                  </div>
                  <div className="text-xs text-neutral-700 uppercase tracking-wider font-medium">Insured Logistics</div>
                </div>
              </div>

              {/* Single Clean CTA Button: Explore Our Products */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigateToProducts('all')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E5631] text-white hover:bg-[#164225] transition-all font-semibold tracking-[0.16em] text-xs uppercase shadow-md hover:shadow-lg cursor-pointer"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                  }}
                >
                  <span>EXPLORE OUR PRODUCTS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: 2 Stacked Workshop & Craft Images (Clean images, no text badges) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-neutral-900 group aspect-[4/3] border border-neutral-200">
                <img
                  referrerPolicy="no-referrer"
                  src="https://izyanmiltex.com/about1"
                  alt="Selleria Luxury equestrian craftsmanship and manufacturing"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-neutral-900 group aspect-[4/3] border border-neutral-200">
                <img
                  referrerPolicy="no-referrer"
                  src="https://izyanmiltex.com/about2"
                  alt="Selleria Luxury leather atelier and workshop"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US ? Section - Styled in the Home Page Dark Forest Luxury Palette */}
      <section className="py-20 sm:py-28 bg-[#0B1F12] text-white w-full border-t border-b border-[#1E5631]/30 relative overflow-hidden">
        {/* Subtle background ambient glow matching home page footer & lake sections */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#1E5631]/20 via-transparent to-black pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Header matching home page luxury typography */}
          <div className="text-center mb-14 sm:mb-16">
            <span
              className="uppercase tracking-[0.3em] text-[#A2D4B1] mb-2.5 block text-xs font-semibold"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              }}
            >
              OUR CORE ADVANTAGES
            </span>
            <h2
              className="text-white text-3xl sm:text-5xl font-normal tracking-wide uppercase inline-block"
              style={{
                fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              }}
            >
              WHY CHOOSE US ?
            </h2>
            <div className="w-16 h-0.5 bg-[#A2D4B1] mx-auto mt-4 rounded-full" />
          </div>

          {/* 6 Key Pillars Grid matching Home Page card design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {whyChooseUsCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-[#0F2B18]/70 border border-[#1E5631]/40 hover:border-[#A2D4B1] transition-all duration-300 hover:shadow-[0_4px_25px_rgba(30,86,49,0.35)] group hover:-translate-y-1"
                >
                  {/* Distinct Forest Green & Mint Icon Badge */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#07190F] border border-[#1E5631] flex items-center justify-center text-[#A2D4B1] group-hover:scale-110 group-hover:bg-[#1E5631] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(30,86,49,0.2)]">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title & Desc */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-white font-semibold text-sm sm:text-base tracking-[0.1em] uppercase mb-1.5 group-hover:text-[#A2D4B1] transition-colors"
                      style={{
                        fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed"
                      style={{
                        fontFamily: '"Times New Roman", Times, Georgia, serif',
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA to explore products */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigateToProducts('all')}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#1E5631] hover:bg-white hover:text-[#1E5631] text-white border border-[#1E5631] font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              }}
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* Huge Featured Product Cards Row (2 Column, 1 Row from Home Page) */}
      <section className="w-full bg-white p-2 sm:p-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          <ParallaxCard
            imageUrl="https://izyanmiltex.com/bridles.avif"
            category="bridles"
            targetId="catalog-heading-top"
            title="Bridles"
            description="Anatomically shaped headpieces with soft leather padding and rust-free stainless steel hardware."
            buttonText="Bridle Collection"
            onSelectCategory={() => onNavigateToProducts('bridles')}
          />

          <ParallaxCard
            imageUrl="https://izyanmiltex.com/halters.webp"
            category="halters"
            targetId="catalog-heading-top"
            title="Halters"
            description="Double-layered full-grain leather halters reinforced with solid brass buckles and adjustable nosebands."
            buttonText="Halter Collection"
            onSelectCategory={() => onNavigateToProducts('halters')}
          />
        </div>
      </section>

      {/* Inquiry & Concierge Banner */}
      <SectionCustomOrderAndInquiry onOpenConcierge={onNavigateToContact} />
    </div>
  );
};
