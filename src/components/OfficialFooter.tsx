import React, { useState } from 'react';
import { Instagram, Youtube, Twitter, Check } from 'lucide-react';

interface OfficialFooterProps {
  onOpenAuth: () => void;
  onOpenStoreModal: () => void;
  onOpenConciergeModal: () => void;
  onSelectCategory: (category: string) => void;
}

export const OfficialFooter: React.FC<OfficialFooterProps> = ({
  onOpenAuth,
  onOpenStoreModal,
  onOpenConciergeModal,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200 pt-16 pb-12 font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        {/* 4-Column Grid with Vertical Borders */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-16">
          {/* Column 1: ABOUT */}
          <div className="md:pr-8 md:border-r border-gray-200 mb-10 md:mb-0">
            <h4 className="font-bold uppercase tracking-wider text-[11px] text-black mb-5">
              ABOUT
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 font-normal">
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-black transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Careers</span>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-black transition-colors text-left"
                >
                  World of RL
                </button>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Protecting Our Brands</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Privacy</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Terms Of Use</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Terms Of Sale</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Imprint</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Cookies</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Manage Cookie Settings</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Accessibility Statement</span>
              </li>
            </ul>
          </div>

          {/* Column 2: ACCOUNT */}
          <div className="md:px-8 md:border-r border-gray-200 mb-10 md:mb-0">
            <h4 className="font-bold uppercase tracking-wider text-[11px] text-black mb-5">
              ACCOUNT
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 font-normal">
              <li>
                <button
                  onClick={onOpenAuth}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAuth}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Check Order
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER SERVICE */}
          <div className="md:px-8 md:border-r border-gray-200 mb-10 md:mb-0">
            <h4 className="font-bold uppercase tracking-wider text-[11px] text-black mb-5">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 font-normal">
              <li>
                <button
                  onClick={onOpenConciergeModal}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Help
                </button>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Shipping</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Free Online Returns</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Operating Guidelines</span>
              </li>
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER SIGNUP BOX (100% Matching Screenshot) */}
          <div className="md:pl-8">
            <p className="font-bold text-[10px] leading-relaxed tracking-wider text-black uppercase mb-4">
              SIGN UP TO RECEIVE THE LATEST NEWS, SPECIAL OFFERS AND/OR EXCLUSIVE EVENTS RELATING TO RALPH LAUREN PRODUCTS AND SERVICES, BY E-MAIL OR TARGETED SOCIAL MEDIA ADS. BY SIGNING UP, YOU CONSENT TO THE USE OF TRACKING TECHNOLOGIES FOR PERSONALISATION AND ANALYTICS.
            </p>

            {subscribed ? (
              <div className="p-3 bg-gray-50 border border-emerald-600 text-emerald-700 text-xs flex items-center gap-2 mb-4">
                <Check className="w-4 h-4" />
                <span>Thank you for signing up to Ralph Lauren correspondence.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mb-4">
                <div className="flex border border-gray-300 focus-within:border-black transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="ENTER EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[11px] placeholder:text-gray-400 text-black uppercase tracking-wider outline-none bg-white"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1E5631] hover:bg-[#184728] text-white text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}

            <p className="text-[10px] text-gray-500 leading-normal font-light">
              You may unsubscribe at any time by clicking on the unsubscribe link in each e-mail. For more information, please read Ralph Lauren Europe Sàrl's <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>

        {/* Social Media Icons (Centered row matching screenshot) */}
        <div className="pt-10 pb-6 flex justify-center items-center space-x-4">
          <a
            href="https://www.instagram.com/sellerialuxuryofficial?srtk=cjQycWU0eTV4ZDF6&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-sm bg-[#1E5631] hover:bg-[#184728] text-white flex items-center justify-center transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/user/ralphlauren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-8 h-8 rounded-sm bg-[#1E5631] hover:bg-[#184728] text-white flex items-center justify-center transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/ralphlauren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Twitter"
            className="w-8 h-8 rounded-sm bg-[#1E5631] hover:bg-[#184728] text-white flex items-center justify-center transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.pinterest.com/ralphlauren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="w-8 h-8 rounded-sm bg-[#1E5631] hover:bg-[#184728] text-white flex items-center justify-center transition-colors"
          >
            <span className="font-bold text-xs font-serif leading-none">P</span>
          </a>
        </div>

        {/* Copyright notice matching screenshot */}
        <div className="text-center pt-2">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-normal">
            © COPYRIGHT 2026 RALPH LAUREN MEDIA LLC
          </p>
        </div>
      </div>
    </footer>
  );
};
