const _fold = require('../Internal/_fold')
const isNumeric = require('../Function/isNumeric')

/**
 * reject function
 * 
 * reject :: (a -> Bool) -> [a] -> [a]
 * 
 * @param {function} predicate 
 * @param {(object|array)} list
 * @returns {(object|array)}
 * @example
 * 
 * reject((x) => x % 2 === 0, [2, 9, 3, 14])
 * // => [9, 3]
 */
const reject = (predicate, list) => _fold((acc, val, idx) => {
  if (!predicate(val)) {
    if (isNumeric(idx)) {
      acc.push(val)
    } else {
      acc[idx] = val
    }
  }

  return acc
}, list, Array.isArray(list) ? [] : {})

module.exports = reject
