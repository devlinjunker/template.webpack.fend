# Javascript Entry Points
The `webpack.config.js`([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js)) defines entry points for javascript bundles that can be created for each page, or can be optimized to bundle code that can be cached separately, loaded asynchronously or lazy loaded, after the page has loaded and rendered.

These bundles are separately included on each HTML page (defined with the `HTMLWebpackPlugin` in the Webpack config) and will execute in the order they are included on the webpage. Any items declared at the global level in a bundle  (`e.g. global.property = 'value';`) will be available in any other bundle that is on that HTML page, as well..


## Importing Files
The javascript file that is referenced as an entry point, can import other files and/or libraries using either CommonJS Module syntax (e.g. `const package = require('module')`) or using ECMA6(ES2015) syntax (e.g. `import package from 'lib'`). These files will then be included in the generated bundle for that entry point.

The file types available to import are defined in the `rules` section of the Webpack config:
 - Javascript (.js) Files
 - CSS (.css) Files
 - Images (.png/.svg/.jp(e)g/gif) Files

## Entry Notes/Ideas
 - [ ] Fonts
