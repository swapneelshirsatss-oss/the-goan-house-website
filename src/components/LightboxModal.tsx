import React, { useEffect } from 'react';
import { GalleryItem } from '../data/propertyData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-gold-400 text-xs uppercase tracking-wider font-semibold">
            {currentItem.categoryLabel}
          </span>
          <span className="text-white/60 text-xs">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={onPrev}
          aria-label="Previous Image"
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-gold-500 hover:text-ocean-950 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
        />

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next Image"
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-gold-500 hover:text-ocean-950 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="text-center max-w-2xl mx-auto z-10 pb-2">
        <h4 className="text-white font-serif text-lg sm:text-xl font-medium mb-1">
          {currentItem.title}
        </h4>
        <p className="text-white/70 text-xs sm:text-sm font-light">
          {currentItem.caption}
        </p>
      </div>

    </div>
  );
};
