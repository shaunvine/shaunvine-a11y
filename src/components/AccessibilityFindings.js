import React from "react"
import CTA from "./CTA"

const findings = [
  {
    slug: "skip-to-main-content",
    category: "Accessibility Quick Check",
    title: "Skip to Main Content",
    summary:
      "A quick review of how skip links improve keyboard navigation and help users reach page content faster.",
    image: "/assets/images/skip-to-main-content-thumbnail.jpg",
    imageAlt: "Screenshot showing a Skip to Main Content accessibility check",
  },

  {
    slug: "unlabelled-slider",
    category: "Accessibility Quick Check",
    title: "Fixing an Unlabelled Slider",
    summary:
      "A review of an accessibility issue where a decade slider exposed its value but lacked an accessible name, making its purpose unclear to screen reader users.",
    image: "/assets/video-covers/decade-slider-thumbnail.jpg",
    imageAlt:
      "Title card reading Fixing an Unlabeled Slider with the subtitle Screen Reader Support",
  },
]

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

      <div className="findings__grid">
        {findings.map(finding => (
          <article className="finding-card" key={finding.slug}>
            <a
              href={`/findings/${finding.slug}`}
              className="finding-card__media"
            >
              <img
                src={finding.image}
                alt={finding.imageAlt}
                className="finding-card__image"
              />
            </a>

            <div className="finding-card__content">
              <p className="finding-card__category">{finding.category}</p>

              <h3 className="finding-card__title">{finding.title}</h3>

              <p className="finding-card__summary">{finding.summary}</p>

              <CTA
                href={`/findings/${finding.slug}`}
                wrapperClassName="finding-card__cta"
                className="request-quote-btn"
                ariaLabel={`View ${finding.title} finding`}
              >
                View Finding
              </CTA>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AccessibilityFindings
