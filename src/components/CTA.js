import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({
  href,
  children,
  ariaLabel,
  className = "",
  wrapperClassName = "",
  onClick, // NEW
  ...linkProps // NEW: allow passing other Link props safely (e.g., partiallyActive)
}) => {
  const Wrapper = wrapperClassName ? "div" : React.Fragment

  return (
    <Wrapper {...(wrapperClassName ? { className: wrapperClassName } : {})}>
      <Link
        to={href}
        className={`cta ${className}`.trim()}
        aria-label={ariaLabel || undefined}
        onClick={onClick} // NEW
        {...linkProps} // NEW
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
  className: PropTypes.string,
  wrapperClassName: PropTypes.string, // FIXED: was wrapperClass
  onClick: PropTypes.func, // NEW
}

export default CTA
