import React, { useEffect, useState } from "react"
import { FaArrowAltCircleUp } from "react-icons/fa"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll) // Cleanup
    }
  }, [])

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!isVisible} // Hide from screen readers when not visible
      tabIndex={isVisible ? 0 : -1} // Prevent tab focus when hidden
    >
      <FaArrowAltCircleUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
