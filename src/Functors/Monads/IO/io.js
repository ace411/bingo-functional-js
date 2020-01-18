const Monadic = require('../monad')
const { isFunction, constantFunction } = require('../../../Algorithms/Function')

function IO(unsafe) {
  Monadic.call(this, isFunction(unsafe) ? unsafe : constantFunction(unsafe))
  this.ap = function (io) {
    const ret = this.exec()
    return io.map(ret)
  }
  this.bind = function (operation) {
    const ret = this.exec()
    return operation(ret)
  }
  this.map = function (operation) {
    const ret = this.exec()
    return new IO(operation(ret))
  }
  this.flatMap = function (func) {
    const ret = this.exec()
    return func(ret)
  }
  this.exec = function () {
    return (this.val)()
  }
}

IO.of = function (operation) {
  return new IO(operation)
}

IO.prototype = Object.create(Monadic.prototype)
IO.prototype.constructor = Monadic

module.exports = { IO }
