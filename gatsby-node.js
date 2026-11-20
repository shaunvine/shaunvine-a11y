// Tool pages are no longer generated programmatically.
// Filtering is handled client-side on the /work page.

// Declare fields we query so the build never fails when no entry has them set.
// Without this, Gatsby infers a field's type from the data it finds; if no
// Portfolio entry has `featured` switched on, the field would not exist and
// the Selected work query on the homepage would break the build.
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ContentfulPortfolio implements Node {
      featured: Boolean
    }
  `)
}
