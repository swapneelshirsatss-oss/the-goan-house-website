import React, { useState } from 'react';
import { AMENITIES_DATA, AmenityItem } from '../data/propertyData';
import {
  Waves,
  Wifi,
  UtensilsCrossed,
  Zap,
  CookingPot,
  Sparkles,
  Wine,
  ShieldCheck,
  Tv,
  Compass,
  Coffee,
  Lock,
  CheckCircle
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-sky-600" />,
  Wifi: <Wifi className="w-6 h-6 text-indigo-600" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-amber-600" />,
  Zap: <Zap className="w-6 h-6 text-emerald-600" />,
  CookingPot: <CookingPot className="w-6 h-6 text-orange-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold-600" />,
  Wine: <Wine className="w-6 h-6 text-rose-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-600" />,
  Tv: <Tv className="w-6 h-6 text-blue-600" />,
  Compass: <Compass className="w-6 h-6 text-purple-600" />,
  Coffee: <Coffee className="w-6 h-6 text-amber-700" />,
  Lock: <Lock className="w-6 h-6 text-slate-700" />
};

export const AmenitiesBento: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'leisure' | 'culinary' | 'comfort' | 'service'>('all');

  const filteredAmenities = filter === 'all'
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter((a) => a.category === filter);

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const categories = [
    { id: 'all', label: 'All Amenities' },
    { id: 'leisure', label: 'Pool & Leisure' },
    { id: 'culinary', label: 'Dining & Kitchen' },
    { id: 'comfort', label: 'Comfort & Tech' },
    { id: 'service', label: 'Services & Concierge' },
  ];

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Modern Conveniences</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Curated for Effortless Comfort. <br />
            <span className="italic text-palm-800">Every luxury considered.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            From 100% silent power backup and 300 Mbps Starlink mesh WiFi to an on-call private chef and daily housekeeping, your stay is completely taken care of.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-ocean-950 text-white shadow-md'
                  : 'bg-sand-100 text-ocean-800 hover:bg-sand-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid with Spotlight Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              onMouseMove={handleMouseMove}
              className={`spotlight-card p-8 flex flex-col justify-between ${
                amenity.highlight ? 'bg-gradient-to-b from-white to-sand-50 border-gold-500/30' : 'bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sand-100 flex items-center justify-center">
                    {iconMap[amenity.icon] || <Sparkles className="w-6 h-6 text-gold-600" />}
                  </div>
                  {amenity.highlight && (
                    <span className="px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-700 text-[10px] uppercase font-bold tracking-wider">
                      Signature
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-ocean-950 mb-2">
                  {amenity.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-sand-500 font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand-100 flex items-center gap-1.5 text-palm-700 text-xs font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Complimentary for all guests</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
