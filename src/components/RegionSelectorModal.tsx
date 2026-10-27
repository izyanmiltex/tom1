import React from 'react';
import { X, Check, Globe } from 'lucide-react';
import { CurrencyCode } from '../types';

interface RegionSelectorModalProps {
  isOpen: boolean;
  currentCurrency: CurrencyCode;
  onClose: () => void;
  onSelectCurrency: (code: CurrencyCode) => void;
}

const REGIONS: { country: string; flag: string; currency: CurrencyCode; lang: string }[] = [
  { country: 'India (Default)', flag: '🇮🇳', currency: 'INR', lang: 'English' },
  { country: 'United States', flag: '🇺🇸', currency: 'USD', lang: 'English' },
  { country: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', lang: 'English' },
  { country: 'European Union (France/Italy/Germany)', flag: '🇪🇺', currency: 'EUR', lang: 'English / Français' },
];

export const RegionSelectorModal: React.FC<RegionSelectorModalProps> = ({
  isOpen,
  currentCurrency,
  onClose,
  onSelectCurrency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close region selector"
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#1E5631]">
          <Globe className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">
            Global Shipping & Currency
          </span>
        </div>

        <h3 className="font-serif-brand text-2xl text-[#1E5631] mb-3">
          Select Location & Currency
        </h3>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Prices and duties will update dynamically according to your selected delivery destination.
        </p>

        <div className="space-y-3">
          {REGIONS.map((reg) => (
            <button
              key={reg.country}
              onClick={() => {
                onSelectCurrency(reg.currency);
                onClose();
              }}
              className={`w-full p-4 border text-left flex items-center justify-between transition-all ${
                currentCurrency === reg.currency
                  ? 'border-[#1E5631] bg-[#F0F6F2] shadow-xs ring-1 ring-[#1E5631]'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{reg.flag}</span>
                <div>
                  <h4 className="text-sm font-medium text-[#1E5631]">{reg.country}</h4>
                  <p className="text-xs text-gray-500">
                    {reg.lang} • Currency: <span className="font-semibold">{reg.currency}</span>
                  </p>
                </div>
              </div>

              {currentCurrency === reg.currency && (
                <Check className="w-4 h-4 text-[#1E5631]" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1E5631] hover:bg-[#184728] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
