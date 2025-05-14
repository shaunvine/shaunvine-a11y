import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEOmeta from "../components/SEOmeta"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaArrowRight } from "react-icons/fa"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    description,
    tools: { tools },
    image,
    portfolioCards, // Added portfolioCards
  } = data.contentfulPortfolio
  const pathToImage = getImage(image)

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

  return (
    <Layout>
      <SEOmeta title={title} description={description} />
      <main className="page">
        <div className="project-page">
          {/* hero */}
          <section className="project-hero">
            <span className="frame">
              <GatsbyImage
                image={pathToImage}
                alt={image?.description ? image.description : title}
                className="about-img"
              />
            </span>
            <article className="project-info">
              <h2>{title}</h2>
              {description &&
                documentToReactComponents(JSON.parse(description.raw), options)}
              <p className="project-tools">
                Tools :
                {tools.map((tool, index) => {
                  const slug = slugify(tool, { lower: true })
                  return (
                    <Link to={`/tools/${slug}`} key={index}>
                      {tool}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>

          {/* Portfolio Cards Section */}
          <section className="portfolio-cards">
            {/* <h3>Portfolio Cards</h3> */}
            <div className="cards-container">
              {portfolioCards &&
                portfolioCards.map((card, index) => (
                  <div key={index} className="card">
                    {/* Render Card Image */}
                    {card.card?.gatsbyImageData && (
                      <GatsbyImage
                        image={getImage(card.card.gatsbyImageData)}
                        alt={
                          card.card?.description
                            ? card.card.description
                            : `Card image ${index + 1}`
                        }
                        className="card-image"
                      />
                    )}
                    {/* Render Card Description */}
                    <div className="card-description">
                      {documentToReactComponents(
                        JSON.parse(card.cardDescription.raw)
                      )}
                    </div>
                    {/* Display Iterations Field (Only if it has a value) */}
                    {card.iterations !== null &&
                      card.iterations !== undefined &&
                      card.iterations !== 0 && (
                        <div className="iterations-count">
                          Iteration: {card.iterations}
                          {/* Add arrow icon only if it's not the last card */}
                          {index !== portfolioCards.length - 1 && (
                            <FaArrowRight className="iteration-arrow" />
                          )}
                        </div>
                      )}
                  </div>
                ))}
            </div>
          </section>

          {/* Rest of the content */}
          <section className="project-content">
            <Link to="/projects" className="project-link">
              Projects
            </Link>
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
      tools {
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        description # Added this field for alt text
        title # Added this to get the actual image title
      }
      portfolioCards {
        iterations
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

export default ProjectTemplate
