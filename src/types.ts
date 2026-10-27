export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subBrand: 'Polo Ralph Lauren' | 'Ralph Lauren Purple Label' | 'Double RL' | 'Ralph Lauren Collection' | 'Lauren Ralph Lauren' | 'Ralph Lauren Home';
  category: 'men' | 'women' | 'kids' | 'home' | 'accessories';
  priceINR: number;
  originalPriceINR?: number;
  tag?: string;
  isNew?: boolean;
  isIcon?: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  materials: string;
  colors: ProductColor[];
  sizes: string[];
  primaryImage: string;
  hoverImage: string;
  fitGuide?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
  isGiftBox?: boolean;
}

export interface NavCategory {
  id: string;
  title: string;
  badge?: string;
  columns: {
    title: string;
    items: { label: string; href?: string; isBold?: boolean; isNew?: boolean }[];
  }[];
  featuredCard: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
}

export interface EditorialStory {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  hours: string;
  brands: string[];
  isFlagship?: boolean;
}

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromINR: number; // multiplier from INR
}
