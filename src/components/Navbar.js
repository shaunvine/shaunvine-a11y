import React, { useEffect, useMemo, useRef, useState } from "react" // NEW
import { Link } from "gatsby"
import { useLocation } from "@reach/router" // NEW
import { FiAlignJustify } from "react-icons/fi"
import CTA from "../components/CTA"
import LogoMark from "../components/LogoMark" // NEW
// import logo from "../assets/images/general/IAAP-Cert.png"

const Navbar = () => {
  const [show, setShow] = useState(false)

  // NEW: close menu automatically on route change
  const location = useLocation()

  // NEW: refs for focus management (accessibility polish)
  const menuButtonRef = useRef(null)
  const firstLinkRef = useRef(null)

  // NEW: clearer class handling
  const navLinksClass = useMemo(
    () => (show ? "nav-links show-links" : "nav-links"),
    [show]
  )

  const closeMenu = () => setShow(false)
  const toggleMenu = () => setShow(prev => !prev)

  // NEW: close menu whenever route changes
  useEffect(() => {
    setShow(false)
  }, [location.pathname])

  // NEW: focus management (improved)
  // When menu opens, move focus into it.
  // When menu closes, do NOT force focus anywhere.
  useEffect(() => {
    if (!show) return

    requestAnimationFrame(() => {
      firstLinkRef.current?.focus()
    })
  }, [show])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="/"
            aria-label="Shaun Vine home"
            className="logo-mark"
            onClick={closeMenu} // NEW: close menu even if already on "/"
          >
            <LogoMark />
          </Link>

          {/* Mobile controls */}
          <div className="nav-controls">
            <button
              ref={menuButtonRef} // NEW
              type="button"
              className="nav-btn"
              onClick={toggleMenu}
              aria-label={
                show ? "Close main navigation" : "Open main navigation"
              } // NEW
              aria-expanded={show} // NEW
              aria-controls="primary-navigation" // NEW
            >
              <FiAlignJustify aria-hidden="true" /> {/* icon consistency */}
            </button>

          </div>
        </div>

        {/* Navigation links */}
        <div
          id="primary-navigation" // NEW
          className={navLinksClass}
          aria-label="Primary navigation" // NEW
        >
          <Link
            to="/work"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeMenu}
            ref={firstLinkRef} // focus target when mobile menu opens
          >
            Work
          </Link>

          <Link
            to="/findings"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            Findings
          </Link>

          <Link
            to="/services"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            About
          </Link>

          {/* Right-side actions */}
          <div className="nav-actions">
            {/* CTA remains a LINK styled as a button (best practice) */}
            <CTA
              href="/contact"
              wrapperClassName="contact-link"
              className="btn"
              ariaLabel="Contact Shaun"
              onClick={closeMenu} // NEW (only matters on mobile)
            >
              Contact
            </CTA>

            {/* <Link
              className="cpacc-logo img nav-link"
              to="https://www.accessibilityassociation.org/certification-overview"
              aria-label="IAAP Certified Professional in Accessibility Core Competencies (CPACC) "
            >
              <img
                src={logo}
                alt="IAAP Certified Professional in Accessibility Core Competencies (CPACC) "
              />
            </Link> */}

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
