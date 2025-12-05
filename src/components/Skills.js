import React from "react"

const Skills = () => {
  return (
    <div className="skills-hero">
      <div className="skills-heading">
        <div>
          <h2 className="section-title skills-heading">Skills</h2>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-col">
          <h3>Design</h3>
          <ul>
            <li>FIGMA</li>
            <li>Adobe Photoshop CC</li>
            <li>Adobe Illustrator CC</li>
            <li>Adobe After Effects CC</li>
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
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>GitHub</li>
            <li>JIRA</li>
            <li>Netlify</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
