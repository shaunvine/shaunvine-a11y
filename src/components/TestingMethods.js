import React from "react"
import { FaUniversalAccess } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import { FaChartBar } from "react-icons/fa"

const testingMethods = [
  {
    title: "Accessibility",
    icon: <FaUniversalAccess />,
    items: [
      "Keyboard Navigation",
      "Focus Management",
      "Screen Reader Testing",
      "WCAG Reviews",
    ],
  },
  {
    title: "Manual QA",
    icon: <FaClipboardCheck />,
    items: [
      "Functional Testing",
      "Regression Testing",
      "Cross-Browser Testing",
      "Mobile Testing",
    ],
  },
  {
    title: "Content QA",
    icon: <FaFileAlt />,
    items: [
      "CMS Validation",
      "Link Verification",
      "Content Reviews",
      "Media Checks",
    ],
  },
  {
    title: "Reporting",
    icon: <FaChartBar />,
    items: [
      "Issue Documentation",
      "Severity Ratings",
      "Remediation Guidance",
      "Verification Testing",
    ],
  },
]

const TestingMethods = () => {
  return (
    <section
      className="testing-methods"
      id="testing-methods"
      aria-labelledby="testing-methods-heading"
    >
      <div className="section-header">
        <h2
          id="testing-methods-heading"
          className="section-title section-header--center"
        >
          How I Test Websites
        </h2>

        <p className="section-intro">
          I combine accessibility testing and manual QA to identify issues that
          affect usability, compliance, and customer experience.
        </p>
      </div>

      <div className="testing-methods__grid">
        {testingMethods.map(method => (
          <article className="testing-methods__card" key={method.title}>
            <div className="testing-methods__icon" aria-hidden="true">
              {method.icon}
            </div>

            <h3 className="testing-methods__title">{method.title}</h3>

            <ul className="testing-methods__list">
              {method.items.map(item => (
                <li className="testing-methods__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestingMethods
