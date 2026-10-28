import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle = ``, overHero = false}) => (
    <header className={`site-header${overHero ? ` over-hero` : ``}`}>
        <div className="wrap">
            <Link to="/" className="brand">
                {siteTitle}<span>.lv</span>
            </Link>
            <nav className="site-nav">
                <Link to="/">Breweries</Link>
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    overHero: PropTypes.bool,
};

export default Header
