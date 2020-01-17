const reverse = require('../Collection/reverse')
const isEmpty = require('./isEmpty')

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
