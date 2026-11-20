import React, { useEffect, useMemo, useRef, useState } from "react" // NEW
// NEXTJS-MIGRATION: becomes next/link; aria-current="page" will then need setting by hand from the pathname.
import { Link } from "gatsby"
// NEXTJS-MIGRATION: replace with usePathname from next/navigation.
import { useLocation } from "@reach/router" // NEW
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
  // When menu closes, do NOT force focus anywhere, except when closed with
  // Escape (see handleKeyDown), which returns focus to the menu button.
  useEffect(() => {
    if (!show) return

    requestAnimationFrame(() => {
      firstLinkRef.current?.focus()
    })
  }, [show])

  // Escape closes the open menu. Focus goes back to the menu button first,
  // because the links are about to be hidden and focus must not be lost.
  const handleKeyDown = event => {
    if (event.key !== "Escape" || !show) return
    setShow(false)
    menuButtonRef.current?.focus()
  }

  return (
    <nav
      className="navbar"
      aria-label="Primary navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="/"
            aria-label="Shaun Vine home"
            className="logo-mark"
            onClick={closeMenu} // NEW: close menu even if already on "/"
          >
            <LogoMark />
            {/* Decorative Bauhaus shapes: hidden from screen readers */}
            <span className="logo-shapes" aria-hidden="true">
              <span className="logo-shape logo-shape--circle" />
              <span className="logo-shape logo-shape--square" />
              <span className="logo-shape logo-shape--triangle" />
            </span>
          </Link>

          {/* Mobile controls */}
          <div className="nav-controls">
            <button
              ref={menuButtonRef} // NEW
              type="button"
              className="nav-btn"
              onClick={toggleMenu}
              aria-label="Menu" // fixed name; aria-expanded says open or closed
              aria-expanded={show} // NEW
              aria-controls="primary-navigation" // NEW
            >
              {/* One icon, three bars. CSS morphs it into an X when the
                  button has aria-expanded="true". Decorative: the button's
                  aria-label provides the name. */}
              <svg
                className="nav-btn-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <line
                  className="nav-btn-bar nav-btn-bar--top"
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                />
                <line
                  className="nav-btn-bar nav-btn-bar--middle"
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                />
                <line
                  className="nav-btn-bar nav-btn-bar--bottom"
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* Navigation links */}
        <div
          id="primary-navigation" // NEW
          className={navLinksClass}
        >
          <Link
            to="/work"
            className="nav-link"
            onClick={closeMenu}
            ref={firstLinkRef} // focus target when mobile menu opens
          >
            Work
          </Link>

          <Link
            to="/findings"
            className="nav-link"
            onClick={closeMenu}
          >
            Findings
          </Link>

          <Link
            to="/services"
            className="nav-link"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/about"
            className="nav-link"
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
