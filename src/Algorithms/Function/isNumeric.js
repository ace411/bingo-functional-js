const isNumber = require('./isNumber')
const isString = require('./isString')

const isNumeric = (str, radix = 10) => isString(str) && isNumber(Number.parseInt(str, radix))

module.exports = isNumeric
