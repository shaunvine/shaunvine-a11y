import React from "react"
import OutdoorList from "./OutdoorList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "outdoors" } }
      sort: { name: ASC }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

const OutdoorImages = () => {
  const data = useStaticQuery(query)

  // Replace these alt texts with your real descriptions
  const ALT = {
    "outdoors-01": "Shaun hiking in the mountains in winter conditions",
    "outdoors-02":
      "Landscape photo from an outdoor trip with mountains in the distance",
    "outdoors-03": "Group outdoors photo during an alpine hike",
  }

  const outdoors = data.allFile.nodes.map(node => ({
    id: node.id,
    title: node.name,
    // IMPORTANT: OutdoorList expects `image` to be compatible with getImage()
    image: node.childImageSharp.gatsbyImageData,
    altText: ALT[node.name] || node.name.replace(/-/g, " "),
  }))

  return (
    <section>
      <OutdoorList outdoors={outdoors} />
    </section>
  )
}

export default OutdoorImages
