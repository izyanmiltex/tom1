import React from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Layers,
  Palette,
  Tag,
  Box,
  MessageCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

interface SectionCustomOrderAndInquiryProps {
  onOpenConcierge?: () => void;
}

export const SectionCustomOrderAndInquiry: React.FC<SectionCustomOrderAndInquiryProps> = ({
  onOpenConcierge,
}) => {
  const customizationPillars = [
    {
      id: 'materials',
      name: 'Materials',
      icon: Layers,
      title: 'Materials',
      description:
        'Choose from genuine vegetable-tanned leather, soft French calfskin, heavy cowhide, breathable cotton, or technical sports fabrics.',
      tag: 'Leather & Fabrics',
    },
    {
      id: 'colors',
      name: 'Colors',
      icon: Palette,
      title: 'Colors',
      description:
        'Select custom leather dyes, contrast stitching thread colors, edge coating shades, and metal hardware like brass, silver, or matte black.',
      tag: 'Dyes & Stitching',
    },
    {
      id: 'branding',
      name: 'Branding',
      icon: Tag,
      title: 'Branding',
      description:
        'Put your brand logo on every piece with hot heat debossing, laser engraving, woven fabric labels, or metal badge plates.',
      tag: 'Logo & Labels',
    },
    {
      id: 'packaging',
      name: 'Packaging',
      icon: Box,
      title: 'Packaging',
      description:
        'Get retail-ready presentation with custom printed cloth dust bags, luxury rigid gift boxes, barcode hang tags, and heavy-duty export boxes.',
      tag: 'Boxes & Dust Bags',
    },
  ];

  const handleInquireClick = () => {
    if (onOpenConcierge) {
      onOpenConcierge();
    } else {
      const el = document.getElementById('factory-help-desk-channels') || document.getElementById('factory-concierge-channels');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open('https://wa.me/918874722226', '_blank');
      }
    }
  };

  return (
    <section id="private-labelling-section" className="w-full bg-white text-black border-t border-b border-neutral-200 py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Pristine White Background */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span
            className="uppercase tracking-[0.25em] text-[#1E5631] text-xs font-semibold block mb-2.5"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
            }}
          >
            SELLERIA LUXURY BESPOKE & OEM
          </span>

          <h2
            className="text-black font-normal capitalize text-center leading-tight mb-3"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              fontSize: 'clamp(32px, 5vw, 54px)',
            }}
          >
            Private Labelling
          </h2>

          <p
            className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
          >
            We help global equestrian brands, tack shops, and equestrian academies create custom products with their own brand label. From single custom items to full seasonal collections, everything is made to your exact requirements.
          </p>
        </div>

        {/* 4 Customization Pillars Grid: Dual-tone on White Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {customizationPillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group p-6 sm:p-7 rounded-2xl border border-neutral-200 bg-neutral-50/70 hover:bg-white shadow-xs hover:border-[#1E5631] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 transform-gpu cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1E5631] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#1E5631]/10 text-[#1E5631] border border-[#1E5631]/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    className="text-xl text-black font-normal mb-2"
                    style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-light"
                    style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA: Inquire Now */}
        <div className="flex justify-center mb-14 sm:mb-16">
          <button
            onClick={handleInquireClick}
            className="inline-flex items-center gap-2.5 px-9 py-3.5 rounded-full bg-[#1E5631] text-white hover:bg-[#164225] border border-[#1E5631] transition-all duration-300 font-semibold tracking-[0.18em] text-xs uppercase shadow-md hover:shadow-lg cursor-pointer group"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
            }}
          >
            <span>INQUIRE NOW</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dual-Tone 2 Cards: 1 Card Black, 1 Card Green */}
        <div id="factory-help-desk-channels" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Column 1: Card 1 is BLACK (Factory Direct) */}
          <div className="flex flex-col h-full">
            {/* Box 1: Contact Us Directly (BLACK) */}
            <div className="bg-black text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-neutral-800 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2">
                  Factory Direct
                </span>
                <h3
                  className="text-2xl text-white font-normal mb-6 leading-snug"
                  style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                >
                  Need samples or quotation for an international order? Contact us directly.
                </h3>

                <div className="space-y-3 text-xs">
                  {/* Phone Numbers (Both) */}
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Phone Inquiries</span>
                    <a
                      href="tel:+918874722226"
                      className="flex items-center space-x-3 text-white hover:text-[#A2D4B1] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white shrink-0" />
                      <span className="text-white font-medium text-xs sm:text-sm tracking-wide">+91 88747 22226</span>
                    </a>
                    <a
                      href="tel:+918853722226"
                      className="flex items-center space-x-3 text-white hover:text-[#A2D4B1] transition-colors pl-7"
                    >
                      <span className="text-white font-medium text-xs sm:text-sm tracking-wide">+91 88537 22226</span>
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918874722226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#1E5631] transition-all text-white"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <div>
                      <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
                      <span className="text-white font-medium text-xs sm:text-sm tracking-wide">+91 88747 22226</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@selleriahouse.com"
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#1E5631] transition-all text-white"
                  >
                    <Mail className="w-4 h-4 text-white shrink-0" />
                    <div>
                      <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Email</span>
                      <span className="text-white font-medium text-xs sm:text-sm tracking-wide">info@selleriahouse.com</span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                    <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Address</span>
                      <span className="text-neutral-200 text-[11px] sm:text-xs leading-relaxed">
                        51/72, Nayaganj, Kanpur-208001, Uttar Pradesh, India.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Card 2 is GREEN (Our OEM Promise) */}
          <div className="flex flex-col h-full">
            {/* Box 2: Our OEM Promise (GREEN #1E5631) */}
            <div className="bg-[#1E5631] text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-[#276e3f] flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A2D4B1] font-semibold block mb-2">
                  Quality Assurance
                </span>
                <div className="flex items-center gap-2.5 mb-3">
                  <h3
                    className="text-2xl text-white font-normal capitalize tracking-wide"
                    style={{ fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif' }}
                  >
                    Our OEM Promise
                  </h3>
                </div>
                <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Built on thirty years of master tannery expertise and unyielding precision for the world's most exacting equestrian houses.
                </p>

                <ul className="space-y-3 text-xs sm:text-[13px]">
                  <li className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#164225] border border-[#266e3f]/60 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#A2D4B1] shrink-0" />
                    <div>
                      <span className="font-semibold text-white tracking-wide block">100% Quality Inspected</span>
                      <span className="text-white/75 text-[11px]">Triple-checked stitching, hardware, and leather grain before overseas dispatch</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#164225] border border-[#266e3f]/60 text-white">
                    <Sparkles className="w-4 h-4 text-[#A2D4B1] shrink-0" />
                    <div>
                      <span className="font-semibold text-white tracking-wide block">Sample Perfection Guarantee</span>
                      <span className="text-white/75 text-[11px]">Free sample revisions until you and your riders are completely satisfied</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#164225] border border-[#266e3f]/60 text-white">
                    <Clock className="w-4 h-4 text-[#A2D4B1] shrink-0" />
                    <div>
                      <span className="font-semibold text-white tracking-wide block">Direct Priority Air Dispatch</span>
                      <span className="text-white/75 text-[11px]">Express delivery within 3–4 days to USA, UK, Germany & Europe hubs</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
