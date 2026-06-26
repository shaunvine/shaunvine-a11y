import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const ProjectsList = ({ projects = [], selectedTag }) => {
  return (
    <div className="projects-list">
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
