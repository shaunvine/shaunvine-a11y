import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import AccessibilityFindings from "../components/AccessibilityFindings"
import TestingMethods from "../components/TestingMethods"
import MyProcess from "../components/MyProcess"
import ExpereienceSnapshot from "../components/ExperienceSnapshot"
import ClientTestimonials from "../components/ClientTestimonials"

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
              aria-label="Accessibility Auditor plus Manual QA Specialist"
            >
              <span aria-hidden="true" className="hero-heading__line">
                Accessibility Auditor
              </span>

              <span aria-hidden="true" className="hero-heading__plus">
                +
              </span>

              <span aria-hidden="true" className="hero-heading__line">
                Manual QA Specialist
              </span>
            </h1>
          </div>
          <div className="hero-copy">
            <h2 className="hero-subhead">
              <span>CPACC Certified</span>
            </h2>

            <p className="hire">
              I help organizations identify accessibility, usability, and
              quality issues through practical testing and review.
            </p>
          </div>
          <CTA
            href="#accessibility-findings"
            wrapperClassName="button-group"
            className="request-quote-btn"
            ariaLabel="View Accessibility Findings"
          >
            View Accessibility Findings
          </CTA>
          <CTA
            href="/contact"
            wrapperClassName="button-group"
            className="request-quote-btn"
            ariaLabel="Contact Shaun"
          >
            Contact
          </CTA>
        </header>
        <TestingMethods />

        <AccessibilityFindings showHeader={true} headerAlignment="center" />
        <MyProcess />

        <ExpereienceSnapshot />

        <ClientTestimonials />
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
