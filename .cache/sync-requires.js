const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/azmat/Desktop/cnc/netlify_practice/.cache/dev-404-page.js"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/home/azmat/Desktop/cnc/netlify_practice/src/pages/about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/azmat/Desktop/cnc/netlify_practice/src/pages/index.tsx")))
}

