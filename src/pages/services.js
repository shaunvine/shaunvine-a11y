import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import Services from "../components/Services"
import HowIWork from "../components/HowIWork"

const ServicesPage = () => {
  return (
    <Layout>
      <div className="page">
        <header className="findings-page__header">
          <h1 className="section-title">Services</h1>
          <p className="findings-page__intro">
            Detail-oriented, remote-friendly support for teams that need things
            done right.
          </p>
        </header>
        <Services />
        <HowIWork />
      </div>
    </Layout>
  )
}

export default ServicesPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Services | Shaun Vine"
    description="Accessibility audits, manual QA testing, and CMS management. Remote-friendly services for teams that care about quality."
    image="/assets/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname || "/services"}
    includeJsonLd={false}
  />
)
