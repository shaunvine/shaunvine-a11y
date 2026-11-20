import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProjectsList from "./ProjectsList"

// Only Portfolio entries with "featured" switched on in Contentful, max 4.
// Sorted by title, the same order as the Work page.
const query = graphql`
  {
    allContentfulPortfolio(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
      limit: 4
    ) {
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

const SelectedWork = () => {
  const projects = useStaticQuery(query).allContentfulPortfolio.nodes

  // Nothing featured: render nothing at all, so there is no orphaned heading.
  if (projects.length === 0) return null

  return (
    <section className="selected-work" aria-labelledby="selected-work-heading">
      <div className="section-header section-header--center">
        <h2 id="selected-work-heading" className="section-title">
          Selected work
        </h2>
      </div>

      {/* Full page width here, so up to 4 columns are allowed. ProjectsList
          picks the count so the last row is never a single orphan card. */}
      <ProjectsList
        projects={projects}
        maxColumns={4}
        className="selected-work__grid"
      />

      <p className="selected-work__more">
        <Link to="/work" className="selected-work__link">
          See all work
        </Link>
      </p>
    </section>
  )
}

export default SelectedWork
