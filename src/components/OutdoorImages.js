import React from "react"
import OutdoorList from "./OutdoorList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulOutdoorImages {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
        altText
      }
    }
  }
`
const AllOutdoors = () => {
  const data = useStaticQuery(query)
  const outdoors = data.allContentfulOutdoorImages.nodes
  return (
    <section>
      <OutdoorList outdoors={outdoors} />
    </section>
  )
}

export default AllOutdoors
