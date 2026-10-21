# Aksiva Studio — Official Web Application

Modern, high-performance web presence and digital portfolio for **Aksiva Studio**, engineered with **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**.

---

## Brand Assets & Color Palette

- **Brand Name**: Aksiva Studio
- **Primary Color**: Aksiva Vibrant Orange (`#FA6800`)
- **Secondary / Base**: Aksiva Midnight Navy (`#0B1528` / `#070E1B`)
- **Typography**: Clean Modern Geometric Sans (Outfit & Inter)
- **Official Logos**: Stored in `public/images/`

---

## Features

1. **Brand Hero & Metrics**:
   - High-impact headline, dynamic badge, call-to-action buttons.
   - Interactive hero showcase card highlighting Core Web Vitals (100/100 Lighthouse score), sub-second load times, and client satisfaction.
2. **Core Capabilities Bento Grid**:
   - Highlighting Web Development (Next.js), UI/UX Design, Brand Identity, SEO Tuning, and Custom Dashboards.
3. **Selected Works Portfolio**:
   - Dynamic category filter (Web Engineering, UI/UX Design, Branding & Identity).
   - Interactive modal drawer to view case study details, deliverables, and tech stack.
4. **Interactive Scope & Cost Estimator**:
   - Real-time calculator supporting both **IDR (Rupiah)** and **USD ($)**.
   - Project type, scope size, turnaround speed, and modular add-ons.
5. **Aksiva Engineering Process**:
   - 4-phase delivery framework (Discovery → Prototyping → Engineering → Handover).
6. **Social Proof & Testimonials**:
   - Verified client reviews with 5-star rating highlights.
7. **Consultation & Inquiry Form**:
   - Interactive form with project brief, budget selector, WhatsApp direct link, Instagram integration, and location details.
8. **Glassmorphic Navigation & Footer**:
   - Sticky blur navbar with mobile drawer, brand emblem, and footer navigation.

---

## Getting Started

### 1. Install Dependencies
Open your terminal in this directory:
```bash
cd "D:\Documents\Aksiva Studio\web aksiva"
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## Directory Structure

```
web aksiva/
├── public/
│   └── images/
│       ├── Logo Aksiva.png
│       ├── Logo IG Aksiva.png
│       └── Logo IG Aksiva IG.png
├── src/
│   ├── app/
│   │   ├── globals.css          # Theme tokens, glassmorphism & gradients
│   │   ├── layout.tsx           # SEO metadata & fonts
│   │   └── page.tsx             # Master page
│   ├── components/
│   │   ├── Navbar.tsx           # Glassmorphic header & mobile navigation
│   │   ├── Hero.tsx             # Hero banner & live performance widget
│   │   ├── Services.tsx         # Bento grid services showcase
│   │   ├── Portfolio.tsx        # Filterable project gallery & modal
│   │   ├── ProjectEstimator.tsx # Realtime cost & budget calculator
│   │   ├── Process.tsx          # 4-stage studio methodology
│   │   ├── Testimonials.tsx     # Client reviews & star ratings
│   │   ├── ContactSection.tsx   # Project brief consultation form
│   │   └── Footer.tsx           # Social links & copyright
│   └── lib/
│       └── utils.ts             # Tailwind class merging helper
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.mjs
```
