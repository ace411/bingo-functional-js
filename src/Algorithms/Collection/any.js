const sizeOf = require('./sizeOf')
const filter = require('./filter')

const any = (list, func) => sizeOf(filter(func, list)) > 1

module.exports = any
