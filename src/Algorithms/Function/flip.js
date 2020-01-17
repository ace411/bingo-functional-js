const reverse = require('../Collection/reverse')

const flip = (func, ...args) => {
  const argList = reverse(args)

  return func(...argList)
}

module.exports = flip
