/**
 * @flow
 * @type {DefaultValueHelper}
 */
/**
 * Custom Eq Handlebars helper, used to check if values are equal
 * @param  {any} var1   variable to compare against second
 * @param  {any} var2   second variable to compare against first
 * @return {any}         True/False
 */
module.exports = function(var1: any, var2: any) {
  if (var1 === var2) {
    return true;
  }
  return false;
};
