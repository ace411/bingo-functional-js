const head = require('../Collection/head')

const constantFunction = (...args) => (() => head(args))

module.exports = constantFunction
