import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import Services from "../components/Services"

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
            <p className="hire">
              I help organizations identify accessibility, usability, and
              quality issues through practical testing and review.
            </p>
          </div>
        </header>
        <Services />
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
