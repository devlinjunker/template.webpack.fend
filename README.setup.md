# Setup

**Requires Node 12+**. Please install this before attempting to run. The easiest way to install and
manage node versions is by using the [Node Version Manager](https://github.com/nvm-sh/nvm). We define a .nvm file
in the project to help reference this minimum node version.

Use `nvm use 12` to switch node versions after installing a new Node version. **Then you should install all
project dependencies**([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json#L30))
with `npm install -D`. This should install Webpack and all the libraries/plugins used in this project.

If you have cloned the master branch, then the build should compile and all tests should pass once the
dependencies have been downloaded and installed. To only compile the html and javascript, use `npm run build`, or you can run the tests with `npm run test`. **To watch the files for changes and rebuild/retest the files
on changes, you can use** `npm run start-watch`. See the package.json([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json#L17))
for all possibe npm commands.

## Webpack


### Page Meta Attributes


### Dev Server


## Documentation
