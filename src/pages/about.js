import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <h1>About</h1>
        <p>Welcome to page About</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export const Head = () => <SEO title="About"/>;

export default SecondPage
