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
          path: `${__dirname}/src/assets/images/general/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `outdoors`,
          path: `${__dirname}/src/assets/images/outdoors/`,
        },
      },
      
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Lexend",
                variants: ["100", "200", "600", "700"],
              },
              {
                family: "Atkinson Hyperlegible",
                variants: ["400", "700"],
              },
              {
                family: "Noto Sans",
                variants: ["100", "200", "600", "700"],
              },
            ],
          },
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
    ],
  })
