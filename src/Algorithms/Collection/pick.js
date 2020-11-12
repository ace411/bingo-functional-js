const equal = require('deep-equal')
const _fold = require('../Internal/_fold')
const isJsonObject = require('../Function/isJsonObject')

/**
 * pick function
 *
 * pick :: [a] -> a -> a
 * @param {(array|object)} haystack
 * @param {*} needle
 * @returns {*}
 * @example
 *
 * pick([1, 4, [9, 7]], 9)
 * // => 9
 */
const pick = (haystack, needle, def = undefined) => _fold(
  (acc, val) => {
    if (Array.isArray(val) || isJsonObject(val)) {
      pick(val, needle, def)
    }

    if (equal(needle, val)) {
      acc = val
    }

    return acc
  },
  haystack,
  def,
)

module.exports = pick
