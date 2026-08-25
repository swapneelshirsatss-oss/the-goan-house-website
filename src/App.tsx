import React, { useState, useEffect } from 'react';
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
import { BlogIndex } from './components/blog/BlogIndex';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { BLOG_POSTS } from './data/blogData';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  } | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (dates?: { checkIn: string; checkOut: string; guests: number }) => {
    if (dates) {
      setSelectedDates(dates);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Route 1: Individual Blog Article (/blog/:slug)
  if (currentPath.startsWith('/blog/') && currentPath.length > 6) {
    const slug = currentPath.replace('/blog/', '').replace(/\/$/, '');
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      return (
        <>
          <BlogPostPage
            post={post}
            onNavigateHome={() => navigateTo('/')}
            onNavigateBlog={() => navigateTo('/blog')}
            onSelectPost={(newSlug) => navigateTo(`/blog/${newSlug}`)}
            onOpenBooking={() => handleOpenBookingModal()}
          />
          <FloatingWhatsApp />
          {isBookingModalOpen && (
            <BookingCalculator
              isOpenModal={true}
              initialDates={selectedDates}
              onCloseModal={handleCloseBookingModal}
            />
          )}
        </>
      );
    }
  }

  // Route 2: Blog Hub (/blog)
  if (currentPath === '/blog' || currentPath === '/blog/') {
    return (
      <>
        <BlogIndex
          onNavigateHome={() => navigateTo('/')}
          onSelectPost={(slug) => navigateTo(`/blog/${slug}`)}
          onOpenBooking={() => handleOpenBookingModal()}
        />
        <FloatingWhatsApp />
        {isBookingModalOpen && (
          <BookingCalculator
            isOpenModal={true}
            initialDates={selectedDates}
            onCloseModal={handleCloseBookingModal}
          />
        )}
      </>
    );
  }

  // Route 3: Main High-Converting Landing Page (/)
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-ocean-950 font-sans selection:bg-gold-500/20 selection:text-ocean-950">
      {/* Schema.org Structured Data */}
      <SeoSchema />

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBookingModal()}
        onNavigateBlog={() => navigateTo('/blog')}
      />

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

        {/* 6. Living Spaces & Fully Equipped Gourmet Kitchen */}
        <LivingSpaces />

        {/* 7. Curated Luxury Amenities Bento Grid */}
        <AmenitiesBento />

        {/* 8. Editorial Masonry Photo Gallery & Lightbox */}
        <GalleryMasonry />

        {/* 9. Verified Guest Impressions & 5.0 Rating Proof */}
        <ReviewsSocialProof />

        {/* 10. Curated North Goa Guide & Day-to-Night Itineraries */}
        <GoaGuideItinerary onNavigateBlog={(slug) => slug ? navigateTo(`/blog/${slug}`) : navigateTo('/blog')} />

        {/* 11. Direct Booking Privileges vs OTA Comparison */}
        <DirectBookingBenefits onNavigateBlog={(slug) => slug ? navigateTo(`/blog/${slug}`) : navigateTo('/blog')} />

        {/* 12. Interactive Booking Concierge & Live Dynamic Price Estimator */}
        <BookingCalculator />

        {/* 13. Curated FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 14. Luxury Footer & Location Map */}
      <Footer onNavigateBlog={() => navigateTo('/blog')} />

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
