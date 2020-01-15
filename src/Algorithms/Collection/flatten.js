const fold = require('./fold')

const flatten = (list) => fold((acc, val) => (Array.isArray(val)
  ? [...acc, ...flatten(val)]
  : [...acc, val]), list, [])

module.exports = flatten
