import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import ServiceBlade from "../components/ServiceBlade"
import { FaCheck } from "react-icons/fa"
import CustomerLoyaltyStat from "../components/CustomerLoyaltyStat"
import CartAbandonmentStat from "../components/CartAbandonmentStat"

const IndexPage = () => {
  return (
    <Layout>
      <SEOmeta
        title="Website QA, Accessibility Audits & CMS Help | Shaun Vine"
        description="Seattle-based QA Tester specializing in accessibility audits, manual testing, and CMS support. Reliable, detail-oriented, and results-driven."
        image="/assets/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        {/* Hero Section */}
        <header className="hero" id="hero" aria-labelledby="hero-heading">
          <div>
            <h1 id="hero-heading" className="hero-heading">
              <span>Accessibility Audits</span>
              <span aria-hidden="true">+</span>
              <span>Manual QA Testing Services</span>
            </h1>
          </div>
          <h2 className="hero-subhead">
            Thorough accessibility testing for WCAG 2.2 compliance — paired with
            functional QA to ensure your digital product works for every user.
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
          title="Accessibility impacts real customer behavior"
          subtitle=""
          columns={[
            <CartAbandonmentStat key="cart" />,

            <CustomerLoyaltyStat key="loyalty" />,
          ]}
        />

        <ServiceBlade
          id="service-breakdown"
          variant="light"
          layout="three"
          title="Service Breakdown"
          columns={[
            {
              heading: "WCAG 2.2 Accessibility Audit",
              items: [
                {
                  label: "Automated Testing",
                  subList: {
                    heading: "Using:",
                    items: [
                      "AXE DevTools",
                      "Wave",
                      "NVDA (Windows)",
                      "VoiceOver (macOS)",
                      "VoiceOver (iOS)",
                    ],
                  },
                },
                {
                  label: "Automated Testing Catches:",
                  subList: {
                    items: [
                      "Missing alt text",
                      "Low contrast",
                      "Missing form labels",
                      "AIRA misuse",
                      "Structural issues",
                    ],
                  },
                },
              ],
            },
            {
              heading: "Manual Screen-Reader Testing",
              items: [
                {
                  label: "Testing Includes:",
                  subList: {
                    heading: "Using:",
                    items: [
                      "NVDA (Windows)",
                      "VoiceOver (Mac & iOS)",
                      "Full page reading order",
                      "Landmarks",
                      "Forms & validation",
                      "Modals, dropdowns, tabbed content",
                      "Navigation menus",
                      "Buttons & links",
                      "Alerts & announcements",
                    ],
                  },
                },
              ],
            },
            {
              heading: "Keyboard-Only Navigation Review",
              subheading: "",
              items: [
                {
                  label: "Testing For:",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [
                      "Focus order",
                      "Keyboard traps",
                      "Operability of interactive elements",
                      "Skip links",
                      "Modals that lock focus",
                      "Carousels/sliders",
                      "Buttons & links",
                      "Form fields",
                      "Accessible name and role",
                    ],
                  },
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
              heading: "Manual Functional QA Testing",
              subheading: "",
              items: [
                {
                  label: "Cross-Browser Testing",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [
                      "Chrome",
                      "Safari",
                      "Firefox",
                      "Edge",
                      "Mobile browsers",
                      "Responsive views",
                    ],
                  },
                },
                {
                  label: "Checks include:",
                  description: "",
                  subList: {
                    heading: "",
                    items: [
                      "Navigation",
                      "Forms",
                      "Buttons",
                      "Checkout flows",
                      "Filters/sorting",
                      "Modals",
                      "Dynamic components",
                    ],
                  },
                },
              ],
            },
            {
              heading: "Accessibility Remediation Guidance",
              subheading: "",
              items: [
                {
                  label: "You will receive:",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [
                      "Clear issue descriptions",
                      "WCAG reference for each issue",
                      "Developer-ready instructions",
                      "Code examples (when applicable)",
                      "Prioritized fix roadmap",
                      "Estimated impact / severity",
                    ],
                  },
                },
              ],
            },
            {
              heading: "Post-Fix Verification (Re-Test)",
              subheading: "",
              items: [
                {
                  label: "After your team completes fixes, I’ll:",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [
                      "Re-test all previous issues",
                      "Validate improvements",
                      "Ensure no new issues were introduced",
                      "Confirm WCAG compliance",
                      "Update your accessibility score",
                      "Provide a final “Verified Fix” summary report",
                    ],
                  },
                },
              ],
            },
          ]}
        />

        <ServiceBlade
          id="project-packages"
          variant="light"
          layout="three"
          title="Project Packages"
          subtitle=""
          description=""
          columns={[
            {
              badge: "Ideal for Small Sites",
              heading: "Basic Accessibility Review",
              subheading: "Ideal for Small Sites",
              price: {
                amount: "$499",
                note: "one-time",
              },
              items: [
                { label: "Up to 5 pages", description: "" },
                { label: "AXE + WAVE report", description: "" },
                { label: "Keyboard review", description: "" },
                { label: "Quick findings & recommendations", description: "" },
              ],
              footerText: "$300–$450",
              bladeFooterCTA: (
                <a className="three-col-cta" href="/contact">
                  Footer CTA
                </a>
              ),
            },
            {
              heading: "Standard WCAG 2.2 Audit",
              subheading: "Most Popular",
              items: [
                {
                  label: "Up to 20 pages",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Full manual audit",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Screen-reader testing",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Keyboard testing",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Screenshotdocumentation",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Prioritized remediation guide",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
                {
                  label: "Final retest",
                  description: "",
                  subList: {
                    heading: "Using:",
                    items: [],
                  },
                },
              ],
            },
            {
              heading: "Premium Enterprise Audit",
              subheading: "",
              items: [
                {
                  label: "20+ pages",
                  description: "",
                  subList: {
                    heading: "",
                    items: [],
                  },
                },
                {
                  label: "Deep manual testing",
                  description: "",
                  subList: {
                    heading: "",
                    items: [],
                  },
                },
                {
                  label: "Multi-device + multi-browser QA",
                  description: "",
                  subList: {
                    heading: "",
                    items: [],
                  },
                },
                {
                  label: "Monthly monitoring",
                  description: "",
                  subList: {
                    heading: "",
                    items: [],
                  },
                },
              ],
            },
          ]}
        />

        <ServiceBlade
          id="book-a-consultation"
          variant="light"
          layout="single"
          title="Ready to Improve Usability & Compliance?
"
          subtitle="Accessibility protects your users — and your business.
"
          description=""
          items={[]}
          footerCTA={
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
      </main>
    </Layout>
  )
}

export default IndexPage
