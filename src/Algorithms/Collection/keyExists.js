const sizeOf = require('./sizeOf')

/**
 * keyExists function
 *
 * keyExists :: [a, b] -> String -> Bool
 * @param {(array|object)} haystack
 * @param {string} needle
 * @returns {boolean}
 * @example
 *
 * keyExists(['foo', 'bar', 'baz'], '2')
 * // => true
 */
const keyExists = (haystack, needle) => {
  const result = []

  for (const [key, value] of Object.entries(haystack)) {
    if (needle === key) {
      result.push(value)
    }
  }

  return sizeOf(result) !== 0
}

module.exports = keyExists
