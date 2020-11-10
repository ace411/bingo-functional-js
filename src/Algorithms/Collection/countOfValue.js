const deepEqual = require('deep-equal')
const isJsonObject = require('../Function/isJsonObject')
const fold = require('./fold')

/**
 * countOfValue
 *
 * countOfValue :: [a] -> a -> Int
 * @param {(object|array)} list
 * @param {*} val
 * @returns {number}
 * @example
 *
 * countOfValue({ foo: 'foo', { x: 12, fizz: 'foo' } }, 'foo')
 * // => 2
 */
const countOfValue = (list, val) => fold(
  (acc, entry) => {
    if (deepEqual(val, entry)) {
      acc += 1
    }

    if (Array.isArray(entry) || isJsonObject(entry)) {
      acc += countOfValue(entry, val)
    }

    return acc
  },
  list,
  0,
)

module.exports = countOfValue
