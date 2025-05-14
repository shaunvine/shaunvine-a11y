import React, { useState } from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import SEOmeta from "../components/SEOmeta"

const ServicerequestForm = ({ data }) => {
  const projects = data.allContentfulPortfolio.nodes
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    servicetype: "",
    description: "",
    website: "",
    startDate: "",
    budget: "",
    referral: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/mnndqpew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Successful form submission
        navigate("/service-thankyou")
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
        title="Service Request"
        siteDescription="This is the Service Request form for Shaun Vine Design and QA Services"
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="service-request-page">
          <article className="ervice-request-info">
            <h3>Ready to get started? </h3>
            <h3>Need a custom Quote?</h3>
            <p className="service-request-intro">
              Whether you need expert QA testing or CMS content management, I am
              here to help. Fill out the form below with a few project details
              so I can better understand your goals and needs. Once submitted,
              I’ll review everything and follow up within 1–2 business days to
              schedule next steps.
            </p>
            <div>Thanks,</div>
            <div>Shaun</div>
          </article>
          <article>
            <form className="service-form contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">
                  your name<sup aria-hidden="true">*</sup>
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
                  your email<sup aria-hidden="true">*</sup>
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
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  aria-label="Company/Organization"
                  placeholder="Company/Organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="servicetype">
                  Service Type<sup aria-hidden="true">*</sup>
                </label>
                <select
                  name="servicetype"
                  id="servicetype"
                  aria-label="Select Service Type"
                  aria-required="true"
                  value={formData.servicetype}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select One</option>
                  <option value="Manual QA Testing">Manual QA Testing</option>
                  <option value="CMS Content Management">
                    CMS Content Management
                  </option>
                  <option value="Website Design / Visual QA">
                    Website Design / Visual QA
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="description">
                  Description of your project<sup aria-hidden="true">*</sup>
                </label>
                <textarea
                  name="description"
                  id="description"
                  aria-label="Description of your project"
                  aria-required="true"
                  placeholder="Description of your project"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <label htmlFor="website">
                  your website address<sup aria-hidden="true">*</sup>
                  <span className="website-lower-case">
                    (https://your-website.com)
                  </span>
                </label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  aria-label="Your Website Address"
                  aria-required="true"
                  placeholder="https://your-website.com"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="start-date">
                  Ideal Start Date (Use the date picker)
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="start-date"
                  aria-label="Your Ideal Start Date"
                  placeholder="Your Ideal Start Date"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  onKeyDown={e => e.preventDefault()} // disables typing
                />
              </div>
              <div className="form-row">
                <label htmlFor="budget">budge range Type</label>
                <select
                  name="budget"
                  id="budget"
                  aria-label="Budget Range"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select One</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                  <option value="$2,500 – $5,000"> $2,500 – $5,000</option>
                  <option value="$5,000 – $10,000"> $5,000 – $10,000</option>
                  <option value="Over $10,000"> Over $10,000</option>
                  <option value="Not sure yet"> Not sure yet</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="referral">
                  How did you hear about me?<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="referral"
                  id="referral"
                  aria-label="How did you hear about me?"
                  aria-required="true"
                  placeholder="How did you hear about me?"
                  value={formData.referral}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn block"
                aria-label="Start My Project"
              >
                Start My Project
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

export default ServicerequestForm
