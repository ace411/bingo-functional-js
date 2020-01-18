/**
 * flip function
 * flip :: (a -> b -> c) -> b -> a -> c
 * @param {function} func
 * @param {...any} args
 * @returns {*}
 * @example
 *
 * flip((x, y) => x / y, 2, 4)
 * // => 2
 */

const reverse = require('../Collection/reverse')

const flip = (func, ...args) => {
  const argList = reverse(args)

  return func(...argList)
}

module.exports = flip
