import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteDescription
        siteUrl
        defaultImage
      }
    }
  }
`

const SEOmeta = ({
  title,
  description,
  image,
  pathname = "/",
  lang = "en",
  includeJsonLd = false,
}) => {
  const { site } = useStaticQuery(query)

  const siteTitle = site.siteMetadata.title
  const siteDescription = site.siteMetadata.siteDescription
  const siteUrl = site.siteMetadata.siteUrl?.replace(/\/$/, "") || ""
  const defaultImage = site.siteMetadata.defaultImage || ""

  const metaDescription = (description || siteDescription || "").trim()
  const pageTitle = title ? `${title} — ${siteTitle}` : siteTitle

  const safePath = pathname?.startsWith("/") ? pathname : `/${pathname || ""}`
  const canonicalUrl = `${siteUrl}${safePath}`

  const imagePath = image || defaultImage || ""
  const imageUrl = imagePath
    ? `${siteUrl}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`
    : null

  const jsonLd = includeJsonLd
    ? [
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${siteUrl}#business`,
          name: "Shaun D. Vine – Manual QA & Accessibility Services",
          url: siteUrl,
          image: imageUrl || undefined,
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
          founder: { "@id": `${siteUrl}#person` },
          sameAs: ["https://www.linkedin.com/in/shaunvine"],
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteUrl}#person`,
          name: "Shaun D. Vine",
          jobTitle: "Manual QA Tester & Accessibility Consultant",
          url: siteUrl,
          worksFor: { "@id": `${siteUrl}#business` },
          sameAs: ["https://www.linkedin.com/in/shaunvine"],
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Manual QA Testing",
          serviceType: "Website Quality Assurance",
          provider: { "@id": `${siteUrl}#business` },
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
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "CMS Management",
          serviceType: "Content Management Services",
          provider: { "@id": `${siteUrl}#business` },
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
            "Custom CMS updates, plugin maintenance, content entry, and layout QA for WordPress, Contentful, Optimizely, and other platforms.",
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Accessibility Audits",
          serviceType: "Website Accessibility Evaluation",
          provider: { "@id": `${siteUrl}#business` },
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
            "Website audits for accessibility compliance with WCAG, including keyboard navigation, screen reader testing, and color contrast.",
        },
      ]
    : null

  return (
    <>
      {/* Gatsby Head API: set html attributes like this */}
      <html lang={lang} />

      <title>{pageTitle}</title>

      {metaDescription && <meta name="description" content={metaDescription} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={pageTitle} />
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  )
}

export default SEOmeta
