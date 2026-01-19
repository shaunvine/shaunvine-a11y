import React, { useEffect, useState } from "react"
import { FaArrowAltCircleUp } from "react-icons/fa"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
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
      tabIndex={isVisible ? 0 : -1} // keep out of tab order when hidden
    >
      <FaArrowAltCircleUp aria-hidden="true" focusable="false" />
    </button>
  )
}

export default BackToTop
