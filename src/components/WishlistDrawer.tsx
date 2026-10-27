import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlistProducts: Product[];
  currency: CurrencyCode;
  onClose: () => void;
  onRemove: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlistProducts,
  currency,
  onClose,
  onRemove,
  onMoveToBag,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-[#faf9f8]">
          <div className="flex items-center space-x-2">
            <span className="font-serif-brand text-lg tracking-wider text-[#1E5631]">
              Saved Wishlist
            </span>
            <span className="text-xs text-gray-500 font-medium">
              ({wishlistProducts.length} pieces)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Wishlist"
            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500 space-y-3">
              <p className="font-serif-brand text-lg text-black">
                Your wishlist is empty
              </p>
              <p className="text-xs max-w-xs mx-auto">
                Select the heart icon on any piece to preserve it for later consultation or order quotation.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      referrerPolicy="no-referrer"
                      src={product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#1E5631] font-semibold block">
                            {product.subBrand}
                          </span>
                          <h4 className="font-medium text-gray-900 line-clamp-1">
                            {product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => onRemove(product)}
                          aria-label="Remove piece"
                          className="text-gray-400 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-1">
                        <span className="font-semibold text-[#1E5631]">
                          {formatPrice(product.priceINR, currency)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onMoveToBag(product)}
                      className="mt-2 w-full py-2 bg-[#1E5631] text-white hover:bg-[#164225] text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Shopping Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-[#faf9f8]">
            <p className="text-[11px] text-gray-500 text-center">
              Items remain saved during your current session.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
