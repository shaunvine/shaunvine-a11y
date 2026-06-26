const setupTools = projects => {
  const allTools = {}

  projects.forEach(project => {
    const tags = project.tags || []
    tags.forEach(tag => {
      if (allTools[tag]) {
        allTools[tag] = allTools[tag] + 1
      } else {
        allTools[tag] = 1
      }
    })
  })

  const newTools = Object.entries(allTools).sort((a, b) => {
    const [firstTool] = a
    const [secondTool] = b
    return firstTool.localeCompare(secondTool)
  })

  return newTools
}

export default setupTools
