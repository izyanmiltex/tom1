import React, { useState, useMemo } from 'react';
import { Product, CurrencyCode } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  currency: CurrencyCode;
  selectedCategory: string;
  selectedBrandFilter?: string | null;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onCategoryChange: (category: string) => void;
  onClearBrandFilter?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  currency,
  selectedCategory,
  selectedBrandFilter,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onCategoryChange,
  onClearBrandFilter,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [subBrandFilter, setSubBrandFilter] = useState<string>(selectedBrandFilter || 'all');

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'accessories', label: 'Accessories & Bags' },
    { id: 'home', label: 'Home Living' },
    { id: 'sale', label: 'Special Selection' },
  ];

  const subBrands = [
    'all',
    'Polo Ralph Lauren',
    'Ralph Lauren Purple Label',
    'Double RL',
    'Ralph Lauren Collection',
    'Lauren Ralph Lauren',
    'Ralph Lauren Home',
  ];

  // Update sub-brand when external filter changes
  React.useEffect(() => {
    if (selectedBrandFilter) {
      setSubBrandFilter(selectedBrandFilter);
    }
  }, [selectedBrandFilter]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory === 'sale') {
          if (!p.originalPriceINR) return false;
        } else if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Sub brand filter
        if (subBrandFilter !== 'all' && p.subBrand !== subBrandFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
        if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, selectedCategory, subBrandFilter, sortBy]);

  return (
    <section id="catalog-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#1E5631] font-semibold block mb-2">
              Curated Wardrobe
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl text-black tracking-wider">
              {selectedCategory === 'all'
                ? 'Iconic Essentials & New Arrivals'
                : `${selectedCategory.toUpperCase()} COLLECTION`}
            </h2>
            {subBrandFilter !== 'all' && (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-500">Filtered by:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#1E5631] text-white text-[11px] font-medium tracking-wide">
                  {subBrandFilter}
                  <button
                    onClick={() => {
                      setSubBrandFilter('all');
                      if (onClearBrandFilter) onClearBrandFilter();
                    }}
                    className="ml-1 text-xs hover:text-red-300"
                  >
                    ×
                  </button>
                </span>
              </div>
            )}
          </div>

          {/* Sort & Count Controls */}
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-500 uppercase tracking-widest hidden sm:inline">
              {filteredProducts.length} Items Found
            </span>

            <div className="flex items-center space-x-2 border border-gray-300 px-3 py-2 bg-white text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              <select
                id="catalog-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products by"
                className="bg-transparent text-black font-medium focus:outline-none cursor-pointer tracking-wider text-xs"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1E5631] text-white font-medium shadow-sm'
                    : 'bg-[#faf9f8] text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-brand selector dropdown */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
            <select
              value={subBrandFilter}
              onChange={(e) => setSubBrandFilter(e.target.value)}
              aria-label="Filter by House or Brand"
              className="text-xs uppercase tracking-wider py-1.5 px-2 border border-gray-200 bg-[#faf9f8] text-black cursor-pointer"
            >
              <option value="all">All Houses & Brands</option>
              {subBrands
                .filter((b) => b !== 'all')
                .map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#faf9f8] border border-gray-200 p-8">
            <p className="font-serif-brand text-xl text-[#1E5631] mb-2">
              No matching pieces found
            </p>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
              Try adjusting your category or brand filters to view other signature Ralph Lauren designs.
            </p>
            <button
              onClick={() => {
                onCategoryChange('all');
                setSubBrandFilter('all');
                if (onClearBrandFilter) onClearBrandFilter();
              }}
              className="px-6 py-2.5 bg-[#1E5631] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#184728] transition-colors"
            >
              View Full Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
