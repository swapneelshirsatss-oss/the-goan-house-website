import React, { useState } from 'react';
import { FAQS_DATA } from '../data/propertyData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Curated Assistance</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Frequently Asked Questions. <br />
            <span className="italic text-palm-800">Clear answers for seamless stays.</span>
          </h2>
          
          <p className="text-sand-500 text-base font-light leading-relaxed">
            Everything you need to know about villa amenities, check-in, kitchen facilities, and location.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-sand-200 bg-sand-50/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-ocean-950 hover:text-gold-600 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-white border border-sand-200 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-500 text-ocean-950' : 'text-sand-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-sand-600 font-light leading-relaxed border-t border-sand-100/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
