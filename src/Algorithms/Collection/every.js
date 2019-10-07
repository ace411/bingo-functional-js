const sizeOf = require('./sizeOf')
const filter = require('./filter')

const every = (list, func) => sizeOf(filter(func, list)) === sizeOf(list)

module.exports = every