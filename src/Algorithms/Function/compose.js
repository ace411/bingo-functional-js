const identity = require('./identity')

const compose = (...functions) => {
    return identity(functions).reduce((idFn, func) => {
        return (arg) => {
            return func(idFn(arg))
        }
    })
}

module.exports = compose