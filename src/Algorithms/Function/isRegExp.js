/**
 * isRegExp function
 * isRegExp :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isRegExp(/^[a-z]$i/)
 * // => true
 */

const isRegExp = (val) => val instanceof Object && val.constructor === RegExp

module.exports = isRegExp
