import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <SEOmeta title="Error" />
      <div className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </div>
    </Layout>
  )
}

export default Error
