import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"

const Work = () => {
  return (
    <Layout>
      <SEOmeta
        title="Home"
        description="Explore a collection of professional logo designs and responsive websites crafted for diverse brands. From visual identity to full web presence, see how design and function come together."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <AllProjects />
      </main>
    </Layout>
  )
}

export default Work
