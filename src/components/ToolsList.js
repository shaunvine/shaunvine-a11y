import React from "react"
import setupTools from "../utils/setupTools"
import { Link } from "gatsby"
import slugify from "slugify"

const ToolsList = ({ projects }) => {
  const newTools = setupTools(projects)
  return (
    <div className="tools-container">
      <h3>projects</h3>

    <div className="tools-list">
        {newTools.map((tool, index) => {
          const [text, value] = tool
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tools/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ToolsList
