const isJsonObject = require('../Function/isJsonObject')
const _fold = require('../Internal/_fold')

/**
 * pluckDeep
 *
 * pluckDeep :: [a] -> b -> b
 * @param {(array|object)} haystack
 * @param {*} needle
 * @returns {array}
 *
 * pluckDeep({ a: 2, b: 3, c: { a: 5, d: 12 } }, 'a')
 * // => [2, 5]
 */
const pluckDeep = (haystack, needle) =>
  _fold(
    (acc, val, idx) => {
      // handle objects and arrays differently
      if (needle === idx) {
        acc.push(val)
      }

      if (isJsonObject(val) || Array.isArray(val)) {
        acc.push(...pluckDeep(val, needle))
      }

      return acc
    },
    haystack,
    [],
  )

module.exports = pluckDeep
