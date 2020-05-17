# Dynamic HTML Components

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
by the Handlebars method (i.e. `const strTemp = template()`) to the DOM. and then attach event handlers to
the elements created. (This is done in the [Todo Example]())

## Dynamic Component Examples
A couple of notes on the Dynamic Component examples in this project.

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
/* `.hbs` file */
<span id="checkbox-1">
  {{> form/checkbox checked=complete color='white' bg='black' bg-checked='gray-200' label='Check Me' size='sm'}}
</span>

/* `.js` file */
document.getElementById('checkbox-1').onchange = () => { // Do stuff }
```

**Note:** Event handlers are attached in the javascript file to trigger this actually doing anything on the page

### List Object and List item
Handlebars partials to render lists of `items` inside of html elements. The developer can specify a template
partial that can be used to generate the contents of the list item (this should be a .hbs file).

Because this is a more complicated object (with content template) and likely requires event handlers for user
interaction, it is best to create the ListObject inside of the javascript files and add it to the DOM from there.

e.g.
```
// Import from path to component
import listObjectTemplate from '../components/list/list-object.hbs';

// Build HTML from Template method
const listObject = listObjectTemplate({ items, template: 'my-list-template' }, {
  partials: {
    'my-list-template': listItemTemplate
  }
});

// Append HTML to Page
document.getElementById('page').innerHTML = listObject;

// Add event handlers...
listObject.querySelectorAll(<selector_of_element_with_event>).onclick = () => { // do stuff };
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
return temp.innerHTML;
```
  - this is almost like recreating frameworks like these though (should test before we roll our own):
    - Angular
    - Aurelia
    - Ember
    - Inferno
    - Mithril
    - Svelte
    - Ractive
    - React
    - Vue
- Backbone?
