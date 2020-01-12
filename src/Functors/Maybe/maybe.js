const { Monadic } = require('../Monads')

function Just(val) {
  Monadic.call(this, val)
  this.ap = function (maybe) {
    return maybe.map(this.val)
  }
  this.bind = function (func) {
    return func(this.val)
  }
  this.map = function (func) {
    this.val = func(this.val)
    return this
  }
  this.filter = function (func) {
    this.val = func(this.val) ? this : Nothing
    return this
  }
  this.flatMap = function (func) {
    this.val = func(this.val)
    return this.val
  }
  this.getJust = function () {
    return this.val
  }
}

Just.of = function (val) {
  return new Just(val)
}

Just.prototype = Object.create(Monadic.prototype)
Just.prototype.constructor = Monadic

function Nothing() {
  Monadic.call(this, null)
  this.ap = function (maybe) {
    return this
  }
  this.bind = function (func) {
    return this
  }
  this.map = function (func) {
    return this
  }
  this.filter = function (func) {
    return this
  }
  this.flatMap = function (func) {
    return this.val
  }
  this.getNothing = function () {
    return this.val
  }
}

Nothing.of = function () {
  return new Nothing()
}

Nothing.prototype = Object.create(Monadic.prototype)
Nothing.prototype.constructor = Monadic

function Maybe() {
  this.val = undefined
}

Maybe.fromValue = function (just, nothing = null) {
  this.val = just !== nothing ? Just.of(just) : Nothing.of()
  return this.val
}

Maybe.just = function (val) {
  this.val = Just.of(val)
  return this.val
}

Maybe.nothing = function () {
  this.val = Nothing.of()
  return this.val
}

module.exports = { Maybe, Just, Nothing }
