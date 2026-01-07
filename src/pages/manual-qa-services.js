import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import SEOmeta from "../components/SEOmeta"
import { FaCheck } from "react-icons/fa"
import { Link } from "gatsby"

const QaServices = ({
  data: {
    allContentfulPortfolio: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEOmeta
        title="Manual QA Testing for Websites | Shaun Vine – Expert Website Quality Assurance"
        description="Ensure your website is bug-free, user-friendly, and fully functional with expert Manual QA Testing. Shaun Vine provides detailed hands-on website testing tailored to improve usability and performance."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="qa-page">
          <article className="qa-info">
            <span className="qa-subhead">
              <h1>Flawless User Experiences, One Click at a Time</h1>
            </span>
            <span className="qa-intro">
              In today’s digital world, every broken link or layout glitch can
              cost you users. I offer comprehensive manual QA testing services
              to make sure your site works exactly as intended—on major
              browsers, the latest devices, every time. From detailed bug
              reporting to accessibility audits, I ensure your site is
              launch-ready and rock solid.
            </span>
            <Link
              to="/service-request"
              className="request-quote-btn"
              aria-label="Start your project by filling out the project form"
            >
              Start Your Project
            </Link>
          </article>
          <article className="qa-intro-img">
            <StaticImage
              src="../assets/images/QA-service.png"
              alt="Image of a keyboard and a computer screen with a QA testing interface"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
        </section>
        <section className="qa-services">
          <span className="qa-subhead">
            <h2>What’s Included:</h2>
          </span>
        </section>
        {/* Start Servives Blade 1 */}
        <section className="qa-included-page">
          <article>
            <StaticImage
              src="../assets/images/Cloud-2.jpg"
              alt="Word cloud displaying thirty terms related to Manual QA services, including test cases, bug reports, regression testing, usability, and quality assurance"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
          <article className="qa-included">
            <span>
              <h3>Functional & Compatibility Testing</h3>
              <h4>Ensures your site behaves as expected</h4>

              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Cross-browser and cross-device testing</strong>
                  <ul>
                    <li>
                      Your website is tested across major browsers (Chrome,
                      Edge, Safari, Firefox) and modern devices (desktop,
                      tablet, and mobile) to guarantee a consistent user
                      experience.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>Pre-launch checks and post-update validation</strong>
                  <ul>
                    <li>
                      I provide a final sweep before site launches or content
                      goes live, catching last-minute issues that automated
                      tools may miss.
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </article>
        </section>
        {/* End Servives Blade 1 */}
        {/* Start Servives Blade 2 */}
        <section className="qa-included-page hide-desktop">
          <article className="qa-included">
            <span>
              <h3>Accessibility & Visual Consistency</h3>
              <h4>
                Makes your website usable for all visitors and visually aligned
                with your brand
              </h4>
              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Accessibility compliance (WCAG standards)</strong>
                  <ul>
                    <li>
                      Your website is reviewed against accessibility guidelines
                      to ensure it’s inclusive and meets industry compliance
                      standards.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>UI/UX consistency and visual QA</strong>
                  <ul>
                    <li>
                      I compare live pages to design mocks or brand guidelines
                      to catch layout bugs, spacing issues, and UI
                      inconsistencies.
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </article>
          <article className="qa-column">
            <StaticImage
              src="../assets/images/Accessibility.jpg"
              alt="Word cloud displaying thirty terms related to Manual QA services, including test cases, bug reports, regression testing, usability, and quality assurance"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
        </section>
        {/* End Servives Blade 2 */}
        {/* Start Servives Blade 3 */}
        <section className="qa-included-page">
          <article>
            <StaticImage
              src="../assets/images/QA-Process-Communication.jpg"
              alt="Word cloud displaying thirty terms related to Manual QA services, including test cases, bug reports, regression testing, usability, and quality assurance"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
          <article className="qa-included">
            <span>
              <h3>QA Process & Communication</h3>
              <h4>
                Supports your internal team with accurate, documented testing
                workflows
              </h4>
              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Manual QA for CMS-driven content</strong>
                  <ul>
                    <li>
                      I check all CMS-published pages for content accuracy,
                      formatting, and broken links to ensure a seamless end-user
                      experience.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong className="qa-custom-indent">
                    Documented bugs & Dev Team sync
                  </strong>
                  <ul>
                    <li>
                      You'll receive detailed test cases and bug reports, with
                      direct communication to developers to streamline fixes.
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </article>
        </section>
        {/* End Servives Blade 3 */}
        {/* Pricing Overview Blade */}
        <section className="pricing-blade">
          <article className="qa-included">
            <h2>Pricing Overview</h2>
            <span>
              <h3 className="services-divider">
                Manual QA Testing services are flexible and tailored to your
                project size and scope.
              </h3>
              <ul className="pricing-service-includes-list">
                <li>
                  <span className="li-icon-wrapper-price">
                    <FaCheck className="list-icon" />
                    Cross-browser and cross-device testing
                  </span>
                  <ul className="list-custom-style-none">
                    <li className="list-custom-style">
                      Starting at $300.00/USD
                    </li>
                    <li className="list-custom-style">
                      For basic QA of up to 3 pages or screens, including
                      cross-browser testing, accessibility review, and visual
                      consistency checks.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="li-icon-wrapper-price">
                    <FaCheck className="list-icon" />
                    Larger projects and ongoing QA support available
                  </span>
                  <ul className="list-custom-style-none">
                    <li className="list-custom-style">
                      Custom quotes provided after a project review.
                    </li>
                  </ul>
                </li>
              </ul>
              <Link
                to="/service-request"
                className="request-quote-btn"
                aria-label="Request a custom quote by filling out the project form"
              >
                Request Custom Quote
              </Link>
            </span>
          </article>
        </section>
        {/* End Pricing Overview Blade */}
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
      }
    }
  }
`

export default QaServices
