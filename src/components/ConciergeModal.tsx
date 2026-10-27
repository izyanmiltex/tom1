import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { BOUTIQUES_INDIA } from '../data/ralphLaurenData';

interface ConciergeModalProps {
  isOpen: boolean;
  preselectedStore?: string;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  preselectedStore,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [store, setStore] = useState(preselectedStore || BOUTIQUES_INDIA[0].name);
  const [serviceType, setServiceType] = useState('In-Store VIP Styling');
  const [date, setDate] = useState('2026-09-25');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white shadow-2xl border border-gray-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close help desk"
          className="absolute top-4 right-4 p-1.5 text-gray-500 hover:text-black rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#1E5631] mx-auto animate-bounce" />
            <h3 className="font-serif-brand text-2xl text-black">
              Consultation Requested
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
              A private client advisor from <span className="font-semibold text-black">{store}</span> will contact you at <span className="font-semibold">{phone || email}</span> within 24 hours to confirm your consultation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#1E5631] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#164225]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#1E5631]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1E5631]">
                Selleria Luxury Help Desk
              </span>
            </div>

            <h3 className="font-serif-brand text-2xl text-black mb-2">
              Book a Private Consultation
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Experience one-on-one consultation, custom saddles, and made-to-measure equestrian gear at our atelier and workshops.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 focus:border-[#1E5631] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 focus:border-[#1E5631] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 focus:border-[#1E5631] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Preferred Location
                </label>
                <select
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 bg-white focus:border-[#1E5631] outline-none text-xs"
                >
                  {BOUTIQUES_INDIA.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.city})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    Consultation Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 bg-white focus:border-[#1E5631] outline-none text-xs"
                  >
                    <option value="Custom Saddle Fitting">Custom Saddle Fitting</option>
                    <option value="Private Labelling & OEM Consultation">Private Labelling & OEM Consultation</option>
                    <option value="Tack & Bridle Customization">Tack & Bridle Customization</option>
                    <option value="Rider Apparel Sizing & Bulk Order">Rider Apparel Sizing & Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 bg-white focus:border-[#1E5631] outline-none text-xs"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E5631] hover:bg-[#164225] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
