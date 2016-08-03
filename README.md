# Pattern library

A tile design friendly pattern library with a simple responsive grid inspired by BBC’s GEL consisting of 16px columns.

Use the [pattern library's site][site] to see examples of how to use it.

## How to install and run

1. Clone this repo onto your machine.
2. Install [Node][node], [NPM][npm] and [Python][python].
3. Run `npm install` from the root of the repo you've cloned onto your machine.
4. Use the JS and CSS files in the `dist` directory.

Optional (for local development of the pattern library):
* New JS files go into the `js` directory and the path added into the config object in the package.json. You'll need to restart `npm run watch` afterwards.
* New SCSS files should be added to the `scss` directory. Add the path into `main.scss` and `old-ie.scss`. 

[node]: <https://nodejs.org/en/>
[npm]: <https://www.npmjs.com/>
[python]: <https://www.python.org/>

In windows:
1. create a dist/js/main.js
2. rename package.json to package-linux.json
2. rename package-win.json to package.json and run `npm install`
3. check and delete fsevents from node_modules if it exists

