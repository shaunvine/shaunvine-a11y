import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const ServiceThankYou = () => {
  return (
    <Layout>
      <main className="page">
        <section className="service-thankyou">
          <div>
            <h1>Thanks for submitting your project.</h1>
            <p>
              I've received your project info and will get back to you within
              1–2 business days.
            </p>
            <p>
              If you need anything urgent, feel free to reach out directly via
              the{" "}
              <Link className="service-link" to="/contact">
                contact page
              </Link>
              . Looking forward to connecting. — Shaun
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const Head = ({ location }) => (
  <SEOmeta
    title="Project Received | Shaun Vine"
    description="Thank you for your service request. I will get back to you within 1–2 business days."
    pathname={location?.pathname}
  />
)

export default ServiceThankYou
