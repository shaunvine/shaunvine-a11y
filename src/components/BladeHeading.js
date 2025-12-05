// src/components/BladeHeading.js | A reusable heading component for service blades with optional subtitle and semantic control.
import React from "react"
import PropTypes from "prop-types"

const BladeHeading = ({
  as: Heading = "h2", // NEW: semantic control (h2, h3, etc.)
  id,
  title,
  subtitle,
}) => {
  return (
    <header className="blade-heading">
      <Heading id={id} className="service-title">
        {title}
      </Heading>

      {subtitle && <p className="blade-subtitle">{subtitle}</p>}
    </header>
  )
}

BladeHeading.propTypes = {
  as: PropTypes.elementType,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default BladeHeading
