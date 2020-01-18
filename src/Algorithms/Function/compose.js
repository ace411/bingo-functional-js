/**
 * compose function
 * compose :: (a -> b) -> (b -> c) -> a -> c
 * @param {function...} functions
 * @returns {function}
 * @example
 *
 * compose((x) => x ** 2, (y) => y ** 3)(2)
 * // => 64
 */

const identity = require('./identity')
const fold = require('../Collection/fold')

const compose = (...functions) => fold(
  (id, func) => (argument) => func(id(argument)),
  functions,
  identity,
)

module.exports = compose
