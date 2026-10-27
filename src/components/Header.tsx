import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled?: boolean;
  onNavigateToHome?: () => void;
  onNavigateToProducts?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivateLabel?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled: propIsScrolled,
  onNavigateToHome,
  onNavigateToProducts,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToPrivateLabel,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);

  useEffect(() => {
    if (propIsScrolled !== undefined) return;
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propIsScrolled]);

  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalScrolled;
  const isSolid = isScrolled;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    if (onNavigateToProducts) onNavigateToProducts();
    else scrollTo('equestrian-products-section');
  };

  const handleAboutClick = () => {
    if (onNavigateToAbout) onNavigateToAbout();
    else scrollTo('about-section');
  };

  const handleContactClick = () => {
    if (onNavigateToContact) onNavigateToContact();
    else scrollTo('custom-order-inquiry');
  };

  const handlePrivateLabelClick = () => {
    if (onNavigateToPrivateLabel) onNavigateToPrivateLabel();
    else scrollTo('custom-order-inquiry');
  };

  return (
    <header
      className="w-full transition-all duration-300 select-none bg-white border-b border-neutral-100 shadow-xs overflow-visible pt-[4px] pb-[4px]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-[75px] sm:h-[83px] md:h-[90px] min-h-[75px] sm:min-h-[83px] md:min-h-[90px] max-h-[90px] py-[4px]">
          
          {/* Left: Selleria Luxury Logo (size increased by 30% without increasing header height) */}
          <div className="flex items-center overflow-visible">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToHome) {
                  onNavigateToHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center group py-0 relative overflow-visible"
            >
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
                className="h-[75px] sm:h-[83px] md:h-[94px] w-auto object-contain transition-all duration-200 group-hover:opacity-90 -my-2 sm:-my-2 md:-my-3 filter drop-shadow-xs"
              />
            </a>
          </div>

          {/* Right Corner Menu: products, about, contact us, and highlighted private labelling */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            <button
              onClick={handleProductsClick}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225] transition-colors py-1 cursor-pointer"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Products
            </button>

            <button
              onClick={handleAboutClick}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225] transition-colors py-1 cursor-pointer"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              About
            </button>

            <button
              onClick={handleContactClick}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225] transition-colors py-1 cursor-pointer"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Contact
            </button>

            {/* Right Menu Button: Private Labelling in white text and green background */}
            <button
              onClick={handlePrivateLabelClick}
              className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer shadow-sm bg-[#1E5631] text-white hover:bg-[#164225] border border-[#1E5631]"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Private Labelling
            </button>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none transition-colors text-[#1E5631] hover:text-[#164225]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-neutral-100 bg-white text-neutral-900 px-6 py-6 shadow-lg animate-fade-in"
        >
          <div className="flex flex-col space-y-4 text-center">
            <button
              onClick={handleProductsClick}
              className="py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225]"
            >
              Products
            </button>
            <button
              onClick={handleAboutClick}
              className="py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225]"
            >
              About
            </button>
            <button
              onClick={handleContactClick}
              className="py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#1E5631] hover:text-[#164225]"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={handlePrivateLabelClick}
                className="w-full py-3 rounded-full text-xs font-bold tracking-[0.18em] uppercase bg-[#1E5631] text-white hover:bg-[#164225] transition-colors shadow-sm"
              >
                Private Labelling
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
