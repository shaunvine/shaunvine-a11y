import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import { Link } from "gatsby"
import SEOmeta from "../components/SEOmeta"

const ServiceThankYou = ({ data }) => {
  const projects = data.allContentfulPortfolio.nodes
  return (
    <Layout>
      <main className="page">
        <SEOmeta
          title="Service Thank You"
          description="Thank you for your service request. I will get back to you within 1-2 business days."
          image="/images/shaun-vine-portfolio.jpg"
        />
        <section className="service-thankyou">
          <div>
            <h2>Thanks for submitting your project.</h2>
            <p>
              I’ve received your project info and will get back to you within
              1–2 business days.
            </p>
            <p>
              If you need anything urgent, feel free to reach out directly at
              <Link className="service-link" to="/contact">
                {" "}
                Contact
              </Link>
              . Looking forward to connecting. — Shaun
            </p>
          </div>
        </section>
        <section className="featured-projects">
          <ProjectsList projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPortfolio(
      sort: { title: ASC }
      filter: { featured: { eq: true }, title: {} }
    ) {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

export default ServiceThankYou
