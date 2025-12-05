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
  listHeading,
  items = [],
  footerText,
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
      className={`services-grid ${bladeClass} ${layoutClass}`} // NEW
      aria-labelledby={headingId}
      role="region"
    >
      <div className="service-column">
        <div className="service-content">
          {/* ==========================
              CENTRALIZED HEADING
             ========================== */}
          <BladeHeading id={headingId} title={title} subtitle={subtitle} />

          {/* ==========================
              LIST SECTION (optional)
             ========================== */}
          {(listHeading || items.length > 0) && (
            <div className="service-list-container">
              {listHeading && (
                <div className="service-includes">
                  <h3>{listHeading}</h3>
                </div>
              )}

              {items.length > 0 && (
                <ul className="service-includes-list">
                  {items.map((item, index) => (
                    <li key={index}>
                      <span className="li-icon-wrapper">
                        <FaCheck className="list-icon" />
                        {item}
                      </span>
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
              {" "}
              {/* NEW */}
              <div className="blade-col">{columns[0]}</div>
              <div className="blade-col">{columns[1]}</div>
            </div>
          )}

          {/* ==========================
              THREE-COLUMN CONTENT (NEW)
             ========================== */}
          {layout === "three" && columns.length === 3 && (
            <div className="blade-three-col">
              {" "}
              {/* NEW */}
              <div className="blade-col">{columns[0]}</div>
              <div className="blade-col">{columns[1]}</div>
              <div className="blade-col">{columns[2]}</div>
            </div>
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
  items: PropTypes.arrayOf(PropTypes.string),
  footerText: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.node), // NEW
}

export default ServiceBlade
