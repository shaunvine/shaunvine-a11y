import React from "react"
import CTA from "./CTA"

const AccessibilityFindings = ({ showHeader = true }) => {
  return (
    <section
      className="findings"
      id="accessibility-findings"
      aria-labelledby="findings-heading"
    >
      {showHeader && (
        <div className="section-header section-header--center">
          <h2 className="section-title">Accessibility Findings</h2>

          <p className="section-intro">
            Short accessibility and QA reviews demonstrating common issues and
            practical testing techniques.
          </p>
        </div>
      )}

      <div className="-findings__grid">
        <article className="finding-card">
          <a
            href="/findings/skip-to-main-content"
            className="finding-card__media"
          >
            <img
              src="/assets/images/skip-to-main-content-thumbnail.jpg"
              alt="Screenshot showing a Skip to Main Content accessibility check"
              className="finding-card__image"
            />
            <span className="visually-hidden">View Skip to Main Content</span>
          </a>

          <div className="finding-card__content">
            <p className="finding-card__category">Accessibility Quick Check</p>

            <h3 className="finding-card__title">Skip to Main Content</h3>

            <p className="finding-card__summary">
              A quick review of how skip links improve keyboard navigation and
              help users reach page content faster.
            </p>

            <CTA
              href="/findings/skip-to-main-content"
              wrapperClassName="finding-card__cta"
              className="request-quote-btn"
              ariaLabel="View Skip to Main Content finding"
            >
              View Finding
            </CTA>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AccessibilityFindings
