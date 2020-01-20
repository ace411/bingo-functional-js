/**
 * curry function
 * curry :: Int -> ((a, b) -> c) -> a -> b -> c
 * @param {function} func
 * @returns {function}
 * @example
 *
 * curry((x, y) => x + y)(2)(3)
 * // => 5
 */

const sizeOf = require('../Collection/sizeOf')

const curryN = (argCount, func) => {
  const acc = function (args) {
    return function (...inner) {
      const fnArgs = args.concat(inner)

      if (argCount <= sizeOf(fnArgs)) {
        return func.apply(this, fnArgs)
      }

      return acc(fnArgs)
    }
  }

  return acc([])
}

module.exports = curryN
