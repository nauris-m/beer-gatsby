# brewery.lv

A directory of Latvia's small and craft breweries, grouped by region, with addresses and websites.

Built with Gatsby 5 and React 18 as a fully static site.

## Development

Requires Node 22–24 and Yarn 1.

```sh
yarn install
yarn develop   # dev server at http://localhost:8000
yarn build     # production build into public/
yarn serve     # preview the production build
```

## Deployment

`yarn build` writes the finished site to `public/`. Upload that folder to any static host; there is no server-side code.

## Brewery data

All breweries live in `src/data/breweries.json`, one object per brewery:

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Unique slug, e.g. `duna-brewery` |
| `name` | yes | Display name |
| `address` | yes | Street address without postal code |
| `city` | yes | Shown under the name |
| `region` | yes | `Kurzeme`, `Latgale`, `Rīga`, `Vidzeme` or `Zemgale` |
| `lat`, `lng` | yes | Used for the map link and structured data |
| `founded` | no | Year, or `null` |
| `website` | no | Full URL, or `null` |
| `taproom` | no | Separate taproom address |
| `contract` | no | `true` for contract breweries without their own brewhouse |

Entries are sorted by region, then by name ignoring diacritics. The hero counts and region filter update automatically.

## Project layout

- `src/pages/index.js`: home page, hero and structured data
- `src/components/brewery-list.js`: region filter and brewery cards
- `src/components/layout.js`, `layout.css`: header, footer, theme colours and fonts
- `src/components/seo.js`: page title, meta and social tags
- `static/`: background image, social share image and `robots.txt`
