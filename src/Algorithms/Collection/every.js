/**
 * every function
 *
 * every :: [a] -> (a -> Bool) -> Bool
 * @param {(array|object)} list
 * @param {function} func
 * @returns {boolean}
 * @example
 *
 * every([3, 7, 9], (x) => x % 2 !== 0)
 * // => true
 */
const sizeOf = require('./sizeOf')
const filter = require('./filter')

const every = (list, func) => sizeOf(filter(func, list)) === sizeOf(list)

module.exports = every
