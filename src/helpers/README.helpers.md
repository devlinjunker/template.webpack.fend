# Helpers
This project contains a `helpers/` directory([github](https://github.com/devlinjunker/template.webpack.fend/blob/src/helpers))
that holds Javascript classes and methods that can be used across multiple projects and entry points with
reusable methods and commonly used logic.

## Helper Examples
Notes on the Example Helper class and methods in this project:

### LocalStorage Helper
The localstorage helper ([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/src/helpers/local-storage.helper.js))
contains methods for saving/retrieving values with the browser localstorage API. Values saved with this will be
stored on the clients browser and can be retreived when they return to the web application (until they clear
their browser localstorage/data).

### Relative Href Helper
The Relative Href helper([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/src/helpers/relative-href.helper.js))
contains a small snippet of code that must be included in each javascript entry point. This code sets the
`<base>` tag inside of the `<head>` element in the HTML page to tell relative links on the page the `href` that
they should be relative to.

i.e. if `<base href='http://test.com/'>` exists at the top of the page, all relative
links (e.g. `<a href="example">...</a>`) will direct to `http://test.com/example` (where example is any relative
`href` value). This is compared to the regular relative link behavior where the link is relative to the current
page (value in the browser url bar).

## Handlebars Helpers

Handlebars is the simple HTML templating framework this project uses to create HTML components. Handlebars
lets the project import it's own helpers in the `webpack.config.js`
([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
that can add additional functionality and logic to the template partial files easily.

### Default Value Helper
Helper that checks a variable to see if it contains a value and returns that value if it does, or else it returns
a  default value (2nd parameter).

e.g. will output '123' unless `testVar` contains a value, in which case it will return the value in `testVar`
```
// .hbs
{{default-val testVar '123'}}

let context = { }
// Output
123

let context = { testVar: 'abc' }
// Output after
abc
```

### Eq Helper
Helper that compares to variables and checks if they are equal with `===`. Returns `true` or `false`. This is
best used inside of an expression in an `#if` block helper.

e.g. (will display `Hello World!` on page if context variable `var` === 'true')
```
// .hbs file
{{#if (eq var 'true')}} Hello World! {{/if}}

let context = { var: true };
// Output
Hello World!

let context = { var: false };
// Output

```

## Helper Notes/Ideas
 - [ ] Configuration file
 - [ ] Performance Logger
 - [ ] API Helpers (Internal vs External?)
