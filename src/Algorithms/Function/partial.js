const partial = (func, ...args) => {
    return function (...inner) {
        return func.apply(this, args.concat(inner))
    }
}

module.exports = partial