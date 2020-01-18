/**
 * isFunction function
 * isFunction :: a -> Bool
 * @param {*} func
 * @returns {boolean}
 * @example
 *
 * isFunction(() => 'foo')
 * // => true
 */

const isFunction = (func) => func instanceof Function

module.exports = isFunction
