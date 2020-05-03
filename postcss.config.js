/* eslint-disable no-undef */
const listSelectors = require('list-selectors');
const stylelint = require('stylelint');
const path = require('path');
const fs = require('fs');

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [stylelint]
    }),
    require('postcss-preset-env'),
    require('precss'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-reporter'),
    // TODO: this works for now, although it doesn't list the selectors after precss has processed the
    //  files, so it isn't quite correct
    listSelectors(
      ['src/**/*.scss'],
      {},
      (list) => {
        fs.writeFileSync(path.join('docs', 'css-selectors.json'), JSON.stringify(list));
      }
    )
  ]
};
