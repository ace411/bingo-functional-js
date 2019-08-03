const fold = require('./fold')
const sizeOf = require('./sizeOf')

const fromPairs = list => {
    let ret = fold((obj, item) => {
        const [ key, val ] = Array.isArray(item) && sizeOf(item) === 2 && item

        if (!key || !val) {
            return obj
        }
        
        obj[key] = val
        return obj
    }, list, {})

    return ret
}

module.exports = fromPairs
