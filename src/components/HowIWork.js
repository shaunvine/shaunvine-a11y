import React from "react"
import {
  FaUniversalAccess,
  FaClipboardCheck,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa"

const processSteps = [
  "Automated scanning",
  "Keyboard testing",
  "Screen reader testing",
  "Manual verification",
  "Prioritized findings report",
]

const testingMethods = [
  {
    title: "Accessibility",
    icon: <FaUniversalAccess />,
    items: [
      "Keyboard navigation",
      "Focus management",
      "Screen reader testing",
      "WCAG reviews",
    ],
  },
  {
    title: "Manual QA",
    icon: <FaClipboardCheck />,
    items: [
      "Functional testing",
      "Regression testing",
      "Cross-browser testing",
      "Mobile testing",
    ],
  },
  {
    title: "Content QA",
    icon: <FaFileAlt />,
    items: [
      "CMS validation",
      "Link verification",
      "Content reviews",
      "Media checks",
    ],
  },
  {
    title: "Reporting",
    icon: <FaChartBar />,
    items: [
      "Issue documentation",
      "Severity ratings",
      "Remediation guidance",
      "Verification testing",
    ],
  },
]

const HowIWork = () => {
  return (
    <section className="how-i-work" aria-labelledby="how-i-work-heading">
      <div className="section-header">
        <h2 id="how-i-work-heading" className="section-title">
          How I work
        </h2>
        <p className="section-intro">
          Every review combines automated tools, manual testing, and assistive
          technology to find the issues that affect real users, usability, and
          compliance.
        </p>
      </div>

      <h3 className="how-i-work__subheading">My process</h3>
      {/* The <ol> already announces "1 of 5" etc., so the visual numbers are
          hidden from screen readers to avoid reading them twice. */}
      <ol className="how-i-work__steps">
        {processSteps.map((step, index) => (
          <li className="how-i-work__step" key={step}>
            <span className="how-i-work__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="how-i-work__label">{step}</span>
          </li>
        ))}
      </ol>

      <h3 className="how-i-work__subheading">What I test</h3>
      <div className="how-i-work__grid">
        {testingMethods.map(method => (
          <article className="how-i-work__card" key={method.title}>
            <div className="how-i-work__icon" aria-hidden="true">
              {method.icon}
            </div>
            <h4 className="how-i-work__card-title">{method.title}</h4>
            <ul className="how-i-work__list">
              {method.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowIWork
