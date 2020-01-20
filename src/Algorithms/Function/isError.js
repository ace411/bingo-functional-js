/**
 * isError function
 * isError :: a -> Bool
 * @param {*} val
 * @returns {boolean}
 * @example
 *
 * isError(new Error('fail'))
 * // => true
 */

const isError = (val) => val instanceof Error

module.exports = isError
