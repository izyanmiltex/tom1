import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
  Ship,
  Plane,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HeroLakeSection } from './HeroLakeSection';

interface ContactPageProps {
  onNavigateToProducts: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    category: 'all',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMapLayer, setActiveMapLayer] = useState<'logistics' | 'satellite'>('logistics');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Selleria Luxury, I am ${formData.name || 'a customer'} from ${formData.country || 'overseas'}. I would like to inquire about ${formData.category !== 'all' ? formData.category : 'equestrian products & private labelling'}. Message: ${formData.message || 'Please share export pricing and catalog.'}`;
    window.open(`https://wa.me/918874722226?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Hero Header - Same Video Hero Banner with Contact Video */}
      <HeroLakeSection
        topSubheading="Get in Touch"
        heading="Partner with Selleria Luxury"
        belowSubheading="Let’s Discuss Your Export & Production Needs"
        showCta={false}
        videoUrl="https://aryezmiltex.com/contactvideo"
      />

      {/* Main Contact Section */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white w-full border-b border-neutral-200">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          {/* 4 Quick Contact Cards Grid (At top of section, clean and spacious) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Address */}
            <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-[#F0F6F2]/50 hover:border-[#1E5631] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#1E5631] text-white flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3
                  className="font-bold text-xs uppercase tracking-wider text-black mb-1.5"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                  }}
                >
                  Factory & Office Address
                </h3>
                <p
                  className="text-xs text-neutral-600 leading-relaxed font-light"
                  style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                >
                  51/72, Nayaganj, Kanpur-208001, Uttar Pradesh, India.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp & Call */}
            <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-[#F0F6F2]/50 hover:border-[#1E5631] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#1E5631] text-white flex items-center justify-center mb-3">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-bold text-xs uppercase tracking-wider text-black mb-1.5"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                  }}
                >
                  Direct Call & WhatsApp
                </h3>
                <div className="space-y-1">
                  <a
                    href="tel:+918874722226"
                    className="text-xs text-[#1E5631] font-semibold hover:underline block"
                  >
                    +91 88747 22226
                  </a>
                  <a
                    href="tel:+918853722226"
                    className="text-xs text-[#1E5631] font-semibold hover:underline block"
                  >
                    +91 88537 22226
                  </a>
                </div>
                <p className="text-[11px] text-neutral-500 font-light mt-1.5">24/7 International Inquiry Desk</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-[#F0F6F2]/50 hover:border-[#1E5631] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#1E5631] text-white flex items-center justify-center mb-3">
                  <Mail className="w-4 h-4" />
                </div>
                <h3
                  className="font-bold text-xs uppercase tracking-wider text-black mb-1.5"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                  }}
                >
                  Official Email
                </h3>
                <a
                  href="mailto:info@selleriahouse.com"
                  className="text-xs text-[#1E5631] font-semibold hover:underline block mb-0.5"
                >
                  info@selleriahouse.com
                </a>
                <p className="text-[11px] text-neutral-500 font-light">Direct response within 4 hours</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-[#F0F6F2]/50 hover:border-[#1E5631] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#1E5631] text-white flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h3
                  className="font-bold text-xs uppercase tracking-wider text-black mb-1.5"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                  }}
                >
                  Operating Hours
                </h3>
                <p
                  className="text-xs text-neutral-600 font-light"
                  style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                >
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </p>
                <p className="text-[11px] text-[#1E5631] font-medium mt-0.5">Air Cargo dispatches daily</p>
              </div>
            </div>
          </div>

          {/* 2-Column Side-by-Side: Inquiry Form (Left) & Animated Map (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column (6 cols): Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-[#F0F6F2]/40 shadow-xs">
                <h3
                  className="text-xl sm:text-2xl font-normal text-black mb-1 capitalize"
                  style={{
                    fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                  }}
                >
                  Send Us a Message
                </h3>
                <p
                  className="text-xs text-neutral-600 mb-6 font-light"
                  style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                >
                  Fill in your requirements below. We provide fast price quotes, custom tooling previews, and sample dispatches.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#F0F6F2] border border-[#1E5631]/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#1E5631] mx-auto" />
                    <h4
                      className="text-base font-bold text-black uppercase tracking-wider"
                      style={{
                        fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                      }}
                    >
                      Inquiry Received
                    </h4>
                    <p
                      className="text-xs text-neutral-700 leading-relaxed font-light"
                      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                    >
                      Thank you, {formData.name || 'valued customer'}. Our export manager will review your request and get back to you shortly at {formData.email || 'your email'}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                          }}
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                          }}
                        >
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@equestrianbrand.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                          }}
                        >
                          WhatsApp / Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 555 0192"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                          }}
                        >
                          Country / Region
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. United States, Germany"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                        style={{
                          fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                        }}
                      >
                        Category of Interest
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                      >
                        <option value="all">General Inquiry</option>
                        <option value="saddles">Saddles (Dressage, Jumping, All-Purpose)</option>
                        <option value="bridles">Bridles & Headstalls</option>
                        <option value="halters">Halters (Leather, Fleece-Lined, Show)</option>
                        <option value="rugs">Rugs & Horse Blankets</option>
                        <option value="fly-masks-veils">Fly Mask & Veils</option>
                        <option value="girth">Girths & Cinches</option>
                        <option value="dog-accessories">Dog Accessories (Collars & Leashes)</option>
                        <option value="breastplates">Breastplates & Martingales</option>
                        <option value="belt">Belts & Leather Accessories</option>
                        <option value="reins-lead-rope">Reins / Lead Ropes</option>
                        <option value="leg-protectors">Leg Protectors & Tendon Boots</option>
                        <option value="saddle-pads">Saddle Pads</option>
                        <option value="private-label">Full OEM / Private Label Manufacturing</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1"
                        style={{
                          fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                        }}
                      >
                        Message & Quantity / Sample Request *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify target quantities, leather preferences, custom embossing requirements, or questions..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs text-black focus:outline-none focus:border-[#1E5631] focus:ring-1 focus:ring-[#1E5631]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1E5631] text-white hover:bg-[#164225] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                        style={{
                          fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, Helvetica, sans-serif',
                        }}
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column (6 cols): Factory Location Map (Google Maps Embed & Directions) */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <span
                    className="uppercase tracking-[0.28em] text-[#1E5631] text-xs font-semibold block mb-1"
                    style={{
                      fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                    }}
                  >
                    Factory Location
                  </span>
                  <h3
                    className="text-black font-normal tracking-[0.02em] capitalize text-xl sm:text-2xl"
                    style={{
                      fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                    }}
                  >
                    Nayaganj Kanpur Saddlery & Leather Hub
                  </h3>
                </div>

                <a
                  href="https://maps.google.com/?q=51/72,+Nayaganj,+Kanpur+208001+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F6F2] hover:bg-[#1E5631] text-[#1E5631] hover:text-white border border-[#1E5631]/30 transition-colors text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                  }}
                >
                  <MapPin className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Real Google Map Embed Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-neutral-100">
                <iframe
                  title="Selleria Luxury Kanpur Manufacturing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114324.73356889758!2d80.26415694294432!3d26.449923306898495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47a003f429d7%3A0x6b4ef8fae1f2f84b!2sJajmau%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Bottom Overlay Badge with Factory details */}
                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md border border-neutral-200/80 p-3 rounded-xl shadow-lg flex items-center justify-between pointer-events-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#1E5631] text-white flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p
                          className="text-[11px] font-bold text-black uppercase tracking-wider"
                          style={{
                            fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
                          }}
                        >
                          Selleria Luxury Atelier & Office
                        </p>
                        <p className="text-[10px] text-neutral-600">
                          51/72, Nayaganj, Kanpur-208001, UP, India
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-[#F0F6F2] text-[#1E5631] font-semibold text-[10px] uppercase tracking-wider">
                      Verified Hub
                    </span>
                  </div>
                </div>
              </div>

              {/* Informational Callout */}
              <div className="p-4 rounded-xl bg-[#F0F6F2] border border-[#1E5631]/20 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#1E5631] shrink-0 mt-0.5" />
                <div
                  className="text-xs text-neutral-700 leading-relaxed font-light"
                  style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
                >
                  <strong className="font-semibold text-black">Visit Our Factory & Tannery: </strong>
                  We welcome international brand buyers, distributors, and equestrian team representatives to visit our facility. Prior appointment required for factory security clearance and sample room preparation.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
