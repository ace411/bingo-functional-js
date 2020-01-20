/**
 * partialRight function
 * partialRight :: ((a, b, c) -> d) -> c -> (b, a) -> d
 * @param {*} func
 * @param  {...any} args
 * @returns {function}
 * @example
 *
 * partialRight((x, y, z) => (x / y) + z, 3)(2, 4)
 * // => 5
 */

const reverse = require('../Collection/reverse')

const partialRight = (func, ...args) => function (...inner) {
  const argList = reverse(args.concat(inner))

  return func.apply(this, argList)
}

module.exports = partialRight
