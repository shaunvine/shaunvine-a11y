import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import ServiceBlade from "../components/ServiceBlade"
import SeoStat from "../components/Stats/SeoStat"
import OneInFour from "../components/Stats/OneInFour"

const IndexPage = () => {
  return (
    <Layout>
      <div className="page">
        {/* Hero Section */}
        <header className="hero" id="hero" aria-labelledby="hero-heading">
          <div>
            <h1
              id="hero-heading"
              className="hero-heading"
              aria-label="Accessibility Audits plus Manual QA Testing Services"
            >
              <span aria-hidden="true" className="hero-heading__line">
                Accessibility Audits
              </span>
              <span aria-hidden="true" className="hero-heading__plus">
                +
              </span>
              <span aria-hidden="true" className="hero-heading__line">
                Manual QA Testing Services
              </span>
            </h1>
          </div>
          <h2
            className="hero-subhead"
            aria-label="Accessibility testing for WCAG 2.2 compliance"
          >
            <span aria-hidden="true">
              Accessibility testing for WCAG 2.2 compliance.
            </span>
          </h2>
        </header>
        {/* Main Content */}

        <ServiceBlade
          id="why-hire-a-specialist"
          variant="dark"
          layout="single"
          title="Why Hire a Specialist?"
          subtitle="Automated tools find only 30% of accessibility issues. The remaining 70% require manual testing — the kind only a trained specialist can perform."
          description=""
          listHeading="As an Accessibility and QA professional, I combine:"
          items={[
            {
              label: "Accessibility standards (WCAG 2.2) expertise",
            },
            {
              label: "Manual QA testing discipline",
            },
            {
              label: "Screen-reader testing expertise",
            },
            {
              label: "Automated scan verification",
            },
            {
              label: "Cross-browser functional testing",
            },
          ]}
          footerText="This holistic approach ensures nothing gets missed."
        />

        <ServiceBlade
          id="accessibility-stats"
          variant="light"
          layout="two"
          title="Accessibility Impacts People and Performance"
          subtitle=""
          columns={[<OneInFour key="cart" />, <SeoStat key="loyalty" />]}
        />

        <ServiceBlade
          id="service-breakdown"
          variant="light"
          layout="three"
          title="Service Breakdown"
          columns={[
            {
              heading: "WCAG 2.2–Aligned Accessibility Audits",
              items: [
                {
                  label:
                    "Human-led accessibility audits aligned with WCAG 2.2 (Levels A & AA)",
                },
                {
                  label:
                    "Scaled by site size, page count, and depth of testing",
                },
                {
                  label:
                    "Identifies accessibility barriers that may impact usability and user experience",
                },
                {
                  label:
                    "Audits identify barriers and risks but do not constitute legal certification or guarantees of compliance",
                },
              ],
            },
            {
              heading: "Automated & Manual Accessibility Testing",
              items: [
                {
                  label:
                    "Automated testing is used to efficiently identify common accessibility issues",
                  subList: {
                    heading: "Using:",
                    items: [
                      "AXE DevTools",
                      "WAVE",
                      "Browser accessibility devtools (Chrome, Firefox, Safari)",
                    ],
                  },
                },
                {
                  label: "Manual validation of automated findings",
                },
                {
                  label: "Visual review of content structure and presentation",
                },
                {
                  label:
                    "Automation supports — but does not replace — human judgment",
                },
              ],
            },
            {
              heading: "Screen Reader & Keyboard Testing",
              items: [
                {
                  label: "Manual keyboard-only navigation review",
                  subList: {
                    heading: "Using:",
                    items: ["Native keyboard navigation"],
                  },
                },
                {
                  label:
                    "Screen reader testing focused on real-world usability",
                  subList: {
                    heading: "Using:",
                    items: [
                      "NVDA (Windows) — primary",
                      "VoiceOver (macOS / iOS) — selective, key workflows only",
                    ],
                  },
                },
                {
                  label:
                    "Evaluation of reading order, navigation, forms, and interactive components",
                },
              ],
            },
          ]}
        />
        <ServiceBlade
          id="service-breakdown-2"
          variant="light"
          layout="three"
          columns={[
            {
              heading: "Accessibility-Focused Functional QA",
              items: [
                {
                  label:
                    "Manual testing of accessibility-impacting functionality",
                  subList: {
                    heading: "Using:",
                    items: [
                      "Chrome, Safari, Firefox",
                      "Responsive browser tools",
                    ],
                  },
                },
                {
                  label:
                    "Review of navigation menus, forms, modals, and dynamic content",
                },
                {
                  label:
                    "Focused on predictable behavior and accessibility support",
                },
                {
                  label: "Not full regression or performance QA",
                },
              ],
            },
            {
              heading: "Accessibility Remediation Guidance",
              items: [
                {
                  label: "Clear descriptions of identified issues",
                },
                {
                  label: "WCAG references for each finding",
                },
                {
                  label: "Prioritized remediation roadmap",
                },
                {
                  label: "Developer-ready guidance and recommendations",
                },
                {
                  label: "Code examples provided when applicable",
                },
              ],
            },
            {
              heading: "Post-Fix Verification (Re-Test)",
              items: [
                { label: "Re-testing of previously identified issues:" },
                { label: "Validation of fixes against WCAG success criteria" },
                {
                  label:
                    "Confirmation that critical barriers have been addressed:",
                },
                { label: "Summary of verified improvements" },
              ],
            },
          ]}
        />

        <ServiceBlade
          id="project-packages"
          variant="light"
          layout="three"
          title="Project Packages"
          description="All packages include a WCAG 2.2–aligned accessibility audit, scaled by site size and depth of testing."
          columns={[
            {
              badge: "Ideal for Small Sites",
              heading: "Basic Accessibility Review",
              subheading:
                "A focused, manual-assisted accessibility review of representative pages to identify high-impact barriers affecting keyboard and screen reader users. This is not a full WCAG conformance audit, but a prioritized snapshot aligned with WCAG 2.2 Level AA.",
              items: [
                { label: "Ideal for small sites and early-stage projects" },
                { label: "Up to 5 representative pages" },
                { label: "WCAG 2.2–aligned snapshot audit" },
                { label: "Automated testing with manual review" },
                { label: "Keyboard accessibility check of core user flows" },
                { label: "High-level findings and recommendations" },
              ],
              footerText: "$450–$600",
              bladeFooterCTA: (
                <a className="three-col-cta" href="/contact">
                  Request a Consultation
                </a>
              ),
            },
            {
              badge: "Most Popular",
              heading: "Standard WCAG 2.2 Audit",
              subheading:
                "A comprehensive, manual accessibility audit of key pages and templates to evaluate conformance with WCAG 2.2 Level AA. This audit identifies accessibility barriers across structure, interaction, visual presentation, and assistive technology support, and provides prioritized, developer-ready remediation guidance with a post-fix verification pass.",
              items: [
                {
                  label: "Best for small businesses and non-profits.",
                },
                { label: "Up to 20 pages or templates" },
                { label: "Full WCAG 2.2–aligned audit" },
                { label: "Automated and manual testing" },
                { label: "Screen reader testing (NVDA primary)" },
                { label: "Keyboard-only navigation review" },
                { label: "Accessibility-focused functional QA" },
                { label: "Screenshot and documentation" },
                { label: "Prioritized remediation guide" },
                { label: "One post-fix verification pass" },
              ],
              footerText: "$2,200–$2,800",
              bladeFooterCTA: (
                <a className="three-col-cta" href="/contact">
                  Request a Consultation
                </a>
              ),
            },
            {
              badge: "Extended Support",
              heading: "Premium Accessibility Partnership",
              subheading:
                "An extended WCAG 2.2 Level AA accessibility audit for complex sites and larger page sets, including deeper evaluation of custom components, responsive behavior, and key user workflows. The engagement includes prioritized findings, remediation planning support, scheduled verification, and optional ongoing accessibility monitoring.",
              items: [
                { label: "For growing organizations and mission-driven teams" },
                { label: "20+ pages or templates" },
                { label: "Extended WCAG 2.2–aligned audit coverage" },
                { label: "Manual testing of complex components" },
                { label: "Supplemental VoiceOver testing for key workflows" },
                { label: "Multi-browser and responsive testing" },
                { label: "Remediation planning and implementation support" },
                { label: "Scheduled post-fix verification" },
                { label: "Optional ongoing accessibility monitoring" },
              ],
              footerText: "Custom Quote",
              bladeFooterCTA: (
                <a className="three-col-cta" href="/contact">
                  Request a Consultation
                </a>
              ),
            },
          ]}
        />

        <ServiceBlade
          id="additional-services"
          variant="light"
          layout="single"
          title="Additional Support Services"
          subtitle="While my core specialty is Accessibility & QA, I also assist with the tasks required to implement accessibility improvements"
          items={[
            {
              label: "CMS content updates",
              description: "WordPress, Contentful, Squarespace, Optimizely",
            },
            {
              label: "Text alternatives & content fixes",
              description:
                "Adding or correcting alt text, link text, and button names",
            },
            {
              label: "Headings & semantic structure",
              description: "Improving heading hierarchy and HTML semantics",
            },
            {
              label: "Forms & labels",
              description:
                "Labeling form fields and improving accessible instructions",
            },
            {
              label: "ARIA cleanup & corrections",
              description:
                "Fixing misused or missing ARIA attributes where appropriate",
            },
            {
              label: "Interactive component accessibility",
              description:
                "Improving existing sliders, modals, and accordions for keyboard and screen reader use",
            },
            {
              label: "Keyboard & focus enhancements",
              description:
                "Implementing skip links, focus management, and logical tab order",
            },
            {
              label: "Post-audit content support",
              description:
                "Managing accessibility-related content updates after an audit",
            },
          ]}
          footerText="Additional services focus on accessibility improvements to existing content and components and do not include full redesign or application development."
        />

        <ServiceBlade
          id="book-a-consultation"
          variant="light"
          layout="single"
          title="Ready to Improve Usability & Compliance?"
          subtitle="Accessibility protects your users — and your business."
          bladeFooterCTA={
            <CTA
              href="/contact"
              wrapperClassName="button-group"
              className="request-quote-btn"
              ariaLabel="Request an accessibility consultation with Shaun"
            >
              Request a consultation
            </CTA>
          }
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Website QA, Accessibility Audits & CMS Help | Shaun Vine"
    description="Seattle-based QA Tester specializing in accessibility audits, manual testing, and CMS support. Reliable, detail-oriented, and results-driven."
    image="/assets/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname || "/services"}
    includeJsonLd={false}
  />
)
