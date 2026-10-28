# brewery.lv

A directory of Latvia's small and craft breweries, grouped by region, with addresses, phone numbers and websites.

Built with Gatsby 5 and deployed to DigitalOcean App Platform as a static site (see `.do/app.yaml`); every push to `main` deploys.

## Development

Requires Node 22–24 and Yarn 1.

```sh
yarn install
yarn develop   # http://localhost:8000
yarn build     # production build into public/
```

## Brewery data

All brewery entries live in `src/data/breweries.json`. Locations are based on [MUCA](https://muca.didnt.work/), the map of Latvian makers; phone numbers were checked against each brewery's own website. Edit the file to add or correct a brewery.
