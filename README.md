# shaunvine.com

The portfolio site of **Shaun Vine, Creative Technologist**: design, accessibility testing, manual QA, CMS implementation and front-end development.

**Live site:** [shaunvine.com](https://shaunvine.com)

## What's on the site

- **Work:** selected projects, managed in Contentful
- **Accessibility Findings:** short write-ups and videos of real accessibility issues, how I tested them, and how they can be fixed
- **Services, About and Contact**
- **Blog:** coming December 2026

## Accessibility approach

Accessibility is the point of this site, not an afterthought. The site targets **WCAG 2.2 AA** throughout.

- Semantic HTML landmarks and a logical heading order on every page
- A skip link that moves focus to the first interactive element in the main content
- Visible focus styles, designed as tokens rather than left to browser defaults
- Color contrast checked against AA for every text and UI color pairing
- Alt text for CMS images written and managed alongside the content in Contentful
- Respects `prefers-reduced-motion`
- Accessibility Findings videos come with full transcripts
- Tested with keyboard only, axe DevTools and the NVDA screen reader
- Analytics load only through Google Consent Mode, with consent denied by default

## Built with

- [Gatsby 5](https://www.gatsbyjs.com/) and React 18
- [Contentful](https://www.contentful.com/) as the headless CMS
- Plain CSS with custom-property design tokens (`src/assets/css/main.css`)
- Typefaces: [Lexend](https://www.lexend.com/) for headings and [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/) for body text, both chosen for readability
- Hosted on [Netlify](https://www.netlify.com/), with security headers including a Content-Security-Policy (`static/_headers`)

## Project structure

```
src/
  pages/        one file per page; Work detail pages are generated from Contentful
  components/   layout, navigation and page sections
  assets/css/   design tokens and all styles
  utils/        helpers (e.g. plain-text summaries from Contentful rich text)
static/         videos, images, Netlify headers and redirects
```

## Content conventions

The site is written for a US audience, so all site copy, alt text, CMS content and documentation use **US English** spelling and date formats (e.g. "color", "December 9, 2026").

## Running it locally

You'll need Node.js 18 or later, and Contentful API keys in a `.env.development` file:

```
CONTENTFUL_PREVIEW_API_KEY=your-preview-key
CONTENTFUL_API_KEY=your-delivery-key
```

```bash
npm install
npm run develop   # http://localhost:8000
npm run build     # production build (uses .env.production)
npm run serve     # preview the production build at http://localhost:9000
```

In development, the site uses Contentful's Preview API so that draft content appears. Production builds use the Delivery API, so only published content appears.

## Roadmap

- **December 2026:** warmer visual refresh and a Contentful-powered blog
- **Early 2027:** migrate from Gatsby to Next.js, keeping all Contentful content

## Contact

[shaunvine.com/contact](https://shaunvine.com/contact) · [LinkedIn](https://www.linkedin.com/in/shaun-vine-71683832/)

© Shaun Vine. Site content, images and videos are not licensed for reuse.
