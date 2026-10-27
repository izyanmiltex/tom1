import React from 'react';

interface SelleriaLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'green';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const SelleriaLogo: React.FC<SelleriaLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-[60px]',
    md: 'h-[75px] sm:h-[88px]',
    lg: 'h-[110px] sm:h-[130px]',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
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
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};
