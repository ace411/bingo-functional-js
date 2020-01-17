const partial = (func, ...args) => function (...inner) {
  return func.apply(this, args.concat(inner))
}

module.exports = partial
