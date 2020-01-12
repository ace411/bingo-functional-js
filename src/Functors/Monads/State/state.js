const Monadic = require('../monad')

function State(comp) {
  Monadic.call(this, comp)
  this.ap = function (state) {
    return this.bind((func) => state.map(func))
  }
  this.bind = function (func) {
    return new State((state) => {
      const [initial, final] = this.run(state)

      return func(initial).run(final)
    })
  }
  this.map = function (func) {
    const res = this.bind((state) => new State((res) => [func(state), res]))
    return res
  }
  this.run = function (state) {
    const ret = this.val(state)
    return ret
  }
}

State.prototype = Object.create(Monadic.prototype)
State.prototype.constructor = Monadic

State.of = function (value) {
  return new State((state) => [value, state])
}

module.exports = State
