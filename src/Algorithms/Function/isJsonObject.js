/**
 * isJsonObject function
 * isJsonObject :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isJsonObject({})
 * // => true
 */

const isJsonObject = (val) => val instanceof Object && val.constructor === Object

module.exports = isJsonObject
