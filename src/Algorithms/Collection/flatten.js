/**
 * flatten function
 *
 * flatten :: [[a], [b]] -> [a, b]
 * @param {array} list
 * @returns {array}
 * @example
 *
 * flatten([['foo', 'bar'], ['baz', 'fooz']])
 * // => ['foo', 'bar', 'baz', 'fooz']
 */
const fold = require('./fold')

const flatten = (list) => fold((acc, val) => (Array.isArray(val)
  ? [...acc, ...flatten(val)]
  : [...acc, val]), list, [])

module.exports = flatten
