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
                with addresses and websites.
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
            </div>
        </section>
    </Layout>
);

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latvian craft breweries",
    numberOfItems: breweries.length,
    itemListElement: breweries.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Brewery",
            name: b.name,
            address: {"@type": "PostalAddress", streetAddress: b.address, addressLocality: b.city, addressCountry: "LV"},
            geo: {"@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng},
            ...(b.website && {url: b.website}),
            ...(b.founded && {foundingDate: String(b.founded)}),
        },
    })),
};

export const Head = () => (
    <SEO title="Latvian craft breweries">
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </SEO>
);

export default IndexPage
