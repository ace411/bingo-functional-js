/**
 * any function
 *
 * any :: [a] -> (a -> Bool) -> Bool
 * @param {(array|object)} list
 * @param {function} func
 * @returns {boolean}
 * @example
 *
 * any([3, 16, 9, 4], (x) => x % 2 !== 0)
 * // => true
 */
const sizeOf = require('./sizeOf')
const filter = require('./filter')

const any = (list, func) => sizeOf(filter(func, list)) >= 1

module.exports = any
