import React from "react"
import { FaReact } from "react-icons/fa"
import logo from "../assets/images/general/Shaun Vine IAAP.png" // <-- Update this path

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Shaun Vine logo" />
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} shaunvine.com — Built with{" "}
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
        </p>
        {/* Manage Cookies button */}
        <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
          <button
            type="button"
            id="manage-cookies"
            className="manage-cookies-link"
          >
            Manage cookies
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
