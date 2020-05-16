# Dynamic Components

Dynamic Components can be created with Handlebars partials and javascript files to add event handlers that toggle
properties, trigger backend calls and re-render the DOM in the browser.

## Partials
Handlebars partials are included either:
  - in other partial files with `{{> <partial_name> (arg_name=arg_value..) }}` syntax
  - in javascript files by:
    - importing at top of file using relative path e.g. `import template from ./example.partial.hbs`
    - compiling and capturing string in variable e.g. `const strTemp = template(<context>)`
       - context is object where properties become variables in partial file template

## Javascript Files
To attach event handlers to the HTML created by handlebars, you'll need to add the templateString generated
by Handlebars (i.e. `const strTemp = template()`) to the DOM. and then attach event handlers to the elements
created

## Examples
A couple of notes on the simple examples in this project.

### Checkbox
Partial component with svg checkmark inside of checkbox. This can be used to add a stylized checkbox to the page
rather than the standard checkbox created by the browser.

  - checked - (default: false) sets checked status of checkbox
  - label - (default: '') clickable label text (toggles checkbox)
  - color - (default: 'black') color of the checkmark in the checkbox
  - bg - (default: 'white') background color of the checkbox
  - bg-checked - (default: bg || 'white') background color of the checkbox after checked
  - size - (default: '') size of checkmark (available values = `sm`, `lg`)

e.g.
```
{{> form/checkbox checked=complete color='white' bg='black' bg-checked='gray-200' label='Check Me' size='sm'}}
```



## Components Notes/Ideas
- Seems like handlbars isn't great by itself for interactive applications
  - Handlebars recommends some frameworks: https://github.com/devlinjunker/template.webpack.fend/pull/23#issuecomment-629585403
  - Reactive-Handlebars looks interesting, but hasn't been updated in years...
- Can we add helpers that attach event handlers via some template context variable and a property on the element?
  - how about a class? constructor with params that associate class names with event handlers?
    - base class that creates DOM elements (with `render` function?) using:
```
const temp = document.createElement('div');
temp.innerHTML = template(context);
return temp.innerHTML
```
