# Javascript Entry Points
The `webpack.config.js`([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
defines entry points for javascript bundles that can be created for each page, or can be optimized to bundle
code that can be cached separately, loaded asynchronously or lazy loaded, after the page has loaded and rendered.

## Importing Files
The javascript files can import other files and/or libraries using either CommonJS Module syntax (e.g. `const
package = require('module')`) or using ECMA6(ES2015) syntax (e.g. `import package from 'lib'`).

The file types available are defined in the `rules` section of the Webpack config:
 - Javascript (.js) Files
 - CSS (.css) Files
 - Images (.png/.svg/.jp(e)g/gif) Files

## Entry Notes/Ideas
 - [ ] Fonts
