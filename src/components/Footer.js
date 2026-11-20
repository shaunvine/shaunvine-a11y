import React from "react"
import { Link } from "gatsby"
import { FaReact, FaLinkedin } from "react-icons/fa"
import ExternalLink from "./ExternalLink"
import logo from "../assets/images/general/IAAP-Cert.png" // <-- Update this path

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={logo}
            alt="IAAP Certified Professional in Accessibility Core Competencies (CPACC)"
          />
          <div className="footer-social">
            <ExternalLink
              href="https://www.linkedin.com/in/shaun-vine-71683832/"
              ariaLabel="Shaun Vine on LinkedIn | Opens in new tab"
              className="footer-social__link"
              leadingIcon={<FaLinkedin aria-hidden="true" />}
            >
              LinkedIn
            </ExternalLink>
            <Link to="/contact" className="footer-social__link">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} shaunvine.com — Built with{" "}
          <ExternalLink
            ariaLabel="Contentful Website | Opens in new tab"
            className="gatsby"
            href="https://www.contentful.com/"
          >
            Contentful
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink
            ariaLabel="React Website | Opens in new tab"
            className="react"
            href="https://react.dev/"
          >
            <FaReact aria-hidden="true" />
          </ExternalLink>
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
