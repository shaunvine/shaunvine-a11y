import React from "react"

const Skills = () => {
  return (
    <section className="skills-hero" aria-labelledby="skills-heading">
      <div className="skills-heading">
        <h2 id="skills-heading">Skills</h2>
      </div>
      <div className="skills-container">
        <div className="skills-col">
          <h3>Design</h3>
          <ul>
            <li>Figma</li>
            <li>Adobe Photoshop CC</li>
            <li>Adobe Illustrator CC</li>
            <li>Adobe Express</li>
            <li>Adobe Premiere Pro</li>
            <li>Adobe InDesign CC</li>
          </ul>
        </div>
        <div className="skills-col">
          <h3>CMS</h3>
          <ul>
            <li>Contentful</li>
            <li>Optimizely</li>
            <li>Airtable</li>
            <li>WordPress</li>
            <li>SquareSpace</li>
          </ul>
        </div>
        <div className="skills-col">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Gatsby</li>
          </ul>
        </div>
        <div className="skills-col">
          <h3>DevOps & Tools</h3>
          <ul>
            <li>NVDA</li>
            <li>Axe</li>
            <li>Lighthouse</li>
            <li>BrowserStack</li>
            <li>VS Code</li>
            <li>GitHub</li>
            <li>JIRA</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
