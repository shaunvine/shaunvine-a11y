import React from "react"
import Layout from "../../components/Layout"
import SEOmeta from "../../components/SEOmeta"
import Transcript from "../../components/Transcript"

const transcriptContent = (
  <>
    <p>
      Google Maps markers are not fully keyboard accessible. Google acknowledges
      this limitation.
    </p>
    <p>
      Mouse users can click any marker on the map to view contest details. On
      the Surf Contest Atlas, clicking a marker near French Polynesia opens a
      tooltip showing the contest name — in this case, the Lexus Tahiti Pro —
      and updates the results to show 1 of 83 contests filtered.
    </p>
    <p>
      Keyboard users need to tab to markers or filters to view the same results.
      Using the keyboard, a filter can be applied — for example, activating the
      WSL Tour button updates results to show 15 of 83 contests. So far the
      keyboard experience is working.
    </p>
    <p>
      The problem appears when the user continues tabbing to explore map
      markers. Tab reaches one marker near Brazil, indicated by a blue focus
      outline. But the next Tab press skips directly to the fullscreen button,
      bypassing all other markers. The following Tab moves to the map navigation
      controls. Every other marker on the map is unreachable by keyboard.
    </p>
    <p>
      The accessible alternative: after a keyboard user applies a filter, they
      can Tab to the "Go to Results" button in the filter bar and press Enter to
      activate it. Focus moves directly to the filtered contest results — no map
      interaction needed.
    </p>
    <p>
      When a fix isn't possible, provide an equivalent alternative. This
      approach satisfies WCAG 2.4.1 — Bypass Blocks.
    </p>
  </>
)

const BypassingInaccessibleMapPage = () => {
  return (
    <Layout>
      <main className="page finding-detail">
        <article className="finding-detail__article">
          <header className="finding-detail__header">
            <p className="finding-detail__category">
              Accessibility Quick Check
            </p>

            <h1 className="finding-detail__title">
              Bypassing an Inaccessible Map
            </h1>

            <p className="finding-detail__summary">
              Google Maps markers are not fully keyboard accessible. This review
              shows how one map-based site provides a keyboard-accessible
              alternative so users are not left behind.
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
                poster="/assets/video-covers/bypassing-an-inaccessible-map-cover.jpg"
              >
                <source
                  src="/assets/videos/bypassing-an-inaccessible-map.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>

            <div className="finding-detail__content">
              <section className="finding-detail__section">
                <h2>What Is It?</h2>
                <p>
                  Google Maps markers are not fully keyboard accessible — Tab
                  reaches one marker, then skips to the fullscreen button,
                  leaving all others unreachable.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Why It Matters</h2>
                <p>
                  Keyboard users cannot access the same content as mouse users,
                  leaving the majority of map markers — and the results behind
                  them — effectively hidden.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>How To Test</h2>
                <ol className="finding-detail__steps">
                  <li>Load the page.</li>
                  <li>Use Tab to navigate into the map.</li>
                  <li>Count how many markers receive keyboard focus.</li>
                  <li>Check whether Tab skips past remaining markers.</li>
                  <li>Confirm an accessible alternative exists to reach the same content.</li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>The Fix</h2>
                <p>
                  When a third-party component cannot be made fully accessible,
                  provide an equivalent alternative. Here, a "Go to Results"
                  button in the filter bar gives keyboard users a direct path to
                  the filtered contest results after applying a filter — no map
                  interaction required. This satisfies WCAG 2.4.1.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Related Skills</h2>

                <ul className="finding-detail__skills">
                  <li>Accessibility Testing</li>
                  <li>Keyboard Navigation</li>
                  <li>Screen Reader Support</li>
                  <li>Manual QA</li>
                  <li>WCAG 2.4.1</li>
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

export default BypassingInaccessibleMapPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Bypassing an Inaccessible Map — Accessibility Finding"
    description="Google Maps markers are not fully keyboard accessible. This review shows how a map-based site provides a keyboard-accessible alternative so users are not left behind."
    pathname={location?.pathname}
  />
)
