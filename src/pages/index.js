import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import HeroPattern from "../components/HeroPattern"
import SkillsBand from "../components/SkillsBand"
import SelectedWork from "../components/SelectedWork"
import AccessibilityFindings from "../components/AccessibilityFindings"

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section. Full width (outside .page) so the pattern can bleed
          off the right edge; the hero clips it, so there is no horizontal
          scrolling. Layout already renders the one <main> for the page. */}
      <header className="hero" id="hero" aria-labelledby="hero-heading">
        <div className="hero__inner">
          {/* The row is exactly as tall as the text column; the pattern is
              sized from the row's top and bottom edges (see main.css). */}
          <div className="hero__row">
            <div className="hero__text">
              <p className="hero__eyebrow">
                <span className="hero__eyebrow-part">Creative Technologist ·</span>{" "}
                <span className="hero__eyebrow-part">CPACC certified</span>
              </p>

              {/* Three block spans with real spaces between them, so a screen
                  reader reads one sentence: "Designer. Developer. QA detective." */}
              <h1 id="hero-heading" className="hero-heading">
                <span className="hero-line">Designer.</span>{" "}
                <span className="hero-line">Developer.</span>{" "}
                <span className="hero-line hero-line--accent">QA detective.</span>
              </h1>

              <p className="hire">
                I help teams ship better digital experiences through design,
                accessibility, QA testing, and CMS expertise.
              </p>

              <div className="hero-actions">
                <CTA
                  href="#accessibility-findings"
                  className="request-quote-btn hero-btn hero-btn--dark"
                  ariaLabel="View Accessibility Findings"
                >
                  View Accessibility Findings
                </CTA>
                <CTA
                  href="/contact"
                  className="request-quote-btn hero-btn hero-btn--mustard"
                  ariaLabel="Contact Shaun"
                >
                  Contact
                </CTA>
              </div>
            </div>

            <HeroPattern />
          </div>
        </div>
      </header>

      <SkillsBand />

      <div className="page">
        <SelectedWork />

        <AccessibilityFindings showHeader={true} headerAlignment="center" limit={4} />
      </div>
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
