# Gulp + Shopify

This project uses Gulp.js and Shopify CLI to develop Shopify themes. It solves the problem of Shopify not allowing sub-directories within the `assets` directory.

## Getting Started

1. Clone the repository into your project root.
2. Navigate to the root directory in your terminal.
3. Install the necessary packages with `npm install`.
4. Run `npm run dev` to start the development server.
5. Run `npm run watch` to watch for changes in your files.

## What Does This Do?

- Watches and compiles assets in the root directory, including SCSS, JS, images, and fonts.
- Moves modified assets to the `assets` directory.
- Allows you to write your JavaScript in ES6. The Gulp scripts task uses Babel, so you can use the latest syntax without worrying about browser support.

## Note

The Shopify CLI hot reload feature may not serve updated assets, such as CSS or JS, immediately. A manual reload (delayed by a second or two) may be required after every change.

## Tools Used

- [Gulp.js](http://gulpjs.com/)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [SASS / SCSS](http://sass-lang.com/)