const reverse = require('../Collection/reverse')

const partialRight = (func, ...args) => function (...inner) {
  const argList = reverse(args.concat(inner))

  return func.apply(this, argList)
}

module.exports = partialRight
