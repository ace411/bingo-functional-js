const extend = require('../Collection/extend')
const reverse = require('../Collection/reverse')

const partialRight = (func, ...args) => {
    return function (...inner) {
        let argList = reverse(extend(args, inner))

        return func.apply(this, argList)
    }
}

module.exports = partialRight
