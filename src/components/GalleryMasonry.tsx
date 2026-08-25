import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/propertyData';
import { LightboxModal } from './LightboxModal';
import { Sparkles, Maximize2, Camera } from 'lucide-react';

export const GalleryMasonry: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pool' | 'suites' | 'living' | 'outdoor'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const filterTabs = [
    { id: 'all', label: 'All Visuals' },
    { id: 'pool', label: 'Private Pool' },
    { id: 'suites', label: 'Bedrooms & Suites' },
    { id: 'living', label: 'Living & Dining' },
    { id: 'outdoor', label: 'Outdoor Gardens' },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Journal</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            The Gallery. <br />
            <span className="italic text-palm-800">A glimpse into your Goan escape.</span>
          </h2>
          
          <p className="text-sand-500 text-base sm:text-lg font-light leading-relaxed">
            Explore the architectural contours, sunlit pool deck, and refined interior spaces of The Goan House.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-ocean-950 text-white shadow-md'
                  : 'bg-white text-ocean-800 border border-sand-200 hover:bg-sand-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group bg-white border border-sand-200"
            >
              <div className={`w-full ${item.aspectRatio} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Hover Overlay with Caption & Zoom */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-gold-400">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Component */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
