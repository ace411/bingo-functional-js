const sizeOf = require('../Collection/sizeOf')

const curryN = (argCount, func) => {
  const acc = function (args) {
    return function (...inner) {
      const fnArgs = args.concat(inner)

      if (argCount <= sizeOf(fnArgs)) {
        return func.apply(this, fnArgs)
      }

      return acc(fnArgs)
    }
  }

  return acc([])
}

module.exports = curryN
