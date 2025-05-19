import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ClientFeedback from "../components/ClientFeedback"
import OutdoorImages from "../components/OutdoorImages"
import SEOmeta from "../components/SEOmeta"

const About = () => {
  return (
    <Layout>
      <SEOmeta
        title="About Shaun Vine | Manual QA Tester & Accessibility Consultant in Seattle"
        description="Shaun Vine is a Seattle-based Manual QA Tester and Accessibility Consultant helping businesses improve website quality, usability, and compliance. Learn more about his approach and experience."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="about-page">
          <article className="about-info">
            <span className="about-subhead">Overview:</span>
            <span>
              <ul>
                <li>
                  Shaun is a Web Content Engineer and Manual QA tester with 8
                  years experience.
                </li>
              </ul>
            </span>
            <span className="about-subhead">Recent work:</span>
            <span>
              <ul>
                <li>
                  Major contributor and driver in the timely launch of the
                  redesign of a website for a large Medical Industry Client.
                </li>
                <li>
                  Part of the team who drove the QA and Content facets of the
                  project.
                </li>
              </ul>
            </span>
            <span className="about-subhead"> Skills:</span>
            <span>
              <ul>
                <li>
                  Manage the coordination of website content, ensuring content
                  adheres to the client's design specifications.
                </li>
                <li>
                  Perform manual QA tests, report bugs and validate bug fixes.
                </li>
                <li>
                  Interface with the Creative and Development teams throughout
                  the course of projects.
                </li>
              </ul>
            </span>
          </article>
          <article>
            <StaticImage
              src="../assets/images/About.png"
              alt="Shaun Vine in Snowboarding gear climbing a mountain with friends"
              className="about-img"
              placeholder="blurred"
            />
          </article>
        </section>
        <section className="featured-projects">
          <ClientFeedback />
        </section>
        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default About
