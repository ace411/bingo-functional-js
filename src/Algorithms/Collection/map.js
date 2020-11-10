const _fold = require('../Internal/_fold')

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

const map = (func, list) => _fold(
  (acc, val, idx) => {
    const result = func(val)
    acc[idx] = result

    return acc
  },
  list,
  list,
)

module.exports = map
