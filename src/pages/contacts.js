import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Contacts"/>
        <h1>Contacts</h1>
        <p>Welcome to page Contacts</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default SecondPage
