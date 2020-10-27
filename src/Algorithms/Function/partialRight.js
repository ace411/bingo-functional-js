const _partial = require('../Internal/_partial')

/**
 * partialRight function
 * partial :: (a, b) -> (b) a
 * @param {function} func
 * @param  {...any} args
 * @returns {function}
 * @example
 *
 * partialRight((x, y, z) => (x / y) + z, 3)(2, 4)
 * // => 5
 */

const partialRight = (func, ...args) => _partial(func, args, false)

module.exports = partialRight
