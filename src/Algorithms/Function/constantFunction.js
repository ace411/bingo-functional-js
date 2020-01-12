const constantFunction = (...args) => (() => args[0])

module.exports = constantFunction
