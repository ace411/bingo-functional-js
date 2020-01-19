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

const sizeOf = require('./sizeOf')
const { partialRight } = require('../Function')

const lastVal = (list, size) => list[size - 1]

const last = (list) => {
  const listSize = sizeOf(list)
  const result = partialRight(lastVal, listSize)

  return Array.isArray(list)
    ? result(list)
    : result(Object.values(list))
}

module.exports = last
