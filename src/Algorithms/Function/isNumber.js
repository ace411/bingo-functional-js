/**
 * isNumber function
 * isNumber :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isNumber(9)
 * // => true
 */

const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val)

module.exports = isNumber
