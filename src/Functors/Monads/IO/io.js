const Monadic = require('../monad')
const { isFunction, constantFunction } = require('../../../Algorithms/Function')

function _IO(func) {
    Monadic.call(this, isFunction(func) ? func : constantFunction(func))
    this.ap = function (io) {
        let ret = this.exec()
        return io.map(ret)
    }
    this.bind = function (func) {
        let ret = this.exec()
        return func(ret)
    }
    this.map = function (func) {
        let ret = this.exec()
        return new _IO(func(ret))
    }
    this.flatMap = function (func) {
        let ret = this.exec()
        return func(ret)
    }
    this.exec = function () {
        return this.val()
    }
}

_IO.of = function (operation) {
    return new _IO(operation)
}

_IO.prototype = Object.create(Monadic.prototype)
_IO.prototype.constructor = Monadic

module.exports = _IO