import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { FiAlignJustify } from "react-icons/fi"
// import logo from "../assets/images/Logo-2024.png"
import CTA from "../components/CTA"

const Navbar = ({ theme, onToggleTheme }) => {
  const [show, setShow] = useState(false)
  const location = useLocation()

  const nextThemeLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="/"
            aria-label="Shaun Vine logo capital S and V"
            className="logo-mark"
          >
            <svg className="logo" id="Layer_1" viewBox="0 1 800.96 450">
              <path
                id="animate"
                className="cls-1 logo-animate logo-static"
                fill="url(#logo-gradient)"
                d="M797.96.1h-83.99v7.16c6.2.48 13.25 1.56 21.13 3.22 7.88 1.68 15.4 4.06 22.57 7.16 7.16 3.11 13.13 7.05 17.91 11.82 4.77 4.78 7.16 10.75 7.16 17.91 0 5.26-1.43 14.69-4.3 28.3-2.87 13.61-9.08 33.56-18.63 59.82-12.89 34.39-25.32 67.34-37.25 98.86-11.94 31.52-22.81 59.71-32.6 84.53-9.79 24.84-17.91 45.61-24.36 62.33-6.45 16.72-10.87 27.7-13.25 32.95-5.26-14.33-12.42-32.71-21.49-55.16-9.08-22.44-18.75-46.68-29.01-72.71-10.27-26.02-20.66-52.53-31.16-79.52-10.51-26.98-19.95-51.81-28.3-74.5-8.36-22.68-15.17-42.02-20.42-58.03-5.26-16-7.88-26.15-7.88-30.45 0-7.16 2.51-13.13 7.52-17.91a54.83 54.83 0 0 1 17.19-11.1c6.45-2.62 12.77-4.41 18.98-5.37 6.2-.95 10.5-1.67 12.9-2.15V.1h-214.2v7.88c10.99.48 20.06 2.27 27.22 5.37 7.16 3.11 13.25 6.81 18.27 11.1 5.01 4.3 8.95 8.6 11.82 12.9s5.01 7.88 6.45 10.75c2.87 5.73 5.61 11.23 8.24 16.48 2.62 5.26 5.25 10.75 7.88 16.48 2.62 5.73 5.37 11.94 8.24 18.63 2.87 6.69 5.97 14.58 9.31 23.64 11.93 30.57 23.88 61.02 35.82 91.34a33462 33462 0 0 0 37.25 94.21c12.9 32.48 26.15 66.27 39.76 101.37 5.49 14.17 11.21 28.71 17.06 43.46h68.54l2.17-4.42c10.5-27.22 21.6-55.99 33.31-86.33 11.7-30.32 23.52-60.54 35.46-90.62 11.93-30.09 23.64-59.34 35.1-87.76 11.46-28.41 21.96-54.09 31.52-77.01a727.77 727.77 0 0 1 8.05-18.77V.1ZM257.32 0c3.91 3.26 7.7 6.71 11.31 10.39 12 12.24 22.56 26.17 31.69 41.77 9.12 15.61 16.57 31.33 22.33 47.17h7.92V0h-73.24ZM32.41 189c8.64 11.29 18.72 21.13 30.25 29.53 11.52 8.41 23.52 15.01 36.01 19.8 11.04 4.32 20.52 7.81 28.45 10.44 7.92 2.65 15.6 5.29 23.05 7.92 7.44 2.64 15.48 5.4 24.13 8.28 8.64 2.88 18.73 6.48 30.25 10.8s22.33 9.13 32.41 14.4c10.08 5.29 18.84 11.65 26.29 19.08 7.44 7.45 13.32 16.2 17.64 26.29 4.32 10.08 6.48 21.85 6.48 35.29 0 33.13-11.05 59.42-33.13 78.86-1.62 1.43-3.29 2.78-4.98 4.1h50.22c1.37-1 2.76-1.98 4.09-3.02 16.57-12.96 29.53-28.56 38.89-46.81 9.36-18.24 14.04-38.89 14.04-61.94 0-34.09-8.98-62.53-26.94-85.34-17.96-22.8-43.22-40.21-75.79-52.21-9.1-3.35-17.85-6.48-26.23-9.36-8.38-2.88-16.64-5.64-24.78-8.28-8.15-2.63-16.41-5.4-24.79-8.28-8.38-2.88-17.36-6.24-26.93-10.08-24.43-9.11-44.3-21.36-59.63-36.73-15.33-15.36-22.99-35.76-22.99-61.22 0-16.32 2.76-30.84 8.28-43.57C81.18 16.62 87.12 7.64 94.47 0h-45.4C36.3 11.42 25.86 25.06 17.81 41 8.33 59.72 3.6 82.05 3.6 107.97c0 15.37 2.63 29.89 7.92 43.57 5.28 13.68 12.24 26.17 20.89 37.45ZM87.36 453.81c-5.34-3.63-10.8-7.93-16.42-13.11-8.89-8.16-17.28-17.64-25.21-28.45-7.92-10.8-15.25-22.33-21.97-34.57-6.73-12.24-12.24-24.85-16.56-37.81H0L1.72 453.8h85.64Z"
              />
            </svg>
          </Link>

          {/* Controls cluster: hamburger + MOBILE theme toggle */}
          <div className="nav-controls">
            <button
              aria-label="Open main navigation"
              className="nav-btn"
              onClick={() => setShow(!show)}
              type="button"
            >
              <FiAlignJustify />
            </button>

            {/* MOBILE theme toggle */}
            <button
              type="button"
              className="theme-toggle theme-toggle--mobile"
              onClick={onToggleTheme}
              aria-label={nextThemeLabel}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/work"
            className="nav-link"
            activeClassName="active-link"
            aria-label="Work"
            onClick={() => setShow(false)}
          >
            work
          </Link>
          <Link
            to="/manual-qa-services"
            className="nav-link"
            activeClassName="active-link"
            aria-label="Find out more about QA services"
            onClick={() => setShow(false)}
          >
            QA Services
          </Link>
          <Link
            to="/cms-services"
            className="nav-link"
            activeClassName="active-link"
            aria-label="Find out more about CMS services"
            onClick={() => setShow(false)}
          >
            CMS Services
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>

          {/* Desktop cluster: Contact + DESKTOP theme toggle */}
          <div className="nav-actions">
            <CTA
              href="/contact"
              wrapperClassName="contact-link"
              className="btn"
              ariaLabel="Contact Shaun"
            >
              Contact
            </CTA>

            {/* DESKTOP theme toggle */}
            <button
              type="button"
              className="theme-toggle theme-toggle--desktop"
              onClick={onToggleTheme}
              aria-label={nextThemeLabel}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
