# The Goan House Villa — Workspace Cockpit & AI Agent Rules

## 1. Property Identity & Canonical Entity Data
- **Official Name**: The Goan House - 3 BHK Luxury Homestay & Private Pool Villa Resort Goa
- **Short Name**: The Goan House
- **Property Type & Primary Category**: Luxury Homestay & Boutique Villa Resort (Google Business Profile Category: Homestay / Resort)
- **Location**: Near Radisson Resort, Calangute - Baga Rd, Arpora, Baga, Goa 403509, India
- **Strategic Proximity**:
  - 5 mins to Baga Beach & Calangute Beach
  - 4 mins to Club Cubana & Arpora Saturday Night Market
  - 10 mins to Assagao culinary strip
  - 12 mins to Anjuna Beach
- **Accommodations (3 Private Designer Suites)**:
  1. *The Indigo Suite* (Room 1 — Master Sanctuary with Private Sun Terrace & Open-Air Rain Shower)
  2. *The Verandah Suite* (Room 2 — Direct Poolside Access, Teak Loungers, Tropical Courtyard Views)
  3. *The Palm Loft Suite* (Room 3 — Elevated Canopy Views, Soaking Tub, Handcrafted Cane Accents)
- **Key Amenities**:
  - 32-Foot Private Swimming Pool with submerged sunbathing ledge and underwater illumination
  - Dedicated private chef / butler options & daily housekeeping
  - Fully equipped contemporary kitchen with espresso bar
  - High-speed fiber Wi-Fi, 100% DG power backup, gated 24/7 security
- **Data Integrity**: Central property configuration is strictly maintained in `src/data/propertyData.ts` and itineraries/blogs in `src/data/blogData.ts`.

---

## 2. Design System & Brand Palette
- **Architecture**: Portuguese-Goan Heritage meets Tropical Contemporary Minimalism.
- **Color System**:
  - **Sand (Backgrounds & Surfaces)**: `sand-50` (`#FAF8F5`), `sand-100` (`#F5F1EA`), `sand-200` (`#EBE4D8`)
  - **Deep Ocean (Contrast & Editorial Text)**: `ocean-900` (`#0B1520`), `ocean-950` (`#070D14`), `ocean-800` (`#142334`)
  - **Tropical Palm (Accents)**: `palm-900` (`#14281E`), `palm-700` (`#2C5540`)
  - **Terracotta (Warm Accents & Badges)**: `terracotta-600` (`#B85D38`), `terracotta-500` (`#CF6D44`)
  - **Warm Gold (Direct Booking & Luxury Highlights)**: `gold-500` (`#D4AF37`), `gold-400` (`#E6C678`)
- **Typography**:
  - **Display / Headings**: `Playfair Display` & `Cormorant Garamond`
  - **Body / Interface**: `Plus Jakarta Sans`

---

## 3. Tech Stack & Commands
- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v3.4 + Lucide React icons
- **Commands**:
  - Dev Server: `npm run dev`
  - Production Build: `npm run build` (outputs to `dist/`)
  - Preview: `npm run preview`
- **Build Sync**:
  - When a production build is approved, compiled assets from `dist/` can be mirrored into `../Website-Live/` for direct deployment.

---

## 4. Antigravity Skill Triggers & AI Workflows
- `cro-booking-funnel-optimizer` / `hospitality-direct-booking-cro`: Use for direct WhatsApp booking CTAs, pricing calculators, OTA disparity callouts.
- `schema-jsonld-generator`: Maintain `LodgingBusiness`, `HotelRoom`, and `FAQPage` schemas in `src/components/SeoSchema.tsx`.
- `onpage-seo-optimizer` & `local-seo-gmb-optimizer`: Optimize meta tags and local Arpora/Baga landing page keywords.
- `core-web-vitals-perf`: Optimize WebP asset loading, responsive image `srcset`, and font preloading.
- `anti-ai-polish-craft`: Enforce authentic Goan coastal editorial tone across all descriptions.

---

## 5. Media & Asset Locations
- **Web Optimized Assets (< 300KB)**: `Website-Source/public/images/` and `Website-Live/images/`
- **Raw Media Vault**: `D:\_RAW_MEDIA_VAULT\Goan House\` (Original high-resolution drone videos, DSLR photography, and master vector logos)
