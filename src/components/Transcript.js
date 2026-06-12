import React, { useState } from "react"

const Transcript = ({ transcript }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash === "#transcript"
    }
    return false
  })

  if (!transcript) return null

  return (
    <section className="finding-transcript" id="transcript" aria-label="Video transcript">
      <button
        className="finding-transcript__toggle"
        aria-expanded={isOpen}
        aria-controls="transcript-body"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <h3>Full Transcript</h3>
        <span className="finding-transcript__icon" aria-hidden="true">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      <div
        id="transcript-body"
        className="finding-transcript__body"
        hidden={!isOpen}
      >
        <div className="finding-transcript__content">{transcript}</div>
      </div>
    </section>
  )
}

export default Transcript
