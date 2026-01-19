// src/components/Layout.js
import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import BackToTop from "./BackToTop"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (typeof window !== "undefined") {
      // existing first-visit / visited logic
      const hasVisited = localStorage.getItem("hasVisitedBefore")
      const body = document.body

      body.classList.remove("first-visit", "visited")

      if (!hasVisited) {
        body.classList.add("first-visit")
        localStorage.setItem("hasVisitedBefore", "true")
      } else {
        body.classList.add("visited")
      }

      // Derive initial theme (localStorage > prefers-color-scheme > light)
      const storedTheme = window.localStorage.getItem("theme")
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

      const initialTheme =
        storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : prefersDark
          ? "dark"
          : "light"

      setTheme(initialTheme)
      document.documentElement.setAttribute("data-theme", initialTheme)
    }
  }, [])

  // Keep <html data-theme="..."> and localStorage in sync
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme)
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])

  // Accessible toggle handler
  const handleToggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Pass theme + toggle into Navbar */}
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
