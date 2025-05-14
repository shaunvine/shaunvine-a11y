const setupTools = projects => {
  const allTools = {}

  projects.forEach(project => {
    project.tools.tools.forEach(tool => {
      if (allTools[tool]) {
        allTools[tool] = allTools[tool] + 1
      } else {
        allTools[tool] = 1
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
