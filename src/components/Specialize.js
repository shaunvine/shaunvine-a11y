import React from "react"
import { Link } from "gatsby"
import { FaCheck } from "react-icons/fa"

const Specialize = () => {
  return (
    <div>
      <div className="services-grid">
        {/* QA Services */}
        <div className="service-column">
          <div className="service-content">
            <h2 id="services-heading" className="service-title">
              Why Accessibility Matters
            </h2>
            <div className="service-list-intro">
              <h3>Every user deserves equal access.</h3>
            </div>
            <div className="service-list-container">
              <div className="service-includes">
                <h3>But accessibility is also:</h3>
              </div>
              <ul className="service-includes-list">
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />A legal requirement (ADA,
                    Section 508, AODA, EAA)
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />A trust signal for
                    customers
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />A quality signal for search
                    engines
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />A protection against
                    lawsuits
                  </span>
                </li>
                <li>
                  <span className="li-icon-wrapper">
                    <FaCheck className="list-icon" />A way to expand your
                    audience
                  </span>
                </li>
              </ul>
            </div>
            <p className="service-includes">
              I help organizations identify issues before they become costly
              risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialize
