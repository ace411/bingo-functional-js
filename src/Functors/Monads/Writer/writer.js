const Monadic = require('../monad')
const extend = require('../../../Algorithms/Collection/extend')

function Writer(action) {
  Monadic.call(this, action)
  this.ap = function (writer) {
    return this.bind((func) => writer.map(func))
  }
  this.bind = function (func) {
    return new Writer(() => {
      const [res, out] = this.run()
      const [_res, _out] = func(res).run()

      return [_res, extend(out, _out)]
    })
  }
  this.map = function (func) {
    return new Writer(() => {
      const [res, out] = this.run()

      return [func(res), out]
    })
  }
  this.run = function () {
    return this.val()
  }
}

Writer.prototype = Object.create(Monadic.prototype)
Writer.prototype.constructor = Monadic

Writer.of = function (result, output) {
  return new Writer(() => [result, [output]])
}

module.exports = Writer
