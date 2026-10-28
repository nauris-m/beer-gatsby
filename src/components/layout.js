/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, Link, useStaticQuery} from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({children, hero, title}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
    const siteTitle = data.site.siteMetadata.title;

    return (
        <>
            <Header siteTitle={siteTitle} overHero={Boolean(hero)}/>
            {hero}
            {title && (
                <div className="page-title">
                    <h1>{title}</h1>
                </div>
            )}
            <main>{children}</main>
            <footer className="site-footer">
                <div className="wrap">
                    <Link to="/" className="brand">{siteTitle}<span>.lv</span></Link>
                    <p>The small and craft breweries of Latvia, in one place.</p>
                    <p>© {new Date().getFullYear()} {siteTitle}.lv</p>
                </div>
            </footer>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    hero: PropTypes.node,
    title: PropTypes.string,
};

export default Layout
