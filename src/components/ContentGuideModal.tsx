import React from 'react';
import { X, Code, CheckCircle, FileText, Image, DollarSign, Layers } from 'lucide-react';

interface ContentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentGuideModal: React.FC<ContentGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close content guide"
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#1E5631]">
          <Code className="w-5 h-5 text-[#1E5631]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-500">
            Content Customization Guide
          </span>
        </div>

        <h3 className="font-serif-brand text-2xl text-[#1E5631] mb-3">
          How to Customize Your Website Content
        </h3>
        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
          As requested, all website content (products, prices, imagery, mega-menu links, hero campaigns, and boutique addresses) is centralized in a clean, dedicated file so you can update everything at any time.
        </p>

        <div className="space-y-4 text-xs">
          {/* File location */}
          <div className="p-4 bg-[#F0F6F2] border border-[#1E5631]/20">
            <div className="flex items-center gap-2 font-semibold text-[#1E5631] text-sm mb-1">
              <FileText className="w-4 h-4 text-[#1E5631]" />
              <span>Primary Content File:</span>
            </div>
            <code className="text-[12px] bg-white px-2 py-1 border border-gray-300 rounded font-mono text-[#1E5631] block w-fit">
              /src/data/ralphLaurenData.ts
            </code>
          </div>

          {/* Section guides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 border border-gray-200 bg-white space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E5631]">
                <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
                <span>Products & Pricing</span>
              </div>
              <p className="text-gray-500 text-[11px]">
                Edit the <code className="text-gray-800">PRODUCTS</code> array to change titles, descriptions, INR prices, sizes, or color swatches.
              </p>
            </div>

            <div className="p-3.5 border border-gray-200 bg-white space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E5631]">
                <Image className="w-3.5 h-3.5 text-[#1E5631]" />
                <span>Hero Campaigns & Imagery</span>
              </div>
              <p className="text-gray-500 text-[11px]">
                Update <code className="text-gray-800">CAMPAIGNS</code> in <code className="text-gray-800">HeroBanner.tsx</code> to swap banner photos and headline copy.
              </p>
            </div>

            <div className="p-3.5 border border-gray-200 bg-white space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E5631]">
                <Layers className="w-3.5 h-3.5 text-[#1E5631]" />
                <span>Navigation & Categories</span>
              </div>
              <p className="text-gray-500 text-[11px]">
                Modify <code className="text-gray-800">NAV_CATEGORIES</code> in <code className="text-gray-800">ralphLaurenData.ts</code> to re-organize the mega menu dropdowns.
              </p>
            </div>

            <div className="p-3.5 border border-gray-200 bg-white space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E5631]">
                <CheckCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Stores & Boutiques</span>
              </div>
              <p className="text-gray-500 text-[11px]">
                Edit <code className="text-gray-800">BOUTIQUES_INDIA</code> to change store locations, opening hours, and concierge phone numbers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1E5631] hover:bg-[#184728] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
