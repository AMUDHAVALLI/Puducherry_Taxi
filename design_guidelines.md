# GoSafeTaxi Website Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with inspiration from Uber, Lyft, and modern travel booking platforms

**Justification:** Transportation booking services require high trust, instant clarity, and seamless conversion flow. Drawing from industry leaders in ride-sharing and travel booking ensures familiar patterns while creating a distinctive regional identity.

**Core Principles:**
- Trust through transparency (pricing, driver info, safety features)
- Instant gratification (quick booking, clear CTAs)
- Regional warmth (reflects Tamil Nadu hospitality)
- Mobile-first experience (primary booking channel)

---

## Color Palette

**Primary Brand Colors:**
- Deep Teal: `180 65% 25%` (trust, professionalism, reliability)
- Vibrant Teal: `180 70% 45%` (interactive elements, CTAs)

**Accent Colors:**
- Warm Orange: `25 95% 60%` (urgency, special offers, active states)
- Success Green: `150 70% 45%` (confirmations, verified badges)

**Neutrals:**
- Dark mode background: `220 15% 10%`
- Dark mode cards: `220 15% 15%`
- Light mode background: `0 0% 98%`
- Light mode cards: `0 0% 100%`
- Text primary: `220 15% 95%` (dark mode) / `220 20% 15%` (light mode)
- Text secondary: `220 10% 65%` (dark mode) / `220 15% 45%` (light mode)

---

## Typography

**Font Families:**
- Headings: Inter (700, 600, 500) - modern, geometric, confident
- Body: Inter (400, 500) - excellent readability
- Accent/Numbers: Space Grotesk (600) - pricing and statistics

**Scale:**
- Hero headline: text-6xl to text-7xl (bold)
- Section headers: text-4xl to text-5xl (semibold)
- Card titles: text-xl to text-2xl (semibold)
- Body text: text-base to text-lg
- Captions: text-sm

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Full-width hero: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Form containers: max-w-2xl
- Card grids: gap-6 to gap-8

**Vertical Rhythm:**
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Component spacing: space-y-6 to space-y-12
- Card padding: p-6 to p-8

---

## Component Library

### Navigation
- Sticky header with backdrop blur
- Logo left, navigation center, "Book Now" CTA right
- Mobile: Hamburger menu with slide-in drawer
- Quick action buttons: Phone, WhatsApp (fixed bottom on mobile)

### Hero Section
- 80vh height with large background image (taxi on scenic Tamil Nadu road)
- Centered content with semi-transparent dark overlay
- Multi-tab booking widget (4 tabs: Local, Outstation, City, Airport)
- Floating card design with blur background
- Real-time fare estimation display

### Service Type Cards
- 2x2 grid (desktop), stack (mobile)
- Icon, title, brief description, "Book Now" button
- Hover: subtle lift effect and border glow
- Icons: taxi, route map, city skyline, airplane

### Vehicle Showcase
- Horizontal scrollable cards (mobile) / 4-column grid (desktop)
- Each card: vehicle image, name, capacity, pricing, feature bullets
- Gradient border on hover
- "Select" button with instant booking flow

### Booking Forms
- Multi-step wizard with progress indicator
- Step 1: Route/Package selection
- Step 2: Date/time picker with calendar
- Step 3: Passenger/luggage details
- Step 4: Contact and confirmation
- Real-time fare calculation sticky sidebar
- Smooth transitions between steps

### Popular Routes
- 3-column grid of route cards
- Each card: from-to cities, estimated time, starting price
- Background: subtle gradient or city landmark photo
- Quick "Book This Route" CTA

### Trust Indicators
- 3-column feature grid
- Large icons (24/7 support, verified drivers, transparent pricing)
- Statistics counter animation on scroll (e.g., "10,000+ rides completed")

### Testimonials
- Carousel with 3 visible cards
- Customer photo, name, route taken, rating stars, quote
- Auto-play with pause on hover

### Footer
- 4-column layout: Services, Popular Routes, Quick Links, Contact
- Newsletter signup with WhatsApp alternative
- Social media icons
- Trust badges (payment security, verified business)

---

## Images

### Hero Background
- Large, high-quality image: Modern taxi on scenic Chennai/Pondicherry road, golden hour lighting
- Alternative: Collage of happy passengers in clean vehicles
- Dimensions: 1920x1080 minimum
- Placement: Full-width background with 40% opacity dark overlay

### Vehicle Images
- Professional photos: Hatchback, Sedan, SUV, Tempo Traveller
- Clean white/light background, 3/4 angle view
- Consistent lighting and style
- Dimensions: 800x600 minimum

### Route Cards (Background)
- Subtle landmark images for popular routes
- Chennai Marina Beach, Pondicherry French Quarter, Madurai Temple
- Low opacity, used as card backgrounds

### Trust Section
- Verified driver badge photo
- Customer service representative (friendly, professional)
- Mobile app screenshot showing real-time tracking

---

## Animations

**Use Sparingly:**
- Hero: Subtle fade-in on page load
- Booking form: Smooth step transitions (slide and fade)
- Counter animations: Number counting up on scroll into view
- Card hover: Gentle lift (translateY -2px) and shadow increase
- CTA buttons: Scale on active press (0.98)

**No Animations:**
- Avoid distracting parallax effects
- No auto-playing videos
- No flashy scroll-triggered animations

---

## Mobile-First Considerations

- Bottom navigation bar: Home, Services, Book, Support, Profile
- Sticky "Book Now" FAB (Floating Action Button)
- Simplified booking form (fewer fields per step)
- Click-to-call and WhatsApp buttons prominent
- Swipeable vehicle carousel
- Collapsible sections for pricing details