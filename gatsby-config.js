module.exports = {
  siteMetadata: {
    title: `brewery.lv`,
    description: `Directory of Latvia's small and craft breweries, with addresses and websites.`,
    siteUrl: `https://brewery.lv`,
    image: `/og-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
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
        name: `brewery.lv: Latvian craft breweries`,
        short_name: `brewery.lv`,
        start_url: `/`,
        background_color: `#f6f3ee`,
        theme_color: `#0d0d0c`,
        display: `minimal-ui`,
        icon: `src/images/beer-icon.png`,
      },
    },
  ],
};
