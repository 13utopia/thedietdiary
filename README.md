# The Diet Diary — Shivangi Pancholi

> **1:1 Pixel-Perfect & Motion-Synchronized Next.js Web Application** for *Shivangi Pancholi* (Expert Nutritionist & Dietitian). Re-engineered from WordPress/Elementor into an ultra-fast, zero-backend Next.js static export.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Status](https://img.shields.io/badge/Parity-100%25%20Verified-success)]()

---

## 🌟 Key Features

- **1:1 Visual & Structural Parity**: 100% fidelity matching [thedietdiary.in](https://thedietdiary.in/) across all 457 Elementor layout nodes and 52 local image/media assets.
- **Blazing Fast Performance**: Zero-backend static export (`output: 'export'`) with sub-second page load speeds.
- **ThemeManager Component**: Client-side runtime managing dynamic route-aware body classes, responsive Astra breakpoints (`921.99px`), scroll-triggered entrance animations (`fadeIn`, `fadeInUp`, `fadeInLeft`, `zoomIn`), and lazyloaded background images.
- **Responsive Navigation**: Desktop sticky header and mobile hamburger drawer.
- **Direct WhatsApp Consultation**: Integrated JoinChat floating widget and direct WhatsApp consultation booking (`wa.me/918469077410`).
- **Complete SEO Suite**: Built-in OpenGraph cards, XML sitemap (`/sitemap.xml`), crawler directives (`/robots.txt`), and responsive favicon bundle (`32x32`, `180x180`, `192x192`).
- **Hostinger & Apache Optimization**: Production-grade `.htaccess` pre-configured with HTTPS enforcement, clean URL routing, GZIP compression, and 1-year browser caching for `.webp`, `.woff2`, `.css`, and `.js`.

---

## 📁 Repository Structure

```text
├── public/
│   ├── .htaccess                   # Hostinger Apache / LiteSpeed rewrite & caching rules
│   ├── robots.txt                  # Search engine crawler directives
│   ├── sitemap.xml                 # XML Sitemap for search engines
│   ├── website-images/             # Optimized WebP portraits, heroes & banners
│   ├── wp-content/                 # Scoped Elementor, plugin & theme stylesheets
│   └── wp-includes/                # Scoped core scripts & jQuery runtime
├── src/
│   ├── app/
│   │   ├── about/page.jsx          # About Shivangi Pancholi
│   │   ├── blog/                   # Blog listing & article subpages
│   │   ├── diet-plan/page.jsx      # Diet Plan overview
│   │   ├── my-services/page.jsx    # Consultation & nutrition services
│   │   ├── pricing/page.jsx        # Nutrition & diet pricing tables
│   │   ├── programs/page.jsx       # Specialized wellness programs
│   │   ├── shop/page.jsx           # Products & guides
│   │   ├── testimonial/page.jsx    # Client transformations & reviews
│   │   ├── layout.jsx              # Root layout with global configs & scripts
│   │   └── page.jsx                # High-conversion Homepage
│   └── components/
│       ├── ThemeManager.jsx        # Dynamic route classes, breakpoints & animation engine
│       ├── Header.jsx              # Header navigation
│       ├── Footer.jsx              # Footer links & copyright
│       └── SkipLink.jsx            # Accessibility skip-to-content link
├── scripts/
│   ├── verify_1to1_parity.mjs      # Automated parity audit against live site
│   └── verify_assets.mjs           # Local disk asset integrity verifier
├── next.config.mjs                 # Static export configuration
└── package.json                    # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x, 20.x, or 24.x
- npm / yarn / pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### 3. Build Static Export for Production
```bash
npm run build
```
The optimized static production bundle will be generated in the **`out/`** directory.

---

## 🌐 Deployment Guide (Hostinger)

### Method 1: Hostinger File Manager / FTP (Recommended)
1. Run `npm run build` to generate the `out/` folder.
2. In Hostinger **hPanel** $\rightarrow$ **File Manager** $\rightarrow$ open `public_html/`.
3. Upload **all contents from inside the `out/` folder** directly into `public_html/`.
4. Ensure `.htaccess` is uploaded to `public_html/` (enable "Show Hidden Files" in File Manager settings if needed).

### Method 2: Hostinger Git / Automated Deployment
- **Repository URL**: `https://github.com/13utopia/thedietdiary.git`
- **Branch**: `main`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Publish Directory**: `out`

---

## 🧪 Verification & Auditing

To verify local site integrity and parity against the live website at any time:

```bash
# Verify all assets exist locally without 404s
node scripts/verify_assets.mjs

# Compare live site DOM node counts and image maps against local build
node scripts/verify_1to1_parity.mjs
```

---

## 📄 License
All rights reserved © Shivangi Pancholi / The Diet Diary.
