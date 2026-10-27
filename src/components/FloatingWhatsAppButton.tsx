import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber = '918874722226',
  defaultMessage = 'Hello Selleria Luxury, I would like to inquire about your luxury equestrian and leather products.',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="WhatsApp quick inquiry" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label on Hover / Desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-neutral-900/95 text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-xl border border-neutral-700/60 backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>Inquire on WhatsApp: <strong className="text-[#A2D4B1] font-semibold">+91 88747 22226</strong></span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Direct WhatsApp Inquiry with Selleria Luxury (+91 88747 22226)"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  );
};
