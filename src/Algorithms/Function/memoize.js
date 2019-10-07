const isUndefined = require('./isUndefined')

const memoize = (func) => {
    return function (...args) {
        this.cache = {}
        let key = JSON.stringify(args)

        if (isUndefined(cache[key])) {
            cache[key] = func.apply(this, args)
        }

        return cache[key]
    }
} 

module.exports = memoize