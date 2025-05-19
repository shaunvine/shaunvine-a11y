import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Skills from "../components/Skills"
import AllProjects from "../components/AllProjects"
import ClientFeedback from "../components/ClientFeedback"
import SEOmeta from "../components/SEOmeta"

const IndexPage = () => {
  return (
    <Layout>
      <SEOmeta
        title="Website QA, Accessibility Audits & CMS Help | Shaun Vine"
        description="Seattle-based QA Tester specializing in accessibility audits, manual testing, and CMS support. Reliable, detail-oriented, and results-driven."
        image="/assets/images/shaun-vine-portfolio.jpg"
      />

      <main className="page">
        <header className="hero">
          {/* <div className="hero-container"> */}
          <div className="hero-text">
            <div className="drop-bounce-text">
              <span>
                <h1>Expert QA Testing</h1>
              </span>
              <span>
                <h1>+</h1>
              </span>
              <span className="cms">
                <h1>CMS Content Management</h1>
              </span>
            </div>
            <p className="hire">
              Ensuring flawless digital experiences with 8 years of experience
              in UI/Visual Design, QA Testing, and content workflow
              optimization. Let me help you improve your website performance,
              streamline your CMS, and ensure your content is always error-free.
            </p>
          </div>
          {/* </div> */}
        </header>
        <Services />
        <Skills />
        <ClientFeedback />
        <AllProjects />
      </main>
    </Layout>
  )
}

export default IndexPage
