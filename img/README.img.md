# Images

All images for the web application should be stored in the `img/` directory. An alias is configured in the
webpack.config.js file ([github]())
to enable requiring images with `require("img/<path_in_img_dir")` or referencing in .html or .hbs files <img>
`src` property.

## Icons
This template includes [Zondicons](http://www.zondicons.com/icons.html), a free SVG icon library with 270 icons.
These can be included in the HTML template files with `@svg(<img/<path_to_svg_relative_to_img>)` and the svg file
will be included inline so standard utility classes from Tailwind can be applied. It is best to wrap the icons
in a wrapper containing the `icon` class, as this will default to the icon being the size and color of the font.
