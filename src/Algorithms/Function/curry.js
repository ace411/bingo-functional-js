/**
 * curry function
 * curry :: ((a, b) -> c) -> a -> b -> c
 * @param {function} func
 * @returns {function}
 * @example
 *
 * curry((x, y) => x + y)(2)(3)
 * // => 5
 */

const curryN = require('./curryN')

const curry = (func) => curryN(func.length, func)

module.exports = curry
