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
              <h1 id="hero-heading">Digital Accessibility</h1>
              <h1>+</h1>
              <h1 className="cms">Manual QA Specialist</h1>
            </div>
            <h2 className="hero-subhead">
              WCAG 2.2 | AXE & Wave | NVDA | VoiceOver | Cross-Browser QA
            </h2>
            <p className="hire">
              I help businesses eliminate accessibility barriers, improve
              usability, and ensure high-quality digital experiences for all
              users.
            </p>
            <CTA
              href="/contact"
              wrapperClassName="button-group"
              className="request-quote-btn"
              ariaLabel="Request an accessibility consultation with Shaun"
            >
              Request a consultation
            </CTA>
          </div>
        </header>

        {/* Main Content */}

        <ServiceBlade
          id="why-accessibility-matters"
          variant="dark"
          layout="single"
          title="Why Accessibility Matters"
          subtitle="Every user deserves equal access."
          description=""
          listHeading="But accessibility is also:"
          items={[
            {
              label: "A legal requirement (ADA, Section 508, AODA, EAA)",
            },
            {
              label: "A trust signal for customers",
            },
            {
              label: "A quality signal for search engines",
            },
            {
              label: "A protection against lawsuits",
            },
            {
              label: "A way to expand your audience",
            },
          ]}
          footerText="I help organizations identify issues before they become costly risks."
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
          id="client-testimonials"
          variant="dark"
          layout="two"
          title="What My Clients Say"
          subtitle=""
          columns={[
            <div>
              <blockquote className="testimonial">
                <p>
                  Shaun helped us identify serious accessibility issues and
                  guided our dev team through fixing them. Our site has never
                  been easier to use.
                </p>
                <footer>
                  — <cite>Digital Marketing Director</cite>
                </footer>
              </blockquote>
            </div>,
            <div>
              <blockquote class="testimonial">
                <p>
                  Shaun quickly identified accessibility issues we had missed
                  and provided clear, actionable guidance. Our site is now
                  WCAG-compliant and far more usable.
                </p>
                <footer>
                  — <cite>Product Manager, Healthcare SaaS</cite>
                </footer>
              </blockquote>
            </div>,
          ]}
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
          id="three-col-stats"
          variant="strong"
          layout="three"
          title="THREE - Stats That Matter"
          subtitle="Visual storytelling with icons."
          columns={[
            // LEFT COLUMN
            <div>
              <p className="stat-label">
                Accessibility issues spotted before launch
              </p>
              <p className="stat-value">95%</p>
            </div>,

            // MIDDLE COLUMN (main explanatory content)
            <div>
              Why these numbers matter
              <p>
                Manual QA and accessibility reviews catch the subtle issues that
                automation often misses—especially on real user journeys.
              </p>
            </div>,

            // RIGHT COLUMN
            <div>
              <p className="stat-label">Average turnaround for small sites</p>
              <p className="stat-value">3–5 days</p>
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
