const _partial = require('../Internal/_partial')

/**
 * partial function
 * partial :: (a, b) -> (a) b
 * @param {function} func
 * @param  {...any} args
 * @returns {function}
 * @example
 *
 * partial((x, y, z) => (x / y) + z, 4)(2, 3)
 * // => 5
 */

const partial = (func, ...args) => _partial(func, args)

module.exports = partial
