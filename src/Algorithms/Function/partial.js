/**
 * partial function
 * partial :: ((a, b, c) -> d) -> a -> (b, c) -> d
 * @param {*} func 
 * @param  {...any} args
 * @returns {function} 
 * @example
 * 
 * partial((x, y, z) => (x / y) + z, 4)(2, 3)
 * // => 5
 */

const partial = (func, ...args) => function (...inner) {
  return func.apply(this, args.concat(inner))
}

module.exports = partial
