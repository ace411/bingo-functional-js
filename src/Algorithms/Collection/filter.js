const _fold = require('../Internal/_fold')
const isNumeric = require('../Function/isNumeric')

/**
 * filter function
 *
 * filter :: (a -> Bool) -> [a] -> [a]
 * @param {function} func
 * @param {(array|object)} list
 * @returns {(array|object)}
 * @example
 *
 * filter((x) => x % 2 === 0, [2, 9, 3, 14])
 * // => [2, 14]
 */
const filter = (predicate, list) => _fold(
  (acc, val, idx) => {
    if (predicate(val)) {
      if (isNumeric(idx)) {
        acc.push(val)
      } else {
        acc[idx] = val
      }
    }

    return acc
  },
  list,
  Array.isArray(list) ? [] : {},
)

module.exports = filter
