import React, { useState } from 'react';
import { MapPin, Globe, X } from 'lucide-react';
import { CurrencyCode } from '../types';

interface TopBarProps {
  currentCurrency: CurrencyCode;
  isScrolled?: boolean;
  onOpenRegionModal: () => void;
  onOpenStoreModal: () => void;
  onOpenConciergeModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentCurrency,
  isScrolled = false,
  onOpenRegionModal,
  onOpenStoreModal,
}) => {
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);

  return (
    <>
      <div
        className={`font-rl-announcement transition-all duration-300 relative z-40 ${
          isScrolled
            ? 'max-h-0 opacity-0 overflow-hidden py-0 border-transparent pointer-events-none'
            : 'max-h-12 opacity-100 bg-transparent text-white border-b border-white/15'
        }`}
      >
        <div className="w-full px-4 sm:px-8 h-9 flex items-center justify-between">
          {/* Left spacer for optical centering */}
          <div className="hidden md:block w-40"></div>

          {/* Center Announcement */}
          <div className="flex-1 text-center font-normal tracking-wide text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            <span>Free Standard Delivery</span>
            <span className="mx-2 text-white/50">|</span>
            <button
              onClick={() => setShowDeliveryDetails(true)}
              className="underline hover:text-white cursor-pointer transition-colors"
            >
              Details
            </button>
          </div>

          {/* Right Links: IN English and Find a store */}
          <div className="flex items-center space-x-6 text-white/80 text-[11px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            <button
              onClick={onOpenRegionModal}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>IN English</span>
            </button>
            <button
              onClick={onOpenStoreModal}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find a store</span>
            </button>
          </div>
        </div>
      </div>

      {/* Free Delivery Details Modal */}
      {showDeliveryDetails && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-black max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowDeliveryDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif-brand text-lg font-normal mb-3 text-[#1E5631]">
              Complimentary Standard Delivery
            </h3>
            <div className="text-xs text-gray-600 space-y-2 leading-relaxed">
              <p>
                Enjoy complimentary white-glove standard delivery on all qualifying orders delivered within India.
              </p>
              <p>
                Standard delivery typically arrives within 3–5 business days. Express boutique dispatch is available at checkout for major metropolitan cities including New Delhi, Mumbai, and Bengaluru.
              </p>
              <p>
                All pieces arrive elegantly packaged in our signature Ralph Lauren presentation box with woven grosgrain ribbon.
              </p>
            </div>
            <button
              onClick={() => setShowDeliveryDetails(false)}
              className="mt-5 w-full py-2 bg-[#1E5631] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#184728] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
