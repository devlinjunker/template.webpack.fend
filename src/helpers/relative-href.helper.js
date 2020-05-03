/**
 * @flow
 */

/**
 * <a> `href` linking helper method.
 * sets the `<base>` tag in the header so links can remain relative to the root of the app. This also helps
 * with the demo app in `docs/` because it sets the links relative to that url rather than just the host.
 *
 * @return {void}
 */
(function() {
  // Get url
  const href = window.location.href;
  let newHref = '';

  // if found location of `demo`, set base tag as url to that point
  if (/demo\//.test(href) === true) {
    newHref = href.slice(0, href.indexOf('demo') + 5);
  // otherwise set to host
  // (we're assuming that the webapp is hosted at root of domain, otherwise this could be an issue)
  } else {
    newHref = window.origin;
  }

  const base = document.createElement('base');
  base.setAttribute('href', newHref);
  document.getElementsByTagName('head')[0].prepend(base);
})();
