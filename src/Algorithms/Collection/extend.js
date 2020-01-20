/**
 * extend function
 *
 * extend :: [a] -> [b] -> [a, b]
 * @param {...(array|object)} lists
 * @returns {array}
 * @example
 *
 * extend({ a: 'foo', b: 'bar' }, { c: 'baz' })
 * // => { a: 'foo', b: 'bar', c: 'baz' }
 */
const head = require('./head')
const { isJsonObject } = require('../Function')

const extend = (...lists) => {
  const first = head(lists)
  let result = Array.isArray(first) || !isJsonObject(first) ? [] : {}

  for (let idx = 0; idx < lists.length; idx += 1) {
    const listVal = lists[idx]
    if (Array.isArray(result)) {
      if (Array.isArray(listVal)) {
        result.push(...listVal)
      } else {
        result.push(listVal)
      }
    } else if (isJsonObject(result)) {
      result = { ...result, ...listVal }
    }
  }

  return result
}

module.exports = extend
