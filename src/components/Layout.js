import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useLocation } from "@reach/router"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const location = useLocation()
  const [isHydrated, setIsHydrated] = useState(false)

  // This ensures we're only running browser-side logic
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("hasVisitedBefore")
      const body = document.body

      // Remove any previous classes
      body.classList.remove("first-visit", "visited")

      if (!hasVisited) {
        body.classList.add("first-visit")
        localStorage.setItem("hasVisitedBefore", "true")
      } else {
        body.classList.add("visited")
      }

      // Ensure hydration is complete
      setIsHydrated(true)
    }
  }, [])

  return (
    <>
      <Navbar />
      {isHydrated && children}
      <Footer />
    </>
  )
}

export default Layout
