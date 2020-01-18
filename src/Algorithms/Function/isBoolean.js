/**
 * isBoolean function
 * isBoolean :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isBoolean(false)
 * // => true
 */

const isBoolean = (val) => typeof val === 'boolean'

module.exports = isBoolean
