import React from "react"
import SEOmeta from "../components/SEOmeta"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaArrowRight } from "react-icons/fa"
import { extractTextFromRaw } from "../utils/extractTextFromRaw"
import { getGridClasses } from "../utils/gridColumns"

// Plain text of a rich-text node, so a link with bold or italic text inside it
// still gets a full accessible name.
const getNodeText = node =>
  node.value ?? (node.content || []).map(getNodeText).join("")

const options = {
  renderNode: {
    // Links open in a new tab, so the accessible name says so (same pattern
    // as Footer.js). aria-label replaces the link text for screen readers,
    // so it repeats the full text first.
    hyperlink: (node, children) => {
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="richtext-link"
          aria-label={`${getNodeText(node)} | Opens in new tab`}
        >
          {children}
        </a>
      )
    },
  },
}

const ProjectTemplate = ({ data, location }) => {
  const {
    title,
    description,
    tags,
    image,
    imageAltText,
    portfolioCards,
  } = data.contentfulPortfolio
  const pathToImage = getImage(image)

  const fromTag = location?.state?.fromTag
  const backLink = fromTag
    ? `/work?tag=${encodeURIComponent(fromTag)}`
    : "/work"
  const backLabel = fromTag ? `← Back to ${fromTag}` : "← Back to Work"

  return (
    <Layout>
      <div className="page">
        <div className="project-page">
          <Link to={backLink} className="project-back-link">
            {backLabel}
          </Link>
          {/* Hero */}
          <section className="project-hero">
            <span className="frame">
              <GatsbyImage
                image={pathToImage}
                alt={imageAltText || image?.description || title}
                className="project-feature-img"
                imgStyle={{ objectFit: "contain" }}
              />
            </span>
            <article className="project-info">
              <h1>{title}</h1>
              {description &&
                documentToReactComponents(JSON.parse(description.raw), options)}
              {tags && tags.length > 0 && (
                <div className="project-tools">
                  <p id="project-tools-label" className="project-tools__label">
                    Built with
                  </p>
                  {/* role="list" keeps list semantics in Safari/VoiceOver,
                      which drops them when list-style is none. */}
                  <ul
                    className="project-tools__list"
                    role="list"
                    aria-labelledby="project-tools-label"
                  >
                    {tags.map(tag => (
                      <li key={tag} className="project-tools__item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </section>

          {/* Portfolio Cards */}
          <section className="portfolio-cards">
            <div
              className={`cards-container ${getGridClasses(
                portfolioCards?.length || 0
              )}`}
            >
              {portfolioCards &&
                portfolioCards.map((card, index) => (
                  <div key={index} className="card">
                    {card.card?.gatsbyImageData && (
                      <GatsbyImage
                        image={getImage(card.card.gatsbyImageData)}
                        alt={
                          card.interImageAltText ||
                          card.card?.description ||
                          `Card image ${index + 1}`
                        }
                        className="card-image"
                      />
                    )}
                    <div className="card-description">
                      {documentToReactComponents(
                        JSON.parse(card.cardDescription.raw),
                        options
                      )}
                    </div>
                    {card.iterations !== null &&
                      card.iterations !== undefined &&
                      card.iterations !== 0 && (
                        <div className="iterations-count">
                          Iteration: {card.iterations}
                          {index !== portfolioCards.length - 1 && (
                            <FaArrowRight
                              className="iteration-arrow"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      )}
                  </div>
                ))}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePortfolio($title: String) {
    contentfulPortfolio(title: { eq: $title }) {
      title
      description {
        raw
      }
      tags
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        description
        title
      }
      imageAltText
      portfolioCards {
        iterations
        interImageAltText
        cardDescription {
          raw
        }
        card {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          title
          description
        }
      }
    }
  }
`

export const Head = ({ data }) => {
  const { title, description } = data.contentfulPortfolio
  return (
    <SEOmeta
      title={title}
      description={description?.raw ? extractTextFromRaw(description.raw) : ""}
    />
  )
}

export default ProjectTemplate
