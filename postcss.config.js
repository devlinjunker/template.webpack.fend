/* eslint-disable no-undef */
const listSelectors = require('list-selectors');
const path = require('path');
const fs = require('fs');

module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-preset-env'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-reporter'),
    // TODO: this works for now, although it doesn't list the selectors after precss has processed the
    //  files, so it isn't quite correct
    listSelectors(
      ['src/**/*.css'],
      {},
      (list) => {
        fs.writeFileSync(path.join('docs', 'css-selectors.json'), JSON.stringify(list));
      }
    )
  ]
};
