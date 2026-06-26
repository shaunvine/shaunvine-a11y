import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"

const Work = ({ location }) => {
  return (
    <Layout>
      <div className="page">
        <header className="findings-page__header">
          <h1 className="section-title">Work</h1>
        </header>
        <AllProjects location={location} />
      </div>
    </Layout>
  )
}

export default Work

export const Head = ({ location }) => (
  <SEOmeta
    title="Work and Projects | Shaun Vine"
    description="Explore a collection of professional projects spanning web design, QA, accessibility, and CMS work."
    pathname={location?.pathname}
  />
)
