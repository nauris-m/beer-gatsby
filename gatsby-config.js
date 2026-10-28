module.exports = {
  siteMetadata: {
    title: `brewery`,
    description: `beers from regions of LV`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `brewery`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fefefe`,
        display: `minimal-ui`,
        icon: `src/images/beer-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
