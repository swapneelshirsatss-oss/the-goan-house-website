import React from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Utensils, Sparkles, Coffee, Wine, ChefHat, Tv } from 'lucide-react';

export const LivingSpaces: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Utensils className="w-3.5 h-3.5 text-gold-600" />
            <span>Living & Dining</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Spaces Designed for Togetherness. <br />
            <span className="italic text-terracotta-600">Cook, dine, and unwind.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            From sunrise espresso at the marble island to long poolside dinners under warm fairy lights, the living and culinary areas connect seamlessly with North Goa’s tropical breeze.
          </p>
        </div>

        {/* 2-Column Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Open Concept Living */}
          <div className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-md group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Open concept living lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-ocean-950/80 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider">
                  Lounge Sanctuary
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-ocean-950 mb-3">
                Double-Height Glass Lounge
              </h3>
              <p className="text-sand-500 text-sm leading-relaxed mb-6">
                Sink into oversized linen sofas with views directly overlooking the illuminated pool. Equipped with a 65-inch 4K Smart TV and Marshall acoustic sound system for movie nights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  Marshall Audio
                </span>
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  Poolside Sliding Glass
                </span>
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  Board Games & Books
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Gourmet Kitchen & Private Chef */}
          <div className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-md group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
                alt="Modern chef kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-ocean-950/80 backdrop-blur-md text-gold-400 text-xs font-medium uppercase tracking-wider">
                  Culinary Heart
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-ocean-950 mb-3">
                Fully Equipped Kitchen & Private Chef
              </h3>
              <p className="text-sand-500 text-sm leading-relaxed mb-6">
                Cook your own meals or request our dedicated private chef to prepare authentic Goan fish thalis, fresh lobster grills, and hot South Indian breakfasts on demand.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  Private Chef on Call
                </span>
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  RO Pure Drinking Water
                </span>
                <span className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-medium text-ocean-900">
                  8-Seater Dining Setup
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
