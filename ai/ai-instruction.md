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

## 5. Critical Workflows
- **WhatsApp Order Pipeline:** All "Add to Cart" or direct orders leverage `src/utils/orderService.js` to pre-fill a dynamic WhatsApp message. Any modification to cart logic MUST ensure the WhatsApp message generation correctly calculates bulk totals and quantities.
- **Testing Requirements:** We employ strict automated testing to ensure no product or page accidentally 404s. Any new component must be bundled with a `.test.jsx` file checking for render success.
