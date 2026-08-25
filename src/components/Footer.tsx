import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I'd like to ask a few questions about The Goan House Villa in Arpora.");
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-ocean-950 text-sand-100 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gold-400/40 p-0.5 bg-white shadow-md">
                <img
                  src={PROPERTY_CONFIG.logoUrl}
                  alt="The Goan House Brand Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white font-medium">The Goan House</h3>
                <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Luxury 3 BHK Villa with Private Pool
                </p>
              </div>
            </div>

            <p className="text-sm text-sand-300 font-light max-w-sm leading-relaxed">
              An exclusive 3-bedroom private pool villa located Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509. Modern tropical minimalism infused with authentic Portuguese-Goan warmth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-sand-300 font-light">
              <li><a href="#experience" className="hover:text-gold-400 transition-colors">The Experience</a></li>
              <li><a href="#story" className="hover:text-gold-400 transition-colors">Villa Story</a></li>
              <li><a href="#pool" className="hover:text-gold-400 transition-colors">Private Pool</a></li>
              <li><a href="#suites" className="hover:text-gold-400 transition-colors">Bedrooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-gold-400 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Location & Guide (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Explore Goa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-sand-300 font-light">
              <li><a href="#guide" className="hover:text-gold-400 transition-colors">Arpora Location</a></li>
              <li><a href="#guide" className="hover:text-gold-400 transition-colors">Baga Beach (5 mins)</a></li>
              <li><a href="#guide" className="hover:text-gold-400 transition-colors">Tito's Lane (6 mins)</a></li>
              <li><a href="#guide" className="hover:text-gold-400 transition-colors">Anjuna Coast (12 mins)</a></li>
              <li><a href="#reviews" className="hover:text-gold-400 transition-colors">Guest Reviews</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Villa FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Villa Address & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-sand-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{PROPERTY_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${PROPERTY_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                  {PROPERTY_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${PROPERTY_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {PROPERTY_CONFIG.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={PROPERTY_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs font-medium underline underline-offset-4"
                >
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400 font-light">
          <p>© {new Date().getFullYear()} The Goan House. All Rights Reserved. Arpora, North Goa.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sand-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
