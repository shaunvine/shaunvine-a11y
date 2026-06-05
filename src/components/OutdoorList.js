import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OutdoorList = ({ outdoors = [] }) => {
  return (
    <div className="outdoor-list">
      {outdoors.map((outdoor, index) => {
        const { id, title, image, altText } = outdoor
        const pathToImage = getImage(image)

        return (
          <GatsbyImage
            key={id || title || index} // Prefer a unique id if available
            image={pathToImage}
            className="outdoor-img"
            alt={altText || title} // Use imageAlt, fallback
          />
        )
      })}
    </div>
  )
}

export default OutdoorList
