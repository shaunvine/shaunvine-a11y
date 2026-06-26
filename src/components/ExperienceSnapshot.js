import React from "react"

const experienceItems = [
  "CPACC Certified",
  "8+ Years QA & Content Experience",
  "Accessibility Testing",
  "Manual QA",
  "CMS & Content QA",
]

const ExperienceSnapshot = () => {
  return (
    <section
      className="experience-snapshot"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-header section-header--center">
        <h2 id="experience-heading" className="section-title">
          Experience
        </h2>

        <p className="section-intro">
          Creative Technologist with 8+ years of experience in accessibility,
          QA testing, CMS implementation, design, and digital launches.
        </p>
      </div>

      <ul className="experience-snapshot__list">
        {experienceItems.map(item => (
          <li className="experience-snapshot__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSnapshot
