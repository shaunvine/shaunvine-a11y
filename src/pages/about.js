import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import ServiceBlade from "../components/ServiceBlade"
import ClientTestimonial from "../components/ClientTestimonial"
import OutdoorImages from "../components/OutdoorImages"

const About = () => {
  return (
    <Layout>
      <SEOmeta
        title="About Shaun Vine | Manual QA Tester & Accessibility Consultant in Seattle"
        description="Shaun Vine is a Seattle-based Manual QA Tester and Accessibility Consultant helping businesses improve website quality, usability, and compliance. Learn more about his approach and experience."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <ServiceBlade
          layout="twoCards"
          title="About My Work"
          columns={[
            {
              heading: "Digital Accessibility & Manual QA Specialist",
              // Fills the “blank space” area
              body: (
                <p className="card-paragraph">
                  Shaun is a Web Content Engineer and Manual QA tester with 8
                  years experience. He is an active Professional Member of the
                  International Association of Accessibility Professionals
                  (IAAP)
                </p>
              ),

              items: [
                {
                  label: "Shaun specializes in:",
                  subList: {
                    items: [
                      "WCAG 2.2 accessibility audits",
                      "Manual screen-reader testing (NVDA & VoiceOver)",
                      "AXE & Wave automated testing",
                      "Keyboard-only navigation reviews",
                      "Functional QA testing",
                      "CMS accessibility implementation",
                    ],
                  },
                },
                {
                  label: "Shaun's background spans:",
                  subList: {
                    items: [
                      "UX/UI design understanding",
                      "CMS content engineering",
                      "Manual QA discipline",
                      "Web performance",
                      "SEO & analytics tracking",
                      "Accessibility best practices",
                    ],
                  },
                },
              ],
            },
            {
              image: (
                <article>
                  <StaticImage
                    src="../assets/images/About.png"
                    alt="Shaun Vine in snowboarding gear climbing a mountain with friends"
                    className="about-img"
                    placeholder="blurred"
                  />
                </article>
              ),
            },
          ]}
        />

        <ServiceBlade
          id="about-my-work"
          variant="light"
          layout="twoCards"
          title="About My Work"
          subtitle=""
          description=""
          columns={[
            {
              heading: "My Approach:",
              subheading: "",
              items: [
                { label: "Test like a user, not a machine" },
                { label: "Document clearly" },
                { label: "Prioritize what matters" },
                { label: "Communicate simply" },
              ],
            },
            {
              heading: "My Toolset:",
              subheading: "",
              items: [
                { label: "NVDA" },
                { label: "VoiceOver" },
                { label: "Axe" },
                { label: "Lighthouse" },
                { label: "Colour Contrast Analyser" },
                { label: "Browser DevTools" },
              ],
            },
          ]}
        />
        <section className="featured-projects">
          <ServiceBlade
            id="client-testimonials"
            variant="dark"
            layout="two"
            title="Client Feedback"
            columns={[
              <ClientTestimonial
                key="t1"
                highlight="Shaun provides the rare combination of an eye for design with knowledge in current web development tools."
                quote="He has taken one of my client's website and converted it to WordPress, matching the original design so well and even improving it for extensibility. I was impressed with Shaun's attention to detail and the client was very happy with the result. Now she can update her website herself, which gives clients a lot of flexibility. I recommend Shaun for anyone who needs a website (based on WordPress or not). Shaun is very trustworthy and delivers great results!"
                name="Melissa"
              />,
              <ClientTestimonial
                key="t2"
                highlight="Even schooling himself to learn new website design and coding techniques to meet those demanding expectations."
                quote="As an architect, I had some very clear ideas on how I wanted my site to look and feel. Shaun worked extra hard to meet all of my expectations. I couldn't be more pleased with the results! I would recommend him to any small business owner just getting started with their online presence. He is good at what he does, and as a bonus, he's a charming and lovely fellow who is a pleasure to work with!"
                name="Kit"
              />,
            ]}
          />
        </section>
        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default About
