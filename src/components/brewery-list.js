import React, {useState} from "react"
import PropTypes from "prop-types"

import "./brewery-list.css"

const ALL = `All regions`;

const mapUrl = ({lat, lng}) => `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`;

const displayUrl = url => url.replace(/^https?:\/\/(www\.)?/, ``).replace(/\/$/, ``);

const BreweryCard = ({brewery}) => (
    <li className="brewery">
        <h4 className="brewery-name">{brewery.name}</h4>
        <p className="brewery-meta">
            {brewery.city}
            {brewery.founded && <> · since {brewery.founded}</>}
            {brewery.contract && <> · contract brewery</>}
        </p>
        <dl>
            <dt>Address</dt>
            <dd>
                <a href={mapUrl(brewery)} target="_blank" rel="noopener noreferrer">{brewery.address}</a>
            </dd>
            {brewery.taproom && (
                <>
                    <dt>Taproom</dt>
                    <dd>{brewery.taproom}</dd>
                </>
            )}
            {brewery.phones && (
                <>
                    <dt>Phone</dt>
                    <dd>
                        {brewery.phones.map(phone => (
                            <a key={phone} href={`tel:${phone.replace(/\s/g, ``)}`}>{phone}</a>
                        ))}
                    </dd>
                </>
            )}
            {brewery.website && (
                <>
                    <dt>Web</dt>
                    <dd>
                        <a href={brewery.website} target="_blank" rel="noopener noreferrer">
                            {displayUrl(brewery.website)}
                        </a>
                    </dd>
                </>
            )}
        </dl>
    </li>
);

const BreweryList = ({breweries}) => {
    const [region, setRegion] = useState(ALL);
    const regions = [...new Set(breweries.map(b => b.region))].sort();
    const shown = regions.filter(r => region === ALL || r === region);

    return (
        <section>
            <div className="region-filter" role="group" aria-label="Filter by region">
                {[ALL, ...regions].map(r => (
                    <button key={r} type="button" aria-pressed={r === region} onClick={() => setRegion(r)}>
                        {r}
                    </button>
                ))}
            </div>
            {shown.map(r => {
                const inRegion = breweries.filter(b => b.region === r);
                return (
                    <div key={r}>
                        <h3 className="region-title">
                            {r} <span className="region-count">{inRegion.length} breweries</span>
                        </h3>
                        <ul className="brewery-grid">
                            {inRegion.map(b => <BreweryCard key={b.id} brewery={b}/>)}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
};

BreweryList.propTypes = {
    breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BreweryList
