import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import ClientTestimonils from "../components/ClientTestimonials"
import OutdoorImages from "../components/OutdoorImages"
import Skills from "../components/Skills"

const About = () => {
  return (
    <Layout>
      <main className="page about-page-redesign">
        <section className="about-intro">
          <div className="about-intro__content">
            <p className="about-intro__eyebrow">About My Work</p>

            <h1 className="about-intro__title">
              Creative Technologist
            </h1>

            <p>
              I'm a CPACC-certified Accessibility Auditor and Manual QA
              Specialist working remotely with teams across the US and beyond.
            </p>

            <p>
              For more than 8 years, I've helped teams improve website quality,
              accessibility, and content accuracy through practical testing,
              documentation, and review.
            </p>

            <p>
              My background combines accessibility testing, manual QA, content
              engineering, CMS implementation, and collaboration with design and
              development teams.
            </p>
          </div>

          <div className="about-intro__image">
            <StaticImage
              src="../assets/images/general/about.png"
              alt="Shaun Vine in snowboarding gear climbing a mountain with friends"
              className="about-img"
              placeholder="blurred"
            />
          </div>
        </section>

        <section
          className="about-experience"
          aria-labelledby="about-experience-heading"
        >
          <div className="section-header section-header--center">
            <h2 id="about-experience-heading" className="section-title">
              Experience
            </h2>
          </div>

          <div className="about-experience__grid">
            <article className="about-experience__card">
              <h3>Professional Experience</h3>

              <ul>
                <li>TenGun Design — Content Engineer | QA Specialist</li>
                <li>Designit / Rational — Content Engineer | QA Specialist</li>
                <li>Freelance Website & Graphic Design</li>
                <li>Front-End Website Development</li>
              </ul>
            </article>
          </div>
        </section>

        <Skills />

        <ClientTestimonils />

        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default About

export const Head = ({ location }) => (
  <SEOmeta
    title="About Shaun Vine | Creative Technologist"
    description="Creative Technologist with 8+ years of experience in accessibility, manual QA, CMS implementation, and web design. Working remotely with teams across the US and beyond."
    image="/assets/images/services/shaun-vine-portfolio.jpg"
    pathname={location?.pathname || "/about"}
    includeJsonLd={false}
  />
)
