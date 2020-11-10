const reverse = require('../Collection/reverse')
const isEmpty = require('./isEmpty')

/**
 * trampoline function
 *
 * trampoline :: (a -> b) -> a -> b
 * @param {function} func
 * @returns {*}
 * @example
 *
 * let fib = trampoline((x) => x < 2 ? x : fib(x - 1) + fib(x - 2))
 * fib(30)
 * // => 832040
 */
const trampoline = (func) => {
  const finalArgs = []
  let recursing = false
  let result

  return (...args) => {
    finalArgs.push(...args)

    if (!recursing) {
      recursing = true

      while (!isEmpty(finalArgs)) {
        result = func(reverse(finalArgs).pop())
      }

      recursing = false
    }

    return result
  }
}

module.exports = trampoline
