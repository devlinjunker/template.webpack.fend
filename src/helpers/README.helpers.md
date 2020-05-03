# Helpers
This project contains a `helpers/` directory([github](https://github.com/devlinjunker/template.webpack.fend/blob/src/helpers))
that holds Javascript classes and methods that can be used across multiple projects and entry points with
reusable methods and commonly used logic.

## LocalStorage
The localstorage helper ([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/src/helpers/local-storage.helper.js))
contains methods for saving/retrieving values with the browser localstorage API. Values saved with this will be
stored on the clients browser and can be retreived when they return to the web application (until they clear
their browser localstorage/data).

## Relative Href
The Relative Href helper([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/src/helpers/relative-href.helper.js))
contains a small snippet of code that must be included in each javascript entry point. This code sets the
`<base>` tag inside of the `<head>` element in the HTML page to tell relative links on the page the `href` that
they should be relative to.

i.e. if `<base href='http://test.com/'>` exists at the top of the page, all relative
links (e.g. `<a href="example">...</a>`) will direct to `http://test.com/example` (where example is any relative
`href` value). This is compared to the regular relative link behavior where the link is relative to the current
page (value in the browser url bar).

## Helper Notes/Ideas
 - [ ] Configuration file
 - [ ] Performance Logger
 - [ ] API Helpers (Internal vs External?)
