# Power Mart Online - AI Developer Context & Sub-Agent Blueprint

## 1. Business Vision & Core Directive
**Mission:** Power Mart Online is a high-performance B2B electrical and industrial safety supplier platform. We must aggressively generate business leads by providing bulk buyers, contractors, and builders with original, authenticated materials at highly discounted wholesale prices. 
**Core Themes:** Trust, Speed, Bulk Discounts, Authentic Quality, and 24/7 Customer Engagement via WhatsApp.

## 2. Technical Architecture constraints
- **Framework:** React 18 + Vite.
- **Routing:** Must exclusively use `HashRouter` (react-router-dom) to ensure 100% compatibility with GitHub Pages static hosting. Do NOT use `BrowserRouter`.
- **Global Config:** All dynamic text (business name, support email, WhatsApp number, SEO configuration) MUST be pulled strictly from `src/config/appConfig.js`. Do not hardcode new constants in the UI components.
- **Performance First (Low-End Devices):** The codebase must remain lightweight. Avoid heavy libraries. Optimize images using Vite paths. The site must load instantly on 3G connections standard in emerging markets.

## 3. SEO & Market Guidelines
- **Target Market:** Wholesale Electrical Supplies, Indian B2B market.
- **Rules:** Every new page or product must maintain flawless SEO metadata. The `index.html` JSON-LD schema must never be removed.
- **Golden Rule:** Single Page Applications (SPAs) are inherently bad at SEO. We combat this using strict static semantic HTML generation, deep linking, and rigorous Lighthouse CI checks.

## 4. Sub-Agent Workflows
Whenever spinning up new sub-agents for this app, follow these structural plans:

### A. Development Agent
- **Role:** Implements UI/UX enhancements and integrations.
- **Standard Operating Procedure:**
  1. Pull requirements.
  2. Implement cleanly using Tailwind CSS without heavy external UI toolkits.
  3. Validate against `ProductDetailsPage.jsx` logic.
  4. Ensure mobile-first responsiveness (for field workers).

### B. Content & Data Agent
- **Role:** Updates `products.json` and marketing copy.
- **Standard Operating Procedure:**
  1. Add products using the exact schema: `id`, `name`, `price`, `unit`, `category`, `images`, `description`.
  2. Automatically generate `missing_images.txt` if assets are missing.
  3. Keep descriptions punchy, benefit-driven, and focused on "Bulk Savings".

### C. QA & Deployment Agent
- **Role:** Handles CI/CD pipelines, Test Suites, and Github Actions.
- **Standard Operating Procedure:**
  1. Run `npm run test` locally to validate basic structural integrity.
  2. Run `npm run build` locally.
  3. Ensure `.lighthouserc.json` performance assertions pass.
  4. Push to `main` to trigger the `deploy.yml` pipeline.

## 5. Lighthouse CI Context & Rules
We employ strict Lighthouse CI gating on deployment (`.lighthouserc.json`). 
- **Accessibility (>0.8 score):** All icon buttons MUST have `aria-label`s (e.g., Hamburger menus, cart icons, delete buttons). 
- **SEO (>0.9 score):** Images must have descriptive `alt` tags. All pages must render a single `<h1>`. Semantic hierarchy is strictly enforced.
- **Performance (>0.8 score):** Images use `mix-blend-multiply` to remove backgrounds rather than importing heavy complex PNGs. Maintain `loading="lazy"` on all `<img />` tags except the hero image.
*If the `deploy.yml` pipeline fails citing LHCI, the AI agent must investigate accessibility labels or image load sizes immediately.*

## 6. Blueprint: Increasing Customer Visibility 
To aggressively dominate the B2B wholesale visibility market, follow this roadmap:
1. **Google My Business (GMB):** Although the site is online, authentic wholesale buyers search strictly via "Electrical Suppliers near me". The business owners *must* claim a physical GMB listing linked to this domain.
2. **Dynamic OG Meta Tags:** The site is heavily configured for WhatsApp sharing. Every product link shared automatically renders rich image snippets using OpenGraph tags we embedded in `index.html`.
3. **Structured Data:** Google natively prioritizes our links because we employ `JSON-LD` Scheme. Expanding this schema to individual `Product` snippets (instead of just the `Store`) is the next phase.

## 7. Critical Workflows
- **WhatsApp Order Pipeline:** All "Add to Cart" or direct orders leverage `src/utils/orderService.js` to pre-fill a dynamic WhatsApp message. Any modification to cart logic MUST ensure the WhatsApp message generation correctly calculates bulk totals and quantities.
- **Testing Requirements:** We employ strict automated testing to ensure no product or page accidentally 404s. Any new component must be bundled with a `.test.jsx` file checking for render success.

## 8. Autonomous Terminal Commands
Future AI sub-agents MUST execute the following verification commands autonomously when making codebase alterations. Do NOT ask the user for permission to test your own code.

### A. Testing Protocol
When altering data (`products.json`) or `appConfig.js`, execute:
```bash
npm run test
```
*If this fails, revert your changes immediately and fix the missing schema fields.*

### B. Build Validation Protocol
When altering React components or Vite settings, execute:
```bash
npm run build
```
*Never push code unless the build step executes cleanly without warnings.*

### C. Performance & SEO Audit Protocol (Lighthouse CI)
When introducing heavily nested components or changing `index.html` structure:
```bash
npm install -g @lhci/cli
npm run build
lhci autorun
```
*The AI agent is responsible for continuously running Lighthouse and self-healing any new accessibility or performance score drops before finalizing tasks.*
