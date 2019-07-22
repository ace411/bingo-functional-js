const partialRight = (func, ...args) => {
    return function (...inner) {
        let argList = args.concat(inner).reverse()

        return func.apply(this, argList)
    }
}

module.exports = partialRight