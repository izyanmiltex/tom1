import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Sparkles, ExternalLink } from 'lucide-react';
import { BOUTIQUES_INDIA } from '../data/ralphLaurenData';
import { StoreLocation } from '../types';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookStyling: (storeName: string) => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({
  isOpen,
  onClose,
  onBookStyling,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');

  if (!isOpen) return null;

  const cities = ['all', 'New Delhi', 'Mumbai', 'Bengaluru'];

  const filteredStores = BOUTIQUES_INDIA.filter((store) =>
    selectedCity === 'all' ? true : store.city === selectedCity
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl bg-white shadow-2xl border border-gray-200 max-h-[90vh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-[#faf9f8]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#1E5631] font-semibold block">
              Official Indian Ateliers & Showrooms
            </span>
            <h3 className="font-serif-brand text-2xl text-black">
              Selleria Luxury
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close store locator"
            className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* City Filter Tabs */}
        <div className="px-6 py-3 border-b border-gray-100 flex gap-2 bg-white">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#1E5631] text-white font-medium'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#F0F6F2] hover:text-[#1E5631]'
              }`}
            >
              {city === 'all' ? 'All Locations' : city}
            </button>
          ))}
        </div>

        {/* Store List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStores.map((store: StoreLocation) => (
              <div
                key={store.id}
                className="p-5 border border-gray-200 bg-[#faf9f8] hover:border-[#1E5631] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-serif-brand text-lg text-black font-medium">
                      {store.name}
                    </h4>
                    {store.isFlagship && (
                      <span className="bg-[#1E5631] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
                        Flagship
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 mb-4">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#1E5631] shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#1E5631] shrink-0" />
                      <a href={`tel:${store.phone}`} className="hover:underline text-gray-900 font-medium">
                        {store.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1E5631] shrink-0" />
                      <span>{store.hours}</span>
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                      Available Collections:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {store.brands.map((b, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 text-gray-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex gap-2">
                  <button
                    onClick={() => {
                      onBookStyling(store.name);
                      onClose();
                    }}
                    className="flex-1 py-2 bg-[#1E5631] text-white hover:bg-[#184728] text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>Book Private Consultation</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
