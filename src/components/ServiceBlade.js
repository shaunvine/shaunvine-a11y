// src/components/ServiceBlade.js
import React from "react"
import PropTypes from "prop-types"
import { FaCheck } from "react-icons/fa"
import BladeHeading from "./BladeHeading"

const ServiceBlade = ({
  id,
  variant = "light", // DEFAULT variant
  layout = "single", // Layout variant (single | two | three) // NEW
  title,
  subtitle,
  description,
  listHeading,
  items = [],
  footerText,
  footerCTA,
  columns = [], // NEW: content for two- or three-column layouts
}) => {
  const headingId = id ? `${id}-heading` : undefined

  /* --------------------------------------------------------
     VARIANT → CSS CLASS MAP
     (Prevents typos and ensures only allowed variants render.)
     -------------------------------------------------------- */
  const allowedVariants = ["light", "strong", "dark"]

  // ensures a bad variant never breaks rendering
  const safeVariant = allowedVariants.includes(variant) ? variant : "light"

  // actual CSS class for the blade
  const bladeClass = `blade blade--${safeVariant}`

  /* --------------------------------------------------------
     LAYOUT VARIANT → CSS CLASS MAP
     (single | two | three)
     -------------------------------------------------------- */
  const allowedLayouts = ["single", "two", "three"] // NEW
  const safeLayout = allowedLayouts.includes(layout) ? layout : "single" // NEW
  const layoutClass = `blade-layout--${safeLayout}` // NEW

  return (
    <section
      id={id}
      className={`services-grid ${bladeClass} ${layoutClass}`}
      aria-labelledby={headingId}
      role="region"
    >
      <div className="service-column">
        <div className="service-content">
          {/* ==========================
              CENTRALIZED HEADING
             ========================== */}
          <BladeHeading
            id={headingId}
            title={title}
            subtitle={subtitle}
            description={description}
          />

          {/* ==========================
             LIST SECTION (single / two only)
             ========================== */}
          {layout !== "three" && (listHeading || items.length > 0) && (
            <div className="service-list-container">
              {listHeading && (
                <div className="service-includes">
                  <h3>{listHeading}</h3>
                </div>
              )}

              {items.length > 0 && (
                <ul className="service-includes-list">
                  {items.map((item, index) => (
                    <li key={index} className="service-list-item">
                      <span className="li-icon-wrapper">
                        <FaCheck className="list-icon" />
                        <span className="li-label">{item.label}</span>
                      </span>

                      {item.description && (
                        <p className="li-description">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* ==========================
              FOOTER TEXT
             ========================== */}
          {footerText && <p className="service-includes">{footerText}</p>}

          {/* ==========================
              TWO-COLUMN CONTENT (NEW)
             ========================== */}
          {layout === "two" && columns.length === 2 && (
            <div className="blade-two-col">
              <div className="blade-col">{columns[0]}</div>
              <div className="blade-col">{columns[1]}</div>
            </div>
          )}

          {/* ==========================
              THREE-COLUMN CONTENT (NEW)
             ========================== */}
          {layout === "three" && columns.length === 3 && (
            <div className="blade-three-col">
              <div className="blade-col">{columns[0]}</div>
              <div className="blade-col">{columns[1]}</div>
              <div className="blade-col">{columns[2]}</div>
            </div>
          )}

          {/* ==========================
              FOOTER CTA (optional)
              ========================== */}
          {footerCTA && (
            <div className="blade-footer-cta">{footerCTA}</div>
          )}
        </div>
      </div>
    </section>
  )
}

ServiceBlade.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(["light", "strong", "dark"]),
  layout: PropTypes.oneOf(["single", "two", "three"]), // NEW
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  listHeading: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  footerText: PropTypes.string,
  footerCTA: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.node), // NEW
}

export default ServiceBlade
