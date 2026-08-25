import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Sparkles, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';

export const VillaStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Left 7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-sand-200 aspect-[4/3] group">
              <img
                src={PROPERTY_CONFIG.heroMedia.ambientPhotos[0]}
                alt="The Goan House Tropical Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-ocean-900/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-palm-700">
                    Architectural Concept
                  </p>
                  <p className="text-sm sm:text-base font-serif font-medium text-ocean-950">
                    Indo-Portuguese Heritage Meets Scandinavian Calm
                  </p>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-gold-500/10 items-center justify-center text-gold-600 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Inset Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src={PROPERTY_CONFIG.heroMedia.ambientPhotos[1]}
                alt="The Goan House Interior Details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Editorial Copy (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4 w-fit">
              <HeartHandshake className="w-3.5 h-3.5 text-gold-600" />
              <span>Our Heritage & Soul</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
              A private home crafted for <br />
              <span className="italic text-terracotta-600">unforgettable Goa memories.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-sand-500 font-light leading-relaxed mb-8">
              <p>
                Situated Near Radisson Resort, Calangute - Baga Rd in Arpora, Baga, Goa 403509, <strong>The Goan House</strong> was envisioned as a private architectural retreat that balances total seclusion with immediate access to North Goa's top beaches, dining, and nightlife.
              </p>
              <p>
                We paired airy high-ceiling living spaces and natural stone finishes with warm Goan wood craftsmanship. Whether you are gathering with close friends, bringing three generations of family together, or celebrating a milestone trip, every corner is designed to make you feel at ease.
              </p>
            </div>

            {/* Pillar Bullets */}
            <div className="space-y-3 pt-4 border-t border-sand-100 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-palm-700 shrink-0" />
                <span className="text-sm font-medium text-ocean-900">100% Exclusive Villa Access (No Shared Amenities)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-palm-700 shrink-0" />
                <span className="text-sm font-medium text-ocean-900">Seamless Indoor-Outdoor Living & Private Garden</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-palm-700 shrink-0" />
                <span className="text-sm font-medium text-ocean-900">Dedicated Caretaker & Villa Host on Call</span>
              </div>
            </div>

            {/* Host Signature Quote */}
            <div className="p-5 rounded-2xl bg-sand-50 border border-sand-200">
              <p className="text-xs sm:text-sm italic text-ocean-800 font-serif mb-2">
                "We built this home for people who crave the vibrant energy of Goa by day, and the absolute tranquility of a private sanctuary by night."
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-palm-700">
                — The Villa Concierge & Host Team
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
