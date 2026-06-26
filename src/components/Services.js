import React from "react"
import CTA from "./CTA"
import { FaUniversalAccess, FaClipboardCheck, FaEdit, FaHandshake } from "react-icons/fa"

const services = [
  {
    title: "Accessibility Audits",
    icon: <FaUniversalAccess aria-hidden="true" />,
    description:
      "Thorough WCAG reviews that uncover real barriers — not just automated flags.",
    items: [
      "Screen Reader Testing",
      "Keyboard Navigation & Focus Management",
      "WCAG 2.1 / 2.2 Compliance Reviews",
      "Colour Contrast Analysis",
      "Findings Reports with Remediation Guidance",
    ],
  },
  {
    title: "Manual QA Testing",
    icon: <FaClipboardCheck aria-hidden="true" />,
    description:
      "Hands-on testing across browsers and devices so nothing slips through before launch.",
    items: [
      "Cross-Browser & Cross-Device Testing",
      "Functional & Regression Testing",
      "Pre-Launch Checks & Post-Update Validation",
      "Content QA",
      "Documented Bug Reports & Dev Team Sync",
    ],
  },
  {
    title: "CMS Management",
    icon: <FaEdit aria-hidden="true" />,
    description:
      "Accurate, well-structured content across WordPress, Contentful, and Optimizely.",
    items: [
      "Content Implementation & QA",
      "Page Layout & Component Population",
      "Pre-Launch & Post-Update Validation",
      "UI/UX Consistency & Visual QA",
      "Content Workflow Coordination",
    ],
  },
]

const Services = () => {
  return (
    <section
      className="services-overview"
      aria-labelledby="services-overview-heading"
    >
      <div className="services-overview__grid">
        {services.map(service => (
          <article key={service.title} className="services-overview__card">
            <div className="services-overview__icon">{service.icon}</div>

            <h2 className="services-overview__title">{service.title}</h2>

            <p className="services-overview__desc">{service.description}</p>

            <ul className="services-overview__list">
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        {/* CTA card */}
        <article className="services-overview__card services-overview__card--cta">
          <div className="services-overview__icon">
            <FaHandshake aria-hidden="true" />
          </div>
          <h2 className="services-overview__title">Got a project that needs a detail-oriented eye?</h2>
          <p className="services-overview__desc">
            I'd love to hear about it.
          </p>
          <CTA
            href="/service-request"
            wrapperClassName="button-group"
            className="request-quote-btn"
            ariaLabel="Request a quote via the service request form"
          >
            Get in Touch
          </CTA>
        </article>
      </div>
    </section>
  )
}

export default Services
