import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import Why from "../components/WhyAcessibility"
import Specialize from "../components/Specialize"
import Skills from "../components/Skills"
import AllProjects from "../components/AllProjects"
import ClientFeedback from "../components/ClientFeedback"
import CTA from "../components/CTA"
import ServiceBlade from "../components/ServiceBlade"

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
            <h1 id="hero-heading">Digital Accessibility</h1>
            <h1>+</h1>
            <h1 className="cms">Manual QA Specialist</h1>
          </div>
          <h2 className="hero-subhead">
            WCAG 2.2 | AXE & Wave | NVDA | VoiceOver | Cross-Browser QA
          </h2>
          <p className="hire">
            I help businesses eliminate accessibility barriers, improve
            usability, and ensure high-quality digital experiences for all
            users.
          </p>
          <CTA
            href="/contact"
            wrapperClassName="button-group"
            className="request-quote-btn"
            ariaLabel="Request an accessibility consultation with Shaun"
          >
            Request a consultation
          </CTA>
        </div>
      </header>

      {/* Main Content */}
      <main className="page">
        {/* ===== BLADE 2: DARK THEME ===== */}
        <ServiceBlade
          id="why-qa"
          variant="dark"
          title="Dark blade > Why Manual QA Still Matters"
          subtitle="Automation doesn’t catch everything."
          listHeading="Manual QA helps you:"
          items={[
            "See your site the way users actually experience it",
            "Catch visual and content issues automation ignores",
            "Validate complex user journeys end-to-end",
            "Combine functional and accessibility checks in one pass",
          ]}
          footerText="I blend manual QA and accessibility to help you ship confident, inclusive releases."
        />

        {/* ===== BLADE 1: LIGHT THEME ===== */}
        <ServiceBlade
          id="why-accessibility"
          variant="light"
          title="Light Blade > Why Accessibility Matters"
          subtitle="Every user deserves equal access."
          listHeading="But accessibility is also:"
          items={[
            "A legal requirement (ADA, Section 508, AODA, EAA)",
            "A trust signal for customers",
            "A quality signal for search engines",
            "A protection against lawsuits",
            "A way to expand your audience",
          ]}
          footerText="I help organizations identify issues before they become costly risks."
        />

        <ServiceBlade
          id="two-col-example"
          variant="strong"
          layout="two"
          title="A Two Column Blade"
          subtitle="Perfect for icon + text or two balanced blocks."
          columns={[
            <p>This is a block of descriptive text in the first column.</p>,
            <p>This is a block of descriptive text in the second column.</p>,
          ]}
        />

        <ServiceBlade
          id="three-col-stats"
          variant="dark"
          layout="three"
          title="Stats That Matter"
          subtitle="Visual storytelling with icons."
          columns={[

          <p>Left text goes here.</p>,
            <p>Middle explanatory text goes here.</p>,
            <p>Right explanatory text goes here.</p>,
  
          ]}
        />

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
