/**
 * toException function
 * toException :: (a -> Error) -> (Error -> b) -> a -> b
 * @param {function} func
 * @param {function} [handler = null]
 * @returns {function}
 * @example
 *
 * toException((x, y) => {
 *  if (y === 0) throw new Error('division by zero')
 *  return x / y
 * })(2, 0)
 * // => 'division by zero'
 */

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
