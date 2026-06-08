import React from "react"
import CTA from "./CTA"
import { FaUniversalAccess } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"

const services = [
  {
    title: "Accessibility Reviews",
    icon: <FaUniversalAccess aria-hidden="true" />,
    items: [
      "Keyboard Navigation Testing",
      "Focus Management",
      "Screen Reader Testing",
      "WCAG Reviews",
      "Findings Reports",
    ],
  },
  {
    title: "Manual QA Testing",
    icon: <FaClipboardCheck aria-hidden="true" />,
    items: [
      "Functional Testing",
      "Regression Testing",
      "Cross-Browser Testing",
      "Mobile Testing",
      "Content QA",
    ],
  },
]

const Services = () => {
  return (
    <section
      className="services-overview"
      aria-labelledby="services-overview-heading"
    >
      <div className="section-header section-header--center">
        <h2 id="services-overview-heading" className="section-title">
          Services
        </h2>
      </div>

      <div className="services-overview__grid">
        {services.map(service => (
          <article key={service.title} className="services-overview__card">
            <div className="services-overview__icon">{service.icon}</div>

            <h3 className="services-overview__title">{service.title}</h3>

            <ul className="services-overview__list">
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <CTA
              href="/contact"
              wrapperClassName="button-group"
              className="request-quote-btn"
              ariaLabel={`Contact Shaun about ${service.title}`}
            >
              Contact Shaun
            </CTA>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
