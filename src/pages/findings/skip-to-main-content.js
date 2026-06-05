import React from "react"
import Layout from "../../components/Layout"
import SEOmeta from "../../components/SEOmeta"
import CTA from "../../components/CTA"

const SkipToMainContentPage = () => {
  return (
    <Layout>
      <main className="page finding-detail">
        <article className="finding-detail__article">
          <header className="finding-detail__header">
            <p className="finding-detail__category">
              Accessibility Quick Check
            </p>

            <h1 className="finding-detail__title">Skip to Main Content</h1>

            <p className="finding-detail__summary">
              A practical accessibility review showing how skip links help
              keyboard users move directly to page content.
            </p>
          </header>

          <div className="finding-detail__layout">
            <div className="finding-detail__video-wrapper">
              <video
                className="finding-detail__video"
                controls
                preload="metadata"
                poster="/assets/video-covers/skip-to-main-content-cover.jpg"
              >
                <source
                  src="/assets/videos/skip-to-main-content.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>

            <div className="finding-detail__content">
              <section className="finding-detail__section">
                <h2>What Is It?</h2>
                <p>
                  A skip link allows keyboard users to bypass repetitive
                  navigation and jump directly to the main content.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Why It Matters</h2>
                <p>
                  Without a skip link, keyboard users may need to tab through
                  every navigation item on each page.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>How To Test</h2>
                <ol className="finding-detail__steps">
                  <li>Load the page.</li>
                  <li>Press Tab.</li>
                  <li>Verify the skip link appears.</li>
                  <li>Activate the link.</li>
                  <li>Confirm focus moves to main content.</li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>Related Skills</h2>

                <ul className="finding-detail__skills">
                  <li>Accessibility Testing</li>
                  <li>Keyboard Navigation</li>
                  <li>Manual QA</li>
                </ul>
              </section>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default SkipToMainContentPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Skip to Main Content Accessibility Finding"
    description="A practical accessibility finding showing how skip links help keyboard users bypass repetitive navigation and reach main content faster."
    pathname={location?.pathname}
  />
)
