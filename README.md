# kondicionerebi.ge

დამოუკიდებელი მიმოხილვები კონდიციონერებზე — ქართულად.

Static prototype of the kondicionerebi.ge website. Single-page click-through built with vanilla HTML + CSS + in-browser React/Babel for the component layer.

## Run locally

The site is fully static. Serve the project root with any static server:

```bash
# Node
npx serve .

# Python 3
python3 -m http.server 8000

# PHP
php -S localhost:8000
```

Then open <http://localhost:8000/>.

## File layout

| File | Purpose |
|---|---|
| `index.html` | Homepage entry — mounts the React app |
| `colors_and_type.css` | Design tokens (colors, type, spacing, radii, motion) |
| `site.css` | Article-surface styles (nav, hero, TL;DR, table, FAQ, footer) |
| `site2.css` | Homepage, best-of, brand, and comparison styles |
| `Icons.jsx` | Inline Lucide-style outline icons (1.5px stroke) |
| `Nav.jsx` | Sticky top nav with BTU calculator CTA |
| `FAQ.jsx` | Semantic `<details>` accordion |
| `Footer.jsx` | Three-column footer with affiliate disclosure |
| `HomeComponents.jsx` | `HeroSection`, `TopPicksRow`, `BtuStrip`, `GuideGrid`, `BrandsGrid`, `TeamBlock`, `HomeFAQ` |

## Design notes

- Mkhedruli body line-height is **1.75** — looser than Latin defaults. Don't tighten it.
- TL;DR and FAQ use semantic HTML so AI crawlers see the content.
- Latin numerics inside Georgian sentences (model names, prices, BTU values) use `.latin` (Inter) for legibility.
- Icons are 1.5px stroke outline — never filled. Two color roles: cyan (interactive) or muted (informational).
- Only the Our Pick card gets a shadow. Nothing else.
- The brand grid uses grayscale logos by default with a full-color hover.
