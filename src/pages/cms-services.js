import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import SEOmeta from "../components/SEOmeta"
import { FaCheck } from "react-icons/fa"
import { Link } from "gatsby"

const CmsServices = ({
  data: {
    allContentfulPortfolio: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEOmeta
        title="CMS Content Management & QA Services | Shaun Vine"
        description="Keep your website content accurate, optimized, and accessible with expert CMS management services. I handle updates, QA, SEO, and accessibility for WordPress, Contentful, and Optimizely."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="qa-page">
          <article className="qa-info">
            <span className="qa-subhead">
              <h1>Keep Your Website Content Fresh, Accurate, and Error-Free</h1>
            </span>
            <span className="qa-intro">
              Managing content across today’s dynamic digital platforms takes
              more than just publishing—it requires precision, structure, and
              ongoing care. I provide expert CMS content management services to
              help you maintain clean, organized, and accessible content across
              systems like WordPress, Contentful, and Optimizely. I handle the
              updates, structure, and optimization—so your team can stay focused
              on the bigger picture.
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
              src="../assets/images/Contentful-Content-Management-System.jpg"
              alt="Screenshots of different content management system dashboards including WordPress, Contentful, and Optimizely"
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
              src="../assets/images/WordPress-CMS.jpg"
              alt="Screenshots of different content management system dashboards including WordPress, Contentful, and Optimizely"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
          <article className="qa-included">
            <span>
              <h3>Content Implementation & QA</h3>
              <h4>
                Ensure your digital content is implemented accurately and
                functions flawlessly across devices and browsers.
              </h4>
              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Manual QA for CMS-driven content</strong>
                  <ul>
                    <li>
                      Every content update is checked for formatting accuracy,
                      broken links, layout issues, and consistency before and
                      after publishing.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>Pre-launch checks and post-update validation</strong>
                  <ul>
                    <li>
                      We verify that all pages function and display correctly
                      after updates, including final reviews before site or
                      campaign launches.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>Cross-browser and cross-device testing</strong>
                  <ul>
                    <li>
                      Your content is tested on modern browsers and current
                      mobile/tablet devices to ensure consistency and
                      performance across platforms.
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
              <h3>Content Structure & Optimization</h3>
              <h4>
                Make sure your content is structured, styled, and coordinated
                for the best user experience and brand alignment.
              </h4>
              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Page layout & component population</strong>
                  <ul>
                    <li>
                      I’ll place content into the correct CMS components and
                      ensure it’s visually aligned with your design system or
                      brand style guide.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>Content workflow coordination</strong>
                  <ul>
                    <li>
                      I can help manage tasks between content creators, editors,
                      designers, and developers to ensure a smooth publishing
                      process.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong>UI/UX consistency & visual QA</strong>
                  <ul>
                    <li>
                      I check for style alignment, spacing, fonts, and other
                      design details to maintain a polished, user-friendly site
                      experience.
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </article>
          <article className="qa-column">
            <StaticImage
              src="../assets/images/Optimizely-Content-Management-System.jpg"
              alt="Screenshots of different content management system dashboards including WordPress, Contentful, and Optimizely"
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
              src="../assets/images/SEO-Performance.jpg"
              alt="Screenshots of different content management system dashboards including WordPress, Contentful, and Optimizely"
              className="qa-img"
              placeholder="blurred"
            />
          </article>
          <article className="qa-included">
            <span>
              <h3>Optional Add-ons</h3>
              <h4>
                Enhance your content's visibility, compliance, and performance
                with these valuable extras.
              </h4>
              <ul className="qa-custom-indent">
                <li>
                  <FaCheck className="included-check" />
                  <strong>Basic SEO Best Practice Checks</strong>
                  <ul>
                    <li>
                      I’ll review your content for search engine optimization
                      fundamentals—ensuring proper use of heading tags, image
                      alt text, internal linking, and metadata so your content
                      is discoverable and well-structured for SEO.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong className="qa-custom-indent">
                    Accessibility Compliance (WCAG)
                  </strong>
                  <ul>
                    <li>
                      Your content will be checked against accessibility
                      guidelines (WCAG) to ensure it’s inclusive and usable by
                      all visitors, including those using screen readers or
                      keyboard navigation.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong className="qa-custom-indent">
                    Image Optimization for Web
                  </strong>
                  <ul>
                    <li>
                      Images will be resized and compressed to ensure fast
                      loading without compromising visual quality—helping
                      improve both performance and user experience.
                    </li>
                  </ul>
                </li>
                <li>
                  <FaCheck className="included-check" />
                  <strong className="qa-custom-indent">
                    Alt Text and Media Descriptions
                  </strong>
                  <ul>
                    <li>
                      I’ll review and add appropriate alt text for images and
                      other media, ensuring they meet accessibility and SEO
                      standards.
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
                Professional content implementation and coordination for your
                CMS platform.
              </h3>
              <ul className="pricing-service-includes-list">
                <li>
                  <span className="li-icon-wrapper-price">
                    <FaCheck className="list-icon" />
                    Ideal for marketing teams, editors, or developers who need
                    reliable publishing support.
                  </span>
                  <ul className="list-custom-style-none">
                    <li className="list-custom-style">
                      Starting at $150.00/USD
                    </li>
                    <li className="list-custom-style">
                      Covers updates to 2–3 pages, basic manual QA, image
                      optimization, and basic accessibility review.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="li-icon-wrapper-price">
                    <FaCheck className="list-icon" />
                    Larger projects and ongoing CMS support available
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

export default CmsServices
