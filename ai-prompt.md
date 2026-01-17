This prompt is written from the mindset of a 25+ years UI/UX lead & software architect and enforces clean code, scalability, SOLID, DRY, GOF patterns, performance, and premium UX.

✅ MASTER PROMPT — ELECTRIC MART PRODUCT WEBSITE (REACT SPA)

ROLE & MINDSET
You are a Senior UI/UX Lead Software Architect with 25+ years of real industry experience, specialized in:
* React.js Single Page Applications
* Scalable Frontend Architecture
* SOLID, DRY, KISS principles
* GOF Design Patterns
* Performance optimization for low bandwidth regions (India-first, global-ready)
* Premium, trust-building UI/UX for e-commerce
* Anti-pattern identification & flaw-resistant design
You must think like this is your own business and you are building a revenue-generating, trust-centric, marketing-ready product website.

PROJECT OVERVIEW
Build a React.js based Single Page Application (SPA) for an Electric & Electronics Mart targeting Indian consumers and businesses.
The website will:
* Have NO backend
* Use static JSON as a data source
* Enable users to:
    * Browse products
    * Search products
    * View product details
    * Add products to cart
    * Place orders via WhatsApp
    * Send order summary to user email
* Be lightweight, fast, SEO-friendly, and marketing-ready
* Be deployable on Vercel / GitHub Pages / Netlify

CORE BUSINESS PROBLEM TO SOLVE
Provide affordable electrical and safety products to help businesses:
* Reduce operational costs
* Improve employee safety
* Build trust via professional digital presence
Products include:
* Electrical items
* Electronic components
* Safety equipment (helmets, shoes, jackets, headlights)
* Wires & cables
* Distribution & installation materials

TECH STACK (MANDATORY)
* React.js (Latest)
* Functional Components + Hooks only
* No Redux unless justified
* CSS Modules / Tailwind / Styled Components (choose one & justify)
* React Router (SPA navigation)
* Vite or CRA (prefer Vite for performance)

ARCHITECTURE REQUIREMENTS
1. SINGLE PAGE APPLICATION
* Client-side routing
* No page reloads
* SEO-friendly structure
2. DATA MANAGEMENT
* All products stored in /data/products.json
* No hardcoded product data inside components
Each product MUST have:

{
  "id": "",
  "name": "",
  "price": "",
  "quantity": "",
  "category": "",
  "images": []
}
If image is missing:
* Automatically fallback to a relevant Google Image URL

CONFIGURATION MANAGEMENT
Create a single config file:/config/appConfig.js
It must contain:
* Website name
* Business email
* WhatsApp number
* Currency
* Brand colors
* Logo path
* Default image fallback
* SEO meta defaults
❗ No magic strings allowed outside config.

UI / UX REQUIREMENTS (PREMIUM & TRUST-BUILDING)
HOME PAGE
* Large search bar at the top
* Product listing below
* Clean, minimal, premium layout
* Fast rendering
PRODUCT LISTING
* Card-based reusable component
* Lazy-loaded images
* Category badges
* Price clearly visible
* “Add to Cart” CTA
PRODUCT DETAILS PAGE
* On product click:
    * Large image viewer (2–3 images minimum)
    * Product name, price, quantity
    * Category
    * Add to Cart
    * Order via WhatsApp button

CART & ORDER FLOW
CART
* Add/remove items
* Quantity update
* Order summary
* Total price calculation
ORDER ACTIONS
1. WhatsApp Order
    * Generate a formatted WhatsApp message containing:
        * Product names
        * Quantities
        * Prices
        * Total
    * Open WhatsApp with prefilled message
2. Email Order Summary
    * Use mailto: to send:
        * Order summary
        * Customer details
        * Total cost
⚠️ No backend allowed.

PERFORMANCE REQUIREMENTS (NON-FUNCTIONAL)
* Lazy loading (React.lazy, Suspense)
* Image compression
* Code splitting
* Lighthouse score ≥ 90
* Fast load on 2G / 3G Indian networks
* Minimal bundle size
* No unnecessary dependencies

DESIGN PRINCIPLES (MANDATORY)
SOLID
* One component = One responsibility
* Stateless components wherever possible
* Business logic separated from UI
DRY
* Reusable components
* Shared hooks
* Shared utility functions
GOF PATTERNS (APPLY WHERE RELEVANT)
* Factory (component creation)
* Strategy (order channels: WhatsApp / Email)
* Observer (cart updates)
* Singleton (config)

ANTI-PATTERN PREVENTION
Explicitly avoid:
* God components
* Prop drilling (use context wisely)
* Inline styles everywhere
* Hardcoded values
* Over-engineering
* Tight coupling between UI & logic
Explain how flaws are detected and prevented.

FOLDER STRUCTURE (EXPECTED)

src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── utils/
 ├── context/
 ├── config/
 ├── data/
 ├── assets/
 └── styles/

MARKETING & BRANDING
* Professional, premium look
* Random but consistent color theme
* Simple logo placeholder
* Trust-oriented layout
* Ready for Google Ads & SEO

DELIVERABLES EXPECTED FROM THE LLM
1. Complete architecture explanation
2. Folder structure
3. Key component code examples
4. products.json sample
5. Config file
6. WhatsApp + Email order logic
7. Performance optimization explanation
8. SOLID & DRY justification
9. Deployment steps (Vercel / GitHub Pages)

FINAL INSTRUCTION
⚠️ DO NOT SKIP ANY REQUIREMENT⚠️ DO NOT OVER-ENGINEER⚠️ THINK LIKE THIS IS YOUR OWN BUSINESS
Deliver clean, scalable, readable, production-ready React code with professional UI/UX and excellent performance.


collect products name from this link as this my previous website : https://api1.vyaparapp.in/store/SHRIRIDHHISIDDHIENTERPRISES

or refer this code to exact all products into - @ref /Users/suniltomar/Desktop/workspace/electricalMart/product.js
