# Setup

**Requires Node 12+ to build**. Please install this before attempting to build. The easiest way to install and
manage node versions is by using the [Node Version Manager](https://github.com/nvm-sh/nvm). We define a
.nvm file in the project to help reference this minimum node version.

Use `nvm use 12` to switch node versions after installing a new Node version. **Then you should install all
project dependencies**([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json#L30))
with `npm install -D`. This should install Webpack and all the libraries/plugins used in this project.

If you have cloned the master branch, then the build should compile and all tests should pass once the
dependencies have been downloaded and installed. To only compile the html and javascript, use `npm run build`, or you can run the tests with `npm run test`. **To watch the files for changes and rebuild/retest the files
on changes, you can use** `npm run start-watch`. See the package.json([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json#L17))
for all possibe npm commands.

## Webpack
Webpack config file([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
is used to manage webpack build to compile the application.

This file:
  - Defines the Entrypoint javascript files to create bundles
  - Defines where the generated files are placed
  - Defines how to import other files
  - Sets up Modules/Plugins:
    - Babel and ESLint Loaders
    - Flow Integration with Webpack
    - Reference HTML Files (source and destinations) and javascript bundles to include on pages
    - PostCSS Loader for easy CSS files
    - Hot Module Replacement for rebuilding on file changes
    - Custom Script to run at end of webpack build that Lints generated HTML files
  - Sets up Development Server to Host HTML/JS/CSS Files for rapid development

### Dev Server
During development (while using the `npm run start-watch` command), we instantiate a Webpack Dev Server to host
the generated WebApp files. The Dev Server is manually instantiated in the webpack.config.js file because
the scripts actually start Karma to watch and manage the test runs, which then runs the Webpack config file to
start the build process and this Dev Server.

## Documentation

The `docs/` directory is created with `npm run doc`, this generates an esdoc webpage based on the modified
template stored in `docs/template` from the README files in the repo. These docs are also synced with the Github
wiki page via a Github Action (see Github Actions/Scripts page for more details.

The Dependency Graph is created with [Madge](https://github.com/pahen/madge) and graphviz, you will need to
install both in order to update the dependency graph. Didn't include these in the package.json dependencies
because this is more than is needed to develop a working app or even write basic documentation. Split this out
to a separate npm script: `npm run doc-image` so it can be run when someone actually installs the dependencies

Install madge with `npm install -g madge` and install graphviz with `brew install graphviz` or
`port install graphviz` (for OSX).
