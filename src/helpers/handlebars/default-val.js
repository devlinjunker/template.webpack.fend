/**
 * @flow
 * @type {DefaultValueHelper}
 */
/**
 * Default Value Handlebars helper, used to check if variable has
 * @param  {any} variable   variable to check if it contains value
 * @param  {any} def default value to return if not set
 * @return {any}         [description]
 */
module.exports = function(variable: any, def: any) {
  if (variable !== undefined) {
    return variable;
  }
  return def;
};
