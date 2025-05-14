import React from "react"
import Layout from "../components/Layout"
import SEOmeta from "../components/SEOmeta"

const Error = () => {
  return (
    <Layout>
      <SEOmeta title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
