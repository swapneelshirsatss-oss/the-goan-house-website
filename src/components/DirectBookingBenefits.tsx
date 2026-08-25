import React from 'react';
import { DIRECT_BOOKING_PERKS } from '../data/propertyData';
import { BadgePercent, Car, Clock, Gift, Check, X, ShieldCheck, Sparkles } from 'lucide-react';

const perkIcons: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-gold-600" />,
  Car: <Car className="w-6 h-6 text-palm-700" />,
  Clock: <Clock className="w-6 h-6 text-indigo-600" />,
  Gift: <Gift className="w-6 h-6 text-rose-600" />
};

interface DirectBookingBenefitsProps {
  onNavigateBlog?: (slug?: string) => void;
}

export const DirectBookingBenefits: React.FC<DirectBookingBenefitsProps> = ({ onNavigateBlog }) => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Direct Privileges</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Why Book Directly with Us? <br />
            <span className="italic text-palm-800">Best rates & personalized VIP care.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            By reserving directly through our official website or WhatsApp concierge, you bypass OTA markups and unlock complimentary luxury perks.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DIRECT_BOOKING_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-sand-50 p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {perkIcons[perk.icon] || <Sparkles className="w-6 h-6 text-gold-600" />}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-700">
                    {perk.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ocean-950 mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-500 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table (Direct vs OTA) */}
        <div className="max-w-4xl mx-auto bg-sand-50 rounded-3xl border border-sand-200 overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 bg-ocean-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium">Direct Reservation vs OTA Portals</h3>
              <p className="text-xs text-sand-300">Transparent comparison of rates and guest privileges</p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-gold-500 text-ocean-950 text-xs font-bold uppercase tracking-wider">
              Save Up to ₹12,000 / Stay
            </span>
          </div>

          <div className="divide-y divide-sand-200 text-sm">
            <div className="grid grid-cols-12 p-4 sm:p-5 font-semibold text-xs uppercase tracking-wider text-sand-500 bg-sand-100">
              <div className="col-span-6 sm:col-span-6">Benefit / Feature</div>
              <div className="col-span-3 sm:col-span-3 text-center text-palm-800">The Goan House Direct</div>
              <div className="col-span-3 sm:col-span-3 text-center text-sand-400">OTA Platforms</div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
              <div className="col-span-6 font-medium text-ocean-950">Guaranteed Lowest Nightly Rate</div>
              <div className="col-span-3 flex justify-center text-emerald-600 font-bold"><Check className="w-5 h-5" /></div>
              <div className="col-span-3 flex justify-center text-rose-400"><X className="w-5 h-5" /></div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center bg-white">
              <div className="col-span-6 font-medium text-ocean-950">0% Guest Service Fee (No 15-20% Markups)</div>
              <div className="col-span-3 flex justify-center text-emerald-600 font-bold"><Check className="w-5 h-5" /></div>
              <div className="col-span-3 flex justify-center text-rose-400"><X className="w-5 h-5" /></div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
              <div className="col-span-6 font-medium text-ocean-950">Complimentary Welcome Hamper & Early Check-In Priority</div>
              <div className="col-span-3 flex justify-center text-emerald-600 font-bold"><Check className="w-5 h-5" /></div>
              <div className="col-span-3 flex justify-center text-rose-400"><X className="w-5 h-5" /></div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center bg-white">
              <div className="col-span-6 font-medium text-ocean-950">Direct WhatsApp Concierge 24/7</div>
              <div className="col-span-3 flex justify-center text-emerald-600 font-bold"><Check className="w-5 h-5" /></div>
              <div className="col-span-3 flex justify-center text-sand-400 font-normal text-xs">Automated Bot Only</div>
            </div>
          </div>
        </div>

        {/* Supporting Internal Link */}
        <div className="mt-8 text-center">
          <a
            href="/blog/private-pool-villa-vs-5-star-hotel-goa-comparison"
            onClick={(e) => {
              if (onNavigateBlog) {
                e.preventDefault();
                onNavigateBlog('private-pool-villa-vs-5-star-hotel-goa-comparison');
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-terracotta-600 hover:text-ocean-950 transition-colors underline underline-offset-4"
          >
            <span>Read Group Travel Guide: Private Pool Villa vs 5-Star Hotel in Goa →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
