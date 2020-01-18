/**
 * constantFunction
 * constantFunction :: a -> b -> (() -> a) -> a
 * @param {any...} args
 * @return {function}
 * @example
 *
 * constantFunction('foo', 3)()
 * // => 'foo'
 */

const head = require('../Collection/head')

const constantFunction = (...args) => (() => head(args))

module.exports = constantFunction
