import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Product } from '../types';

export interface CatalogProductDetail {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
  fallbackImage?: string;
  specs: string;
  description?: string;
  materials?: string;
  details?: string[];
  colors?: { name: string; hex: string; image: string }[];
}

interface ProductDetailPageProps {
  product: CatalogProductDetail | Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    'primaryImage' in product ? product.primaryImage : product.image
  );
  const [isImageFading, setIsImageFading] = useState<boolean>(false);

  const handleImageChange = (newImage: string) => {
    if (newImage === selectedImage) return;
    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImage(newImage);
      setTimeout(() => {
        setIsImageFading(false);
      }, 50);
    }, 180);
  };

  const productName = product.name;
  const sku = product.id.toUpperCase();
  const categoryLabel =
    'categoryLabel' in product
      ? product.categoryLabel
      : product.category ? product.category.toUpperCase() : 'EQUESTRIAN GEAR';

  const specs =
    'specs' in product
      ? product.specs
      : product.materials || 'Handcrafted full-grain leather, solid brass / stainless steel hardware.';

  const handleWhatsAppInquiry = () => {
    const productImageUrl = selectedImage.startsWith('http')
      ? selectedImage
      : `${window.location.origin}${selectedImage}`;

    const text = `Hi, I want to inquire about \n${productName}\nSKU: ${sku}\nImage: ${productImageUrl}`;
    const url = `https://wa.me/918874722226?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Color options if available
  const colorOptions = 'colors' in product && Array.isArray(product.colors) ? product.colors : [];

  const isLegProtector =
    ('category' in product && (product.category === 'leg-protectors' || product.category === 'leg-protector')) ||
    ('categoryLabel' in product && (product.categoryLabel === 'Leg Protectors' || product.categoryLabel === 'LEG PROTECTORS'));

  const isLeatherBag =
    ('category' in product && (product.category === 'leather-bags' || product.category === 'leather-bag' || product.category === 'leather bags' || product.category === 'bags' || product.category === 'bag')) ||
    ('categoryLabel' in product && (product.categoryLabel === 'Leather Bags' || product.categoryLabel === 'LEATHER BAGS'));

  return (
    <div className="w-full bg-white text-black min-h-screen pt-0 sm:pt-1 pb-16 sm:pb-24">
      {/* Top Header & Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 mb-2 sm:mb-4 pt-1 sm:pt-2">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 hover:text-[#1E5631] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Equestrian Collection</span>
          </button>

          <span className="text-[11px] uppercase tracking-[0.2em] text-[#1E5631] font-semibold">
            SKU: {sku}
          </span>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: High-Resolution Product Imagery (7 cols) - STICKY ON DESKTOP */}
          <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-28 self-start">
            <div
              className={`relative ${
                isLeatherBag
                  ? 'aspect-[4/5] sm:aspect-[3/4] max-h-[680px]'
                  : isLegProtector
                  ? 'aspect-square sm:aspect-[4/3]'
                  : 'aspect-[4/3] sm:aspect-[16/11]'
              } w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md`}
            >
              <img
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                src={selectedImage}
                onError={(e) => {
                  if ('fallbackImage' in product && product.fallbackImage) {
                    (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
                  }
                }}
                alt={productName}
                className={`w-full h-full object-cover filter brightness-[0.96] contrast-[1.03] transition-all duration-300 ease-in-out ${
                  isImageFading ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
                } ${
                  isLegProtector ? 'object-bottom sm:object-[center_90%]' : 'object-center'
                }`}
                style={isLegProtector ? { objectPosition: 'center 88%' } : undefined}
              />
              <div className="absolute top-4 left-4 bg-[#1E5631] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {categoryLabel}
              </div>
            </div>

            {/* Thumbnail Row if available */}
            {colorOptions.length > 1 && (
              <div className="flex items-center gap-3 pt-2">
                {colorOptions.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleImageChange(c.image)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === c.image
                        ? 'border-[#1E5631] ring-2 ring-[#1E5631]/30'
                        : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Direct Inquiry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Product Headline */}
              <h1
                className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-black leading-[1.15] mb-5"
                style={{
                  fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                }}
              >
                {productName}
              </h1>

              {/* Specifications Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 mb-6 space-y-3">
                <h4
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631]"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                  }}
                >
                  Specifications
                </h4>
                <p className="text-xs sm:text-[13px] text-neutral-800 font-light leading-relaxed">
                  {specs}
                </p>

                <div className="pt-2 border-t border-neutral-200 grid grid-cols-2 gap-3 text-xs text-neutral-600">
                  <div>
                    <span className="block font-medium text-neutral-900">Custom Branding:</span>
                    <span>Embossing, Laser, Woven</span>
                  </div>
                  <div>
                    <span className="block font-medium text-neutral-900">Hardware:</span>
                    <span>Solid Brass or Stainless</span>
                  </div>
                  <div>
                    <span className="block font-medium text-neutral-900">Air Dispatch:</span>
                    <span>3–4 Days to US / UK / EU</span>
                  </div>
                  <div>
                    <span className="block font-medium text-neutral-900">Sample Guarantee:</span>
                    <span>Free sample revisions</span>
                  </div>
                </div>
              </div>

              {/* PRIMARY ACTION: Inquire Now with WhatsApp icon */}
              <div className="mb-8">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-4 px-6 rounded-full bg-[#1E5631] hover:bg-[#164225] text-white transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-sm uppercase tracking-[0.16em] shadow-lg hover:shadow-xl cursor-pointer group active:scale-[0.99]"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>INQUIRE NOW</span>
                </button>
              </div>

              {/* Guarantees & OEM Badges */}
              <div className="pt-6 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5631] shrink-0" />
                  <span>Custom sizes, leathers, and private labels made to order</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#1E5631] shrink-0" />
                  <span>Triple-inspection before international dispatch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#1E5631] shrink-0" />
                  <span>Complimentary packaging & protective dust bags available</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
