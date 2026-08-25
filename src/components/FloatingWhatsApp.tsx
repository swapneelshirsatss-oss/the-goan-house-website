import React, { useState } from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I'm planning a stay in Goa and would like to check available dates for The Goan House Villa in Arpora.");
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="bg-white text-ocean-950 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-sand-200 flex items-center gap-2.5 animate-bounce max-w-[220px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium text-[11px]">Chat with Villa Host on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-sand-400 hover:text-ocean-900 ml-auto"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <button
        onClick={handleWhatsApp}
        aria-label="Direct WhatsApp Concierge"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
