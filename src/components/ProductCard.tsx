import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentColor = product.colors[selectedColorIndex] || product.colors[0];
  const displayImage = isHovered && product.hoverImage
    ? product.hoverImage
    : currentColor?.image || product.primaryImage;

  return (
    <div
      className="group flex flex-col bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f7f7]">
        <img
          referrerPolicy="no-referrer"
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Tags / Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isIcon && (
            <span className="bg-[#1E5631] text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold">
              Iconic
            </span>
          )}
          {product.tag && !product.isIcon && (
            <span className="bg-[#F0F6F2] text-[#1E5631] border border-[#1E5631]/20 text-[9px] uppercase tracking-widest px-2 py-0.5 font-medium">
              {product.tag}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-[#1E5631] text-white shadow-md'
              : 'bg-white/85 text-gray-700 hover:text-[#1E5631] hover:bg-white shadow-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Shop Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={() => onQuickView(product)}
            className="w-full py-2.5 px-3 bg-white/95 hover:bg-[#1E5631] text-[#1E5631] hover:text-white text-xs uppercase tracking-[0.2em] font-medium border border-[#1E5631]/30 shadow-md backdrop-blur-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Shop</span>
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Sub Brand */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#1E5631] font-semibold mb-1">
            {product.subBrand}
          </p>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-normal text-xs sm:text-sm text-black hover:text-[#1E5631] tracking-wide line-clamp-2 hover:underline cursor-pointer min-h-[38px]"
          >
            {product.name}
          </h3>

          {/* Color swatches */}
          {product.colors.length > 1 && (
            <div className="flex items-center space-x-1.5 mt-3 mb-2">
              {product.colors.map((col, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColorIndex(idx);
                  }}
                  title={col.name}
                  aria-label={col.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                    selectedColorIndex === idx
                      ? 'ring-2 ring-offset-1 ring-[#1E5631] scale-110'
                      : 'border-gray-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              ))}
              <span className="text-[10px] text-gray-400 pl-1">
                {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
              </span>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-xs sm:text-sm font-semibold text-[#1E5631] tracking-wide">
              {formatPrice(product.priceINR, currency)}
            </span>
            {product.originalPriceINR && (
              <span className="text-[11px] text-gray-400 line-through">
                {formatPrice(product.originalPriceINR, currency)}
              </span>
            )}
          </div>

          <span className="text-[10px] text-gray-500 uppercase tracking-widest">
            {product.sizes.length} sizes
          </span>
        </div>
      </div>
    </div>
  );
};
