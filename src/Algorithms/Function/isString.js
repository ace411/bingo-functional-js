/**
 * isString function
 * isString :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isString('xyz')
 * // => true
 */

const isString = (val) => typeof val === 'string'

module.exports = isString
