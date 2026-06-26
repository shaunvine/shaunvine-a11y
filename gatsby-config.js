require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
;(require("events").EventEmitter.defaultMaxListeners = 15),
  (module.exports = {
    siteMetadata: {
      title: "Creative Technologist | Shaun Vine",
      siteDescription:
        "Creative Technologist specializing in accessibility, manual QA, CMS implementation, and web design. Helping teams ship better digital experiences.",
      author: "Shaun Vine",
      siteUrl: "https://shaunvine.com",
      // NEW: used by SEOmeta.js when a page doesn't pass an image prop
      defaultImage: "/assets/images/About.png",
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
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `er6tmlqx991h`,
          accessToken: process.env.CONTENTFUL_API_KEY,
        },
      },
      `gatsby-plugin-sitemap`,
    ],
  })
