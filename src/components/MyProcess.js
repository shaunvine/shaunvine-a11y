import React from "react"

const processSteps = [
  "Automated Scanning",
  "Keyboard Testing",
  "Screen Reader Testing",
  "Manual Verification",
  "Prioritized Findings Report",
]

const MyProcess = () => {
  return (
    <section
      className="my-process"
      id="my-process"
      aria-labelledby="my-process-heading"
    >
      <div className="section-header section-header--center">
        <h2 id="my-process-heading" className="section-title">
          My Review Process
        </h2>
        <p className="section-intro">
          Every review combines automated tools, manual testing, and assistive technology testing to identify issues that affect real users.
        </p>
      </div>

      <ol className="my-process__steps">
        {processSteps.map((step, index) => (
          <li className="my-process__step" key={step}>
            <span className="my-process__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="my-process__label">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default MyProcess
