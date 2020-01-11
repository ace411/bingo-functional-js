const Monadic = require('../monad')
const { isFunction, constantFunction } = require('../../../Algorithms/Function')

function Reader(operation) {
    Monadic.call(this, isFunction(operation) ? operation : constantFunction(operation))
    this.ap = function (reader) {
        return this.bind(func => reader.map(func))
    }
    this.bind = function (func) {
        return new Reader(env => func(this.run(env)).run(env))
    }
    this.map = function (func) {
        return this.bind(env => new Reader(func(env)))
    }
    this.run = function (env) {
        return this.val(env)
    }
}

Reader.of = function (operation) {
    return new Reader(operation)
}

Reader.prototype = Object.create(Monadic.prototype)
Reader.prototype.constructor = Monadic

module.exports = Reader