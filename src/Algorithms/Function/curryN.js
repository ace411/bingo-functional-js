function curryN(argCount, func) {
    let acc = function (args) {
        return function () {
            let fnArgs = args.concat(Array.from(arguments))

            if (argCount <= fnArgs.length) {
                return func.apply(this, fnArgs)
            }

            return acc(fnArgs)
        }
    }

    return acc([])
}

module.exports = curryN