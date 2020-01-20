/**
 * isNumeric function
 * isNumeric :: String -> Int -> Bool
 * @param {string} str
 * @param {number} radix
 * @returns {boolean}
 * @example
 *
 * isNumeric('99b')
 * // => true
 */

const isNumber = require('./isNumber')
const isString = require('./isString')

const isNumeric = (str, radix = 10) => isString(str) && isNumber(Number.parseInt(str, radix))

module.exports = isNumeric
