import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail, ShieldCheck, Truck, Sparkles, Ruler } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, colorIndex: number, isGift: boolean) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const activeColor = product.colors[selectedColorIdx] || product.colors[0];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColorIdx, isGiftWrap);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black z-20 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Imagery */}
          <div className="md:col-span-6 bg-[#f8f7f5] p-6 flex flex-col justify-between">
            <div className="aspect-[3/4] overflow-hidden bg-white border border-gray-200 relative mb-4">
              <img
                referrerPolicy="no-referrer"
                src={activeColor?.image || product.primaryImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.isIcon && (
                <span className="absolute top-3 left-3 bg-[#1E5631] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                  Iconic Design
                </span>
              )}
            </div>

            {/* Color Swatch Thumbnails */}
            {product.colors.length > 1 && (
              <div className="flex gap-2 justify-center">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIdx(idx)}
                    className={`w-12 h-14 border overflow-hidden transition-all ${
                      selectedColorIdx === idx
                        ? 'border-[#1E5631] ring-1 ring-[#1E5631]'
                        : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={color.image}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product details & Add to Bag */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Brand & Category */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#1E5631] font-semibold">
                  {product.subBrand}
                </span>
                <span className="text-[10px] text-gray-400">SKU: {product.id.toUpperCase()}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif-brand text-xl sm:text-2xl text-black font-normal tracking-wide mb-3 leading-snug">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mb-6 pb-4 border-b border-gray-200">
                <span className="text-xl font-semibold text-[#1E5631]">
                  {formatPrice(product.priceINR, currency)}
                </span>
                {product.originalPriceINR && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPriceINR, currency)}
                  </span>
                )}
                <span className="text-[11px] text-[#1E5631] bg-[#F0F6F2] border border-[#1E5631]/20 px-2 py-0.5 rounded-xs font-medium">
                  Inclusive of all Indian taxes & duties
                </span>
              </div>

              {/* Color selection */}
              <div className="mb-5">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-500 uppercase tracking-wider">Color:</span>
                  <span className="font-semibold text-[#1E5631]">{activeColor?.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {product.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColorIdx === idx
                          ? 'border-[#1E5631] ring-2 ring-offset-2 ring-[#1E5631]'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-500 uppercase tracking-wider">Select Size:</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[#1E5631] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size & Fit Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs uppercase tracking-wider font-medium border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#1E5631] text-white border-[#1E5631]'
                          : 'bg-white text-gray-800 border-gray-300 hover:border-[#1E5631]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>

                {/* Size guide popup toggle */}
                {showSizeGuide && (
                  <div className="mt-2 p-3 bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-1">
                    <p className="font-semibold text-[#1E5631]">Selleria Luxury Tailored Sizing:</p>
                    <p>S (Chest 36-38") | M (Chest 39-41") | L (Chest 42-44") | XL (Chest 45-47")</p>
                    <p className="text-[11px] text-gray-500 italic">
                      {product.fitGuide || 'Crafted according to classic equestrian tailored standards.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Complimentary Gift Box option */}
              <div className="mb-6 p-3 bg-[#faf9f8] border border-gray-200 rounded-xs">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isGiftWrap}
                    onChange={(e) => setIsGiftWrap(e.target.checked)}
                    className="mt-0.5 accent-black"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-black flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      Signature Selleria Luxury Presentation Box (Complimentary)
                    </span>
                    <p className="text-gray-500 text-[11px] mt-0.5">
                      Presented in our luxury matte black embossed box with protective dust bag.
                    </p>
                  </div>
                </label>
              </div>

              {/* Action Buttons: Inquire Now with WhatsApp icon */}
              <div className="space-y-3">
                <button
                  id="modal-inquire-whatsapp-btn"
                  onClick={() => {
                    const text = `Hi Selleria Luxury, I would like to inquire about: ${product.name} (Ref: ${product.id}). Please share export pricing, specifications, and sample details.`;
                    window.open(`https://wa.me/918874722226?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md bg-[#1E5631] hover:bg-[#164225] text-white cursor-pointer rounded-full"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>INQUIRE NOW</span>
                </button>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <a
                      href="tel:+918874722226"
                      className="py-2.5 text-xs uppercase tracking-wider font-semibold border border-neutral-300 text-neutral-800 hover:text-[#1E5631] hover:border-[#1E5631] transition-colors flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 88747 22226</span>
                    </a>

                    <a
                      href="tel:+918853722226"
                      className="py-2.5 text-xs uppercase tracking-wider font-semibold border border-neutral-300 text-neutral-800 hover:text-[#1E5631] hover:border-[#1E5631] transition-colors flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 88537 22226</span>
                    </a>
                  </div>

                  <a
                    href={`mailto:info@selleriahouse.com?subject=Inquiry: ${encodeURIComponent(product.name)}`}
                    className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold border border-neutral-300 text-neutral-800 hover:text-[#1E5631] hover:border-[#1E5631] transition-colors flex items-center justify-center gap-1.5 rounded-full"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email: info@selleriahouse.com</span>
                  </a>
                </div>
              </div>

              {/* Delivery info & guarantees */}
              <div className="mt-6 pt-5 border-t border-gray-200 space-y-2.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#1E5631]" />
                  <span>Complimentary Express Delivery within 2–4 business days across India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1E5631]" />
                  <span>100% Guaranteed Authenticity & 30-Day Complimentary Returns</span>
                </div>
              </div>

              {/* Description & Details Accordion */}
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-700">
                <h4 className="font-semibold uppercase tracking-wider text-[#1E5631] mb-1.5">
                  About The Piece
                </h4>
                <p className="leading-relaxed mb-3 text-gray-600 font-light">
                  {product.description}
                </p>
                <h5 className="font-semibold text-[11px] uppercase tracking-wider text-gray-800 mb-1">
                  Materials & Tailoring:
                </h5>
                <p className="text-gray-500 text-[11px] mb-2">{product.materials}</p>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-600">
                  {product.details.map((det, i) => (
                    <li key={i}>{det}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
