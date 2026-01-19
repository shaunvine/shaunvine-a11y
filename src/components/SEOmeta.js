import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

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
  const location = useLocation()

  const metaDescription = description || site.siteMetadata.siteDescription
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl || ""

  // Build a single pageTitle value for everything
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle

  const canonicalUrl = `${siteUrl}${location.pathname}`
  const imageUrl = image ? `${siteUrl}${image}` : null

  const imagePath = "/assets/images/About.png" // your relative path
  const fullImageUrl = `${siteUrl}${imagePath}` // becomes full URL

  const jsonLd = [
    // LocalBusiness schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://shaunvine.com#business",
      name: "Shaun D. Vine – Manual QA & Accessibility Services",
      url: "https://shaunvine.com",
      image: fullImageUrl,
      description:
        "Manual QA Testing, Accessibility Audits (WCAG), and CMS support for businesses, agencies, and developers in Seattle.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "WA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.6062,
        longitude: -122.3321,
      },
      founder: {
        "@id": "https://shaunvine.com#person",
      },
      sameAs: ["https://www.linkedin.com/in/shaunvine"],
    },

    // Person schema
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://shaunvine.com#person",
      name: "Shaun D. Vine",
      jobTitle: "Manual QA Tester & Accessibility Consultant",
      url: "https://shaunvine.com",
      worksFor: {
        "@id": "https://shaunvine.com#business",
      },
      sameAs: ["https://www.linkedin.com/in/shaunvine"],
    },

    // Service: Manual QA Testing
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Manual QA Testing",
      serviceType: "Website Quality Assurance",
      provider: {
        "@id": "https://shaunvine.com#business",
      },
      areaServed: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seattle",
          addressRegion: "WA",
          addressCountry: "US",
        },
      },
      description:
        "Manual website testing for usability, broken links, responsive design, cross-browser and functional QA before launch.",
    },

    // Service: CMS Management
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "CMS Management",
      serviceType: "Content Management Services",
      provider: {
        "@id": "https://shaunvine.com#business",
      },
      areaServed: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seattle",
          addressRegion: "WA",
          addressCountry: "US",
        },
      },
      description:
        "Custom CMS updates, plugin maintenance, content entry, and layout QA for WordPress, Contentful, Optmizely, and other platforms.",
    },

    // Service: Accessibility Audits
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Accessibility Audits",
      serviceType: "Website Accessibility Evaluation",
      provider: {
        "@id": "https://shaunvine.com#business",
      },
      areaServed: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seattle",
          addressRegion: "WA",
          addressCountry: "US",
        },
      },
      description:
        "Website audits for accessibility compliance with WCAG 2.1, including keyboard navigation, screen reader testing, and color contrast.",
    },
  ]

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={pageTitle}>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
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
