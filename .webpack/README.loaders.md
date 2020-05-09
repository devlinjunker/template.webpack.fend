# Webpack Loaders

Webpack Loaders are used during the webpack build process to transpile the javascript and other asset types
defined in the webpack.config.js([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js)).

## Standard Loaders
This project uses basic loaders for most file types:
 - babel-loader and eslint-loader for javascript files
 - MiniCssExtractPlugin Loader, css-loader and postcss-loader for `.css` or `.scss` files
 - file-loader to include image files with html-webpack-plugin
 - svg-inline-loader for svg files (used in html-webpack-plugin)
 - underscore-template-loader for processing html files

## Custom Loaders
This project also includes one custom loader([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/.loader/))
to help generate handlebars template files. This is part of processing `.hbs` files.
 - First we run the `.hbs` file through the underscore-template-loader to transform `@import` statements to
 `require()` statements, then
 - The custom `svg-icon-loader` takes the output from this loader (a function that returns a html string) and
 inlines the contents from svg files, replacing any `require(.svg)` statements.
 - The function is then run in the loader to return the handlebars template that is finally passed to the
 handlebars-loader to create the `template()` function that is imported when you require a `.hbs` file in the
 javascript code.


## Notes/Ideas
- [ ] Why are svg files included in output directory? they should be inlined I thought
