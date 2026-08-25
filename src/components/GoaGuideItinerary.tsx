import React, { useState } from 'react';
import { PROPERTY_CONFIG, ITINERARIES_DATA } from '../data/propertyData';
import { MapPin, Navigation, Clock, Compass, Sparkles, ArrowUpRight } from 'lucide-react';

interface GoaGuideItineraryProps {
  onNavigateBlog?: (slug?: string) => void;
}

export const GoaGuideItinerary: React.FC<GoaGuideItineraryProps> = ({ onNavigateBlog }) => {
  const [activeItineraryId, setActiveItineraryId] = useState(ITINERARIES_DATA[0].id);

  const activeItinerary = ITINERARIES_DATA.find((i) => i.id === activeItineraryId) || ITINERARIES_DATA[0];

  return (
    <section id="guide" className="py-24 sm:py-32 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>North Goa Location & Itineraries</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Explore North Goa. <br />
            <span className="italic text-palm-800">5 Minutes from Baga Beach & Tito’s Lane.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            Close enough to plunge into the vibrant energy of Baga, Calangute, and Anjuna in 5 minutes, yet peacefully secluded behind tropical foliage when it’s time to rest.
          </p>
        </div>

        {/* Distance Matrix Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {PROPERTY_CONFIG.nearbyAttractions.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-palm-700">
                    {spot.type}
                  </span>
                  <Navigation className="w-3.5 h-3.5 text-sand-400" />
                </div>
                <h3 className="font-semibold text-ocean-950 text-base">
                  {spot.name}
                </h3>
              </div>
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-sand-100 text-xs">
                <span className="text-sand-500">{spot.distance}</span>
                <span className="font-bold text-ocean-900 bg-sand-100 px-2 py-0.5 rounded-full">
                  {spot.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Curated Itineraries Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-serif text-ocean-950 font-medium mb-3">
            Curated Local Itineraries
          </h3>
          <p className="text-xs sm:text-sm text-sand-500">
            Handpicked day-to-night journeys designed exclusively for guests of The Goan House.
          </p>
        </div>

        {/* Itinerary Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {ITINERARIES_DATA.map((itin) => (
            <button
              key={itin.id}
              onClick={() => setActiveItineraryId(itin.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeItineraryId === itin.id
                  ? 'bg-ocean-950 text-white shadow-md'
                  : 'bg-white text-ocean-800 border border-sand-200 hover:bg-sand-100'
              }`}
            >
              {itin.title}
            </button>
          ))}
        </div>

        {/* Active Itinerary Timeline Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sand-200 gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-600">
                {activeItinerary.badge}
              </span>
              <h4 className="text-2xl font-serif font-medium text-ocean-950">
                {activeItinerary.title}
              </h4>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-100 text-ocean-900 text-xs font-medium shrink-0">
              <Clock className="w-4 h-4 text-palm-700" />
              <span>{activeItinerary.duration}</span>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-[17px] before:w-[2px] before:bg-sand-200">
            {activeItinerary.stops.map((stop, idx) => (
              <div key={idx} className="relative flex items-start gap-6 pl-2">
                <div className="w-8 h-8 rounded-full bg-sand-100 border-2 border-gold-500 flex items-center justify-center text-[11px] font-bold text-ocean-950 shrink-0 z-10">
                  {idx + 1}
                </div>
                <div className="flex-1 bg-sand-50 p-5 rounded-2xl border border-sand-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">
                      {stop.time}
                    </span>
                    <span className="text-[11px] font-medium text-sand-500 bg-white px-2 py-0.5 rounded-full border border-sand-200">
                      {stop.distance}
                    </span>
                  </div>
                  <h5 className="font-semibold text-base text-ocean-950 mb-1">
                    {stop.title} — <span className="font-normal text-sand-600">{stop.place}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-sand-500 font-light leading-relaxed">
                    {stop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Contextual Internal Linking to Blog / Travel Guides */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-sand-500 mb-4">
            Curated Local Stories & Guides
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <a
              href="/blog/why-baga-is-the-best-location-to-stay-in-north-goa"
              onClick={(e) => {
                if (onNavigateBlog) {
                  e.preventDefault();
                  onNavigateBlog('why-baga-is-the-best-location-to-stay-in-north-goa');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-sand-200 text-ocean-950 hover:text-terracotta-600 hover:border-terracotta-300 font-medium transition-all shadow-sm group"
            >
              <span>Why Baga is North Goa’s Best Location</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/blog/insider-guide-best-cafes-and-restaurants-in-arpora-baga"
              onClick={(e) => {
                if (onNavigateBlog) {
                  e.preventDefault();
                  onNavigateBlog('insider-guide-best-cafes-and-restaurants-in-arpora-baga');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-sand-200 text-ocean-950 hover:text-terracotta-600 hover:border-terracotta-300 font-medium transition-all shadow-sm group"
            >
              <span>Top Cafes & Restaurants in Arpora & Baga</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/blog"
              onClick={(e) => {
                if (onNavigateBlog) {
                  e.preventDefault();
                  onNavigateBlog();
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ocean-950 text-white hover:bg-gold-500 hover:text-ocean-950 font-semibold transition-all shadow-sm"
            >
              <span>View All Goa Travel Guides →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
