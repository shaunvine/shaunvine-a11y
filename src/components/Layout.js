// src/components/Layout.js
import React from "react"
import Navbar from "./Navbar"
import BackToTop from "./BackToTop"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  // Find first focusable element inside a container (used by skip link)
  const focusFirstInMain = () => {
    const main = document.getElementById("main-content")
    if (!main) return

    const focusable = main.querySelector(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    // Wait one tick so the hash jump completes, then set focus
    setTimeout(() => {
      if (focusable && typeof focusable.focus === "function") {
        focusable.focus()
      } else {
        main.focus()
      }
    }, 0)
  }

  return (
    <>
      {/* Accessibility: Skip link */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={() => focusFirstInMain()}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
