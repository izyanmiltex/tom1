import React, { useState, useMemo, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight, Sparkles } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface SearchModalProps {
  isOpen: boolean;
  products: Product[];
  currency: CurrencyCode;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

const TRENDING_SEARCHES = [
  'Custom Slim Fit Polo',
  'Cable-Knit Cashmere',
  'Purple Label Tuxedo',
  'Soft Ricky Bag',
  'Double RL Selvedge',
  'Oxford Shirt',
  'Crystal Barware',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  products,
  currency,
  onClose,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subBrand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Field */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-[#1E5631]" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Selleria Luxury equestrian equipment, saddlery, or riding wear..."
            className="flex-1 text-base sm:text-lg text-black tracking-wide placeholder-gray-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-gray-400 hover:text-black uppercase tracking-wider"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {searchTerm.trim().length > 0 ? (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#1E5631] font-semibold mb-4">
                {searchResults.length} {searchResults.length === 1 ? 'Result Found' : 'Results Found'}
              </p>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="p-3 border border-gray-100 hover:border-[#1E5631] flex gap-3 cursor-pointer group bg-[#faf9f8] hover:bg-white transition-all"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-16 h-20 object-cover bg-gray-100 flex-shrink-0"
                      />
                      <div className="flex flex-col justify-between text-xs flex-1">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#1E5631] font-semibold block">
                            {product.subBrand}
                          </span>
                          <h4 className="font-medium text-black group-hover:text-[#1E5631] group-hover:underline line-clamp-2">
                            {product.name}
                          </h4>
                        </div>
                        <span className="font-semibold text-[#1E5631]">
                          {formatPrice(product.priceINR, currency)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 space-y-2">
                  <p className="font-serif-brand text-lg text-black">
                    No pieces matched "{searchTerm}"
                  </p>
                  <p className="text-xs max-w-sm mx-auto">
                    Try searching for "Saddle", "Bridle", "Halter", "Pad", or "Jacket".
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Trending suggestions */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#1E5631] font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#1E5631]" />
                  <span>Trending Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['French Dressage Saddle', 'Close-Contact Saddle', 'Anatomical Bridle', 'Leather Halter', 'Leg Protectors', 'Lead Rope', 'Saddle Pad', 'Leather Bags', 'Show Jacket', 'Whips'].map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchTerm(query)}
                      className="px-3 py-1.5 bg-[#F0F6F2] hover:bg-[#1E5631] text-gray-700 hover:text-white border border-[#1E5631]/20 text-xs tracking-wider transition-all"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Curated Category Shortcuts */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1E5631] font-semibold mb-3">
                  Signature Collections
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {['Saddlery', 'Bridles', 'Halters', 'Riding Wear'].map(
                    (brand, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchTerm(brand)}
                        className="p-3 border border-gray-100 bg-[#F0F6F2] hover:border-[#1E5631] text-left text-gray-800 font-medium hover:text-[#1E5631] transition-colors"
                      >
                        {brand}
                        <ArrowRight className="w-3 h-3 mt-1 text-[#1E5631]" />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
