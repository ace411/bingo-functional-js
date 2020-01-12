const isNumber = require('./isNumber')

const isNumeric = (str) => isNumber(Number.parseInt(str))

module.exports = isNumeric
