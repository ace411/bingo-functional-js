const sizeOf = require('./sizeOf')
/**
 * last function
 *
 * last :: [a, b] -> b
 * @param {(array|object)} list
 * @returns {*}
 * @example
 *
 * last({ foo: 'foo', bar: 'bar' })
 * // => 'bar'
 */

const last = (list) => {
  const listSize = sizeOf(list)

  return Array.isArray(list)
    ? list[listSize - 1]
    : Object.values(list)[listSize - 1]
}

module.exports = last
