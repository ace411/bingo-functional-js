const sizeOf = require('./sizeOf')
const filter = require('./filter')
const keyExists = require('./keyExists')

const keysExist = (list, ...keys) => {
    let matches = filter(key => {
        return keyExists(list, key)
    }, Object.values(keys))

    return sizeOf(matches) === sizeOf(keys)
}

module.exports = keysExist