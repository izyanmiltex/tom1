import React, { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface ModernFooterProps {
  onNavigateToHome?: () => void;
  onNavigateToProducts?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivateLabel?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({
  onNavigateToHome,
  onNavigateToProducts,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToPrivateLabel,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else if (onNavigateToProducts) {
      onNavigateToProducts();
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1F12] text-white pt-16 sm:pt-24 md:pt-28 pb-12 sm:pb-16 border-t border-[#1E5631]/30 select-none overflow-hidden relative">
      {/* Ambient Top Subtle Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-[#1E5631]/30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Statement & Newsletter Block (Black, White & Dark Forest Green) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pb-14 sm:pb-20 border-b border-[#1E5631]/30">
          
          {/* Big Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-white max-w-2xl tracking-tight"
              style={{
                fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              }}
            >
              Manufacturing the finest equestrian and leather goods for global markets.
            </h2>
          </div>

          {/* Minimal Single-Line Catalog Subscription (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <span
              className="text-xs uppercase tracking-[0.22em] text-[#A2D4B1] mb-3 block font-medium"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              }}
            >
              Download Product Catalogue
            </span>

            {isSubscribed ? (
              <div className="flex items-center space-x-2.5 py-3.5 text-white text-sm bg-[#1E5631] px-4 rounded-lg border border-[#1E5631]/40">
                <Check className="w-4 h-4 text-[#A2D4B1]" />
                <span className="font-light tracking-wide">Thank you. The catalog has been sent to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-[#1E5631]/40 focus-within:border-[#A2D4B1] transition-colors pb-2">
                <input
                  type="email"
                  required
                  placeholder="Enter business email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white text-sm sm:text-base placeholder-neutral-400 focus:outline-none pr-10 font-light"
                />
                <button
                  type="submit"
                  aria-label="Download product catalogue"
                  className="absolute right-0 text-white hover:text-[#A2D4B1] transition-colors cursor-pointer p-1"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Refined Information Grid: Selleria Logo column, Collections, Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 py-12 sm:py-16 border-b border-[#1E5631]/30 text-xs text-neutral-300 font-light leading-relaxed">
          
          {/* Col 1: Selleria Luxury Logo & Social Icons (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-3.5">
                <img
                  src="https://aryezmiltex.com/sellerialogo?v=2"
                  alt="Selleria Luxury"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('/sellerialogo.png')) {
                      img.src = '/sellerialogo.png';
                    }
                  }}
                  className="h-[100px] sm:h-[118px] w-auto object-contain rounded-md shadow-xs"
                />
              </div>
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase text-[#A2D4B1]/90">
                Global Equestrian Exporter
              </p>
            </div>

            {/* Social Media Icons: Instagram */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.instagram.com/sellerialuxuryofficial?srtk=cjQycWU0eTV4ZDF6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Selleria Luxury Instagram"
                className="w-9 h-9 rounded-full bg-[#0F2B18] border border-[#1E5631]/40 flex items-center justify-center text-[#A2D4B1] hover:text-white hover:border-[#A2D4B1] transition-all group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact with Both Phone Numbers, WhatsApp, Email, Address (6 cols) */}
          <div className="md:col-span-6">
            <h4
              className="text-white text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold mb-5"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3.5 text-neutral-300">
              <li className="space-y-2">
                <a
                  href="tel:+918874722226"
                  className="hover:text-[#A2D4B1] transition-colors flex items-center gap-2.5 text-white"
                >
                  <Phone className="w-4 h-4 text-[#A2D4B1] shrink-0" />
                  <span className="font-medium text-white tracking-wide">+91 88747 22226</span>
                </a>
                <a
                  href="tel:+918853722226"
                  className="hover:text-[#A2D4B1] transition-colors flex items-center gap-2.5 text-white pl-6.5"
                >
                  <span className="font-medium text-white tracking-wide">+91 88537 22226</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918874722226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E5631] border border-[#1E5631]/40 text-white hover:bg-white hover:text-[#1E5631] transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-medium tracking-wide">Inquire on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@selleriahouse.com" className="hover:text-[#A2D4B1] transition-colors flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#A2D4B1] shrink-0" />
                  <span>info@selleriahouse.com</span>
                </a>
              </li>
              <li className="text-neutral-400 flex items-start gap-2.5 pt-1 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-[#A2D4B1] shrink-0 mt-0.5" />
                <span>51/72, Nayaganj, Kanpur - 208001, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* MASSIVE BRAND WORDMARK: SELLERIA LUXURY (Properly scaled so full name displays without clipping) */}
        <div className="pt-10 sm:pt-14 pb-6 sm:pb-10 text-center select-none w-full flex items-center justify-center">
          <h1
            className="text-white/[0.12] hover:text-[#A2D4B1]/30 transition-colors duration-700 font-normal uppercase tracking-[0.06em] sm:tracking-[0.09em] md:tracking-[0.12em] leading-none whitespace-nowrap text-[6.5vw] sm:text-[7vw] lg:text-[7.2vw] pointer-events-none w-full text-center"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
            }}
          >
            SELLERIA LUXURY
          </h1>
        </div>

        {/* Bottom Minimal Bar */}
        <div className="pt-6 border-t border-[#1E5631]/30 flex items-center justify-center text-[11px] text-neutral-400 font-light">
          <p>© {currentYear} Selleria Luxury. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
