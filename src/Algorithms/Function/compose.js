const identity = require('./identity')
const fold = require('../Collection/fold')

const compose = (...functions) => fold(
  (id, func) => (argument) => func(id(argument)),
  functions,
  identity,
)

module.exports = compose
