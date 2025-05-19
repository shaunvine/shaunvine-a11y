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

  const imagePath = "/assets/images/About.png" // your relative path
  const fullImageUrl = `${siteUrl}${imagePath}` // becomes full URL

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shaun D. Vine",
    url: "https://shaunvine.com",
    image: fullImageUrl, // replace with actual image path
    jobTitle: "Manual QA Tester & Accessibility Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Shaun Vine",
    },
    sameAs: ["https://www.linkedin.com/in/shaunvine"],
    description:
      "I offer Manual QA Testing, Accessibility Audits (WCAG), and CMS support for businesses, agencies, and developers.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
  }

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="en_US" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={metaDescription} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
