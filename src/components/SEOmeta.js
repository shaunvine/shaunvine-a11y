// SEO set up with Gatsby plugin react helmet: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby%20plugin%20react%20hel

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteDescription
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.siteDescription
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl || ""
  const imageUrl = image ? `${siteUrl}${image}` : null

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
      meta={[
        { name: "description", content: metaDescription },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Open Graph
        { property: "og:title", content: `${title} | ${siteTitle}` },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl },
        { property: "og:locale", content: "en_US" },
        imageUrl && { property: "og:image", content: imageUrl },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${title} | ${siteTitle}` },
        { name: "twitter:description", content: metaDescription },
        imageUrl && { name: "twitter:image", content: imageUrl },
      ].filter(Boolean)} // remove null values
    />
  )
}

export default SEO
