# Handlebars Helpers

Handlebars is the simple HTML templating framework this project uses to create HTML components. Handlebars
lets the project import it's own helpers in the `webpack.config.js`
([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/webpack.config.js))
that can add additional functionality and logic to the template partial files easily.

## Default Value Helper
Helper that checks a variable to see if it contains a value and returns that value if it does, or else it returns
a  default value (2nd parameter). e.g. `{{default-val testVar '123'}}` will output '123' unless `testVar` contains
a value, in which case it will return the value in `testVar`
