import React from "react"

// The skills band from the approved design: five colored blocks in a row.
// color = a palette name; main.css pairs each with its approved text color.
const SKILLS = [
  { label: "Design", color: "terracotta" },
  { label: "Accessibility", color: "sage" },
  { label: "QA", color: "mustard" },
  { label: "CMS", color: "blue" },
  { label: "Front-end", color: "pink" },
]

const SkillsBand = () => (
  <section className="skills-band" aria-labelledby="skills-band-heading">
    {/* Visually hidden, but it names the region and is in the heading outline */}
    <h2 id="skills-band-heading" className="sr-only">
      What I do
    </h2>

    {/* role="list" keeps the list announced in Safari/VoiceOver, which
        otherwise drops list semantics when list-style is none. */}
    <ul className="skills-band__list" role="list">
      {SKILLS.map(skill => (
        <li
          key={skill.label}
          className={`skills-band__item skills-band__item--${skill.color}`}
        >
          {skill.label}
        </li>
      ))}
    </ul>
  </section>
)

export default SkillsBand
