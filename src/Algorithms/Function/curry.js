const curryN = require('./curryN')

const curry = (func) => curryN(func.length, func)

module.exports = curry