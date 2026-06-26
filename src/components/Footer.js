import React from "react"
import { FaReact, FaLinkedin } from "react-icons/fa"
import logo from "../assets/images/general/IAAP-Cert.png" // <-- Update this path

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={logo}
            alt="IAAP Certified Professional in Accessibility Core Competencies (CPACC) "
          />
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/shaun-vine-71683832/"
              aria-label="Shaun Vine on LinkedIn | Opens in new tab"
              className="footer-social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} shaunvine.com — Built with
          <a
            aria-label="Contentful Website | Opens in new tab"
            className="gatsby"
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contentful</span>
          </a>
          and
          <a
            aria-label="React Website | Opens in new tab"
            className="react"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact />
          </a>
          {" · "}
          <button
            type="button"
            id="manage-cookies"
            className="manage-cookies-link"
          >
            Manage cookies
          </button>
        </p>
      </div>
    </footer>
  )
}

export default Footer
