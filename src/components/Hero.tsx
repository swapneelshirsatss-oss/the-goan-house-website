import React, { useState } from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Calendar, Users, ArrowRight, MessageCircle, Star, Sparkles, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCheckAvailability: (dates?: { checkIn: string; checkOut: string; guests: number }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  // Default reservation bar state
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);

  const [checkIn, setCheckIn] = useState(today.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(tomorrow.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(6);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({ checkIn, checkOut, guests });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! Inquiring about available dates for The Goan House Villa from ${checkIn} to ${checkOut} for ${guests} guests.`);
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background Image Container with Cinematic Lighting Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={PROPERTY_CONFIG.heroMedia.videoPoster}
          alt="The Goan House Luxury Private Pool Villa Arpora"
          className="w-full h-full object-cover object-center scale-105 animate-[pulseGlow_12s_ease-in-out_infinite_alternate]"
        />
        {/* Layered Luxury Gradient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-ocean-950/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Hero Content Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        
        {/* Verified Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sand-100 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Exclusive 3 BHK Private Pool Sanctuary • Arpora, North Goa</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gold-400" />
          <span className="hidden md:inline-flex items-center gap-1 text-gold-300">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" /> 5.0 Rated
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal tracking-tight max-w-5xl leading-[1.08] mb-6 drop-shadow-sm">
          Where Goan Soul Meets <span className="italic font-normal text-gold-300">Modern Luxury</span>
        </h1>

        {/* Emotional Subheading */}
        <p className="text-sand-100/90 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10 text-balance">
          Wake up beside your 32-foot private crystal pool, savor slow tropical mornings under swaying palms, and enjoy curated coastal living in the heart of Arpora.
        </p>

        {/* Quick Booking Concierge Bar (Desktop & Mobile Optimized) */}
        <form
          onSubmit={handleQuickSearch}
          className="w-full max-w-4xl bg-white/95 dark:bg-ocean-900/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl sm:rounded-full border border-sand-200/80 dark:border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-left"
        >
          {/* Check-In Date */}
          <div className="w-full md:w-1/4 px-4 py-2 border-b md:border-b-0 md:border-r border-sand-200 dark:border-white/10">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-sand-500 dark:text-sand-400 mb-1">
              Check-in
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-ocean-950 dark:text-white focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="w-full md:w-1/4 px-4 py-2 border-b md:border-b-0 md:border-r border-sand-200 dark:border-white/10">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-sand-500 dark:text-sand-400 mb-1">
              Check-out
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-ocean-950 dark:text-white focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="w-full md:w-1/4 px-4 py-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-sand-500 dark:text-sand-400 mb-1">
              Guests
            </label>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-600 shrink-0" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-medium text-ocean-950 dark:text-white focus:outline-none cursor-pointer"
              >
                <option value={2}>2 Guests (Couple Tier)</option>
                <option value={4}>4 Guests (2 Bedrooms)</option>
                <option value={6}>6 Guests (3 King Beds)</option>
                <option value={8}>8 Guests (+ Extra Mattresses)</option>
                <option value={10}>10 Guests (Max • 3 BR + Mattresses)</option>
              </select>
            </div>
          </div>

          {/* Search / Availability CTA */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-ocean-950 text-sand-50 dark:bg-gold-500 dark:text-ocean-950 hover:bg-gold-500 hover:text-ocean-950 dark:hover:bg-gold-400 transition-all duration-300 font-semibold px-7 py-3.5 rounded-xl sm:rounded-full text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shrink-0"
            >
              <span>Explore Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Micro Value Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-sand-200 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Direct Booking Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Instant WhatsApp Concierge Confirmation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>5 Mins to Baga & Calangute</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-6">
        <a
          href="#experience"
          aria-label="Scroll down to explore The Goan House experience"
          className="inline-flex flex-col items-center gap-1 text-sand-300 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium text-sand-400 group-hover:text-sand-200">
            Scroll to Discover
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
        </a>
      </div>

    </section>
  );
};
