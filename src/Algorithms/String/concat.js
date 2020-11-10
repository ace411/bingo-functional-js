const sizeOf = require('../Collection/sizeOf')

/**
 * concat
 *
 * concat :: String -> String -> String
 * @param {string} wildcard
 * @param  {...(string)} strings
 * @returns {string}
 * @example
 *
 * concat('/', 'https:/', 'chemem.site', 'home')
 * // => 'https:://chemem.site/home'
 */
const concat = (wildcard, ...strings) =>
  !(sizeOf(strings) === 0) ? strings.join(wildcard) : undefined

module.exports = concat
