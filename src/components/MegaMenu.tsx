import React from 'react';
import { NavCategory } from '../types';
import { ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  category: NavCategory;
  onClose: () => void;
  onSelectSubcategory: (query: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose, onSelectSubcategory }) => {
  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white text-black shadow-2xl border-b border-gray-200 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Columns of links */}
          <div className="col-span-8 grid grid-cols-4 gap-6 border-r border-gray-100 pr-8">
            {category.columns.map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-black pb-1 border-b border-gray-100">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => {
                          onSelectSubcategory(item.label);
                          onClose();
                        }}
                        className={`text-left text-[13px] tracking-wide transition-colors duration-150 block w-full truncate ${
                          item.isBold
                            ? 'font-medium text-black hover:text-[#1E5631]'
                            : 'text-gray-600 hover:text-[#1E5631]'
                        }`}
                      >
                        {item.label}
                        {item.isNew && (
                          <span className="ml-1.5 text-[9px] uppercase tracking-wider bg-[#1E5631] text-white px-1.5 py-0.5 font-semibold">
                            New
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Editorial Card on the right */}
          <div className="col-span-4 pl-4 flex flex-col justify-between">
            <div className="group overflow-hidden bg-gray-50 border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  referrerPolicy="no-referrer"
                  src={category.featuredCard.image}
                  alt={category.featuredCard.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-widest uppercase text-white/80 font-medium block mb-1">
                    Featured Collection
                  </span>
                  <h3 className="font-serif-brand text-lg font-bold tracking-wider leading-snug">
                    {category.featuredCard.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-[#faf9f8]">
                <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                  {category.featuredCard.subtitle}
                </p>
                <button
                  onClick={() => {
                    onSelectSubcategory(category.featuredCard.title);
                    onClose();
                  }}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-black group-hover:text-[#1E5631] transition-colors"
                >
                  <span>{category.featuredCard.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
