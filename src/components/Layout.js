import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  // your existing "first visit / visited" body-class logic
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("hasVisitedBefore")
      const body = document.body

      body.classList.remove("first-visit", "visited")

      if (!hasVisited) {
        body.classList.add("first-visit")
        localStorage.setItem("hasVisitedBefore", "true")
      } else {
        body.classList.add("visited")
      }
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
