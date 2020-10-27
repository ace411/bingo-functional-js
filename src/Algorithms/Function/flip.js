const reverse = require('../Collection/reverse')

/**
 * flip function
 * flip :: (a -> b -> c) -> b -> a -> c
 * @param {function} func
 * @returns {function}
 * @example
 *
 * flip((x, y) => x / y, 2, 4)
 * // => 2
 */

const flip = (func) => (...args) => func(...reverse(args))

module.exports = flip
