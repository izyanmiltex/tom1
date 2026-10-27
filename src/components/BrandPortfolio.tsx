import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_STORIES } from '../data/ralphLaurenData';

interface BrandPortfolioProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandPortfolio: React.FC<BrandPortfolioProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-20 bg-[#faf9f8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#1E5631] font-semibold mb-2">
            The World of Ralph Lauren
          </p>
          <h2 className="font-serif-brand text-2xl sm:text-4xl text-black tracking-wide">
            Our Brands & Houses
          </h2>
          <p className="mt-3 text-sm text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
            Distinctive expressions of craft, American heritage, and luxury living unified by Mr. Lauren’s timeless vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_STORIES.map((brand, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#1E5631]/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  referrerPolicy="no-referrer"
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-brand text-lg font-medium tracking-wider mb-0.5">
                    {brand.name}
                  </h3>
                  <p className="text-[11px] text-[#e0cfba] tracking-wider uppercase font-light">
                    {brand.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                  {brand.description}
                </p>

                <button
                  onClick={() => onSelectBrand(brand.name)}
                  className="w-full py-2.5 px-4 bg-[#faf9f8] group-hover:bg-[#1E5631] text-black group-hover:text-white border border-gray-200 group-hover:border-[#1E5631] text-[11px] uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{brand.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
