const Monadic = require('../monad')
const { isFunction, constantFunction } = require('../../../Algorithms/Function')

/**
 * IO monad
 * @constructor
 * @param {function} unsafe
 */
function IO(unsafe) {
  Monadic.call(this, isFunction(unsafe) ? unsafe : constantFunction(unsafe))

  /**
   * ap function
   * @param {IO} io
   * @returns {IO}
   * @example
   *
   * IO.of(() => (str) => str.toUpperCase()).ap(IO.of(() => 'foo'))
   * // => [IO]
   */
  this.ap = function (io) {
    const ret = this.exec()
    return io.map(ret)
  }

  /**
   * bind function
   * @param {function} operation
   * @returns {IO}
   * @example
   *
   * IO.of(() => fs.readFileSync('data.txt', { encoding: 'utf-8' }))
   *  .bind((str) => IO.of(str.toLowerCase()))
   * // => [IO]
   */
  this.bind = function (operation) {
    const ret = this.exec()
    return operation(ret)
  }

  /**
   * map function
   * @param {function} operation
   * @returns {IO}
   * @example
   *
   * IO.of(() => fs.readFileSync('data.txt', { encoding: 'utf-8' }))
   *  .map(slugify)
   * // => [IO]
   */
  this.map = function (operation) {
    const ret = this.exec()
    return new IO(operation(ret))
  }

  /**
   * flatMap function
   * @param {function} operation
   * @returns {*}
   * @example
   *
   * IO.of(() => fs.readFileSync('data.txt', { encoding: 'utf-8' }))
   *  .map(slugify)
   * // => 'file-contents'
   */
  this.flatMap = function (operation) {
    const ret = this.exec()
    return operation(ret)
  }

  /**
   * exec function
   * @returns {*}
   * @example
   *
   * IO.of(() => fs.readFileSync('data.txt', { encoding: 'utf-8' })).exec()
   * // => 'file contents'
   */
  this.exec = function () {
    return (this.val)()
  }
}

/**
 * of function
 * @param {function} operation
 * @returns {IO}
 * @example
 *
 * IO.of(() => fs.readFileSync('data.txt', { encoding: 'utf-8' }))
 * // => [IO]
 */
IO.of = function (operation) {
  return new IO(operation)
}

IO.prototype = Object.create(Monadic.prototype)
IO.prototype.constructor = Monadic

module.exports = { IO }
