const sizeOf = require('../Collection/sizeOf')

/**
 * curryN
 *
 * curryN :: Int -> ((a, b), c) -> a -> b -> c
 * @param {number} argCount
 * @param {function} func
 * @returns {function}
 * @example
 *
 * let x = curryN(2, (x, y) => x + y)
 * x(2)(3)
 * // => 5
 */
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
