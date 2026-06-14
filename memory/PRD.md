# Elepha Solutions — PRD

## Original Problem Statement
Build a modern, responsive, minimalist static corporate website for **Elepha Solutions**,
a technology and talent services company. Sections: sticky navbar, hero, services,
why-elepha + animated stats, industries, process timeline, testimonials, CTA banner,
contact, footer. Brand: Deep Blue #0F4C81, Teal #00A6A6, Poppins headings, Open Sans body.

## Architecture
- **Frontend**: React 19 + Tailwind 3 + lucide-react + sonner (toasts) + framer-motion ready.
- **Backend**: FastAPI + Motor (MongoDB async) with `/api` prefix.
- **Database**: MongoDB collection `contact_inquiries` (stores form submissions).
- **Routing**: Single-page landing at `/` with anchor scrolling.

## User Personas
1. **Enterprise CTO / CIO** evaluating IT and managed-services partners.
2. **VP People / TA Leader** looking for RaaS or IaaS partners.
3. **Founder / COO of a growth-stage startup** needing both tech and talent.

## Core Requirements (Static)
- Sticky navbar: transparent → solid deep-blue glass on scroll.
- Hero: "Technology. Talent. Transformation." with two CTAs.
- 4 services: IT Services, Talent Acquisition, RaaS, IaaS.
- Why-Elepha: 4 features + 4 animated stats (100+, 5000+, 50+, 95%).
- Industries: 6 cards.
- Process: 5-step horizontal timeline.
- 3 testimonials, CTA banner, contact form, footer.
- Contact details: talent.experts@elephasolutions.com, +91 94866 02103, Kelambakkam, TN.

## What's Implemented (2025-12)
- Full landing experience as above ✓
- Functional contact form → MongoDB via `POST /api/contact` ✓
- Animated scroll-reveal + animated stat counters ✓
- Mobile responsive + hamburger menu ✓
- Accessibility: semantic landmarks, aria-labels on icon buttons, alt text on images ✓
- SEO: title + meta description set ✓
- Testing agent: 100% pass on both backend and frontend ✓
- Improved 422 error parsing on contact form ✓

## Prioritized Backlog
- **P1**: Admin auth / rate-limiting on `GET /api/contact` (currently public).
- **P1**: Rate-limit / captcha on `POST /api/contact` to prevent spam.
- **P2**: Real social media URLs (currently placeholder `#`).
- **P2**: Case-study / Insights blog section.
- **P2**: Email notification (Resend / SendGrid) on new inquiry submission.
- **P3**: Migrate `@app.on_event("shutdown")` to lifespan handler.
- **P3**: Add `framer-motion` page transitions on route changes when more pages are added.

## Next Tasks
1. Decide on auth for inquiries dashboard.
2. Pick an email delivery integration if real-time notifications are needed.
