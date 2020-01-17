const isFunction = require('./isFunction')
const isNull = require('./isNull')

const toException = (func, handler = null) => (...args) => {
  try {
    return func(...args)
  } catch (exception) {
    return isNull(handler) || !isFunction(handler)
      ? exception.message
      : handler(exception)
  }
}

module.exports = toException
