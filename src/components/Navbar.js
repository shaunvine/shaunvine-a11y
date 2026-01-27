import React, { useEffect, useMemo, useRef, useState } from "react" // NEW
import { Link } from "gatsby"
import { useLocation } from "@reach/router" // NEW
import { FiAlignJustify, FiSun, FiMoon } from "react-icons/fi" // NEW
import CTA from "../components/CTA"
import LogoMark from "../components/LogoMark" // NEW
// import logo from "../assets/images/general/IAAP-Cert.png"

const ENABLE_THEME_TOGGLE = false

// NEW: reusable theme toggle component
function ThemeToggle({ theme, onToggleTheme, className }) {
  const nextThemeLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"

  return (
    <button
      type="button"
      className={className}
      onClick={onToggleTheme}
      aria-label={nextThemeLabel}
    >
      {theme === "dark" ? (
        <FiSun aria-hidden="true" /> // NEW
      ) : (
        <FiMoon aria-hidden="true" /> // NEW
      )}
    </button>
  )
}

const Navbar = ({ theme, onToggleTheme }) => {
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

            {/* Mobile theme toggle */}
            {ENABLE_THEME_TOGGLE && (
              <ThemeToggle
                theme={theme}
                onToggleTheme={onToggleTheme}
                className="theme-toggle theme-toggle--mobile"
              />
            )}
          </div>
        </div>

        {/* Navigation links */}
        <div
          id="primary-navigation" // NEW
          className={navLinksClass}
          aria-label="Primary navigation" // NEW
        >
          <Link
            to="/services"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeMenu}
            ref={firstLinkRef} // NEW
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

            {/* Desktop theme toggle */}
            {ENABLE_THEME_TOGGLE && (
              <ThemeToggle
                theme={theme}
                onToggleTheme={onToggleTheme}
                className="theme-toggle theme-toggle--desktop"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
