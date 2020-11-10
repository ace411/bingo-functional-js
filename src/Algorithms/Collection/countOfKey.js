const isJsonObject = require('../Function/isJsonObject')
const _fold = require('../Internal/_fold')

/**
 * countOfKey
 *
 * countOfKey :: [a] -> b -> Int
 * @param {(object|array)} list
 * @param {(string|number)} key
 * @returns {number}
 * @example
 *
 * countOfKey({ foo: 'foo', { x: 12, foo: 'baz' } }, 'foo')
 * // => 2
 */
const countOfKey = (list, key) => _fold(
  (acc, val, idx) => {
    if (idx === key) {
      acc += 1
    }

    if (Array.isArray(val) || isJsonObject(val)) {
      acc += countOfKey(val, key)
    }

    return acc
  },
  list,
  0,
)

module.exports = countOfKey
