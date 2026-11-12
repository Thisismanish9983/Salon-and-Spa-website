# LuxeAura – Premium Salon & Spa Website Template

> **Commercial-Grade Luxury Website Template** designed for high-end beauty salons, day spas, luxury wellness retreats, aesthetic clinics, and bridal coiffure studios.

---

## 🌟 Overview & Aesthetic

**LuxeAura** is crafted with an editorial luxury aesthetic combining warm ivory, soft beige, champagne gold, deep brown, and dark charcoal tones. It pairs high-fashion serif typography with clean sans-serif layouts, curated photography, and micro-interactions.

### Brand Palette:
- **Warm Ivory:** `#F8F5F0`
- **Soft Beige:** `#E9DED2`
- **Champagne Gold:** `#C6A477`
- **Deep Brown:** `#382B25`
- **Dark Charcoal:** `#24211F`
- **Pure White:** `#FFFFFF`

---

## 🚀 Technology Stack

- **React.js 18** (Functional components with React Hooks)
- **Vite 6** (Ultra-fast build & development environment)
- **React Router DOM 6** (Dynamic client-side routing)
- **Lucide React** (Modern, minimalist icons)
- **Pure CSS3** (Custom responsive design with CSS variables, zero third-party UI framework bloat)

---

## 📄 Pages Included

1. **Home (`/`)**:
   - Announcement bar with dismiss functionality
   - Sticky blur navigation bar with mobile slide-out drawer
   - Editorial Hero section with headline: *"Where Beauty Meets Relaxation"*
   - Featured Services showcase
   - About the Salon & Four Pillars of Excellence
   - Why Choose Us grid with luxury icons
   - Popular Treatment Packages (Essential, Signature, Luxury, Bridal)
   - Expert Beauty Professionals preview
   - Curated living image gallery
   - Client Testimonial Carousel with autoplay & controls
   - Special Promotional Offer (20% Off Inaugural Ritual with code)
   - Appointment Booking CTA banner
   - Instagram-style photo strip
   - VIP Newsletter subscription
   - Detailed multi-column footer with operating hours & contact coordinates

2. **About Us (`/about`)**:
   - Salon heritage & founding philosophy
   - Founder & Creative Director’s personal note
   - The Four Cornerstones (Botanical Purity, Artisan Mastery, Bespoke Suites, Clinical Hygiene)
   - Milestone counters (14+ years, 18,400+ guests, 45+ awards)

3. **Services (`/services`)**:
   - 8 Core Service Categories:
     - Hair Styling & Haircuts
     - Hair Coloring
     - Hair Spa & Treatments
     - Facial & Skin Care
     - Bridal Makeup
     - Manicure & Pedicure
     - Body Massage
     - Luxury Spa Treatments
   - Live category tabs and search input
   - Direct link to individual service details

4. **Service Details (`/services/:id`)**:
   - Dynamic route parameter lookup
   - Full service narrative & benefits checklist
   - 4-step procedure walkthrough (e.g. 01 Consultation, 02 Botanical Wash, 03 Sculpting, 04 Blowout)
   - Inclusions tags & ideal client profile
   - Sticky booking sidebar with price, duration, and direct pre-filled booking CTA
   - Related services recommendations

5. **Our Team (`/team`)**:
   - Master stylist & therapist profile cards
   - Designation, experience, biography, specialties tags, social links
   - Continuing education academy standards banner

6. **Pricing & Packages (`/pricing`)**:
   - Tiered packages:
     - **Essential Beauty** ($180 / 2.5 hrs)
     - **Signature Glow** ($290 / 3.5 hrs - Most Loved)
     - **Luxury Relaxation** ($360 / 4 hrs)
     - **Bridal Special** ($520 / 5 hrs)
   - Add-On Booster menu with pricing and duration
   - Private bridal suites & buyouts consultation block

7. **Gallery (`/gallery`)**:
   - Category filtering (All, Hair, Skincare, Makeup, Spa)
   - Hover zoom effects
   - Fullscreen Lightbox Modal with Next/Prev and ESC key dismiss

8. **Appointment Booking (`/booking`)**:
   - Interactive 3-step booking flow:
     - Step 1: Treatment Selection
     - Step 2: Specialist & Date / Time Slot
     - Step 3: Guest Details & Contact Coordinates
   - Real-time live reservation summary card
   - Frontend validation (required fields, valid email, phone)
   - Interactive booking receipt confirmation modal with reference code
   - Transparent disclaimer noting frontend demonstration mode

9. **Contact Us (`/contact`)**:
   - Location address, direct concierge phone, electronic mail
   - Detailed operating hours by day
   - Interactive contact message form with validation and success feedback

10. **FAQ (`/faq`)**:
    - Categorized accordion (General, Hair & Color, Skincare & Spa, Appointments)
    - Live search bar
    - Single or multi-item expandable accordion

11. **Custom 404 Page (`*`)**:
    - Editorial luxury error page with link back to sanctuary home

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL displayed in the terminal).

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── servicesData.js
    │   ├── teamData.js
    │   ├── packagesData.js
    │   ├── testimonialsData.js
    │   ├── faqData.js
    │   └── galleryData.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Button.jsx
    │   ├── ServiceCard.jsx
    │   ├── SectionHeader.jsx
    │   ├── TestimonialSlider.jsx
    │   ├── GalleryModal.jsx
    │   ├── AppointmentForm.jsx
    │   ├── NewsletterForm.jsx
    │   └── ScrollToTop.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── ServiceDetails.jsx
    │   ├── Team.jsx
    │   ├── Pricing.jsx
    │   ├── Gallery.jsx
    │   ├── Booking.jsx
    │   ├── Contact.jsx
    │   ├── FAQ.jsx
    │   └── NotFound.jsx
    └── styles/
        ├── variables.css
        ├── global.css
        ├── components.css
        └── pages.css
```

---

## 💎 Commercial License & Customization

- **Colors:** Modify `--color-*` variables in `src/styles/variables.css` to re-theme in seconds.
- **Content:** Update data files in `src/data/` to customize services, pricing, stylists, and FAQs.
- **Images:** All images are high-resolution Unsplash assets curated for salon and spa aesthetics. Replace with your own photography in `src/data/` or `public/`.
