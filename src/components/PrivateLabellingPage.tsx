import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Palette,
  Tag,
  Box,
  Compass,
  FileCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
  Zap,
  Gauge,
  PackageCheck,
  Smile
} from 'lucide-react';
import { SectionManufacturingAndExport } from './SectionManufacturingAndExport';
import { SectionCustomOrderAndInquiry } from './SectionCustomOrderAndInquiry';

interface PrivateLabellingPageProps {
  onNavigateToProducts: () => void;
  onNavigateToContact: () => void;
}

export const PrivateLabellingPage: React.FC<PrivateLabellingPageProps> = ({
  onNavigateToProducts,
  onNavigateToContact,
}) => {
  // Quality Control Stages from attached screenshot
  const qualityControlStages = [
    {
      id: 'raw-material',
      num: '01',
      title: 'RAW MATERIAL INSPECTION',
      desc: 'Rigorous selection of premium European vegetable-tanned hides, heavy bridle leather, and solid cast metal hardware before cutting begins.',
      icon: Layers,
    },
    {
      id: 'in-process',
      num: '02',
      title: 'IN-PROCESS QUALITY CHECK',
      desc: 'Real-time caliper thickness calibration, pattern alignment, and hand-skiving inspection across every cut component and strap.',
      icon: Gauge,
    },
    {
      id: 'finished-product',
      num: '03',
      title: 'FINISHED PRODUCT INSPECTION',
      desc: '100% manual examination of symmetry, buckle function, edge burnishing, anatomical padding firmness, and stitching tension.',
      icon: FileCheck,
    },
    {
      id: 'durability',
      num: '04',
      title: 'DURABILITY TESTING',
      desc: 'Tensile break-load testing on billet straps, salt-spray corrosion resistance tests on metal hardware, and flex resistance for saddle flaps.',
      icon: ShieldCheck,
    },
    {
      id: 'packaging',
      num: '05',
      title: 'PACKAGING CHECK',
      desc: 'Verification of branded woven labels, moisture-barrier wrapping, barcoded retail hangtags, and heavy-duty corrugated export cartons.',
      icon: PackageCheck,
    },
    {
      id: 'satisfaction',
      num: '06',
      title: '100% CUSTOMER SATISFACTION',
      desc: 'Pre-shipment photo documentation, video sign-off for bulk orders, and guaranteed zero-defect compliance for international brand trust.',
      icon: Smile,
    },
  ];

  // Customization Options
  const customizationOptions = [
    {
      title: 'Custom Brand Debossing & Laser Engraving',
      desc: 'Heat deboss your brand logo, crest, or hallmark onto saddle skirts, bridle crowns, cheek keepers, and luxury leather tags with razor-sharp precision.',
      icon: Tag,
      badge: 'Branding',
    },
    {
      title: 'Bespoke Hardware Finishes',
      desc: 'Specify hardware in solid polished brass, 316 marine stainless steel, brushed rose gold, antiqued bronze, gunmetal, or matte black powder coat.',
      icon: Award,
      badge: 'Hardware',
    },
    {
      title: 'Premium Leather & Color Palettes',
      desc: 'Choose from French calfskin, English bridle, pull-up oiled leather, natural hair-on cowhide, and custom drum-dyed shades to match brand Pantone specs.',
      icon: Palette,
      badge: 'Tannery',
    },
    {
      title: 'Custom Stitching & Contrast Piping',
      desc: 'Pick your thread color, contrast piping, white saddle stitching, hand-braided rawhide accents, or triple-needle safety reinforcement.',
      icon: Layers,
      badge: 'Stitching',
    },
    {
      title: 'Retail Packaging & Barcoding',
      desc: 'Deliver retail-ready equestrian luxury with customized embroidered dust bags, branded rigid boxes, embossed care cards, and barcode tags.',
      icon: Box,
      badge: 'Packaging',
    },
    {
      title: 'Low MOQs & Rapid Sample Prototyping',
      desc: 'Test your new product line with flexible low minimum order quantities and fast 10-day physical sampling before committing to bulk manufacturing.',
      icon: Sparkles,
      badge: 'Sampling',
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Top Hero Banner */}
      <section className="relative w-full py-20 sm:py-28 bg-[#0D1929] text-white overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span
            className="uppercase tracking-[0.32em] text-[#EAB308] mb-3 sm:mb-4 block text-xs sm:text-sm font-semibold"
            style={{
              fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Helvetica, Arial, sans-serif',
            }}
          >
            OEM & BESPOKE CONTRACTING
          </span>
          <h1
            className="text-white font-normal tracking-[0.02em] capitalize text-3xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
            }}
          >
            Private Labelling & OEM Manufacturing
          </h1>
          <p
            className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
          >
            Full-service turnkey manufacturing for global equestrian brands, tack shops,
            and riding academies—from prototype development to worldwide customs clearance.
          </p>
        </div>
      </section>

      {/* 1. Core Private Labelling Pillars (From Home Page) */}
      <section className="py-20 sm:py-24 bg-white text-black w-full border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className="uppercase tracking-[0.28em] text-[#1E5631] text-xs font-semibold block mb-2"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              BESPOKE CAPABILITIES
            </span>
            <h2
              className="text-black font-normal tracking-[0.02em] capitalize text-3xl sm:text-5xl mb-4"
              style={{
                fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              }}
            >
              Custom Materials, Colors, Branding & Packaging
            </h2>
            <p
              className="text-neutral-600 text-base max-w-2xl mx-auto font-light leading-relaxed"
              style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            >
              Tailor every dimension, stitch, hardware piece, and packaging element to align seamlessly with your brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'materials',
                icon: Layers,
                title: 'Materials',
                desc: 'Choose from genuine vegetable-tanned leather, soft French calfskin, heavy cowhide, breathable cotton, or technical sports fabrics.',
                tag: 'Leather & Fabrics',
              },
              {
                id: 'colors',
                icon: Palette,
                title: 'Colors',
                desc: 'Select custom leather dyes, contrast stitching thread colors, edge coating shades, and metal hardware like brass, silver, or matte black.',
                tag: 'Dyes & Stitching',
              },
              {
                id: 'branding',
                icon: Tag,
                title: 'Branding',
                desc: 'Put your brand logo on every piece with hot heat debossing, laser engraving, woven fabric labels, or metal badge plates.',
                tag: 'Logo & Labels',
              },
              {
                id: 'packaging',
                icon: Box,
                title: 'Packaging',
                desc: 'Get retail-ready presentation with custom printed cloth dust bags, luxury rigid gift boxes, barcode hang tags, and heavy-duty export boxes.',
                tag: 'Boxes & Dust Bags',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200 hover:border-[#1E5631] hover:bg-[#F0F6F2] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1E5631] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1E5631] bg-[#1E5631]/10 px-2.5 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-black mb-2 group-hover:text-[#1E5631] transition-colors"
                      style={{
                        fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-xs text-neutral-600 leading-relaxed font-light"
                      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. QUALITY CONTROL SECTION (Matching Screenshot 2) */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] text-black w-full border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          
          {/* Header matching screenshot: QUALITY CONTROL in warm gold */}
          <div className="text-center mb-16">
            <h2
              className="text-[#D4AF37] text-3xl sm:text-5xl font-black tracking-[0.08em] uppercase inline-block drop-shadow-xs"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              QUALITY CONTROL
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
            <p
              className="text-neutral-600 text-base max-w-2xl mx-auto mt-4 font-light"
              style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            >
              Our multi-tier inspection protocols guarantee uncompromised structural integrity,
              equine safety, and peerless leather finishing on every manufactured unit.
            </p>
          </div>

          {/* 6 Quality Control Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {qualityControlStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF4EB] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-white transition-all shadow-xs">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                        STAGE {stage.num}
                      </span>
                    </div>

                    <h3
                      className="text-black font-bold text-sm sm:text-[15px] tracking-[0.08em] uppercase mb-2.5 group-hover:text-[#9A7B1C] transition-colors"
                      style={{
                        fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed"
                      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                    >
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-semibold text-[#1E5631] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ISO / REACH Certified Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. CUSTOMIZATION SECTION */}
      <section className="py-20 sm:py-28 bg-white text-black w-full border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[0.28em] text-[#1E5631] text-xs font-semibold block mb-2"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              BESPOKE CAPABILITIES
            </span>
            <h2
              className="text-black font-normal tracking-[0.02em] capitalize text-3xl sm:text-5xl"
              style={{
                fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              }}
            >
              Customization Options for Your Brand
            </h2>
            <p
              className="text-neutral-600 text-base max-w-2xl mx-auto mt-4 font-light"
              style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            >
              Tailor every dimension, stitch, hardware piece, and packaging element to align seamlessly with your brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {customizationOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-[#1E5631] hover:bg-[#F0F6F2] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1E5631] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1E5631] bg-[#1E5631]/10 px-2.5 py-1 rounded-full">
                        {opt.badge}
                      </span>
                    </div>

                    <h3
                      className="text-base font-bold text-black mb-2 group-hover:text-[#1E5631] transition-colors"
                      style={{
                        fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                      }}
                    >
                      {opt.title}
                    </h3>
                    <p
                      className="text-xs text-neutral-600 leading-relaxed font-light"
                      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                    >
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E5631] hover:bg-[#164225] text-white text-xs font-semibold uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>REQUEST CUSTOM SAMPLE PROTOTYPE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. Global Manufacturing & Export Interactive Map (From Home Page) */}
      <SectionManufacturingAndExport />

      {/* 4. Inquiry Banner at the bottom */}
      <SectionCustomOrderAndInquiry onOpenConcierge={onNavigateToContact} />
    </div>
  );
};
