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
  badge,
  items = [],
  footerText,
  bladeFooterCTA,
  columns = [], // Content for two- or three-column layouts
}) => {
  const headingId = id ? `${id}-heading` : undefined

  // Detect whether any heading content exists (so aria-labelledby won't break)
  const hasHeadingContent = [title, subtitle, description].some(v => v?.trim())

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
     (single | two | three | twoCards)
     -------------------------------------------------------- */
  const allowedLayouts = ["single", "two", "three", "twoCards"] // NEW TODAY
  const safeLayout = allowedLayouts.includes(layout) ? layout : "single"
  const layoutClass = `blade-layout--${safeLayout}`

  return (
    <section
      id={id}
      className={`services-grid ${bladeClass} ${layoutClass}`}
      // Only set aria-labelledby when the heading element will exist
      aria-labelledby={hasHeadingContent ? headingId : undefined}
      // Fallback label so the region is still named when no heading is rendered
      aria-label={!hasHeadingContent ? "Service section" : undefined}
    >
      <div className="service-column">
        <div className="service-content">
          {/* ==========================
              CENTRALIZED HEADING
             ========================== */}
          {hasHeadingContent && ( // (re-uses the new variable)
            <BladeHeading
              id={headingId}
              title={title}
              subtitle={subtitle}
              description={description}
            />
          )}

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
                        <FaCheck
                          className="list-icon"
                          aria-hidden="true" // A11Y FIX
                          focusable="false" // A11Y FIX
                        />
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
              STRUCTURED CARD CONTENT
              (three | twoCards)
             ========================== */}
          {(layout === "three" || layout === "twoCards") &&
            columns.length === (layout === "three" ? 3 : 2) && ( // NEW TODAY
              <div
                className={
                  layout === "three" ? "blade-three-col" : "blade-two-col-cards" // NEW TODAY
                }
              >
                {columns.map((col, index) => (
                  <div className="blade-col three-col-card" key={index}>
                    {col.badge && (
                      <span
                        className="three-col-badge"
                        aria-label={`Plan highlight: ${col.badge}`}
                      >
                        {col.badge}
                      </span>
                    )}

                    {/* Per-column heading + subheading */}
                    {(col.heading || col.subheading) && (
                      <>
                        {col.heading && (
                          <h3 className="three-col-heading">{col.heading}</h3>
                        )}
                        {col.subheading && (
                          <p className="three-col-subheading">
                            {col.subheading}
                          </p>
                        )}
                      </>
                    )}
                    {/* NEW TODAY: middle content area (image + body) */}
                    {(col.image || col.body) && (
                      <div className="two-cards-body">
                        {col.image && (
                          <div className="three-col-image">{col.image}</div>
                        )}
                        {col.body && (
                          <div className="two-cards-body-content">
                            {col.body}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Per-column list */}
                    {col.items && col.items.length > 0 && (
                      <ul className="service-includes-list three-col-list">
                        {col.items.map((item, i) => (
                          <li key={i} className="service-list-item">
                            <span className="li-icon-wrapper">
                              <FaCheck
                                className="list-icon"
                                aria-hidden="true" // A11Y FIX
                                focusable="false" // A11Y FIX
                              />
                              <span className="li-label">{item.label}</span>
                            </span>

                            {item.description && (
                              <p className="li-description">
                                {item.description}
                              </p>
                            )}

                            {/* OPTIONAL nested list */}
                            {item.subList && item.subList.items?.length > 0 && (
                              <div className="li-sublist">
                                {item.subList.heading && (
                                  <span className="li-sublist-heading">
                                    {item.subList.heading}
                                  </span>
                                )}

                                <ul className="li-sublist-items">
                                  {item.subList.items.map((subItem, idx) => (
                                    <li className="sub-item" key={idx}>
                                      {subItem}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* ==========================
                        COLUMN FOOTER (shared)
                       ========================== */}
                    {(col.footerText || col.bladeFooterCTA) && (
                      <div className="three-col-footer">
                        {col.footerText && (
                          <p className="service-includes three-col-footer-text">
                            {col.footerText}
                          </p>
                        )}
                        {col.bladeFooterCTA && (
                          <div className="three-col-footer-cta">
                            {col.bladeFooterCTA}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          {/* ==========================
              BLADE FOOTER CTA (optional)
              ========================== */}
          {bladeFooterCTA && (
            <div className="blade-footer-cta">{bladeFooterCTA}</div>
          )}
        </div>
      </div>
    </section>
  )
}

ServiceBlade.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(["light", "strong", "dark"]),
  layout: PropTypes.oneOf(["single", "two", "three", "twoCards"]), // NEW TODAY
  title: PropTypes.string,
  subtitle: PropTypes.string,
  listHeading: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),

  footerText: PropTypes.string,

  columns: PropTypes.arrayOf(
    PropTypes.shape({
      badge: PropTypes.string,
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
      footerText: PropTypes.string,
      bladeFooterCTA: PropTypes.node,
    })
  ),
}

export default ServiceBlade
