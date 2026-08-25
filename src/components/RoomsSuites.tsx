import React, { useState } from 'react';
import { SUITES_DATA } from '../data/propertyData';
import { Bed, Maximize2, Eye, Check, Sparkles, ArrowRight } from 'lucide-react';

interface RoomsSuitesProps {
  onReserve: () => void;
}

export const RoomsSuites: React.FC<RoomsSuitesProps> = ({ onReserve }) => {
  const [activeSuiteId, setActiveSuiteId] = useState(SUITES_DATA[0].id);

  const activeSuite = SUITES_DATA.find((s) => s.id === activeSuiteId) || SUITES_DATA[0];

  return (
    <section id="suites" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Private Sanctuaries</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            3 Bespoke En-Suite Suites. <br />
            <span className="italic text-palm-800">Equal luxury in every room.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            Every bedroom at The Goan House is crafted as an independent private suite—with premium mattresses, quiet climate control, high ceilings, and attached designer bathrooms.
          </p>
        </div>

        {/* Interactive Suite Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {SUITES_DATA.map((suite) => (
            <button
              key={suite.id}
              onClick={() => setActiveSuiteId(suite.id)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeSuiteId === suite.id
                  ? 'bg-ocean-950 text-white shadow-lg scale-105'
                  : 'bg-sand-100 text-ocean-800 hover:bg-sand-200'
              }`}
            >
              {suite.name}
            </button>
          ))}
        </div>

        {/* Active Suite Showcase Card */}
        <div className="bg-sand-50 rounded-3xl border border-sand-200 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Image Container (7 Cols) */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] group">
              <img
                src={activeSuite.image}
                alt={activeSuite.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-ocean-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  {activeSuite.tag}
                </span>
              </div>
            </div>

            {/* Suite Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-palm-700 font-semibold mb-2">
                  {activeSuite.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif text-ocean-950 font-normal mb-4">
                  {activeSuite.name}
                </h3>
                <p className="text-sand-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {activeSuite.description}
                </p>

                {/* Specs Quick Matrix */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-sand-200 mb-6">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-sand-400 font-semibold mb-1">
                      <Bed className="w-3.5 h-3.5 text-gold-600" /> Bed
                    </div>
                    <p className="text-xs font-medium text-ocean-950 truncate">{activeSuite.bed.split(' ')[0]} King</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-sand-400 font-semibold mb-1">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-600" /> Area
                    </div>
                    <p className="text-xs font-medium text-ocean-950">{activeSuite.sqft}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-sand-400 font-semibold mb-1">
                      <Eye className="w-3.5 h-3.5 text-gold-600" /> View
                    </div>
                    <p className="text-xs font-medium text-ocean-950 truncate">{activeSuite.view.split(' ')[0]} Vista</p>
                  </div>
                </div>

                {/* Feature Bullet List */}
                <div className="space-y-2.5 mb-8">
                  {activeSuite.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-palm-700 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-ocean-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onReserve}
                className="w-full py-3.5 rounded-xl bg-ocean-950 hover:bg-gold-500 hover:text-ocean-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Reserve Entire Villa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
