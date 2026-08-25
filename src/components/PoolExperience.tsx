import React, { useState } from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { Sun, Moon, Sparkles, Waves, ShieldCheck, Droplets, Clock } from 'lucide-react';

interface PoolExperienceProps {
  onReserve: () => void;
}

export const PoolExperience: React.FC<PoolExperienceProps> = ({ onReserve }) => {
  const [ambianceMode, setAmbianceMode] = useState<'day' | 'night'>('day');

  return (
    <section id="pool" className={`py-24 sm:py-32 transition-colors duration-700 ${
      ambianceMode === 'night' ? 'bg-ocean-950 text-white' : 'bg-sand-100 text-ocean-950'
    } relative overflow-hidden`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Interactive Day/Night Switch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${
              ambianceMode === 'night' ? 'bg-white/10 text-gold-400' : 'bg-sand-200 text-palm-800'
            }`}>
              <Waves className="w-3.5 h-3.5 text-sky-400" />
              <span>Private Aquatic Sanctuary</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight leading-tight">
              The 32-Foot <br />
              <span className={`italic ${ambianceMode === 'night' ? 'text-sky-400' : 'text-palm-700'}`}>
                Private Crystal Pool
              </span>
            </h2>
          </div>

          {/* Interactive Ambiance Mode Switcher */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-xs uppercase tracking-widest font-medium opacity-70">
              Interactive Ambiance Preview
            </span>
            <div className={`p-1.5 rounded-full flex items-center gap-1 border ${
              ambianceMode === 'night' ? 'bg-ocean-900 border-white/20' : 'bg-white border-sand-300 shadow-sm'
            }`}>
              <button
                onClick={() => setAmbianceMode('day')}
                aria-label="Switch to Day Ambiance mode"
                aria-pressed={ambianceMode === 'day'}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  ambianceMode === 'day'
                    ? 'bg-gold-500 text-ocean-950 shadow-md'
                    : 'text-sand-600 hover:text-ocean-900'
                }`}
              >
                <Sun className="w-4 h-4 text-white" />
                <span>Golden Sun</span>
              </button>

              <button
                onClick={() => setAmbianceMode('night')}
                aria-label="Switch to Night Ambiance mode"
                aria-pressed={ambianceMode === 'night'}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  ambianceMode === 'night'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-sand-600 hover:text-ocean-900'
                }`}
              >
                <Moon className="w-4 h-4 text-sky-200" />
                <span>Midnight Glow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Pool Image Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/9] mb-12 group">
          <img
            src={ambianceMode === 'day' ? PROPERTY_CONFIG.poolDayNight.dayImage : PROPERTY_CONFIG.poolDayNight.nightImage}
            alt="The Goan House Private Swimming Pool"
            className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
          />
          
          <div className={`absolute inset-0 transition-opacity duration-700 ${
            ambianceMode === 'night'
              ? 'bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent'
              : 'bg-gradient-to-t from-ocean-950/40 via-transparent to-transparent'
          }`} />

          {/* Overlay Floating Specs */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold-400">Dimensions</p>
                <p className="text-sm sm:text-base font-serif font-medium">32 ft × 14 ft • 4.5 ft Depth</p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-widest text-gold-400">Water Quality</p>
                <p className="text-sm sm:text-base font-serif font-medium">Eco-Treated Daily • Gentle on Skin</p>
              </div>
            </div>

            <button
              onClick={onReserve}
              className="bg-white text-ocean-950 hover:bg-gold-400 hover:text-ocean-950 font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              Book Your Poolside Stay
            </button>
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            ambianceMode === 'night' ? 'bg-ocean-900/60 border-white/10' : 'bg-white border-sand-200 shadow-sm'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-4">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base mb-1">Submerged Sun Ledge</h3>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              Shallow sunbathing shelf in the water—ideal for sipping fresh coconuts or relaxed reading.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            ambianceMode === 'night' ? 'bg-ocean-900/60 border-white/10' : 'bg-white border-sand-200 shadow-sm'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base mb-1">Ambient Night Lighting</h3>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              Submerged LED mood lights transform the pool into a luminous evening oasis for midnight swims.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            ambianceMode === 'night' ? 'bg-ocean-900/60 border-white/10' : 'bg-white border-sand-200 shadow-sm'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base mb-1">Outdoor Tropical Shower</h3>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              Rinse off beneath a natural stone rain shower surrounded by banana palms and frangipani flowers.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            ambianceMode === 'night' ? 'bg-ocean-900/60 border-white/10' : 'bg-white border-sand-200 shadow-sm'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base mb-1">100% Private to Your Group</h3>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              No shared pools or quiet hours. The entire pool grounds and deck belong exclusively to you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
