import React, { useState, useEffect } from 'react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import {
  Calendar,
  Users,
  UtensilsCrossed,
  Car,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Check,
  Tag,
  X
} from 'lucide-react';

interface BookingCalculatorProps {
  initialDates?: { checkIn: string; checkOut: string; guests: number } | null;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({
  initialDates,
  isOpenModal = false,
  onCloseModal,
}) => {
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(defaultCheckIn.getDate() + 3);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckOut.getDate() + 2);

  const [checkIn, setCheckIn] = useState(
    initialDates?.checkIn || defaultCheckIn.toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState(
    initialDates?.checkOut || defaultCheckOut.toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState(initialDates?.guests || 6);
  const [includeChef, setIncludeChef] = useState(false);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState(false);

  // Form input states
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  useEffect(() => {
    if (initialDates) {
      if (initialDates.checkIn) setCheckIn(initialDates.checkIn);
      if (initialDates.checkOut) setCheckOut(initialDates.checkOut);
      if (initialDates.guests) setGuests(initialDates.guests);
    }
  }, [initialDates]);

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(0, dOut.getTime() - dIn.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Dynamic Seasonal Calculation based on Check-in Month
  const checkInMonth = dIn.getMonth(); // 7 = August, 8 = September
  let basePerNight = 15000;
  let appliedSeasonLabel = "August Special Rate";
  let tierLabel = "5-6 Guests (Full 3 BHK Villa)";

  if (checkInMonth === 7) {
    // August: ₹10,000 (1-2 guests), ₹13,000 (3-4 guests), ₹15,000 (5-6 guests base)
    appliedSeasonLabel = "August Monsoon Special";
    if (guests <= 2) {
      basePerNight = 10000;
      tierLabel = "1-2 Guests (Couple Tier)";
    } else if (guests <= 4) {
      basePerNight = 13000;
      tierLabel = "3-4 Guests (2 Bedrooms)";
    } else if (guests <= 6) {
      basePerNight = 15000;
      tierLabel = "5-6 Guests (3 King Bedrooms)";
    } else {
      basePerNight = 15000;
      tierLabel = `${guests} Guests (3 BR + ${guests - 6} Extra Mattress${guests - 6 > 1 ? 'es' : ''})`;
    }
  } else if (checkInMonth === 8) {
    // September: ₹11,000 (1-2 guests), ₹14,000 (3-4 guests), ₹16,000 (5-6 guests base)
    appliedSeasonLabel = "September Pre-Season";
    if (guests <= 2) {
      basePerNight = 11000;
      tierLabel = "1-2 Guests (Couple Tier)";
    } else if (guests <= 4) {
      basePerNight = 14000;
      tierLabel = "3-4 Guests (2 Bedrooms)";
    } else if (guests <= 6) {
      basePerNight = 16000;
      tierLabel = "5-6 Guests (3 King Bedrooms)";
    } else {
      basePerNight = 16000;
      tierLabel = `${guests} Guests (3 BR + ${guests - 6} Extra Mattress${guests - 6 > 1 ? 'es' : ''})`;
    }
  } else {
    // Other months default
    if (guests <= 2) {
      basePerNight = 11000;
      tierLabel = "1-2 Guests";
    } else if (guests <= 4) {
      basePerNight = 14000;
      tierLabel = "3-4 Guests";
    } else if (guests <= 6) {
      basePerNight = 16000;
      tierLabel = "5-6 Guests (3 Bedrooms)";
    } else {
      basePerNight = 16000;
      tierLabel = `${guests} Guests (3 BR + ${guests - 6} Extra Mattresses)`;
    }
    appliedSeasonLabel = "Seasonal Direct Rate";
  }

  const extraGuests = Math.max(0, guests - 6);
  const extraGuestFeeTotal = extraGuests * PROPERTY_CONFIG.pricing.extraGuestPerNight * nights;
  
  const villaBaseTotal = basePerNight * nights;
  const chefTotal = includeChef ? PROPERTY_CONFIG.pricing.privateChefDaily * nights : 0;
  
  const airportTransferFee = includeAirportTransfer
    ? PROPERTY_CONFIG.pricing.airportPickupRoundtrip
    : 0;

  const subTotal = villaBaseTotal + extraGuestFeeTotal + chefTotal + airportTransferFee;
  
  // Estimated OTA comparison savings (e.g. 18% OTA markup)
  const otaEquivalentPrice = Math.round(subTotal * 1.20);
  const directSavings = otaEquivalentPrice - subTotal;

  const handleWhatsAppReservation = () => {
    const lines = [
      `🌟 *Reservation Inquiry - The Goan House Luxury Villa* 🌟`,
      `📅 *Check-In:* ${checkIn}`,
      `📅 *Check-Out:* ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})`,
      `👥 *Guests:* ${guests} Guests (${tierLabel})`,
      `🏷️ *Applied Rate:* ₹${basePerNight.toLocaleString('en-IN')}/night (${appliedSeasonLabel})`,
      `👨‍🍳 *Private Chef Service:* ${includeChef ? 'Yes (Daily)' : 'No'}`,
      `🚗 *Airport Concierge Pickup:* ${includeAirportTransfer ? 'Yes (SUV Roundtrip +₹4,000)' : 'No'}`,
      `💰 *Estimated Direct Total:* ₹${subTotal.toLocaleString('en-IN')}`,
      `👤 *Name:* ${guestName || 'Guest'}`,
      `📱 *Phone:* ${guestPhone || 'Via WhatsApp'}`,
      specialRequests ? `📝 *Special Requests:* ${specialRequests}` : ''
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const calculatorContent = (
    <div className="bg-white rounded-3xl border border-sand-200 shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-sand-200 gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-palm-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Instant Direct Price Concierge</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ocean-950 font-medium">
            Calculate Your Stay & Reserve
          </h3>
        </div>

        {/* Live Direct Saving Pill */}
        <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Direct Saving: ₹{directSavings.toLocaleString('en-IN')} vs OTA</span>
        </div>
      </div>

      {/* Official Seasonal Rate Card */}
      <div className="mb-8 p-5 rounded-2xl bg-sand-50 border border-sand-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-bold tracking-wider text-palm-800 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-gold-600" />
            Current Seasonal Direct Rates (2026)
          </span>
          <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
            Zero Booking Fees
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* August */}
          <div className={`p-4 rounded-xl border transition-all ${
            checkInMonth === 7 ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-400/30' : 'bg-white border-sand-200'
          }`}>
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-sand-100">
              <span className="font-serif font-semibold text-ocean-950 text-sm">August Rates</span>
              <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                Active Month
              </span>
            </div>
            <div className="space-y-1 text-xs text-sand-600">
              <div className="flex justify-between">
                <span>1-2 Guests (Couple)</span>
                <span className="font-bold text-ocean-950">₹10,000 / night</span>
              </div>
              <div className="flex justify-between">
                <span>3-4 Guests (2 Suites)</span>
                <span className="font-bold text-ocean-950">₹13,000 / night</span>
              </div>
              <div className="flex justify-between text-palm-900 font-semibold">
                <span>5-6 Guests (Full 3 BHK)</span>
                <span className="font-bold text-emerald-700">₹15,000 / night</span>
              </div>
              <div className="text-[11px] text-sand-500 pt-0.5">
                *Up to 10 guests with extra plush mattresses
              </div>
            </div>
          </div>

          {/* September */}
          <div className={`p-4 rounded-xl border transition-all ${
            checkInMonth === 8 ? 'bg-palm-50/60 border-palm-300 ring-2 ring-palm-400/30' : 'bg-white border-sand-200'
          }`}>
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-sand-100">
              <span className="font-serif font-semibold text-ocean-950 text-sm">September Rates</span>
              <span className="text-[10px] uppercase font-bold text-palm-700 bg-palm-100 px-2 py-0.5 rounded-md">
                Upcoming
              </span>
            </div>
            <div className="space-y-1 text-xs text-sand-600">
              <div className="flex justify-between">
                <span>1-2 Guests (Couple)</span>
                <span className="font-bold text-ocean-950">₹11,000 / night</span>
              </div>
              <div className="flex justify-between">
                <span>3-4 Guests (2 Suites)</span>
                <span className="font-bold text-ocean-950">₹14,000 / night</span>
              </div>
              <div className="flex justify-between text-palm-900 font-semibold">
                <span>5-6 Guests (Full 3 BHK)</span>
                <span className="font-bold text-emerald-700">₹16,000 / night</span>
              </div>
              <div className="text-[11px] text-sand-500 pt-0.5">
                *Up to 10 guests with extra plush mattresses
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Dates & Guests Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-sand-500 mb-1.5">
                Check-in Date
              </label>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-sand-50 border border-sand-200">
                <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-ocean-950 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-sand-500 mb-1.5">
                Check-out Date
              </label>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-sand-50 border border-sand-200">
                <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-ocean-950 focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Number of Guests Slider / Selector */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                Number of Guests
              </label>
              <span className="text-sm font-bold text-ocean-950">
                {guests} Guests ({tierLabel})
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex items-center gap-1 shrink-0">
                {[2, 4, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                      guests === num
                        ? 'bg-ocean-950 text-white'
                        : 'bg-sand-100 text-ocean-800 hover:bg-sand-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
            {guests > 6 && (
              <div className="mt-2.5 text-xs text-amber-800 bg-amber-50/90 px-3.5 py-2 rounded-xl border border-amber-200/80 flex items-center gap-2">
                <span>🛏️</span>
                <span>
                  <strong>Capacity Setup:</strong> 6 Guests accommodated across 3 luxury King suites + <strong>{guests - 6} Guests</strong> on extra plush rollaway mattresses (Max 10 persons).
                </span>
              </div>
            )}
          </div>

          {/* Optional Luxury Add-ons */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-sand-500">
              Optional Bespoke Add-ons
            </p>

            {/* Chef Toggle */}
            <div
              onClick={() => setIncludeChef(!includeChef)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                includeChef ? 'bg-amber-50/70 border-amber-300' : 'bg-sand-50 border-sand-200 hover:bg-sand-100/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  includeChef ? 'bg-amber-500 text-white' : 'bg-sand-200 text-sand-600'
                }`}>
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-ocean-950">
                    Dedicated Private Chef (All Meals)
                  </h5>
                  <p className="text-[11px] text-sand-500">
                    Authentic Goan curry, coastal breakfasts & poolside BBQ (+₹3,500/day)
                  </p>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                includeChef ? 'bg-amber-500 border-amber-500 text-white' : 'border-sand-300'
              }`}>
                {includeChef && <Check className="w-3.5 h-3.5" />}
              </div>
            </div>

            {/* Airport Transfer Toggle */}
            <div
              onClick={() => setIncludeAirportTransfer(!includeAirportTransfer)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                includeAirportTransfer ? 'bg-palm-50/70 border-palm-300' : 'bg-sand-50 border-sand-200 hover:bg-sand-100/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  includeAirportTransfer ? 'bg-palm-700 text-white' : 'bg-sand-200 text-sand-600'
                }`}>
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-ocean-950">
                    Private Airport Pickup & Drop (SUV)
                  </h5>
                  <p className="text-[11px] text-sand-500">
                    Chauffeured private SUV transfer from Mopa (GOX) or Dabolim (GOI) (+₹4,000 roundtrip)
                  </p>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                includeAirportTransfer ? 'bg-palm-700 border-palm-700 text-white' : 'border-sand-300'
              }`}>
                {includeAirportTransfer && <Check className="w-3.5 h-3.5" />}
              </div>
            </div>

          </div>

        </div>

        {/* Right Summary & Action Box (5 Cols) */}
        <div className="lg:col-span-5 bg-sand-50 rounded-2xl p-6 sm:p-8 border border-sand-200 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-sand-200 mb-4">
              <h4 className="font-serif text-lg font-medium text-ocean-950">
                Stay Summary ({nights} Night{nights > 1 ? 's' : ''})
              </h4>
              <span className="text-[11px] font-semibold text-palm-800 bg-white px-2 py-0.5 rounded-full border border-sand-200">
                {appliedSeasonLabel}
              </span>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-2.5 text-xs sm:text-sm text-sand-600 mb-6">
              <div className="flex justify-between">
                <span>Nightly Rate (₹{basePerNight.toLocaleString('en-IN')} × {nights})</span>
                <span className="font-semibold text-ocean-950">₹{villaBaseTotal.toLocaleString('en-IN')}</span>
              </div>

              {extraGuests > 0 && (
                <div className="flex justify-between text-amber-800">
                  <span>Extra Bedding ({extraGuests} guest{extraGuests > 1 ? 's' : ''})</span>
                  <span className="font-semibold">₹{extraGuestFeeTotal.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeChef && (
                <div className="flex justify-between text-amber-800">
                  <span>Private Chef on Call</span>
                  <span className="font-semibold">₹{chefTotal.toLocaleString('en-IN')}</span>
                </div>
              )}

              {includeAirportTransfer && (
                <div className="flex justify-between text-palm-800">
                  <span>Airport SUV Transfer (Roundtrip)</span>
                  <span className="font-semibold">
                    ₹{airportTransferFee.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-emerald-700">
                <span>Direct Booking Cleaning Fee</span>
                <span className="font-semibold">COMPLIMENTARY</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="pt-4 border-t border-sand-200 mb-6">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs uppercase tracking-wider font-bold text-sand-500">
                  Total Direct Price
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-ocean-950">
                  ₹{subTotal.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium">
                ✓ All-inclusive direct rate • No hidden OTA fees
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppReservation}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Reserve on WhatsApp (+91 70286 49888)</span>
            </button>

            <p className="text-[10px] text-center text-sand-400">
              Direct rate instantly sent to villa manager for date locking.
            </p>
          </div>

        </div>

      </div>

    </div>
  );

  // If rendering inside a modal overlay
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
        <div className="relative w-full max-w-5xl my-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-sand-100 text-ocean-950 hover:bg-sand-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {calculatorContent}
        </div>
      </div>
    );
  }

  // Standard inline section
  return (
    <section id="reserve" className="py-24 sm:py-32 bg-sand-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {calculatorContent}
      </div>
    </section>
  );
};
