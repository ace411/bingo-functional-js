const concat = require('./concat')

/**
 * slugify
 *
 * slugify :: String -> String
 * @param {string} text
 * @returns {string}
 * @example
 *
 * slugify("foo bar")
 * // => 'foo-bar'
 */
const slugify = (text) => concat('-', ...text.split(' '))

module.exports = slugify
