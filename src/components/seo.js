/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * Render it from a page's exported `Head` function.
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

function SEO({description = ``, lang = `en`, meta = [], title}) {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
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
            {meta.map((attrs, i) => <meta key={i} {...attrs}/>)}
        </>
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO
