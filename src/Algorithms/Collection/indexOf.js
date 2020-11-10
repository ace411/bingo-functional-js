const equal = require('deep-equal')
const _fold = require('../Internal/_fold')

/**
 * indexOf function
 *
 * indexOf :: Object k v -> v -> k
 * @param {(array|object)} haystack
 * @param {*} needle
 * @returns {(string|number)}
 * @example
 *
 * indexOf({ a: 'foo', b: 'bar' }, 'bar')
 * // => 'b'
 */
const indexOf = (haystack, needle) => _fold(
  (acc, val, idx) => {
    if (equal(val, needle)) {
      acc = idx
    }

    return acc
  },
  haystack,
  undefined,
)

module.exports = indexOf
