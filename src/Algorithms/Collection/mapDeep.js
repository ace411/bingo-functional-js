/**
 * mapDeep function
 *
 * map :: (a -> b) -> [a] -> [b]
 * @param {function} func
 * @param {(array|object)} list
 * @returns {(array|object)}
 * @example
 *
 * mapDeep((x) => x ** 2, [1, 2, [3, 4, [5]]])
 * // => [1, 4, [9, 16, [25]]]
 */

const isJsonObject = require('../Function/isJsonObject')

const mapDeep = (func, list) => {
  const result = Array.isArray(list) ? [] : {}

  for (const [key, value] of Object.entries(list)) {
    result[key] = Array.isArray(value) || isJsonObject(value)
      ? mapDeep(func, value)
      : func(value)
  }

  return result
}

module.exports = mapDeep
