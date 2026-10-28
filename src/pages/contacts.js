import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <h1>Contacts</h1>
        <p>Welcome to page Contacts</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export const Head = () => <SEO title="Contacts"/>;

export default SecondPage
