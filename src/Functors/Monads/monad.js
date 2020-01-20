/**
 * Monadic type constructor
 * @constructor
 * @param {*} item
 */
function Monadic(item) {
  this.val = item

  /**
   * of function
   * @param {*} value
   * @returns {Monadic}
   */
  this.of = function (value) {
    this.val = value
    return this
  }
}

Monadic.prototype.move = function (item) {
  this.val = item
  this.of = function (value) {
    this.val = value
  }
}

module.exports = Monadic
