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
              TWO-COLUMN CONTENT
             ========================== */}
          {layout === "two" && columns.length === 2 && (
            <div className="blade-two-col">
              <div className="blade-col">{columns[0]}</div>
              <div className="blade-col">{columns[1]}</div>
            </div>
          )}

          {/* ==========================
              THREE-COLUMN CONTENT
             ========================== */}
          {layout === "three" && columns.length === 3 && (
            <div className="blade-three-col">
              {columns.map((col, index) => (
                <div className="blade-col three-col-card" key={index}>
                  {/* Per-column heading + subheading */}
                  {(col.heading || col.subheading) && (
                    <>
                      {col.heading && (
                        <h3 className="three-col-heading">{col.heading}</h3>
                      )}
                      {col.subheading && (
                        <p className="three-col-subheading">{col.subheading}</p>
                      )}
                    </>
                  )}

                  {/* Per-column list with label + description */}
                  {col.items && col.items.length > 0 && (
                    <ul className="service-includes-list three-col-list">
                      {col.items.map((item, i) => (
                        <li key={i} className="service-list-item">
                          <span className="li-icon-wrapper">
                            <FaCheck className="list-icon" />
                            <span className="li-label">{item.label}</span>
                          </span>

                          {item.description && (
                            <p className="li-description">{item.description}</p>
                          )}
                          {/* OPTIONAL nested list */}
                          {item.subList && item.subList.items?.length > 0 && (
                            <div className="li-sublist">
                              {item.subList.heading && (
                                <p className="li-sublist-heading">
                                  {item.subList.heading}
                                </p>
                              )}

                              <ul className="li-sublist-items">
                                {item.subList.items.map((subItem, idx) => (
                                  <li className="sub-item" key={idx}>{subItem}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ==========================
              FOOTER CTA (optional)
              ========================== */}
          {footerCTA && <div className="blade-footer-cta">{footerCTA}</div>}
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
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          description: PropTypes.string,
          subList: PropTypes.shape({
            heading: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.string),
          }),
        })
      ),
    })
  ),
}

export default ServiceBlade
