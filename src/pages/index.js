import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Skills from "../components/Skills"
import AllProjects from "../components/AllProjects"
import ClientFeedback from "../components/ClientFeedback"

const IndexPage = () => {
  return (
    <Layout>
      <SEOmeta
        title="Website QA, Accessibility Audits & CMS Help | Shaun Vine"
        description="Seattle-based QA Tester specializing in accessibility audits, manual testing, and CMS support. Reliable, detail-oriented, and results-driven."
        image="/assets/images/shaun-vine-portfolio.jpg"
      />

      {/* Hero Section */}
      <header className="hero" id="hero" aria-labelledby="hero-heading">
        <div className="hero-text">
          <div className="drop-bounce-text">
            <h1 id="hero-heading">Expert QA Testing</h1>
            <h1>+</h1>
            <h1 className="cms">CMS Content Management</h1>
          </div>
          <p className="hire">
            Ensuring flawless digital experiences with 8 years of experience in
            UI/Visual Design, QA Testing, and content workflow optimization. Let
            me help you improve your website performance, streamline your CMS,
            and ensure your content is always error-free.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="page">
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>

        <section id="client-feedback" aria-labelledby="feedback-heading">
          <ClientFeedback />
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <AllProjects />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
