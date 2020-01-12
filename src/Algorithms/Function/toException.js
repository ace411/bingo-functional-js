const isUndefined = require('./isUndefined')

const toException = (func) => (...args) => {
  try {
    return func(...args)
  } catch (exception) {
    return isUndefined(exception.message)
      ? exception
      : exception.message
  }
}

module.exports = toException
