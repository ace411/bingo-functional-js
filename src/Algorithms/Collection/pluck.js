const _fold = require('../Internal/_fold')

/**
 * pluck function
 *
 * pluck :: [a] -> b -> b
 * @param {(array|object)} haystack
 * @param {*} needle
 * @param {*} def
 * @returns {*}
 *
 * pluck([2, 4, 8], '1')
 * // => 4
 */
const pluck = (haystack, needle, def = undefined) =>
  _fold(
    (acc, val, idx) => {
      if (needle === idx) {
        acc = val
      }

      return acc
    },
    haystack,
    def,
  )

module.exports = pluck
