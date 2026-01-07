// src/components/ClientTestimonial.js
import React from "react"
import PropTypes from "prop-types"

const ClientTestimonial = ({ quote, highlight, name }) => {
  return (
    <blockquote className="testimonial">
      {highlight && <span className="callout">{highlight}</span>}
      <p className="testimonial-body">{quote}</p>
      <span className="client-name">{name}</span>
    </blockquote>
  )
}

ClientTestimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default ClientTestimonial
