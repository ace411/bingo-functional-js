const extend = require('../Collection/extend')

const partial = (func, ...args) => {
    return function (...inner) {
        return func.apply(this, extend(args, inner))
    }
}

module.exports = partial
