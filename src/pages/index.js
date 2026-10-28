import React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import BreweryList from "../components/brewery-list"
import Ornament from "../components/ornament"
import SEO from "../components/seo"
import breweries from "../data/breweries.json"

const regionCount = new Set(breweries.map(b => b.region)).size;

const Hero = () => (
    <section className="hero">
        <StaticImage
            className="hero-image"
            src="../images/beers.jpg"
            alt=""
            layout="fullWidth"
            placeholder="blurred"
        />
        <div className="hero-content">
            <span className="script">Cheers from Latvia</span>
            <h1>Latvian <span className="accent">Craft Breweries</span></h1>
            <p>
                The small and independent breweries of Latvia gathered in one place,
                with addresses, phones and websites.
            </p>
            <ul className="hero-stats">
                <li><strong>{breweries.length}</strong><span>Breweries</span></li>
                <li><strong>{regionCount}</strong><span>Regions</span></li>
            </ul>
        </div>
    </section>
);

const IndexPage = () => (
    <Layout hero={<Hero/>}>
        <section className="section" id="breweries">
            <div className="wrap">
                <div className="section-head">
                    <Ornament/>
                    <span className="script">from every corner of Latvia</span>
                    <h2>Find a <span className="accent">brewery</span></h2>
                </div>
                <BreweryList breweries={breweries}/>
                <p className="source-note">
                    Brewery locations based on <a href="https://muca.didnt.work/">MUCA</a>, the map of Latvian makers.
                </p>
            </div>
        </section>
    </Layout>
);

export const Head = () => <SEO title="Latvian craft breweries"/>;

export default IndexPage
