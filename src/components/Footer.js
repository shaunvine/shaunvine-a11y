import React from "react"
import { FaReact } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} shaunvine.com - Built with
        <a
          aria-label="Contentful"
          className="gatsby"
          href="https://www.contentful.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Contentful</span>
        </a>
        and
        <a
          aria-label="React"
          className="react"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReact />
        </a>
      </p>
    </footer>
  )
}

export default Footer
