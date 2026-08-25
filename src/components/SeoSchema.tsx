import React from 'react';
import { PROPERTY_CONFIG, FAQS_DATA } from '../data/propertyData';

export const SeoSchema: React.FC = () => {
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Hotel", "Resort", "LocalBusiness"],
    "@id": "https://thegoanhouse.com/#lodging",
    "name": PROPERTY_CONFIG.name,
    "alternateName": [
      "The Goan House",
      "The Goan House Goa",
      "The Goan House Arpora",
      "The Goan House Baga",
      "The Goan House 3 BHK Villa with Private Pool",
      "The Goan House Near Radisson Resort"
    ],
    "description": PROPERTY_CONFIG.shortDesc,
    "url": "https://thegoanhouse.com",
    "telephone": PROPERTY_CONFIG.contact.phone,
    "email": PROPERTY_CONFIG.contact.email,
    "priceRange": "₹₹",
    "image": [
      "https://thegoanhouse.com/images/The-goan-house-logo.webp",
      PROPERTY_CONFIG.heroMedia.videoPoster,
      PROPERTY_CONFIG.poolDayNight.dayImage
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
        "name": "Private Chef Service",
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
    "checkinTime": PROPERTY_CONFIG.contact.checkInTime,
    "checkoutTime": PROPERTY_CONFIG.contact.checkOutTime,
    "petsAllowed": "On Request",
    "hasMap": PROPERTY_CONFIG.contact.googleMapsUrl
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thegoanhouse.com/#localbusiness",
    "name": PROPERTY_CONFIG.name,
    "image": "https://thegoanhouse.com/images/The-goan-house-logo.webp",
    "telephone": PROPERTY_CONFIG.contact.phone,
    "email": PROPERTY_CONFIG.contact.email,
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
    "url": "https://thegoanhouse.com",
    "hasMap": PROPERTY_CONFIG.contact.googleMapsUrl,
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

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
        "name": "Luxury Villa Arpora Goa",
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
