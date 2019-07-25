function Monadic(val) {
    this.val = val
    this.of = function (val) {
        this.val = val
        return this
    }
}

Monadic.prototype.move = function (val) {
    this.val = val
    this.of = function (val) {
        this.val = val
    }
}

module.exports = Monadic