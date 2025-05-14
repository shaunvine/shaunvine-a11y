import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useLocation } from "@reach/router"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const location = useLocation()

  // Set first-visit or visited on initial load only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("hasVisitedBefore")
      if (!hasVisited) {
        document.body.classList.add("first-visit")
        localStorage.setItem("hasVisitedBefore", "true")
      } else {
        document.body.classList.add("visited")
      }
    }
  }, [])

  // Always animate logo on homepage load
  useEffect(() => {
    const element = document.getElementById("animate")
    const isHome = location.pathname === "/"
    if (element) {
      if (isHome) {
        // Reset animation
        element.classList.remove("logo-animate")
        // Trigger reflow so animation can run again
        void element.offsetWidth
        // Add animation class
        element.classList.add("logo-animate")
      } else {
        element.classList.remove("logo-animate")
      }
    }
  }, [location.pathname])

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
