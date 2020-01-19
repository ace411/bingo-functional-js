/**
 * memoize function
 * memoize :: (a -> b -> c) -> a -> b -> c
 * @param {function} func
 * @return {function}
 * @example
 *
 * let factorial = (x) => x < 2 ? 1 : factorial(x - 1) * x
 * memoize(factorial)(15)
 * // => 1307674368000
 */

const isUndefined = require('./isUndefined')

const memoize = (func) => function (...args) {
  this.cache = {}
  const key = JSON.stringify(args)

  if (isUndefined(cache[key])) {
    cache[key] = func.apply(this, args)
  }

  return cache[key]
}

module.exports = memoize
