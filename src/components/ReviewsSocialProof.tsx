import React from 'react';
import { TESTIMONIALS_DATA } from '../data/propertyData';
import { Star, ShieldCheck, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReviewsSocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
            <span>Guest Impressions</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Stories from Our Guests. <br />
            <span className="italic text-palm-800">Unfiltered 5.0 hospitality.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            Read how families, couples, and groups of friends experienced the privacy and warmth of The Goan House.
          </p>
        </div>

        {/* Aggregate Ratings Score Banner */}
        <div className="max-w-4xl mx-auto bg-sand-50 rounded-2xl border border-sand-200 p-6 sm:p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-ocean-950 text-gold-400 flex flex-col items-center justify-center font-serif shrink-0">
              <span className="text-2xl font-bold leading-none">5.0</span>
              <div className="flex text-gold-400 text-[10px] mt-1">
                {'★★★★★'}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-ocean-950 text-base sm:text-lg">
                Flawless 5.0 Rating Across All Stays
              </h3>
              <p className="text-xs text-sand-500">
                Verified reviews from direct guests, families, and private group bookings
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-sand-200 pt-4 md:pt-0 md:pl-6">
            <div className="text-center">
              <span className="block text-sm font-bold text-ocean-900">5.0 / 5</span>
              <span className="text-[11px] text-sand-500">Cleanliness</span>
            </div>
            <div className="text-center">
              <span className="block text-sm font-bold text-ocean-900">5.0 / 5</span>
              <span className="text-[11px] text-sand-500">Location</span>
            </div>
            <div className="text-center">
              <span className="block text-sm font-bold text-ocean-900">5.0 / 5</span>
              <span className="text-[11px] text-sand-500">Hospitality</span>
            </div>
            <div className="text-center">
              <span className="block text-sm font-bold text-ocean-900">5.0 / 5</span>
              <span className="text-[11px] text-sand-500">Accuracy</span>
            </div>
          </div>

        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-sand-50/70 rounded-2xl p-8 border border-sand-200 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-sand-200 text-palm-700">
                    {t.guestType}
                  </span>
                </div>

                <p className="font-serif text-lg text-ocean-950 font-medium leading-snug mb-4 italic">
                  "{t.quote}"
                </p>

                <p className="text-xs sm:text-sm text-sand-500 font-light leading-relaxed mb-6">
                  {t.story}
                </p>
              </div>

              {/* Guest Profile */}
              <div className="pt-4 border-t border-sand-200 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-sand-300"
                />
                <div>
                  <h4 className="text-sm font-semibold text-ocean-900">{t.name}</h4>
                  <p className="text-xs text-sand-400">{t.location} • {t.stayDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
