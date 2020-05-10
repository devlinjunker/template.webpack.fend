/**
 * @flow
 *
 * SVG Icon Loader
 *
 * Replaces svg requires in the template string
 * Finds `@svg("xxx.svg")` in files and replaces with contents of svg file referenced
 *
 */
const path = require('path');
const fs = require('fs');

module.exports = function(source) {

  // TODO: better way to figure out loading dir
  const cwd = process.cwd();

  // Replace `@svg(xxx.svg)`s with the files content
  const after = source.replace(/@svg\("(.*\.svg)"\)/g, (req, reqPath) => {
    // Read the svg file contents, assumes that the paths are relative to root
    const iconPath = path.resolve(cwd, reqPath);

    console.log(iconPath);
    if (fs.existsSync(iconPath)) {
      let icon = fs.readFileSync(iconPath, 'utf-8');
      icon = icon.replace('\n', '');
      return icon;
    }

    return req;
  });

  return after;
};
