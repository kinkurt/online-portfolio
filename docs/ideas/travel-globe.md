# Idea: interactive travel globe

**Status:** future plan (noted 30 Sep 2026)

An interactive 3D globe on kurtkin.com that highlights every country I've been to. Spin it, hover a country to see its name, and tell at a glance where I've lived versus visited.

## What it should do

- Rotating 3D globe you can drag and zoom.
- Countries I've **lived in** in one colour, countries I've **visited** in another, everything else muted.
- Hover (or tap on mobile) a highlighted country to show its name and flag.
- Works in light and dark mode and on phones.
- Shown on the site as a project card, and possibly as its own page (e.g. `/travel`).

## Data

Already exists: `data/travel.data.js` exports `livedIn` and `visited`, each an alphabetical list of `{ name, code }` with ISO 3166 alpha-2 codes. It also drives the flag rows in the About section, so adding a country there updates both.

Most world-map datasets (e.g. Natural Earth GeoJSON) identify countries by ISO codes, so they can be matched directly. Watch for small places like Hong Kong and Singapore, which may need a marker as well as a fill because they're tiny at globe scale.

## Possible approaches

| Option | Notes |
|---|---|
| `react-globe.gl` (three.js) | Quickest route to a polished globe: polygon fills per country, hover labels, auto-rotate. |
| `three.js` directly | Full control over look and animation; more work. |
| `d3-geo` orthographic projection | 2D SVG "globe" that rotates; lightweight, easy to theme, no WebGL. |

Next.js note: WebGL libraries need the browser, so load the globe with a client-only dynamic import.

## Open questions

- Own page, embedded in About, or both?
- Extra detail per country later (year visited, photos, a line about the trip)?
