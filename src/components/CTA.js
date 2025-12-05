import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({
  href,
  children,
  ariaLabel,
  className = "",
  wrapperClassName = "",
}) => {
  const Wrapper = wrapperClassName ? "div" : React.Fragment
  return (
    <Wrapper {...(wrapperClassName ? { className: wrapperClassName } : {})}>
      <Link
        to={href}
        className={`cta ${className}`.trim()}
        aria-label={ariaLabel || undefined}
      >
        {children}
      </Link>
    </Wrapper>
  )
}


CTA.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,

  // NEW:
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
}

export default CTA
