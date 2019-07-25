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
Nothing.prototype = Object.create(Monadic.prototype)
Nothing.prototype.constructor = Monadic

function Maybe() {
    this.val = undefined
    this.fromValue = function (just, nothing = null) {
        this.val = just !== nothing ? new Just(just) : new Nothing()
        return this.val
    }
    this.just = function (val) {
        this.val = new Just(val)
        return this.val
    }
    this.nothing = function () {
        this.val = new Nothing()
        return this.val
    }
}

module.exports = { Maybe, Just, Nothing }