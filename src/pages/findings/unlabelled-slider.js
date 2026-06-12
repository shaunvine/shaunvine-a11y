import React from "react"
import Layout from "../../components/Layout"
import SEOmeta from "../../components/SEOmeta"
import Transcript from "../../components/Transcript"

const DecadeSliderAccessibilityPage = () => {
  return (
    <Layout>
      <main className="page finding-detail">
        <article className="finding-detail__article">
          <header className="finding-detail__header">
            <p className="finding-detail__category">
              Accessibility Quick Check
            </p>

            <h1 className="finding-detail__title">
              Fixing an Unlabeled Slider
            </h1>

            <p className="finding-detail__summary">
              A practical accessibility review showing how an unlabeled slider
              can expose its current value but still lack a clear purpose for
              screen reader users.
            </p>
          </header>

          <div className="finding-detail__layout">
            <div className="finding-detail__video-wrapper">
              <video
                className="finding-detail__video"
                controls
                preload="metadata"
                poster="/assets/video-covers/decade-slider-cover.jpg"
              >
                <source
                  src="/assets/videos/decade-slider.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>

            <p id="slider-video-description" className="visually-hidden">
              Demonstration showing how an accessible name was added to the
              decade slider so screen readers can announce both the purpose and
              current value of the control.
            </p>

            <div className="finding-detail__content">
              <section className="finding-detail__section">
                <h2>What Is It?</h2>
                <p>
                  The decade slider already exposed its current value using
                  aria-valuetext, but it was missing an accessible name.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Why It Matters</h2>
                <p>
                  Without an accessible name, assistive technologies can
                  identify the selected decade but not the purpose of the
                  control.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>How To Test</h2>
                <ol className="finding-detail__steps">
                  <li>Load the page.</li>
                  <li>Run Lighthouse or Axe.</li>
                  <li>Inspect the slider control.</li>
                  <li>Confirm the slider has an accessible name.</li>
                  <li>Verify the value is announced correctly.</li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>Fix</h2>
                <ol className="finding-detail__steps">
                  <li>Add a hidden label for the slider.</li>
                  <li>Connect the label using aria-labelledby.</li>
                  <li>Keep aria-valuetext for the current decade value.</li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>Related Skills</h2>

                <ul className="finding-detail__skills">
                  <li>Accessibility Testing</li>
                  <li>Screen Reader Support</li>
                  <li>ARIA Labels</li>
                  <li>Manual QA</li>
                </ul>
              </section>
            </div>
          </div>
          <Transcript />
        </article>
      </main>
    </Layout>
  )
}

export default DecadeSliderAccessibilityPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Fixing an Unlabeled Slider Accessibility Finding"
    description="A practical accessibility finding showing how adding an accessible name to a slider improves screen reader support."
    pathname={location?.pathname}
  />
)
