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

  const fallbackTitle =
    "Accessibility Auditor + Manual QA Specialist | Shaun Vine"

  const fallbackDescription =
    "CPACC Certified Accessibility Auditor and Manual QA Specialist helping organizations identify accessibility, usability, and quality issues."

  const siteTitle = site.siteMetadata.title || fallbackTitle
  const siteDescription =
    site.siteMetadata.siteDescription || fallbackDescription

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
          "@type": "ProfessionalService",
          "@id": `${siteUrl}#business`,
          name: "Shaun Vine Accessibility and Manual QA",
          url: siteUrl,
          image: imageUrl || undefined,
          description: fallbackDescription,
          founder: { "@id": `${siteUrl}#person` },
          sameAs: ["https://www.linkedin.com/in/shaunvine"],
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteUrl}#person`,
          name: "Shaun D. Vine",
          jobTitle: "Accessibility Auditor and Manual QA Specialist",
          url: siteUrl,
          worksFor: { "@id": `${siteUrl}#business` },
          sameAs: ["https://www.linkedin.com/in/shaunvine"],
        },
      ]
    : null

  return (
    <>
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
