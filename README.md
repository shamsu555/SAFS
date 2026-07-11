# SAFS Information Technologies — Website

A modern, responsive multi-page website for **SAFS Information Technologies**, built with semantic HTML5, external CSS, and vanilla JavaScript — no frameworks or build tools required.

## Folder Structure

```
SAFS-Information-Technologies/
│
├── index.html          → Homepage (hero, about preview, services preview, CTA)
├── about.html          → Company history, mission, vision, core values
├── services.html       → All 5 services in detail + process section
├── contact.html        → Contact info, contact form, map placeholder
│
├── assets/
│   ├── css/
│   │   └── style.css   → All site styling (design tokens at the top)
│   ├── js/
│   │   └── script.js   → Nav toggle, scroll effects, form validation
│   └── images/
│       ├── logo.png    → Company logo (used in navbar & footer)
│       └── hero.png    → Homepage hero image
│
└── README.md            → This file
```

## How to Use

1. Extract the ZIP file.
2. Make sure `logo.png` and `hero.png` are placed inside `assets/images/` (already included).
3. Open `index.html` in any browser — no server or build step required.
4. To publish online, upload the whole folder to any static web host (e.g. Netlify, GitHub Pages, cPanel, or your existing host at ksrms.com.ng).

## Features

- **Sticky navigation bar** with logo, active-page highlighting, and a mobile hamburger menu.
- **Fully responsive** layout — tested down to small mobile widths.
- **Hero section** on the homepage featuring `hero.png`, a tagline, and call-to-action buttons.
- **About page** with company history timeline, mission, vision, and core values.
- **Services page** showcasing all 5 services in animated cards, plus a "how we work" process section.
- **Contact page** with full contact details, a validated contact form (front-end only — connect to your preferred backend or form service to receive live submissions), and a reserved section for a Google Maps embed.
- **Shared footer** on every page with logo, quick links, contact details, social icons, and the copyright line.
- **Scroll-reveal animations**, hover effects, smooth scrolling, and a back-to-top button.
- Built with the **Sora** (headings) and **Inter** (body) Google Fonts for a clean, professional, modern look in a blue-and-white colour scheme.

## Customising

- **Colours & fonts**: edit the CSS variables at the top of `assets/css/style.css` (`:root` block).
- **Contact form backend**: the form in `contact.html` currently shows a success message via JavaScript only. To receive real submissions, connect it to a service like Formspree, EmailJS, or your own backend, and update the `<form>` action/JS in `script.js`.
- **Google Map**: replace the placeholder block inside the `map-section` in `contact.html` with a Google Maps `<iframe>` embed for your exact location.

## Company Information

- **Established:** 2026
- **Address:** Gwammaja Opposite GGC Dala, Kano, Nigeria
- **Phone:** 0803 090 9793
- **Email:** info@ksrms.com.ng
- **Website:** www.ksrms.com.ng

---
&copy; 2026 SAFS Information Technologies. All Rights Reserved.
