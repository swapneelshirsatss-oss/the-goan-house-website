import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmotionalIntro } from './components/EmotionalIntro';
import { VillaStory } from './components/VillaStory';
import { PoolExperience } from './components/PoolExperience';
import { RoomsSuites } from './components/RoomsSuites';
import { LivingSpaces } from './components/LivingSpaces';
import { AmenitiesBento } from './components/AmenitiesBento';
import { GalleryMasonry } from './components/GalleryMasonry';
import { ReviewsSocialProof } from './components/ReviewsSocialProof';
import { GoaGuideItinerary } from './components/GoaGuideItinerary';
import { DirectBookingBenefits } from './components/DirectBookingBenefits';
import { BookingCalculator } from './components/BookingCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SeoSchema } from './components/SeoSchema';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  } | null>(null);

  const handleOpenBookingModal = (dates?: { checkIn: string; checkOut: string; guests: number }) => {
    if (dates) {
      setSelectedDates(dates);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-ocean-950 font-sans selection:bg-gold-500/20 selection:text-ocean-950">
      {/* Schema.org Structured Data */}
      <SeoSchema />

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Main Page Flow (14 Sections) */}
      <main className="flex-grow">
        {/* 1. Cinematic Hero Section */}
        <Hero onCheckAvailability={handleOpenBookingModal} />

        {/* 2. Emotional Storytelling & Key Highlights */}
        <EmotionalIntro />

        {/* 3. Villa Architecture & Heritage Story */}
        <VillaStory />

        {/* 4. Private Pool & Tropical Oasis Experience (with Day/Night Ambiance Toggle) */}
        <PoolExperience onReserve={() => handleOpenBookingModal()} />

        {/* 5. Rooms & Suites (3 En-Suite Bedrooms with Interactive Specs) */}
        <RoomsSuites onReserve={() => handleOpenBookingModal()} />

        {/* 6. Living Spaces, Gourmet Kitchen & Private Chef */}
        <LivingSpaces />

        {/* 7. Curated Luxury Amenities Bento Grid */}
        <AmenitiesBento />

        {/* 8. Editorial Masonry Photo Gallery & Lightbox */}
        <GalleryMasonry />

        {/* 9. Verified Guest Impressions & 5.0 Rating Proof */}
        <ReviewsSocialProof />

        {/* 10. Curated North Goa Guide & Day-to-Night Itineraries */}
        <GoaGuideItinerary />

        {/* 11. Direct Booking Privileges vs OTA Comparison */}
        <DirectBookingBenefits />

        {/* 12. Interactive Booking Concierge & Live Dynamic Price Estimator */}
        <BookingCalculator />

        {/* 13. Curated FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 14. Luxury Footer & Location Map */}
      <Footer />

      {/* Floating 1-Click WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Pop-up Booking Modal if triggered from Nav or Buttons */}
      {isBookingModalOpen && (
        <BookingCalculator
          isOpenModal={true}
          initialDates={selectedDates}
          onCloseModal={handleCloseBookingModal}
        />
      )}
    </div>
  );
};

export default App;
