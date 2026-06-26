import React, { useState } from "react"
import ToolsList from "./ToolsList"
import ProjectList from "./ProjectsList"
import { graphql, useStaticQuery, navigate } from "gatsby"

const query = graphql`
  {
    allContentfulPortfolio(sort: { title: ASC }) {
      nodes {
        id
        title
        tags
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        imageAltText
      }
    }
  }
`

const AllProjects = ({ location }) => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulPortfolio.nodes

  const params = new URLSearchParams(location?.search || "")
  const initialTag = params.get("tag") || null

  const [selectedTag, setSelectedTag] = useState(initialTag)

  const handleSelect = tag => {
    setSelectedTag(tag)
    if (tag) {
      navigate(`/work?tag=${encodeURIComponent(tag)}`, { replace: true })
    } else {
      navigate("/work", { replace: true })
    }
  }

  const filteredProjects = selectedTag
    ? projects.filter(p => p.tags && p.tags.includes(selectedTag))
    : projects

  return (
    <div className="portfolio-layout">
      <ToolsList
        projects={projects}
        selectedTag={selectedTag}
        onSelect={handleSelect}
      />
      <section key={selectedTag ?? "all"} aria-label="Projects" className="projects-section">
        <ProjectList projects={filteredProjects} selectedTag={selectedTag} />
      </section>
    </div>
  )
}

export default AllProjects
