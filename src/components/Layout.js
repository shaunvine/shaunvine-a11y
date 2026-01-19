// src/components/Layout.js
import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import BackToTop from "./BackToTop"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

/**
 * =========================================================
 * FEATURE FLAG
 * ---------------------------------------------------------
 * Set to false for launch (light theme only).
 * Flip to true later when dark mode is ready.
 * =========================================================
 */
const ENABLE_DARK_MODE = false

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  /**
   * =========================================================
   * First effect: runs once on mount
   * - Handles first-visit / visited classes
   * - Sets initial theme
   * =========================================================
   */
  useEffect(() => {
    if (typeof window === "undefined") return

    // -------------------------------
    // First visit vs returning visit
    // -------------------------------
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    const body = document.body

    body.classList.remove("first-visit", "visited")

    if (!hasVisited) {
      body.classList.add("first-visit")
      localStorage.setItem("hasVisitedBefore", "true")
    } else {
      body.classList.add("visited")
    }

    // -------------------------------------------------
    // LAUNCH MODE: Dark mode disabled → force light
    // -------------------------------------------------
    if (!ENABLE_DARK_MODE) {
      setTheme("light")
      document.documentElement.setAttribute("data-theme", "light")

      // Clean up any old stored theme so mobile doesn't stay dark
      localStorage.removeItem("theme")

      return // ⬅️ Exit early; skip dark-mode logic
    }

    // -------------------------------------------------
    // FUTURE MODE (when ENABLE_DARK_MODE = true)
    // -------------------------------------------------
    // Priority order:
    // 1. localStorage ("light" or "dark")
    // 2. System preference (prefers-color-scheme)
    // 3. Fallback to light
    // -------------------------------------------------

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
  }, [])

  /**
   * =========================================================
   * Second effect: keeps theme synced to <html> + localStorage
   * Only runs when dark mode is enabled
   * =========================================================
   */
  useEffect(() => {
    if (typeof window === "undefined") return

    if (!ENABLE_DARK_MODE) return // ⬅️ Do nothing during light-only launch

    document.documentElement.setAttribute("data-theme", theme)
    window.localStorage.setItem("theme", theme)
  }, [theme])

  /**
   * =========================================================
   * Theme toggle handler (preserved for later use)
   * =========================================================
   */
  const handleToggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <>
      {/* Accessibility: Skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navbar still receives theme props for future use */}
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <main id="main-content">{children}</main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
