
Pattern Library Builder
=======================

### About this application

This application is written using the [Node.js](https://nodejs.org/en/) JavaScript runtime and the [Python](https://www.python.org/download/releases/2.7/) Simple HTTP Server.

### The purpose

The application processes the sass and Javascript used in the Food Standard Agency Pattern Library User Interface into css and minified Javascript.

### Prerequisites

In order to run the tool locally in development you'll need the following :

- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/download/releases/2.7/)
- [Git](https://git-scm.com/downloads) 


### Getting Started

Run the following from the command line to download the repository and change into the directory:

```
git clone git@github.com:methods/fsa-pl.git

cd fsa-pl
```

The Javascript and CSS files for use in the pattern library are located in the `dist` directory.

### Local development of the pattern library

- New Javascript files go into the `js` directory and the corresponding path must be added into the config object in the package.json. 
- You'll need to restart `npm run watch` afterwards for these changes to take effect.
- New SCSS files should be added to the `scss` directory. Add the corresponding path into `main.scss` and `old-ie.scss`. 


### Local development of the pattern library in Windows

- Create a dist/js/main.js
- Rename the package.json file to package-linux.json
- Rename the package-win.json file to package.json and run `npm install` for the changes to take effect
- Check and delete the fsevents folder from node_modules if it exists

