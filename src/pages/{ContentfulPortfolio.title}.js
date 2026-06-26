import React from "react"
import SEOmeta from "../components/SEOmeta"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaArrowRight } from "react-icons/fa"
import { extractTextFromRaw } from "../utils/extractTextFromRaw"

const options = {
  renderNode: {
    hyperlink: node => {
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {node.content[0].value}
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
      <main className="page">
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
              <h2>{title}</h2>
              {description &&
                documentToReactComponents(JSON.parse(description.raw), options)}
              {tags && tags.length > 0 && (
                <p className="project-tools">
                  {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </p>
              )}
            </article>
          </section>

          {/* Portfolio Cards */}
          <section className="portfolio-cards">
            <div className="cards-container">
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
                        JSON.parse(card.cardDescription.raw)
                      )}
                    </div>
                    {card.iterations !== null &&
                      card.iterations !== undefined &&
                      card.iterations !== 0 && (
                        <div className="iterations-count">
                          Iteration: {card.iterations}
                          {index !== portfolioCards.length - 1 && (
                            <FaArrowRight className="iteration-arrow" />
                          )}
                        </div>
                      )}
                  </div>
                ))}
            </div>
          </section>

        </div>
      </main>
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
