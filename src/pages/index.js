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
            <h1 id="hero-heading" className="hero-heading">
              Creative Technologist
            </h1>
          </div>
          <div className="hero-copy">
            <h2 className="hero-subhead">
              <span>CPACC Certified</span>
            </h2>

            <p className="hire">
              I help teams ship better digital experiences through design,
              accessibility, QA testing, and CMS expertise.
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
    title="Creative Technologist | Accessibility, QA & CMS"
    description="Creative Technologist specializing in WCAG accessibility audits, manual QA, and CMS support. Practical, detail-oriented, remote-friendly."
    image="/assets/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname}
    includeJsonLd={true}
  />
)
