const constantFunction = require('../../../Algorithms/Function/constantFunction')
const isFunction = require('../../../Algorithms/Function/isFunction')

/**
 * IO
 *
 * @constructor
 * @param {function} unsafe
 */
function IO(unsafe) {
  this.unsafe = isFunction(unsafe) ? unsafe : constantFunction(unsafe)

  /**
   * of
   *
   * of :: a -> m a
   * @param {*} unsafe
   * @returns {IO}
   * @example
   *
   * IO.of(() => 2)
   * // => IO { unsafe: [Function], of: [Function], exec.... }
   */
  this.of = function (unsafe) {
    return new IO(unsafe)
  }

  /**
   * ap
   *
   * ap :: Monad m => m (a -> b) -> m a -> m b
   * @param {IO} io
   * @returns {IO}
   * @example
   *
   * IO.of((x) => x ** 2).ap(IO.of(() => 3))
   * // => IO { unsafe: [Function], of: [Function], exec.... }
   */
  this.ap = function (io) {
    return io.map(this.exec())
  }

  /**
   * exec
   *
   * @returns {*}
   * @example
   *
   * IO.of(() => 2).exec()
   * // => 2
   */
  this.exec = function () {
    return this.unsafe()
  }

  /**
   * bind
   *
   * (>>=) :: IO a -> (a -> IO b) -> IO b
   * @param {function} op
   * @returns {IO}
   * @example
   *
   * IO.of(() => 3).bind((x) => IO.of(x ** 2))
   * // => IO { unsafe: [Function], of: [Function], exec.... }
   */
  this.bind = function (op) {
    return op(this.exec())
  }

  /**
   * map
   *
   * map :: (a -> b) -> IO (b)
   * @param {function} op
   * @returns {IO}
   * @example
   *
   * IO.of(() => 3).map((x) => x ** 2)
   * // => IO { unsafe: [Function], of: [Function], exec.... }
   */
  this.map = function (op) {
    return this.bind((context) => this.of(op(context)))
  }

  /**
   * map
   *
   * fmap :: Monad m => m (a -> b) -> b
   * @param {function} op
   * @returns {IO}
   * @example
   *
   * IO.of(() => 3).map((x) => x ** 2)
   * // => 9
   */
  this.flatMap = function (op) {
    return map(op).exec()
  }
}

IO.of = function (unsafe) {
  return new IO(unsafe)
}

module.exports = { IO }
