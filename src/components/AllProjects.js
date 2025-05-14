import React from "react"
import ToolsList from "./ToolsList"
import ProjectList from "./ProjectsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulPortfolio(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        tools {
          tools
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        imageAltText
      }
    }
  }
`
const AllProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulPortfolio.nodes
  return (
    <section className="portfolio-container">
      <ToolsList projects={projects} />
      <ProjectList projects={projects} />
    </section>
  )
}

export default AllProjects
