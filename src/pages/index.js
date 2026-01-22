import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import ServiceBlade from "../components/ServiceBlade"
import ClientTestimonial from "../components/ClientTestimonial"
import CustomerLoyaltyStat from "../components/Stats/CustomerLoyaltyStat"
import CartAbandonmentStat from "../components/Stats/CartAbandonmentStat"

const IndexPage = () => {
  return (
    <Layout>
      <main className="page">
        {/* Hero Section */}
        <header className="hero" id="hero" aria-labelledby="hero-heading">
          <div>
            <h1
              id="hero-heading"
              className="hero-heading"
              aria-label="Digital Accessibility plus Manual QA Specialist"
            >
              <span aria-hidden="true" className="hero-heading__line">
                Digital Accessibility
              </span>
              <span aria-hidden="true" className="hero-heading__plus">
                +
              </span>
              <span aria-hidden="true" className="hero-heading__line">
                Manual QA Specialist
              </span>
            </h1>
          </div>

          <h2
            className="hero-subhead"
            aria-label="WCAG 2.2, AXE and Wave, NVDA, VoiceOver, Cross-Browser QA"
          >
            <span aria-hidden="true">WCAG 2.2</span>
            <span aria-hidden="true"> | </span>
            <span aria-hidden="true">AXE &amp; Wave</span>
            <span aria-hidden="true"> | </span>
            <span aria-hidden="true">NVDA</span>
            <span aria-hidden="true"> | </span>
            <span aria-hidden="true">VoiceOver</span>
            <span aria-hidden="true"> | </span>
            <span aria-hidden="true">Cross-Browser QA</span>
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
            { label: "A legal requirement (ADA, Section 508, AODA, EAA)" },
            { label: "A trust signal for customers" },
            { label: "A quality signal for search engines" },
            { label: "A protection against lawsuits" },
            { label: "A way to expand your audience" },
          ]}
          footerText="I help organizations identify issues before they become costly risks."
        />

        <ServiceBlade
          id="what-i-specialize-in"
          variant="light"
          layout="single"
          title="What I Specialize In"
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
          title="Client Feedback"
          columns={[
            <ClientTestimonial
              key="t1"
              highlight="Shaun provides the rare combination of an eye for design with knowledge in current web development tools."
              quote="He has taken one of my client's website and converted it to WordPress, matching the original design so well and even improving it for extensibility. I was impressed with Shaun's attention to detail and the client was very happy with the result. Now she can update her website herself, which gives clients a lot of flexibility. I recommend Shaun for anyone who needs a website (based on WordPress or not). Shaun is very trustworthy and delivers great results!"
              name="Melissa"
            />,
            <ClientTestimonial
              key="t2"
              highlight="Even schooling himself to learn new website design and coding techniques to meet those demanding expectations."
              quote="As an architect, I had some very clear ideas on how I wanted my site to look and feel. Shaun worked extra hard to meet all of my expectations. I couldn't be more pleased with the results! I would recommend him to any small business owner just getting started with their online presence. He is good at what he does, and as a bonus, he's a charming and lovely fellow who is a pleasure to work with!"
              name="Kit"
            />,
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

// Homepage Head: keep your LocalBusiness/Person/Service JSON-LD here
export const Head = ({ location }) => (
  <SEOmeta
    title="Website QA, Accessibility Audits & CMS Help"
    description="Seattle-based QA tester specializing in WCAG 2.2 accessibility audits, manual QA, and CMS support. Practical, detail-oriented guidance."
    image="/assets/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname}
    includeJsonLd={true}
  />
)
