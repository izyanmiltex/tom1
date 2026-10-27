import React, { useState, useEffect } from 'react';
import { Product, CartItem, CurrencyCode } from './types';
import { PRODUCTS } from './data/ralphLaurenData';

// Header
import { Header } from './components/Header';

// Main Sections
import { HeroLakeSection } from './components/HeroLakeSection';
import { SectionPoloHeritage } from './components/SectionPoloHeritage';
import { SectionAboutLeathercraft } from './components/SectionAboutLeathercraft';
import { SectionHorseRiding } from './components/SectionHorseRiding';
import { SectionGarments } from './components/SectionGarments';
import { SectionHaltersAndBridles } from './components/SectionHaltersAndBridles';
import { SectionManufacturingAndExport } from './components/SectionManufacturingAndExport';
import { SectionCustomOrderAndInquiry } from './components/SectionCustomOrderAndInquiry';
import { ModernFooter } from './components/ModernFooter';
import { FadeInSection } from './components/FadeInSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

// Lazy-loaded pages (code-split for maximum initial loading speed)
const ProductsPage = React.lazy(() => import('./components/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const AboutPage = React.lazy(() => import('./components/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = React.lazy(() => import('./components/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivateLabellingPage = React.lazy(() => import('./components/PrivateLabellingPage').then((m) => ({ default: m.PrivateLabellingPage })));

// Lazy-loaded interactive modals and drawers
const ProductModal = React.lazy(() => import('./components/ProductModal').then((m) => ({ default: m.ProductModal })));
const CartDrawer = React.lazy(() => import('./components/CartDrawer').then((m) => ({ default: m.CartDrawer })));
const WishlistDrawer = React.lazy(() => import('./components/WishlistDrawer').then((m) => ({ default: m.WishlistDrawer })));
const SearchModal = React.lazy(() => import('./components/SearchModal').then((m) => ({ default: m.SearchModal })));
const StoreLocatorModal = React.lazy(() => import('./components/StoreLocatorModal').then((m) => ({ default: m.StoreLocatorModal })));
const ConciergeModal = React.lazy(() => import('./components/ConciergeModal').then((m) => ({ default: m.ConciergeModal })));
const RegionSelectorModal = React.lazy(() => import('./components/RegionSelectorModal').then((m) => ({ default: m.RegionSelectorModal })));
const ContentGuideModal = React.lazy(() => import('./components/ContentGuideModal').then((m) => ({ default: m.ContentGuideModal })));
const AuthModal = React.lazy(() => import('./components/AuthModal').then((m) => ({ default: m.AuthModal })));

export default function App() {
  // Navigation View: 'home', 'products', 'about', 'contact', 'private-label'
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'contact' | 'private-label'>('home');

  // Region & currency state (India INR ₹ by default)
  const [currency, setCurrency] = useState<CurrencyCode>('INR');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [, setSelectedBrandFilter] = useState<string | null>(null);

  // User cart & wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0],
      selectedSize: 'M',
      quantity: 1,
      isGiftBox: true,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id]);

  // Modals & Drawers state
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [conciergeStore, setConciergeStore] = useState<string | undefined>(undefined);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isContentGuideOpen, setIsContentGuideOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  // Preload top primary images into browser memory cache for maximum loading speed
  useEffect(() => {
    const assetsToPreload = [
      'https://aryezmiltex.com/sellerialogo?v=2',
      'https://aryezmiltex.com/sellerialogo',
      '/sellerialogo.png',
      'https://aryezmiltex.com/selleriafavicon',
      'https://izyanmiltex.com/bridles.avif',
      'https://izyanmiltex.com/halters.webp',
      'https://izyanmiltex.com/saddlery',
      'https://aryezmiltex.com/saddlepad3',
      'https://aryezmiltex.com/show%20acket%201',
    ];
    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Prefetch secondary route chunks during idle time for instant transitions
  useEffect(() => {
    const prefetchViews = () => {
      import('./components/ProductsPage');
      import('./components/AboutPage');
      import('./components/ContactPage');
    };
    if ('requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetchViews);
    } else {
      setTimeout(prefetchViews, 1500);
    }
  }, []);

  // Listen to URL hash for direct links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'about') setCurrentView('about');
      else if (hash === 'contact') setCurrentView('contact');
      else if (hash === 'private-label' || hash === 'privatelabel' || hash === 'privatelabelling' || hash === 'private-labelling') {
        setCurrentView('about');
        setTimeout(() => {
          const el = document.getElementById('private-labelling-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 250);
      }
      else if (hash === 'products') setCurrentView('products');
      else if (hash === '' || hash === 'home') setCurrentView('home');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product, size: string, colorIndex: number, isGift: boolean) => {
    setCart((prev) => {
      const selectedColor = product.colors[colorIndex] || product.colors[0];
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.name === selectedColor.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedColor,
            selectedSize: size,
            quantity: 1,
            isGiftBox: isGift,
          },
        ];
      }
    });
  };

  const handleUpdateCartQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleMoveWishlistToBag = (product: Product) => {
    handleAddToCart(product, product.sizes[0] || 'M', 0, false);
    setIsCartOpen(true);
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Category navigation jump
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedBrandFilter(null);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToProducts = (cat: string | unknown = 'all') => {
    const targetCat = typeof cat === 'string' && cat ? cat : 'all';
    setSelectedCategory(targetCat);
    setCurrentView('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToAbout = () => {
    setCurrentView('about');
    window.location.hash = 'about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToContact = () => {
    setCurrentView('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPrivateLabel = () => {
    setCurrentView('about');
    window.location.hash = 'private-labelling';
    setTimeout(() => {
      const el = document.getElementById('private-labelling-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const isTransparentHeader =
    currentView === 'home' || currentView === 'about' || currentView === 'contact';

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#1E5631] selection:text-white">
      {/* Non-Sticky Navigation Bar: White header over hero and content pages */}
      <div
        className={`${
          isTransparentHeader
            ? 'absolute top-0 left-0 right-0 z-50 pointer-events-auto'
            : 'relative top-0 left-0 right-0 z-50 pointer-events-auto w-full'
        }`}
      >
        <Header
          onNavigateToHome={handleGoToHome}
          onNavigateToProducts={() => handleGoToProducts('all')}
          onNavigateToAbout={handleGoToAbout}
          onNavigateToContact={handleGoToContact}
          onNavigateToPrivateLabel={handleGoToPrivateLabel}
        />
      </div>

      <main className="flex-1 w-full bg-white">
        <React.Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#1E5631] border-t-transparent animate-spin" />
            </div>
          }
        >
          {currentView === 'products' ? (
            /* Products Page: Video banner, Leather Collection heading, filter tags, lightbox image zoom */
            <ProductsPage
              initialCategory={selectedCategory}
              onNavigateToContact={handleGoToContact}
              onNavigateToPrivateLabel={handleGoToPrivateLabel}
            />
          ) : currentView === 'about' ? (
            /* Dedicated About Us Page with Why Choose Us section & Inquiry Banner */
            <AboutPage
              onNavigateToProducts={(cat) => handleGoToProducts(cat || 'all')}
              onNavigateToContact={handleGoToContact}
              onNavigateToPrivateLabel={handleGoToPrivateLabel}
            />
          ) : currentView === 'contact' ? (
            /* Dedicated Contact Us Page with details, form, and animated map */
            <ContactPage
              onNavigateToProducts={() => handleGoToProducts('all')}
            />
          ) : currentView === 'private-label' ? (
            /* Dedicated Private Labelling & OEM Page with Quality Control & Customization */
            <PrivateLabellingPage
              onNavigateToProducts={() => handleGoToProducts('all')}
              onNavigateToContact={handleGoToContact}
            />
          ) : (
            /* Home View */
            <>
              {/* 1. Hero Section: Equestrian Equipments, video, black & white */}
              <HeroLakeSection
                onExplore={() => handleGoToProducts('all')}
              />

              {/* 2. 5 Categories: Bridles, Halters, Saddlery, Saddle Pads, Riding Wear */}
              <FadeInSection>
                <SectionPoloHeritage
                  onSelectCategory={handleSelectCategory}
                  onShopMen={() => handleSelectCategory('accessories')}
                  onShopWomen={() => handleSelectCategory('women')}
                />
              </FadeInSection>

              {/* 3. About Selleria Luxury: Left column narrative & Why Choose Us, Right column image */}
              <FadeInSection>
                <SectionAboutLeathercraft
                  onExploreFactory={() => handleGoToProducts('all')}
                  onRequestSamples={handleGoToContact}
                  onViewProducts={() => handleGoToProducts('all')}
                />
              </FadeInSection>

              {/* 4. Bestselling Saddles (Infinite Carousel) */}
              <FadeInSection>
                <SectionHorseRiding
                  onCardClick={handleSelectCategory}
                  onSelectProduct={(item) => {
                    handleSelectCategory(item.category);
                  }}
                />
              </FadeInSection>

              {/* 5. Best Selling Belts (Infinite Carousel) */}
              <FadeInSection>
                <SectionGarments
                  onCardClick={handleSelectCategory}
                  onSelectProduct={(item) => {
                    handleSelectCategory(item.category);
                  }}
                />
              </FadeInSection>

              {/* 6. Bestselling Halters and Bridles (Infinite Carousel) */}
              <FadeInSection>
                <SectionHaltersAndBridles
                  onCardClick={handleSelectCategory}
                  onSelectProduct={(item) => {
                    handleSelectCategory(item.category);
                  }}
                />
              </FadeInSection>

              {/* 7. Export Partners Map: Interactive animation */}
              <FadeInSection>
                <SectionManufacturingAndExport />
              </FadeInSection>

              {/* 7. Private Labelling: Materials, Colors, Branding, Packaging */}
              <FadeInSection>
                <SectionCustomOrderAndInquiry onOpenConcierge={handleGoToPrivateLabel} />
              </FadeInSection>
            </>
          )}
        </React.Suspense>
      </main>

      {/* Modern Luxury Footer: Black, white & forest green #1E5631, Selleria Luxury */}
      <FadeInSection>
        <ModernFooter
          onNavigateToHome={handleGoToHome}
          onNavigateToProducts={() => handleGoToProducts('all')}
          onNavigateToAbout={handleGoToAbout}
          onNavigateToContact={handleGoToContact}
          onNavigateToPrivateLabel={handleGoToPrivateLabel}
          onSelectCategory={(cat) => handleGoToProducts(cat)}
        />
      </FadeInSection>

      {/* Interactive Modals & Drawers - Loaded only when requested to preserve speed */}
      <React.Suspense fallback={null}>
        {modalProduct && (
          <ProductModal
            product={modalProduct}
            currency={currency}
            isWishlisted={wishlistIds.includes(modalProduct.id)}
            onClose={() => setModalProduct(null)}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
          />
        )}

        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            items={cart}
            currency={currency}
            onClose={() => setIsCartOpen(false)}
            onUpdateQty={handleUpdateCartQty}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
          />
        )}

        {isWishlistOpen && (
          <WishlistDrawer
            isOpen={isWishlistOpen}
            wishlistProducts={wishlistProducts}
            currency={currency}
            onClose={() => setIsWishlistOpen(false)}
            onRemove={handleToggleWishlist}
            onMoveToBag={handleMoveWishlistToBag}
          />
        )}

        {isSearchOpen && (
          <SearchModal
            isOpen={isSearchOpen}
            products={PRODUCTS}
            currency={currency}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={(p) => setModalProduct(p)}
          />
        )}

        {isStoreLocatorOpen && (
          <StoreLocatorModal
            isOpen={isStoreLocatorOpen}
            onClose={() => setIsStoreLocatorOpen(false)}
            onBookStyling={(storeName) => {
              setConciergeStore(storeName);
              setIsConciergeOpen(true);
            }}
          />
        )}

        {isConciergeOpen && (
          <ConciergeModal
            isOpen={isConciergeOpen}
            preselectedStore={conciergeStore}
            onClose={() => setIsConciergeOpen(false)}
          />
        )}

        {isRegionOpen && (
          <RegionSelectorModal
            isOpen={isRegionOpen}
            currentCurrency={currency}
            onClose={() => setIsRegionOpen(false)}
            onSelectCurrency={(c) => setCurrency(c)}
          />
        )}

        {isContentGuideOpen && (
          <ContentGuideModal
            isOpen={isContentGuideOpen}
            onClose={() => setIsContentGuideOpen(false)}
          />
        )}

        {isAuthOpen && (
          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
            onLoginSuccess={() => {}}
          />
        )}
      </React.Suspense>

      {/* Floating WhatsApp Quick Inquiry Button (Visible throughout the site) */}
      <FloatingWhatsAppButton phoneNumber="918874722226" />
    </div>
  );
}
