import React from "react"
import {StaticImage} from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-plugin-image` to automatically serve
 * optimized images with lazy loading and reduced file sizes. `StaticImage`
 * processes the image at build time, so no GraphQL query is needed.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
 */

const Image = () => (
    <StaticImage src="../images/beers.jpg" alt="Beers" width={300} placeholder="blurred"/>
);

export default Image
