import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Waves, BedDouble, MapPin, Star, Sparkles } from 'lucide-react';

export const EmotionalIntro: React.FC = () => {
  const highlights = [
    {
      icon: <BedDouble className="w-6 h-6 text-gold-600" />,
      number: "3",
      suffix: "BHK",
      label: "Bespoke Luxury Suites",
      desc: "Plush California king beds, private balconies & en-suite rain baths"
    },
    {
      icon: <Waves className="w-6 h-6 text-sky-600" />,
      number: "32",
      suffix: "ft",
      label: "Private Crystal Pool",
      desc: "Exclusive pool oasis with submerged sundeck & evening ambient glow"
    },
    {
      icon: <MapPin className="w-6 h-6 text-palm-700" />,
      number: "5",
      suffix: "mins",
      label: "To Baga & Calangute",
      desc: "Prime Arpora address close to Tito's, Anjuna & celebrated coastal dining"
    },
    {
      icon: <Star className="w-6 h-6 text-gold-500 fill-gold-500" />,
      number: "5.0",
      suffix: "★",
      label: "Verified Guest Rating",
      desc: "Flawless hospitality, private chef on call & dedicated villa host"
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-sand-50 relative overflow-hidden">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-palm-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/70 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Slow down. Breathe in tropical air. <br className="hidden sm:inline" />
            <span className="italic text-palm-800">Your private Goan chapter starts here.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            Forget sterile hotel corridors and crowded resort lobbies. At The Goan House, your holiday moves at your rhythm—whether that means floating in sunlit waters at noon, hosting an intimate poolside barbecue, or heading out to North Goa’s vibrant beach clubs in minutes.
          </p>
        </div>

        {/* 4 Pillars Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sand-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-ocean-950">
                    {item.number}
                  </span>
                  <span className="text-lg font-serif text-gold-600 font-medium">
                    {item.suffix}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ocean-900 mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-sand-500 leading-relaxed pt-3 border-t border-sand-100">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
