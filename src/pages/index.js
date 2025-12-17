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
              <span>Digital Accessibility</span>
              <span aria-hidden="true">+</span>
              <span>Manual QA Specialist</span>
            </h1>
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
      </main>
    </Layout>
  )
}

export default IndexPage
