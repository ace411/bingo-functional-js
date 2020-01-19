/**
 * sizeOf function
 *
 * sizeOf :: [a] -> Int
 * @param {(array|object)} list
 * @returns {number}
 * @example
 *
 * sizeOf(['foo', 'bar'])
 * // => 2
 */

const sizeOf = (list) => (Array.isArray(list)
  ? list.length
  : Object.values(list).length)

module.exports = sizeOf
