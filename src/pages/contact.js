import React, { useState } from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import SEOmeta from "../components/SEOmeta"

const ContactForm = ({ data }) => {
  const projects = data.allContentfulPortfolio.nodes
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/mleqabja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Successful form submission
        navigate("/thankyou")
      } else {
        // Handle error
        console.error("Form submission failed:", response)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <SEOmeta
        title="Contact"
        siteDescription="This is the Contact Page for Shaun Vine Portfolio React App"
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>Please complete the form and I will respond to your message.</p>
            <p>Thanks, Shaun</p>
          </article>
          <article>
            <form className="form contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">
                  your name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="Your Name"
                  aria-required="true"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">
                  your email<sup>*</sup>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  aria-label="Your Email"
                  aria-required="true"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">
                  your message<sup>*</sup>
                </label>
                <textarea
                  name="message"
                  id="message"
                  aria-label="Your Message"
                  aria-required="true"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn block"
                aria-label="Send message"
              >
                Send
              </button>
            </form>
          </article>
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
        imageAltText
      }
    }
  }
`

export default ContactForm
