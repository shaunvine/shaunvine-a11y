import React from "react"
import Layout from "../../components/Layout"
import SEOmeta from "../../components/SEOmeta"
import Transcript from "../../components/Transcript"
import { FaExternalLinkAlt } from "react-icons/fa"

const transcriptContent = (
  <>
    <p>
      The clip opens with a title card reading: Accessibility Finding — Search
      Popup Keyboard Support — Keyboard Support.
    </p>

    <p>
      The voiceover states: "This search popup can be opened by keyboard, but
      never used."
    </p>

    <p>
      A site's header is shown. The user tabs to the search icon and presses
      Enter. A full-screen search popup opens. Focus lands on the Close button
      — not the search field. The voiceover states: "I tab to the search icon
      and press Enter. The popup opens, and focus lands on the Close button."
    </p>

    <p>
      The user presses Tab. Focus does not move. The user presses Shift+Tab.
      Focus still does not move. The search field remains unreachable by
      keyboard. The voiceover states: "I press Tab. Focus doesn't move.
      Shift plus Tab — still stuck."
    </p>

    <p>
      The popup remains open with focus locked to the Close button. The
      voiceover states: "The search field can never receive focus. My only
      options, Enter or Escape, just close the popup."
    </p>

    <p>
      The voiceover concludes: "That's not a keyboard trap. It's a keyboard
      accessibility failure. The search feature is mouse-only."
    </p>

    <p>
      The clip closes with a card referencing the WCAG success criteria and
      pattern this finding relates to:
    </p>
    <ul>
      <li>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
          target="_blank"
          rel="noreferrer"
        >
          WCAG 2.1.1 — Keyboard (Level A){" "}
          <FaExternalLinkAlt
            aria-label="opens in new tab"
            style={{
              display: "inline",
              verticalAlign: "middle",
              fontSize: "0.75em",
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
          target="_blank"
          rel="noreferrer"
        >
          WAI-ARIA APG — Dialog (Modal) Pattern{" "}
          <FaExternalLinkAlt
            aria-label="opens in new tab"
            style={{
              display: "inline",
              verticalAlign: "middle",
              fontSize: "0.75em",
            }}
          />
        </a>
      </li>
    </ul>
  </>
)

const SearchPopupKeyboardSupportPage = () => {
  return (
    <Layout>
      <main className="page finding-detail">
        <article className="finding-detail__article">
          <header className="finding-detail__header">
            <p className="finding-detail__category">
              Accessibility Quick Check
            </p>

            <h1 className="finding-detail__title">
              Fixing an Unreachable Search Field
            </h1>

            <p className="finding-detail__summary">
              A site's search popup opens with the keyboard — but focus never
              reaches the search field, so keyboard users can open the search
              and do nothing else. This review shows why it fails WCAG 2.1.1,
              and why it isn't the keyboard trap it looks like.
            </p>

            <a href="#transcript" className="finding-detail__transcript-link">
              Read the full transcript ↓
            </a>
          </header>

          <div className="finding-detail__layout">
            <div className="finding-detail__video-wrapper">
              <video
                className="finding-detail__video"
                controls
                preload="metadata"
                poster="/assets/video-covers/search-popup.jpg"
              >
                <source
                  src="/assets/videos/search-popup.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>

            <div className="finding-detail__content">
              <section className="finding-detail__section">
                <h2>What Is It?</h2>
                <p>
                  A full-screen search popup opens by keyboard and places focus
                  on its Close button. Pressing Tab or Shift+Tab never moves
                  focus to the search field or the Search button — so the
                  feature can be opened, but never used. It looks like a
                  keyboard trap, but it isn't: Esc and the Close button both
                  exit. The failure is that the search itself can't be operated
                  (2.1.1), not that focus is trapped (2.1.2).
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Why It Matters</h2>
                <p>
                  Keyboard-only users — including many people with motor
                  disabilities and screen reader users — can never type or
                  submit a search. The feature is effectively mouse-only,
                  leaving the fastest path to content unavailable to anyone who
                  doesn't use a pointer.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>How To Test</h2>
                <ol className="finding-detail__steps">
                  <li>Tab to the search icon in the header and press Enter.</li>
                  <li>Observe that focus lands on the Close button.</li>
                  <li>Press Tab — check whether focus reaches the search field.</li>
                  <li>Press Shift+Tab — check whether focus moves at all.</li>
                  <li>
                    Confirm the search input and submit button can never receive
                    keyboard focus.
                  </li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>The Fix</h2>
                <p>
                  Give the popup <code>role="dialog"</code> with an accessible
                  name, and move focus to the search input when it opens. Ensure
                  Tab cycles through search input → submit → close, and that Esc
                  closes the popup and returns focus to the search toggle that
                  opened it. Replace the anchor-based close control with a
                  native <code>&lt;button&gt;</code> so it activates on both
                  Enter and Space. This satisfies WCAG 2.1.1.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>WCAG Reference</h2>
                <ul className="finding-detail__skills">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WCAG 2.1.1 — Keyboard (Level A){" "}
                      <FaExternalLinkAlt
                        aria-label="opens in new tab"
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          fontSize: "0.75em",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WAI-ARIA APG — Dialog (Modal) Pattern{" "}
                      <FaExternalLinkAlt
                        aria-label="opens in new tab"
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          fontSize: "0.75em",
                        }}
                      />
                    </a>
                  </li>
                </ul>
              </section>

              <section className="finding-detail__section">
                <h2>Related Skills</h2>
                <ul className="finding-detail__skills">
                  <li>Accessibility Testing</li>
                  <li>Keyboard Navigation</li>
                  <li>Screen Reader Support</li>
                  <li>Manual QA</li>
                </ul>
              </section>
            </div>
          </div>

          <Transcript transcript={transcriptContent} />
        </article>
      </main>
    </Layout>
  )
}

export default SearchPopupKeyboardSupportPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Fixing an Unreachable Search Field — Accessibility Finding"
    description="A search popup opens with the keyboard but focus never reaches the search field, so keyboard users can open it and nothing more. This review shows why it fails WCAG 2.1.1 — and why it isn't the keyboard trap it looks like."
    pathname={location?.pathname}
  />
)
