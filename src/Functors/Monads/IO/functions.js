const _IO = require('./io')
const { toException, compose, isFunction } = require('../../../Algorithms/Function')

const IO = operation => _IO.of(operation)

function _IOException(message) {
    this.message = message
    this.name = 'IOException'
}

const IOException = msg => IO(() => () => {
    throw new _IOException(msg)
})

const catchIO = io => io.bind((operation) => {
    const ret = compose(toException, IO)

    return isFunction(operation)
        ? ret(operation)
        : ret(() => operation)
})

module.exports = { IO, IOException, catchIO }