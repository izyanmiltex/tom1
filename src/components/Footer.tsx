import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Globe, MapPin, Sparkles, Edit3 } from 'lucide-react';
import { CurrencyCode } from '../types';

interface FooterProps {
  currentCurrency: CurrencyCode;
  onOpenRegionModal: () => void;
  onOpenStoreModal: () => void;
  onOpenConciergeModal: () => void;
  onOpenContentGuide: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentCurrency,
  onOpenRegionModal,
  onOpenStoreModal,
  onOpenConciergeModal,
  onOpenContentGuide,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'men' | 'women' | 'all'>('all');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#07190F] text-white border-t border-[#1E5631]/30">
      {/* Newsletter VIP Club Banner */}
      <div className="border-b border-[#1E5631]/20 py-14 px-6 bg-[#0B1F12]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#A2D4B1] font-semibold block mb-2">
            The Private Client Society
          </span>
          <h3 className="font-serif-brand text-2xl sm:text-3xl text-white font-normal tracking-wide mb-3">
            Be the First to Know
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-6 font-light leading-relaxed">
            Subscribe to receive private invitations to seasonal previews, bespoke trunk shows, and editorial stories from the World of Ralph Lauren.
          </p>

          {subscribed ? (
            <div className="p-4 bg-[#0F2B18] border border-[#1E5631]/40 text-[#A2D4B1] text-xs inline-flex items-center gap-2 max-w-md mx-auto">
              <Check className="w-4 h-4" />
              <span>Thank you for subscribing. A welcome correspondence has been dispatched.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
              <div className="flex border border-white/30 focus-within:border-white transition-colors bg-white/5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-xs text-white placeholder-gray-400 bg-transparent focus:outline-none tracking-wider"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-[#1E5631] hover:bg-[#1E5631] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Preference options */}
              <div className="flex justify-center gap-6 text-[11px] text-neutral-300 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="pref"
                    checked={interest === 'all'}
                    onChange={() => setInterest('all')}
                    className="accent-white"
                  />
                  <span>All Collections</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="pref"
                    checked={interest === 'men'}
                    onChange={() => setInterest('men')}
                    className="accent-white"
                  />
                  <span>Men's Edit</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="pref"
                    checked={interest === 'women'}
                    onChange={() => setInterest('women')}
                    className="accent-white"
                  />
                  <span>Women's Edit</span>
                </label>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-[#A2D4B1] text-[11px]">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-neutral-300 font-light">
              <li>
                <button onClick={onOpenConciergeModal} className="hover:text-white text-left">
                  Client Concierge Assistance
                </button>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Track Your Order</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Shipping & White-Glove Delivery</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Returns & Exchanges (India)</span>
              </li>
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  Boutique Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-[#A2D4B1] text-[11px]">
              World of RL
            </h4>
            <ul className="space-y-2.5 text-neutral-300 font-light">
              <li>
                <button onClick={() => onSelectCategory('men')} className="hover:text-white text-left">
                  Polo Ralph Lauren
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('men')} className="hover:text-white text-left">
                  Ralph Lauren Purple Label
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('women')} className="hover:text-white text-left">
                  Ralph Lauren Collection
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('men')} className="hover:text-white text-left">
                  Double RL Selvedge
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('home')} className="hover:text-white text-left">
                  Ralph Lauren Home
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-[#A2D4B1] text-[11px]">
              Boutiques in India
            </h4>
            <ul className="space-y-2.5 text-neutral-300 font-light">
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  DLF Emporio, New Delhi
                </button>
              </li>
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  The Chanakya, New Delhi
                </button>
              </li>
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  Jio World Plaza, Mumbai
                </button>
              </li>
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  Palladium Mall, Mumbai
                </button>
              </li>
              <li>
                <button onClick={onOpenStoreModal} className="hover:text-white text-left">
                  The Collection UB City, Bengaluru
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-[#A2D4B1] text-[11px]">
              The Company
            </h4>
            <ul className="space-y-2.5 text-neutral-300 font-light">
              <li>
                <span className="hover:text-white cursor-pointer">About Ralph Lauren</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">50+ Years of Design</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Pink Pony & Philanthropy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Careers & Culture</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Investor Relations</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Customization Guide & Legal */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-[#A2D4B1] text-[11px]">
              Replica & Setup
            </h4>
            <div className="p-3 bg-[#0B1F12] border border-[#1E5631]/30 space-y-2">
              <p className="text-[11px] text-gray-300">
                100% replicate of ralphlauren.global/in/en with centralized content.
              </p>
              <button
                onClick={onOpenContentGuide}
                className="w-full py-1.5 px-2 bg-white text-[#1E5631] hover:bg-[#1E5631] hover:text-white text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 cursor-pointer transition-colors"
              >
                <Edit3 className="w-3 h-3" />
                <span>Content Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Region & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#1E5631]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenRegionModal}
              className="flex items-center gap-1.5 hover:text-white font-medium cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#A2D4B1]" />
              <span>India | English ({currentCurrency})</span>
            </button>
            <button
              onClick={onOpenStoreModal}
              className="flex items-center gap-1.5 hover:text-white cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Store Directory</span>
            </button>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="tracking-wider">
              © 2026 Ralph Lauren Corporation. 100% Brand Architecture Replicate.
            </p>
            <div className="space-x-3 text-[11px] text-gray-400">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Counterfeit Education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
