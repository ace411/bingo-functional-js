const concat = require('./concat')

/**
 * truncate
 *
 * truncate :: String -> Int -> String
 * @param {string} text
 * @param {number} len
 * @returns {string}
 * @example
 *
 * truncate('foo-bar-baz', 3)
 * // => foo...
 */
const truncate = (text, len) => {
  const txtlen = text.length

  return len < txtlen ? concat('...', text.slice(0, len), '') : text
}

module.exports = truncate
