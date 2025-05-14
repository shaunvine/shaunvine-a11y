import React from "react"
import { Link } from "gatsby"
import { FaCheck } from "react-icons/fa"

const Services = () => {
  return (
    <div>
      <div className="services-grid">
        {/* QA Services */}
        <div className="service-column">
          <div className="service-content">
            <h2 className="service-title">QA Services</h2>
            <div className="service-list-intro">
              <h3>Ensure your digital experience is flawless across major browsers
              and devices.</h3>
            </div>
            <div className="service-list-container">
              <div className="service-includes">Services Included:</div>
              <ul className="service-includes-list">
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Cross-browser and cross-device testing (desktop, tablet,
                    mobile)
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Accessibility checks aligned with WCAG standards
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Test case writing and detailed bug reporting
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    CMS content validation for platforms like WordPress,
                    Contentful & Optimizely
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    UI/UX consistency checks and pixel-perfect visual QA
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Final pre-launch sweeps to catch issues before go-live
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-group">
            <Link to="/manual-qa-services" className="request-quote-btn">
              More Details
            </Link>
            <Link to="/service-request" className="request-quote-btn">
              Start Your Project
            </Link>
          </div>
        </div>

        {/* CMS Services */}
        <div className="service-column">
          <div className="service-content">
            <h2 className="service-title">CMS Services</h2>
            <div className="service-list-intro">
              <h3>Professional content management for a smooth, reliable publishing
              process.</h3>
            </div>
            <div className="service-list-container">
              <div className="service-includes">Services Included:</div>
              <ul className="service-includes-list">
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Content updates and publishing within modern CMS platforms
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Organization and maintenance of digital assets and page
                    layouts
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Workflow optimization to streamline approvals and publishing
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    QA checks to ensure accuracy, consistency, and functionality
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Coordination with design and dev teams to keep content
                    on-brand
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />
                    Accessibility reviews for published content
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-group">
            <Link to="/qa-services" className="request-quote-btn">
              More Details
            </Link>
            <Link to="/service-request" className="request-quote-btn">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
