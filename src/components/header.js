import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Brand = () => (
    <Link to="/" className="brand">
        brewery<span>.lv</span>
    </Link>
);

const Header = ({overHero = false}) => (
    <header className={`site-header${overHero ? ` over-hero` : ``}`}>
        <div className="wrap">
            <Brand/>
            <nav className="site-nav" aria-label="Main">
                <Link to="/">Breweries</Link>
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    overHero: PropTypes.bool,
};

export default Header
