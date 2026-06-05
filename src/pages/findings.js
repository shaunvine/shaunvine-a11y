import React from "react"
import Layout from "../components/Layout"
import SEOmeta from "../components/SEOmeta"
import AccessibilityFindings from "../components/AccessibilityFindings"

const FindingsPage = () => {
  return (
    <Layout>
      <main className="page findings-page">
        <header className="findings-page__header">
          <h1 className="section-title">Accessibility Findings</h1>

          <p className="findings-page__intro">
            Short accessibility and QA reviews demonstrating common issues and
            practical testing techniques.
          </p>
        </header>

        <AccessibilityFindings showHeader={false} />
      </main>
    </Layout>
  )
}

export default FindingsPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Accessibility Findings"
    description="Accessibility and QA findings from practical website testing, including keyboard navigation, focus management, screen reader testing, and usability review."
    pathname={location?.pathname}
  />
)
