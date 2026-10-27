import React from 'react';
import {
  ShieldCheck,
  Award,
  BadgePercent,
  Layers,
  Clock,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface SectionAboutLeathercraftProps {
  onExploreFactory?: () => void;
  onRequestSamples?: () => void;
  onViewProducts?: () => void;
}

export const SectionAboutLeathercraft: React.FC<SectionAboutLeathercraftProps> = ({
  onViewProducts,
}) => {
  const handleViewProducts = () => {
    if (onViewProducts) {
      onViewProducts();
      return;
    }
    const el = document.getElementById('equestrian-products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whyChooseUsPoints = [
    {
      title: 'PREMIUM QUALITY MATERIALS',
      desc: 'Sourced from trusted global suppliers.',
      icon: ShieldCheck,
    },
    {
      title: 'EXPERT CRAFTSMANSHIP',
      desc: 'Skilled artisans with years of hands-on experience.',
      icon: Award,
    },
    {
      title: 'COMPETITIVE PRICING',
      desc: 'Exceptional export quality at direct manufacturer rates.',
      icon: BadgePercent,
    },
    {
      title: 'OEM & PRIVATE LABEL',
      desc: 'Fully custom designs built to your brand specifications.',
      icon: Layers,
    },
    {
      title: 'ON TIME DELIVERY',
      desc: 'Reliable production schedules and insured global shipping.',
      icon: Clock,
    },
    {
      title: 'CUSTOMER SATISFACTION',
      desc: 'Dedicated support for long-term international partnerships.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="about-section"
      className="py-14 sm:py-20 lg:py-24 bg-white text-black w-full border-t border-b border-neutral-200 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* 2-Column Grid: About Selleria Luxury Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: About Selleria Luxury & Why Choose Us (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Kicker */}
              <span
                className="uppercase tracking-[0.28em] text-[#1E5631] mb-3 text-xs font-semibold block"
                style={{
                  fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
                }}
              >
                About Us
              </span>

              {/* Heading */}
              <h2
                className="text-black font-normal tracking-[0.02em] capitalize mb-5 sm:mb-6"
                style={{
                  fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                  fontSize: 'clamp(32px, 3.8vw, 50px)',
                  lineHeight: '1.18',
                }}
              >
                Luxury craftsmanship, precision, and export expertise
              </h2>

              {/* Narrative Story */}
              <div
                className="text-neutral-700 text-base sm:text-lg leading-relaxed space-y-3 mb-8"
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
                <p className="font-semibold text-[#1E5631] tracking-[0.15em] uppercase text-xs sm:text-sm pt-1">
                  Ride more, worry less.
                </p>
              </div>

              {/* Subheading: Why Choose Us */}
              <div className="border-t border-neutral-200 pt-6 mb-6">
                <h3
                  className="text-black font-normal tracking-[0.03em] capitalize mb-5 text-xl sm:text-2xl"
                  style={{
                    fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                  }}
                >
                  Why Choose Us?
                </h3>

                {/* 6 Grid points with icons (2 cols on sm) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUsPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div
                        key={index}
                        className="group p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 hover:bg-[#F0F6F2] hover:border-[#1E5631] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-default"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#1E5631] flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300 shadow-xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4
                          className="font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase text-black mb-1.5"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                          }}
                        >
                          {point.title}
                        </h4>
                        <p
                          className="text-base text-neutral-700 leading-relaxed font-light"
                          style={{
                            fontFamily: '"Times New Roman", Times, Georgia, serif',
                          }}
                        >
                          {point.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Button in dark forest green */}
            <div className="pt-4">
              <button
                onClick={handleViewProducts}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1E5631] text-white hover:bg-[#164225] transition-all duration-300 font-semibold tracking-[0.18em] text-xs uppercase shadow-md hover:shadow-lg cursor-pointer group"
                style={{
                  fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                }}
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Stacked Images (1 in each row, no text inside) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 min-h-[500px] sm:min-h-[580px] lg:h-full justify-between">
            {/* Row 1 Image: About 1 */}
            <div className="relative w-full flex-1 min-h-[240px] sm:min-h-[270px] rounded-2xl overflow-hidden shadow-md bg-neutral-900 group">
              <img
                referrerPolicy="no-referrer"
                src="https://izyanmiltex.com/about1"
                alt="Selleria Luxury equestrian craftsmanship and manufacturing"
                className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Row 2 Image: About 2 */}
            <div className="relative w-full flex-1 min-h-[240px] sm:min-h-[270px] rounded-2xl overflow-hidden shadow-md bg-neutral-900 group">
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
  );
};
