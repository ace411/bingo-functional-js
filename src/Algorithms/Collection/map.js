/**
 * map function
 *
 * map :: (a -> b) -> [a] -> [b]
 * @param {function} func
 * @param {(array|object)} list
 * @returns {(array|object)}
 * @example
 *
 * map((x) => x ** 2, [1, 2, 5])
 * // => [1, 4, 25]
 */

const map = (func, list) => {
  const res = Array.isArray(list) ? [] : {}

  for (const [key, value] of Object.entries(list)) {
    res[key] = func(value)
  }

  return res
}

module.exports = map
