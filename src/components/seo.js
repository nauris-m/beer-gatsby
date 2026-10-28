/**
 * Page <head> tags. Render it from a page's exported `Head` function.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

function SEO({description = ``, lang = `en`, title}) {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <>
            <html lang={lang}/>
            <title>{`${title} | ${site.siteMetadata.title}`}</title>
            <meta name="description" content={metaDescription}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:type" content="website"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Mrs+Saint+Delafield&family=Mulish:wght@400;500;700&display=swap"
            />
        </>
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default SEO
