# CSS
CSS defines the look and feel of the application, giving style to the HTML elements on the page. This project
uses a couple of tools during the build process to ensure quality CSS code with some of the most recent improvements to the CSS ecosystem.

## Normalize
The project includes a dependency on [normalize.css](http://necolas.github.io/normalize.css/) so we can include
this on each page to standardize the look and feel of the application across multiple browsers.

## PostCSS
[PostCSS](https://postcss.org/) is a javascript tool that parses and transforms the CSS files. The webpack
config contains a reference to the `postcss-loader` so that css files can be generated during the
build process from css files that are referenced in the codebase. The postcss.config.js file([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/postcss.config.js))
defines the plugins that we use during the PostCSS parsing and generation process.

### PreCSS and PostCSS-Preset-Env
[PreCSS](https://github.com/jonathantneal/precss) enables SASS like features in the css files including variables
and nesting selectors generating the proper definition in the final CSS file.
The [PostCSS-Preset-Env](https://preset-env.cssdb.org/features) plugin enables many new CSS features listed at
the link provided.

### Stylelint
[Stylelint](https://stylelint.io) is used to validate the css file uses proper syntax. The rules for this project
are defined in the `.stylelintrc` file ([github]()). The rules extend the
[Standard Stylelint Config](https://github.com/stylelint/stylelint-config-standard),
and additional rules can be added to this config file.

See list of all rules: [here](https://stylelint.io/user-guide/rules/list)  
See list of suggested Additions: [here](https://github.com/stylelint/stylelint-config-standard#suggested-additions)

### Autoprefixer
[Autoprefixer](https://github.com/postcss/autoprefixer) is used to help keep the css files clean by automatically
adding browser/vendor prefixes to css rules.

### List Selectors
[List Selectors](https://github.com/davidtheclark/list-selectors) is a plugin that we use to generate a
json file containing the css selectors that are processed by PostCSS.
 - [ ] Show output selectors, not input
 - [ ] Map of selectors to css rules?

## Framework
TODO...

## CSS Notes/Ideas
 - Guidelines: https://cssguidelin.es/
 - During development (`npm run start-watch`) css is included in JS bundles and slow to load
 - [ ] BEM Linting?
 - [ ] Styleguide
 - [ ] Framework Demos (Separate Repo?)
 - MVP (Product/Business) Style: https://andybrewer.github.io/mvp/
   - remember this for the future if need a splash screen for company/product/webapp
