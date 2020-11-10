const equal = require('deep-equal')
const isJsonObject = require('../Function/isJsonObject')
const flatten = require('./flatten')
const _fold = require('../Internal/_fold')

/**
 * indexesOf
 *
 * indexesOf :: [b] -> b -> [a]
 * @param {(object|array)} list
 * @param {*} value
 * @returns {array}
 * @example
 *
 * indexesOf({ x: 12, y: { foo: 12 } }, 12)
 * // => ['x', 'foo']
 */
const indexesOf = (list, value) => _fold(
  (acc, val, idx) => {
    if (Array.isArray(val) || isJsonObject(val)) {
      acc.push(indexesOf(val, value))
    }

    if (equal(val, value)) {
      acc.push(idx)
    }

    return flatten(acc)
  },
  list,
  [],
)

module.exports = indexesOf
