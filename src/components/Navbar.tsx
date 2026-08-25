import React, { useState, useEffect } from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Menu, X, Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateBlog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateBlog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'The Villa', href: '#story' },
    { name: 'Private Pool', href: '#pool' },
    { name: 'Suites', href: '#suites' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Goa Guide', href: '#guide' },
    { name: 'Journal', href: '/blog', isBlog: true },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in booking The Goan House Luxury Villa in Arpora. Please share availability and best direct rates.");
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-md border-b border-sand-200/80'
            : 'bg-gradient-to-b from-ocean-950/70 via-ocean-950/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gold-500/40 p-0.5 bg-white/95 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={PROPERTY_CONFIG.logoUrl}
                alt="The Goan House Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-ocean-950' : 'text-white'
              }`}>
                The Goan House
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${
                isScrolled ? 'text-palm-700' : 'text-sand-200'
              }`}>
                Arpora • 3 BHK Private Pool
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isBlog && onNavigateBlog) {
                    e.preventDefault();
                    onNavigateBlog();
                  }
                }}
                className={`text-xs xl:text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:text-gold-500 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-500 after:transition-all hover:after:w-full ${
                  isScrolled ? 'text-ocean-800' : 'text-sand-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Chat */}
            <button
              onClick={handleWhatsAppClick}
              aria-label="Chat on WhatsApp with Villa Concierge"
              className="inline-flex items-center justify-center p-2.5 rounded-full border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-ocean-950 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Direct Reserve Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-ocean-950 text-xs xl:text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Stay</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-gold-500 text-ocean-950 text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-ocean-900 hover:bg-sand-200' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ocean-950/95 backdrop-blur-xl text-sand-50 flex flex-col pt-24 px-6 pb-8 transition-all animate-fade-in lg:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={PROPERTY_CONFIG.logoUrl} alt="Logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <div>
                <p className="font-serif text-lg text-white">The Goan House</p>
                <p className="text-xs text-sand-300">Arpora, North Goa</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-sand-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.isBlog && onNavigateBlog) {
                    e.preventDefault();
                    onNavigateBlog();
                  }
                }}
                className="text-lg font-serif tracking-wide text-sand-100 hover:text-gold-400 py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-gold-500 font-sans tracking-widest uppercase">Explore →</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-gold-500 text-ocean-950 font-semibold rounded-xl text-center shadow-lg text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Check Availability & Rates
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 border border-white/20 text-white font-medium rounded-xl text-center text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Villa Concierge
            </button>
          </div>
        </div>
      )}
    </>
  );
};
