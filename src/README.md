An Astro "integration" that gives all Material 3 guidelines, styles, and components for use in websites made with Astro.

Install the package and add the following to your projects `tsconfig.json` file:
```json
"compilerOptions": {
    "paths": {
        "@material-components/*": ["node_modules/astro-material-design/components/*"]
    }
}
```

To use it, import any component by adding something similar to the following into your file. Ensure that you always have a `<Styles />` component in your pages.
```tsx
---
import Styles from '@material-components/styles.astro'
import TextField from '@material-components/text-field.astro'
---

<Styles hex="#FF0000" /> // this is required to index all the style variables including colors, typescales, motion, elevation, etc.
```