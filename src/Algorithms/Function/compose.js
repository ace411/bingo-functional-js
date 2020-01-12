const identity = require('./identity')

const compose = (...functions) => identity(functions).reduce((idFn, func) => (arg) => func(idFn(arg)))

module.exports = compose
