// New pages are set up programatically using Gatsby Node APIs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

import React from "react"
import { graphql } from "gatsby"
import ProjectList from "../components/ProjectsList"
import Layout from "../components/Layout"
import SEOmeta from "../components/SEOmeta"

const ToolsTemplate = ({ data, pageContext }) => {
  const projects = data.allContentfulPortfolio.nodes
  return (
    <Layout>
      <SEOmeta title={pageContext.tool} />
      <main className="page">
        <h2>{pageContext.tool}</h2>
        <div className="tools-projects">
          <ProjectList projects={projects} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetProjectByTool($tool: String) {
    allContentfulPortfolio(
      sort: { title: ASC }
      filter: { tools: { tools: { eq: $tool } } }
    ) {
      nodes {
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        imageAltText
      }
    }
  }
`

export default ToolsTemplate
