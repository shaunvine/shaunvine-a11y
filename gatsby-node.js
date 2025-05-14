const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetProjects {
      allContentfulPortfolio {
        nodes {
          tools {
            tools
          }
        }
      }
    }
  `)

  result.data.allContentfulPortfolio.nodes.forEach(portfolio => {
    portfolio.tools.tools.forEach(tool => {
      const toolsSlug = slugify(tool, { lower: true })
      createPage({
        path: `/tools/${toolsSlug}`,
        component: path.resolve(`src/templates/tools-template.js`),
        context: {
          tool: tool,
        },
      })
    })
  })
}
