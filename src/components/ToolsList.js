import React from "react"
import setupTools from "../utils/setupTools"

const ToolsList = ({ projects, selectedTag, onSelect }) => {
  const tags = setupTools(projects)

  return (
    <nav className="tools-filter" aria-label="Filter projects by tag">
      <ul className="tools-filter__list">
        <li>
          <button
            className={`tools-filter__btn${!selectedTag ? " tools-filter__btn--active" : ""}`}
            onClick={() => onSelect(null)}
            aria-pressed={!selectedTag}
          >
            All
          </button>
        </li>
        {tags.map(([tag, count], index) => (
          <li key={index}>
            <button
              className={`tools-filter__btn${selectedTag === tag ? " tools-filter__btn--active" : ""}`}
              onClick={() => onSelect(tag)}
              aria-pressed={selectedTag === tag}
            >
              {tag} ({count})
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ToolsList
