const head = require('../Collection/head')

/**
 * constantFunction
 *
 * constantFunction :: a -> b -> (() -> a) -> a
 * @param {any...} args
 * @returns {function}
 * @example
 *
 * constantFunction('foo', 3)()
 * // => 'foo'
 */
const constantFunction = (...args) => () => head(args)

module.exports = constantFunction
