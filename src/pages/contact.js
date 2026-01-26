// src/pages/contact.js
import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import OutdoorImages from "../components/OutdoorImages"
import SEOmeta from "../components/SEOmeta"

const ContactForm = () => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        navigate("/thankyou")
      } else {
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
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h1>Contact Me</h1>
            <h3 className="section-title contact-info">
              Want to get in touch?
            </h3>
            <p>
              Please complete the form and I will respond to your message within
              one business day.
            </p>
            <p>Thanks, Shaun</p>
          </article>

          <article>
            <form
              className="form a11y-form contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <label htmlFor="name">
                  your name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
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
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
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

        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default ContactForm

// Gatsby Head API: ONE place per page to output <title> + meta, etc.
export const Head = ({ location }) => (
  <SEOmeta
    title="Contact Form"
    description="Contact Shaun Vine for Manual QA Testing, accessibility audits, or CMS support."
    image="/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname}
    // For non-home pages, you usually do NOT need to repeat LocalBusiness/Person/Service JSON-LD.
    includeJsonLd={false}
  />
)
