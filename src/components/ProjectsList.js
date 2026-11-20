import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { getGridClasses } from "../utils/gridColumns"

// maxColumns is the widest grid allowed from 75em: 3 beside the Work page
// sidebar, 4 where the grid has the full page width (homepage).
const ProjectsList = ({
  projects = [],
  selectedTag,
  className = "",
  maxColumns = 3,
}) => {
  const gridClasses = getGridClasses(projects.length, maxColumns)

  return (
    <div className={`projects-list ${gridClasses} ${className}`.trim()}>
      {projects.map(project => {
        const { id, title, image, imageAltText } = project
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link
            key={id}
            to={`/${slug}`}
            className="project"
            state={{ fromTag: selectedTag }}
          >
            <GatsbyImage
              image={pathToImage}
              className="project-img"
              alt={imageAltText || title}
            />
            <span className="project-title">{title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectsList
