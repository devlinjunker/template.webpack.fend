/* eslint-disable max-len */
/**
 * @flow
 *
 * SVG Icon Loader
 *
 * Replaces svg requires in the template string
 * Finds `require("xxx.svg")` after created by underscore-loader-template from @include() in .hbs file
 * and then loads the content from file (assuming the path to svg is from project root directory)
 *
 *** From underscore-template-loader:
 *
 * module.exports = function(obj) {
 *   obj || (obj = {});
 *   var __t, __p = '';
 *   with (obj) {
 *     __p += '<div >\n  <span>\n    {{ description }}\n  </span>\n  &nbsp;\n  <span class="icon-sm hover-target">\n'
 *          + require("../../../img/zondicons/trash.svg") + '\n  </span>\n</div>\n';
 *   }
 *   return __p
 * };
 *
 * *** Want to return (for handlebars-loader):
 * '<div >\n  <span>\n    {{ description }}\n  </span>\n  &nbsp;\n  <span class="remove-icon hover-target">\n    <svg>...</svg>  </span>\n</div>\n';
 */

/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');

module.exports = function(source) {
  const module2 = {};

  source = source.replace('module.exports', 'module2.exports');

  // Replace require(xxx.svg)'s with the files content
  let found;
  while ((found = /require\("(.*.svg)"\)/.exec(source)) !== null) {
    // Read the svg file contents, assumes that the paths are relative to root
    const iconPath = path.resolve(process.cwd(), found[1]);
    let icon = fs.readFileSync(iconPath, 'utf-8');
    icon = icon.replace('\n', '');

    source = source.replace(found[0], `'${icon}'`);
  }

  // Q: should we split this part out to a separate loader? (only replace requires in here)
  // eval() the js code from underscore-template-loader after we've modified it
  eval(source);

  // we updated the assignment to this module2 variable so we can call the template
  // function returned from underscore-template-loader. There shouldn't be in any
  // <% params > in this file because it is a `.hbs` file
  return module2.exports();
};
