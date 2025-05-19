/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
;(require("events").EventEmitter.defaultMaxListeners = 15),
  (module.exports = {
    /* Your site config here */
    siteMetadata: {
      title: "Manual QA Tester | CMS Content Manager | Seattle | Shaun Vine",
      siteDescription:
        "Manual QA Testing, and content workflow optimization. Let me help you improve your website performance, streamline your CMS, and ensure your content is always error-free.",
      author: "Shaun Vine",
      siteUrl: "https://shaunvine.com", // Set the site URL here
    },
    plugins: [
      {
        resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
        options: {
          analyzerMode: "static",
          reportFilename: "report.html",
          openAnalyzer: false,
        },
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `er6tmlqx991h`,
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: process.env.CONTENTFUL_API_KEY,
        },
      },
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Cabin Sketch",
                variants: ["400", "700"],
              },
              {
                family: "Atkinson Hyperlegible",
                variants: ["400", "700"],
              },
            ],
          },
        },
      },
      `gatsby-plugin-react-helmet`,
    ],
  })
