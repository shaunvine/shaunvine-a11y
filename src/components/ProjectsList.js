import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

// Picks a column count so the last row is never a single orphan card.
// Prefers a count that divides the cards evenly, then one that leaves at
// least two cards in the last row. Returns null if nothing suits.
const pickColumns = (count, allowed) => {
  const fits = allowed.filter(c => c <= count)
  return (
    fits.find(c => count % c === 0) ?? fits.find(c => count % c !== 1) ?? null
  )
}

// maxColumns is the widest grid allowed from 75em: 3 beside the Work page
// sidebar, 4 where the grid has the full page width (homepage).
const ProjectsList = ({
  projects = [],
  selectedTag,
  className = "",
  maxColumns = 3,
}) => {
  const count = projects.length
  // From 48em: 2 columns, or 1 if 2 would leave an orphan (3, 5, 7 cards).
  const midColumns = pickColumns(count, [2]) ?? 1
  // From 75em: the widest allowed count that leaves no orphan. If none does,
  // take the widest that fits rather than dropping to one column.
  const largeAllowed = [4, 3, 2].filter(c => c <= maxColumns)
  const largeColumns =
    pickColumns(count, largeAllowed) ??
    largeAllowed.find(c => c <= count) ??
    1
  const gridClasses = `projects-list--md-${midColumns} projects-list--lg-${largeColumns}`

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
