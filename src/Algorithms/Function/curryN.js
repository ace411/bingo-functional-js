const extend = require('../Collection/extend')
const sizeOf = require('../Collection/sizeOf')

const curryN = (argCount, func) => {
  const acc = function (args) {
    return function () {
      const fnArgs = extend(args, Array.from(arguments))

      if (argCount <= sizeOf(fnArgs)) {
        return func.apply(this, fnArgs)
      }

      return acc(fnArgs)
    }
  }

  return acc([])
}

module.exports = curryN
