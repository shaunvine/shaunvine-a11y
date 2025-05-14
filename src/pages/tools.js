import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTools from "../utils/setupTools"
import slugify from "slugify"
import SEOmeta from "../components/SEOmeta"


const pluralize = (value, word) =>
  value === 1 ? `${value} ${word}` : `${value} ${word}s`

const Tools = ({ data }) => {
  const newTools = setupTools(data.allContentfulPortfolio.nodes)

  return (
    <Layout>
      <SEOmeta
        title="Tools used in Projects"
        description="Explore the tools used in my projects. From web development to design, discover the technologies that power my work."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="tools-page">
          {newTools.map((tool, index) => {
            const [text, value] = tool
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tools/${slug}`} key={index} className="tool">
                <h5>{text}</h5>
                <p>{pluralize(value, "project")}</p> {/* Pluralize 'project' */}
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPortfolio {
      nodes {
        tools {
          tools
        }
      }
    }
  }
`

export default Tools
