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
          <div className="hero-text">
            <div className="drop-bounce-text">
              <h1 id="hero-heading">Accessibility Audits</h1>
              <h1>+</h1>
              <h1 className="cms">Manual QA Testing Services</h1>
            </div>
            <h2 className="hero-subhead">
              Thorough accessibility testing for WCAG 2.2 compliance — paired
              with functional QA to ensure your digital product works for every
              user.
            </h2>
          </div>
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
          id="service-breakdown-1"
          variant="light"
          layout="three"
          title="Service Breakdown"
          subtitle=""
          description=""
          columns={[
            {
              heading: "WCAG 2.2 Accessibility Audit",
              subheading:
                "A complete evaluation of your website or app, including:",
              items: [
                {
                  label: "Automated Testing",
                  description: "",
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
                  label: "Automated Tesing Catches:",
                  description: "",
                  subList: {
                    heading: "",
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
              subheading:
                "Real lajldjflajf ladkflf assistive tech, real user flows.",
              items: [
                {
                  label: "Manual Screen-Reader Testing",
                  description:
                    "NVDA (Windows) and VoiceOver (macOS/iOS) — real-world testing with real assistive technologies.",
                },
                {
                  label: "Keyboard-only navigation review",
                  description:
                    "Checking focus order, traps, modals, menus, and forms across your key user journeys.",
                },
              ],
            },
            {
              heading: "Ongoing QA & Support",
              subheading: "Stay accessible as your site evolves.",
              items: [
                {
                  label: "Manual QA Testing",
                  description:
                    "Regression and smoke testing after updates so new changes don’t break accessibility.",
                },
                {
                  label: "Ongoing accessibility monitoring",
                  description:
                    "Monthly or quarterly check-ins to catch new issues as content and features change.",
                },
              ],
            },
          ]}
        />
        <ServiceBlade
          id="service-breakdown-2"
          variant="strong"
          layout="three"
          title=""
          subtitle=""
          description=""
          columns={[
            {
              heading: "Accessibility Audits",
              subheading: "Find barriers before your users do.",
              items: [
                {
                  label: "WCAG 2.2 Accessibility Audits",
                  description:
                    "Systematic reviews against WCAG 2.2 A/AA with clear, prioritized findings.",
                },
                {
                  label: "Issue prioritization",
                  description:
                    "I help you focus on high-impact fixes first so teams can move quickly.",
                },
              ],
            },
            {
              heading: "Manual Screen-Reader Testing",
              subheading:
                "Real lajldjflajf ladkflf assistive tech, real user flows.",
              items: [
                {
                  label: "Manual Screen-Reader Testing",
                  description:
                    "NVDA (Windows) and VoiceOver (macOS/iOS) — real-world testing with real assistive technologies.",
                },
                {
                  label: "Keyboard-only navigation review",
                  description:
                    "Checking focus order, traps, modals, menus, and forms across your key user journeys.",
                },
              ],
            },
            {
              heading: "Ongoing QA & Support",
              subheading: "Stay accessible as your site evolves.",
              items: [
                {
                  label: "Manual QA Testing",
                  description:
                    "Regression and smoke testing after updates so new changes don’t break accessibility.",
                },
                {
                  label: "Ongoing accessibility monitoring",
                  description:
                    "Monthly or quarterly check-ins to catch new issues as content and features change.",
                },
              ],
            },
          ]}
        />

        <ServiceBlade
          id="what-i-specialize-in"
          variant="light"
          layout="single"
          title="What I Specialize In"
          subtitle=""
          description=""
          items={[
            {
              label: "WCAG 2.2 Accessibility Audits",
              description:
                "Using AXE, Wave, and manual techniques to identify issues that automated tools miss.",
            },
            {
              label: "Manual Screen-Reader Testing",
              description:
                "NVDA (Windows) and VoiceOver (macOS/iOS) Real-world testing with real assistive technologies.",
            },
            {
              label: "Keyboard-Only Navigation Review",
              description:
                "Verifying focus order, keyboard traps, drop-downs, modals, sliders, forms.",
            },
            {
              label: "Manual QA Testing",
              description:
                "Functional testing to ensure smooth, consistent experiences across devices.",
            },
            ,
            {
              label: "Accessibility Remediation Guidance",
              description:
                "Actionable, developer-friendly recommendations to fix accessibility barriers.",
            },
            {
              label: "Ongoing Accessibility Monitoring",
              description: "Monthly or quarterly reviews for updated websites.",
            },
          ]}
          footerText="I help organizations identify issues before they become costly risks."
        />

        <ServiceBlade
          id="book-a-consultation"
          variant="light"
          layout="single"
          title="Ready to Make Your Website Accessible?"
          subtitle="Let’s remove barriers and deliver an inclusive experience for all."
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

        <ServiceBlade
          id="accessibility-stats"
          variant="light"
          layout="three" // <-- important: tells ServiceBlade to use 3-col layout
          title="Accessibility impacts real customer behavior"
          subtitle="These aren’t edge cases — they are your customers."
          columns={[
            <CartAbandonmentStat key="cart" />,

            <CustomerLoyaltyStat key="loyalty" />,

            // 3rd column – another placeholder stat
            <div className="stat-card" key="stat-3">
              <p className="stat-number">1 in 4</p>
              <p className="stat-label">
                adults in the U.S. lives with a disability
              </p>
              <p className="stat-footnote">
                Accessible design improves the experience for a huge portion of
                your audience.
              </p>
            </div>,
          ]}
        />

        <ServiceBlade
          id="three-col-specialties"
          variant="dark"
          layout="three"
          title="What I Specialize In"
          subtitle="Accessibility-first testing and QA"
          columns={[
            /* LEFT column */
            <svg aria-hidden="true" className="stat-icon">
              {/* icon */}
            </svg>,

            /* MIDDLE column (✅ items live here) */
            <>
              <h3 className="service-includes">But accessibility is also:</h3>

              <ul className="service-includes-list">
                {[
                  {
                    label: "WCAG 2.2 Accessibility Audits",
                    description:
                      "Manual and automated testing to catch issues tools miss.",
                  },
                  {
                    label: "Screen Reader Testing",
                    description:
                      "NVDA and VoiceOver testing across real user journeys.",
                  },
                  {
                    label: "Keyboard Navigation Review",
                    description:
                      "Focus order, traps, modals, menus, and forms.",
                  },
                ].map((item, index) => (
                  <li key={index} className="service-list-item">
                    <span className="li-icon-wrapper">
                      <FaCheck className="list-icon" />
                      <span className="li-label">{item.label}</span>
                    </span>

                    <p className="li-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </>,

            /* RIGHT column */
            <svg aria-hidden="true" className="stat-icon">
              {/* icon */}
            </svg>,
          ]}
        />
      </main>
    </Layout>
  )
}

export default IndexPage
