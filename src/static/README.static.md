# Static HTML Components

Some parts of the interface can be generated during the build process to reduce processing on the client side
and speed up page generation if the assets are not dynamic in relation to the user. These components are
generated using [underscore-template-loader](https://github.com/emaphp/underscore-template-loader) and can be
included in the entry `.html` pages or `.hbs` files with `@require(<path_to_static_file>, args)` with optional
arguments

## Custom Macros
Custom macros can be created that execute some function during the build process. This project has example custom
macros that include the build details and repository information in the output HTML pages. These macros are included
in the webpack.config.js([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
configurations for the underscore-template-loader. These macros are given names in the webpack config file and
then accessed using the `@` symbol (e.g. `@year()`).

## Static Component Examples
A couple of notes on static component examples included in this project:

### Header
Contains links to the different part of the application, this is a good example of being dynamic (but not
relative to the user) but still being able to be compiled during the build process.

### Footer
Contains reference to the project details and build details for developers. This could also include:
 - contact information
 - donation links
 - other navigation component or site tree.

## Static Partial Notes/Ideas
 - [ ] Move macros out of webpack.config.js into their own file (in src/static/ ?)
