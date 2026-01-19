import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const ServiceThankYou = () => {
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
              If you need anything urgent, feel free to reach out directly at{" "}
              <Link className="service-link" to="/contact">
                Contact
              </Link>
              . Looking forward to connecting. — Shaun
            </p>
          </div>
        </section>

        {/* Optional: keep the section for layout consistency without Contentful */}
        <section className="featured-projects">
          <article className="contact-info">
            <h3 className="section-title">In the meantime</h3>
            <p>
              If you have additional details to share, reply to your
              confirmation email or send a follow-up message via the contact
              page.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default ServiceThankYou
