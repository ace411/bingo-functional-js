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
