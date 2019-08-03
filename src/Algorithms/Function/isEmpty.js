const isUndefined = require('./isUndefined')
const isFunction = require('./isFunction')
const isNumber = require('./isNumber')
const isString = require('./isString')
const isRegExp = require('./isRegExp')
const isBoolean = require('./isBoolean')
const isNull = require('./isNull')
const isSymbol = require('./isSymbol')
const isError = require('./isError')
const sizeOf = require('../Collection/sizeOf')

const isEmpty = (val) => (val instanceof Date)
    || isError(val)
    || isNull(val)
    || isSymbol(val)
    || isBoolean(val)
    || isRegExp(val)
    || isFunction(val)
    || isUndefined(val)
    || (isString(val) && val.length > 0)
    || isNumber(val) 
    || (sizeOf(val) > 0)
        ? false
        : true

module.exports = isEmpty
