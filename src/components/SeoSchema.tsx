import React from 'react';
import { PROPERTY_CONFIG, FAQS_DATA, SUITES_DATA } from '../data/propertyData';

export const SeoSchema: React.FC = () => {
  // 1. Google SERP Site Name & WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thegoanhouse.com/#website",
    "name": "The Goan House - 3 BHK Luxury Villa with Private Pool Goa",
    "alternateName": [
      "The Goan House",
      "The Goan House Goa",
      "The Goan House Baga",
      "The Goan House Arpora",
      "The Goan House 3 BHK Villa with Private Pool",
      "The Goan House Near Radisson Resort"
    ],
    "url": "https://thegoanhouse.com/",
    "inLanguage": "en-IN"
  };

  // 2. Primary Lodging & Resort Entity Schema
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Resort", "BedAndBreakfast", "LocalBusiness"],
    "additionalType": [
      "https://en.wikipedia.org/wiki/Homestay",
      "https://en.wikipedia.org/wiki/Resort",
      "https://en.wikipedia.org/wiki/Villa"
    ],
    "@id": "https://thegoanhouse.com/#lodging",
    "name": PROPERTY_CONFIG.name,
    "alternateName": [
      "The Goan House",
      "The Goan House Goa",
      "The Goan House Baga",
      "The Goan House Arpora",
      "The Goan House Homestay",
      "The Goan House Luxury Homestay Goa",
      "The Goan House Villa Resort",
      "The Goan House 3 BHK Homestay with Private Pool",
      "The Goan House 3 BHK Villa with Private Pool",
      "The Goan House Near Radisson Resort"
    ],
    "description": PROPERTY_CONFIG.shortDesc,
    "url": "https://thegoanhouse.com/",
    "telephone": PROPERTY_CONFIG.contact.phone,
    "email": PROPERTY_CONFIG.contact.email,
    "priceRange": "₹10,000 - ₹16,000",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
    "image": [
      "https://thegoanhouse.com/images/The-goan-house-logo.webp",
      `https://thegoanhouse.com${PROPERTY_CONFIG.heroMedia.videoPoster}`,
      `https://thegoanhouse.com${PROPERTY_CONFIG.poolDayNight.dayImage}`,
      ...SUITES_DATA.map((s) => `https://thegoanhouse.com${s.image}`)
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": PROPERTY_CONFIG.contact.streetAddress,
      "addressLocality": PROPERTY_CONFIG.contact.locality,
      "addressRegion": PROPERTY_CONFIG.contact.region,
      "postalCode": PROPERTY_CONFIG.contact.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.5684,
      "longitude": 73.7663
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5.0"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "28",
      "reviewCount": "28"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "32ft Private Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ultra-Fast Starlink WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning in All Rooms",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Fully Equipped Kitchen",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "100% Power Backup Generator",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Gated Parking",
        "value": true
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Baga, Goa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Arpora, Goa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Calangute, Goa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "North Goa"
      }
    ],
    "checkinTime": PROPERTY_CONFIG.contact.checkInTime,
    "checkoutTime": PROPERTY_CONFIG.contact.checkOutTime,
    "petsAllowed": "On Request",
    "hasMap": PROPERTY_CONFIG.contact.googleMapsUrl,
    "containsPlace": SUITES_DATA.map((suite) => ({
      "@type": "HotelRoom",
      "@id": `https://thegoanhouse.com/#suite-${suite.id}`,
      "name": suite.name,
      "description": suite.description,
      "bed": {
        "@type": "BedDetails",
        "numberOfBeds": 1,
        "typeOfBed": suite.bed
      },
      "occupancy": {
        "@type": "QuantitativeValue",
        "value": 2,
        "unitText": "Adults"
      },
      "image": `https://thegoanhouse.com${suite.image}`,
      "amenityFeature": suite.features.map((feat) => ({
        "@type": "LocationFeatureSpecification",
        "name": feat,
        "value": true
      }))
    }))
  };

  // 3. Local Business Map & Opening Hours Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thegoanhouse.com/#localbusiness",
    "name": PROPERTY_CONFIG.name,
    "image": "https://thegoanhouse.com/images/The-goan-house-logo.webp",
    "telephone": PROPERTY_CONFIG.contact.phone,
    "email": PROPERTY_CONFIG.contact.email,
    "priceRange": "₹10,000 - ₹16,000",
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": PROPERTY_CONFIG.contact.streetAddress,
      "addressLocality": PROPERTY_CONFIG.contact.locality,
      "addressRegion": PROPERTY_CONFIG.contact.region,
      "postalCode": PROPERTY_CONFIG.contact.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.5684,
      "longitude": 73.7663
    },
    "url": "https://thegoanhouse.com/",
    "hasMap": PROPERTY_CONFIG.contact.googleMapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  // 4. On-Page Visible FAQ Schema (Exact Match)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thegoanhouse.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Luxury Villa Baga Arpora Goa",
        "item": "https://thegoanhouse.com/#story"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Private Pool Sanctuary",
        "item": "https://thegoanhouse.com/#pool"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Reserve Stay",
        "item": "https://thegoanhouse.com/#reserve"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
