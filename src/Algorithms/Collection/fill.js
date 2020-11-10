const _fold = require('../Internal/_fold')

/**
 * fill function
 *
 * fill :: [a, b] -> c -> Int -> Int -> [a, c]
 *
 * @param {array} list
 * @param {*} value
 * @param {number} start
 * @param {number} end
 * @returns {array}
 * @example
 *
 * fill([2, 4, 6, 7], 'foo', 1, 3)
 * // => [2, 'foo', 'foo', 'foo']
 */
const fill = (list, value, start, end) => _fold(
  (acc, _, idx) => {
    if (idx <= end && idx >= start) {
      acc[idx] = value
    }

    return acc
  },
  list,
  list,
)

module.exports = fill
