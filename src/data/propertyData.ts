export interface SuiteInfo {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  bed: string;
  sqft: string;
  view: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  category: 'leisure' | 'culinary' | 'comfort' | 'service';
  icon: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'pool' | 'suites' | 'living' | 'outdoor';
  categoryLabel: string;
  image: string;
  aspectRatio: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  guestType: string;
  stayDate: string;
  rating: number;
  quote: string;
  story: string;
  avatar: string;
}

export interface ItineraryStop {
  time: string;
  title: string;
  place: string;
  description: string;
  distance: string;
}

export interface Itinerary {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  badge: string;
  stops: ItineraryStop[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const PROPERTY_CONFIG = {
  name: "The Goan House - 3 BHK Luxury Villa with Private Pool Goa",
  shortName: "The Goan House",
  tagline: "3 BHK Luxury Villa with Private Pool • Arpora, Baga, Goa",
  shortDesc: "A private architectural sanctuary located Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509. 3 BHK private pool villa blending contemporary tropical minimalism with authentic Portuguese-Goan soul.",
  logoUrl: "/images/the-goan-house-logo.png",
  villaSpecs: {
    type: "Luxury 3 Bedroom Private Pool Villa",
    bedrooms: 3,
    bathrooms: "3.5 Luxury Bathrooms",
    maxGuests: "Up to 8 Guests",
    poolSize: "32 ft Private Crystal Pool",
    location: "Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509",
    landArea: "4,500 sq.ft Private Estate"
  },
  contact: {
    phone: "+91 70286 49888",
    phoneRaw: "7028649888",
    whatsappNumber: "917028649888",
    whatsappDisplay: "+91 70286 49888",
    email: "concierge@thegoanhouse.com",
    address: "Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509, India",
    streetAddress: "Near Radisson Resort, Calangute - Baga Rd",
    locality: "Arpora, Baga",
    region: "Goa",
    postalCode: "403509",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Near+Radisson+Resort+Calangute+Baga+Rd+Arpora+Baga+Goa+403509",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
  },
  pricing: {
    baseRatePerNight: 15000, // August base rate (Full 3 BHK)
    extraGuestPerNight: 1500, // beyond 6 guests
    cleaningFee: 0, // Complimentary direct
    directDiscountPercent: 12, // Direct booking discount vs OTA
    privateChefDaily: 3500,
    airportPickupRoundtrip: 4000,
    seasonalRates: [
      {
        month: "August",
        monthNum: 8,
        tier1: 10000, // 2 Guests / 1 BHK
        tier2: 13000, // 4 Guests / 2 BHK
        tier3: 15000, // 6-8 Guests / Full 3 BHK Villa
        note: "Monsoon Special • 32ft Private Pool"
      },
      {
        month: "September",
        monthNum: 9,
        tier1: 11000, // 2 Guests / 1 BHK
        tier2: 14000, // 4 Guests / 2 BHK
        tier3: 16000, // 6-8 Guests / Full 3 BHK Villa
        note: "Pre-Season Green Goa • 32ft Private Pool"
      }
    ]
  },
  heroMedia: {
    // Easily replaceable with actual villa photography / MP4 video
    videoPoster: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85",
    ambientPhotos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
    ]
  },
  poolDayNight: {
    dayImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85",
    nightImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  },
  nearbyAttractions: [
    { name: "Baga Beach", distance: "2.1 km", time: "5 mins", type: "Beach & Water Sports" },
    { name: "Calangute Beach", distance: "3.2 km", time: "7 mins", type: "Sunsets & Dining" },
    { name: "Tito's Lane", distance: "2.4 km", time: "6 mins", type: "Nightlife & Clubs" },
    { name: "Radisson Resort Goa", distance: "1.2 km", time: "3 mins", type: "5-Star Dining & Spa" },
    { name: "Anjuna & Curley's", distance: "4.8 km", time: "12 mins", type: "Bohemian Cafes & Sunset" },
    { name: "Thalassa & Vagator", distance: "7.0 km", time: "15 mins", type: "Cliffside Greek Dining" },
    { name: "Candolim Strip", distance: "5.5 km", time: "12 mins", type: "Boutiques & Fine Dining" },
    { name: "Mopa Airport (GOX)", distance: "27 km", time: "35 mins", type: "International Airport" },
  ]
};

export const SUITES_DATA: SuiteInfo[] = [
  {
    id: "indigo-suite",
    name: "The Indigo Suite",
    subtitle: "Room 1 • Master Sanctuary with Private Sun Terrace",
    tag: "Room 1 • Master",
    bed: "California King Plush Mattress",
    sqft: "580 sq.ft",
    view: "Private Pool & Coconut Grove View",
    description: "Inspired by deep oceanic and historic Portuguese indigo palettes, the Master Suite features custom teakwood furniture, a walk-in wardrobe, and an expansive private terrace directly overlooking the private pool.",
    features: [
      "California King bed with 400TC Egyptian cotton linens",
      "Private sundeck terrace with cushioned daybeds",
      "Spa en-suite with freestanding terrazzo bathtub & rainfall shower",
      "55\" 4K Smart TV with Netflix, Prime & AirPlay",
      "Daikin silent climate control & acoustic soundproofing"
    ],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "The Indigo Suite at The Goan House"
  },
  {
    id: "terracotta-suite",
    name: "The Terracotta Suite",
    subtitle: "Room 2 • Warm Earth Retreat with Tropical Balcony",
    tag: "Room 2 • Deluxe",
    bed: "King Bed with Organic Latex Pillowtop",
    sqft: "460 sq.ft",
    view: "Tropical Flora & Palm Canopy View",
    description: "Celebrates authentic Goan red-earth craftsmanship and warm artisanal textures. Surrounded by swaying palms with a secluded morning espresso balcony.",
    features: [
      "Custom handcrafted king teakwood bed",
      "Secluded private balcony nestled in lush palm canopy",
      "En-suite bathroom with Italian rain shower & organic amenities",
      "Dedicated bespoke work desk with high-speed Starlink WiFi",
      "Floor-to-ceiling blackout linen drapes"
    ],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "The Terracotta Suite at The Goan House"
  },
  {
    id: "clay-suite",
    name: "The Clay Suite",
    subtitle: "Room 3 • Earthen Tranquility for Groups & Families",
    tag: "Room 3 • Flexible",
    bed: "Convertible King or Twin Plush Beds",
    sqft: "440 sq.ft",
    view: "Verdant Courtyard Garden View",
    description: "Rooted in calming raw clay tones, natural linens, and soothing organic textures, offering flexible bed setups ideal for families, couples, or friend groups.",
    features: [
      "Configurable as 1 King or 2 Twin luxury single beds",
      "En-suite designer bath with double brass vanity",
      "Spacious luggage and wardrobe closet",
      "Smart Bluetooth surround sound speaker",
      "Quiet courtyard garden vista"
    ],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "The Clay Suite at The Goan House"
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: "pool",
    title: "32-Foot Private Pool",
    description: "Crystal clear, treated daily, featuring underwater ambient mood lighting and shallow lounging ledge.",
    category: "leisure",
    icon: "Waves",
    highlight: true
  },
  {
    id: "wifi",
    title: "Ultra-Fast Starlink WiFi",
    description: "High-speed 300+ Mbps seamless mesh coverage across the entire villa, pool deck, and gardens.",
    category: "comfort",
    icon: "Wifi",
    highlight: true
  },
  {
    id: "chef",
    title: "Private Chef on Call",
    description: "Authentic Goan seafood curries, continental breakfasts, and BBQ grill prepared fresh to your taste.",
    category: "culinary",
    icon: "UtensilsCrossed",
    highlight: true
  },
  {
    id: "power",
    title: "100% Silent Power Backup",
    description: "Heavy-duty automatic inverter and generator system ensuring uninterrupted AC, WiFi, and lighting 24/7.",
    category: "comfort",
    icon: "Zap",
    highlight: true
  },
  {
    id: "kitchen",
    title: "European Gourmet Kitchen",
    description: "Fully equipped with induction hobs, microwave oven, double-door refrigerator, RO purifier & dishwasher.",
    category: "culinary",
    icon: "CookingPot"
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping & Caretaker",
    description: "Discreet daily housekeeping, linen changes on request, and an on-call dedicated villa manager.",
    category: "service",
    icon: "Sparkles"
  },
  {
    id: "dining",
    title: "Alfresco Tropical Dining",
    description: "8-seater solid wood dining table set under tropical trees beside the illuminated swimming pool.",
    category: "culinary",
    icon: "Wine"
  },
  {
    id: "parking",
    title: "Private Gated Parking",
    description: "Secure, on-premise parking for up to 2 SUVs with EV charging access and CCTV security.",
    category: "service",
    icon: "ShieldCheck"
  },
  {
    id: "entertainment",
    title: "Smart TVs & Marshall Audio",
    description: "55-inch 4K screens in all suites and living room, paired with Marshall Bluetooth audio systems.",
    category: "comfort",
    icon: "Tv"
  },
  {
    id: "concierge",
    title: "Curated Goan Concierge",
    description: "Yacht charters, VIP club reservations, self-drive Thar rentals, and private beach picnic setups.",
    category: "service",
    icon: "Compass"
  },
  {
    id: "coffee",
    title: "Espresso & Artisan Tea Bar",
    description: "Complimentary Nespresso capsules, single-origin South Indian coffee beans, and organic herbal teas.",
    category: "culinary",
    icon: "Coffee"
  },
  {
    id: "security",
    title: "24/7 Monitored Security",
    description: "Private gated compound, exterior security cameras, biometric digital door locks, and safe deposit boxes.",
    category: "service",
    icon: "Lock"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Private Pool Oasis at Sunset",
    category: "pool",
    categoryLabel: "Private Pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[4/3]",
    caption: "32-foot private swimming pool surrounded by tropical palms and cushioned sun loungers."
  },
  {
    id: "g2",
    title: "Open-Concept Living & Lounge",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[16/10]",
    caption: "Double-height living space with plush linen seating opening directly onto the pool terrace."
  },
  {
    id: "g3",
    title: "The Indigo Suite Bedroom",
    category: "suites",
    categoryLabel: "Bedrooms",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[4/3]",
    caption: "The Indigo Suite with California King bed, sun terrace, and bespoke Portuguese-Goan accents."
  },
  {
    id: "g4",
    title: "Alfresco Sunset Dining Patio",
    category: "outdoor",
    categoryLabel: "Outdoor & Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    caption: "Intimate poolside dinner setting under fairy lights and swaying Goan palms."
  },
  {
    id: "g5",
    title: "Spa Bath with Terrazzo Bathtub",
    category: "suites",
    categoryLabel: "Bedrooms",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[4/3]",
    caption: "Freestanding stone bathtub with organic Goan botanical bath salts."
  },
  {
    id: "g6",
    title: "Gourmet Chef's Kitchen",
    category: "living",
    categoryLabel: "Living Spaces",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[16/10]",
    caption: "Fully fitted modern kitchen with high-end appliances and private breakfast counter."
  },
  {
    id: "g7",
    title: "Night Illumination & Mood Glow",
    category: "pool",
    categoryLabel: "Private Pool",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[4/3]",
    caption: "Ambient underwater pool lighting for midnight dips and evening cocktails."
  },
  {
    id: "g8",
    title: "Lush Tropical Garden Courtyard",
    category: "outdoor",
    categoryLabel: "Outdoor & Dining",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    caption: "Private manicured gardens with exotic bougainvillea, frangipani, and coconut trees."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan & Meera Singhania",
    location: "Mumbai",
    guestType: "Family Vacation",
    stayDate: "November 2025",
    rating: 5,
    quote: "A true private sanctuary. The pool, the chef's Goan prawn curry, and the quiet serenity in Arpora made this our best Goa trip yet.",
    story: "We have stayed at top 5-star resorts in Goa, but The Goan House gave us complete privacy and warmth. The kids spent hours in the pool, and having Baga and Tito's just 5 minutes away meant we had peace without feeling isolated.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    name: "Vikramaditya & Friends",
    location: "Bengaluru",
    guestType: "Friend Group Getaway",
    stayDate: "January 2026",
    rating: 5,
    quote: "The photos don't even do justice to the vibe at night with the pool lights. Seamless direct booking and unmatched hospitality.",
    story: "Six of us rented the villa for a 4-day reunion. The bedrooms are massive and equally luxurious, so nobody got the short straw. The caretaker was a superstar and made sure ice, breakfast, and transport were always sorted.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    name: "Natasha Kulkarni",
    location: "Delhi NCR",
    guestType: "Bachelorette Celebration",
    stayDate: "December 2025",
    rating: 5,
    quote: "Pure Airbnb Luxe aesthetic! Every corner is Instagram-worthy, and the private chef breakfast by the pool was unforgettable.",
    story: "Booking directly saved us thousands in service fees compared to Airbnb. The villa host even arranged private airport pickups and table reservations at Thalassa. 10/10 recommendation!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export const ITINERARIES_DATA: Itinerary[] = [
  {
    id: "slow-morning",
    title: "The Slow Tropical Morning",
    subtitle: "Unrushed mornings, coastal bakeries, and poolside relaxation",
    duration: "Morning (8:00 AM - 1:00 PM)",
    badge: "Relaxation & Food",
    stops: [
      {
        time: "08:30 AM",
        title: "Floating Breakfast by the Pool",
        place: "The Goan House",
        description: "Fresh tropical mangoes, artisan poi bread, and French press coffee served on your sun deck.",
        distance: "At Villa"
      },
      {
        time: "10:30 AM",
        title: "Artisan Coffee & Pastries",
        place: "Baba Au Rhum or Babka, Anjuna",
        description: "Famous sourdough croissants and cold brews tucked beneath swaying bamboo canopies.",
        distance: "8 mins drive"
      },
      {
        time: "12:00 PM",
        title: "Boutique Shopping in Assagao",
        place: "Assagao Heritage Village",
        description: "Explore curated designer clothing, artisanal scents, and Goan ceramic studios.",
        distance: "10 mins drive"
      }
    ]
  },
  {
    id: "sunset-sundowners",
    title: "Golden Hour & Cliffside Cocktails",
    subtitle: "Coastal breeze, panoramic Arabian Sea sunsets, and world-class dining",
    duration: "Afternoon to Evening (4:30 PM - 9:30 PM)",
    badge: "Sunsets & Cocktails",
    stops: [
      {
        time: "04:45 PM",
        title: "Beach Walk & Sea Breeze",
        place: "Baga & Calangute Coastline",
        description: "Golden sand stroll just 5 minutes from your villa doorstep.",
        distance: "5 mins drive"
      },
      {
        time: "06:00 PM",
        title: "Sunset Sundowners at Thalassa or Titlie",
        place: "Vagator / Little Vagator",
        description: "Sip passionfruit margaritas with live acoustic DJ sets as the sun dips into the sea.",
        distance: "14 mins drive"
      },
      {
        time: "08:00 PM",
        title: "Fine Dining in Portuguese Mansions",
        place: "Gunpowder or Jamun, Assagao",
        description: "Authentic South Indian coastal delicacies and modern Indian heritage cuisine.",
        distance: "10 mins drive"
      }
    ]
  },
  {
    id: "nightlife-energy",
    title: "Nightlife, Music & Private Midnight Swim",
    subtitle: "Goa's celebrated night energy followed by your private oasis",
    duration: "Night (10:00 PM - Late)",
    badge: "Nightlife & Vibe",
    stops: [
      {
        time: "10:30 PM",
        title: "Cocktails & High-Energy Lounge",
        place: "Tito's Lane & Club Cubana, Arpora",
        description: "Club Cubana ('Nightclub in the Sky') sits right on the Arpora hill next to you.",
        distance: "4 mins drive"
      },
      {
        time: "01:30 AM",
        title: "Private Midnight Dip in the Pool",
        place: "The Goan House",
        description: "Return to your secluded villa sanctuary for a warm midnight swim with underwater lights.",
        distance: "Back at Villa"
      }
    ]
  }
];

export const DIRECT_BOOKING_PERKS = [
  {
    title: "Zero OTA Commission Fees",
    description: "Save 15% to 22% by booking directly with us compared to third-party booking portals.",
    icon: "BadgePercent",
    tag: "Best Price Guaranteed"
  },
  {
    title: "Dedicated Villa Host & Caretaker",
    description: "Personalized on-ground support for itinerary planning, housekeeping, restaurant bookings, and local recommendations.",
    icon: "Sparkles",
    tag: "VIP Service"
  },
  {
    title: "VIP Early Check-in & Late Check-out",
    description: "Flexible arrival and departure priority based on villa availability with luggage assistance.",
    icon: "Clock",
    tag: "Priority Service"
  },
  {
    title: "Curated Goan Welcome Hamper",
    description: "Handcrafted Goan cashews, artisanal treats, tropical fresh fruit basket, and refreshment drinks.",
    icon: "Gift",
    tag: "On Arrival"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where exactly is The Goan House located in Goa?",
    answer: "The Goan House - 3 BHK Luxury Villa with Private Pool Goa is located Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509. We are strategically situated 5 minutes from Baga Beach and Calangute, 4 minutes from Club Cubana, 10 minutes from Assagao, and 12 minutes from Anjuna.",
    category: "Location"
  },
  {
    id: "faq-2",
    question: "How many guests can comfortably stay at the villa?",
    answer: "The villa features 3 large en-suite bedrooms and comfortably accommodates 6 adults in luxury king beds. With additional plush rollaway bedding, we can accommodate up to 8 guests total.",
    category: "Capacity"
  },
  {
    id: "faq-3",
    question: "Is the swimming pool completely private?",
    answer: "Yes, 100% private. The 32-foot swimming pool, sun deck, cabana, and tropical garden are exclusively for you and your group during your stay. No other guests or shared spaces.",
    category: "Amenities"
  },
  {
    id: "faq-4",
    question: "Can we hire a private chef for meals during our stay?",
    answer: "Yes! We have an on-call private chef who can prepare delicious authentic Goan seafood, continental breakfasts, North Indian curries, and poolside BBQ grills. You only pay for groceries plus a modest daily preparation fee.",
    category: "Dining"
  },
  {
    id: "faq-5",
    question: "What is your power backup policy?",
    answer: "We have a heavy-duty automatic inverter and silent generator power backup system that powers 100% of the villa including all air conditioners, WiFi, refrigeration, and pool systems 24/7 without interruption.",
    category: "Amenities"
  },
  {
    id: "faq-6",
    question: "Are bachelorette trips, families, or corporate retreats welcome?",
    answer: "Absolutely. The Goan House was designed to cater to respectful family gatherings, romantic couple getaways, memorable bachelorette trips, and intimate executive retreats looking for privacy and upscale comfort.",
    category: "Policies"
  },
  {
    id: "faq-7",
    question: "What is the check-in and check-out procedure?",
    answer: "Standard check-in is from 2:00 PM and check-out is by 11:00 AM. Our dedicated villa manager will personally welcome you, assist with luggage, hand over digital keys, and give you a comprehensive tour.",
    category: "Check-in"
  },
  {
    id: "faq-8",
    question: "How do I secure the best price for my booking?",
    answer: "Booking directly through our website or direct WhatsApp concierge guarantees our lowest available rate with zero intermediary commissions, plus our direct booking perks like welcome hampers and dedicated on-ground host support.",
    category: "Booking"
  }
];
