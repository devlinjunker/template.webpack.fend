# CSS
CSS defines the look and feel of the application, giving style to the HTML elements on the page. This project
uses a couple of tools during the build process to ensure quality CSS code with some of the most recent improvements to the CSS ecosystem.

The project can parse and import either `.scss` or `.css` files via javascript module imports, the `.scss`
file ending is used so IDEs have an easier time with syntax highlighting.

## Tailwind CSS Framework (Utility First)
[Tailwind](https://tailwindcss.com) is included in this project to style the application. Tailwind is a
composable, [utility-first](https://tailwindcss.com/docs/utility-first/) css framework. This is a shift from
the "semantic" based css conventions where classes/styles are defined around a name that has meaning in the
application domain. In this way of thinking, css classes define a consistent look and feel of the application.
These utility classes are then applied to the elements in each html file to create a consistent style across the application that is not predefined.

Tailwind is built on top of [normalize.css](http://necolas.github.io/normalize.css/) to standardize the look and feel of the application across multiple browsers and clear any default styles.

Review [these screencasts](https://tailwindcss.com/screencasts/) and other [resources](https://tailwindcss.com/resources)
for more information. Visit the docs for [configuration](https://tailwindcss.com/docs/configuration) and notes
on [each rule](https://tailwindcss.com/docs/container) as well as some [example components](https://tailwindcss.com/components)

## Mini CSS Extract Plugin
The webpack config file([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
imports the `mini-css-extract-plugin` and loader to extract all css styles that have been imported into the
javascript bundles created by webpack. This enables the stylesheets to be referenced in the HTML file
separately, so they can be linked at the top of the page and loaded first and also so they can be cached in
the browser to speed up page load.

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

## CSS Notes/Ideas
 - Guidelines: https://cssguidelin.es/
 - IDEA: During development (`npm run start-watch`) css is included in JS bundles for faster build
      - only extract during production to improve the look and feel of app loading
 - [ ] BEM Linting?
 - [ ] Styleguide
 - [ ] Framework Demos (Separate Repo?)
 - MVP (Product/Business) Style: https://andybrewer.github.io/mvp/
   - remember this for the future if need a splash screen for company/product/webapp
