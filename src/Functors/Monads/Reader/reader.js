const Monadic = require('../monad')
const { isFunction, constantFunction } = require('../../../Algorithms/Function')

/**
 * Reader monad
 * @constructor
 * @param {function} operation
 */
function Reader(operation) {
  Monadic.call(this, isFunction(operation) ? operation : constantFunction(operation))

  /**
   * ap function
   * @param {Reader} reader
   * @returns {Reader}
   * @example
   *
   * Reader.of((fst) => (last) => Reader.of(`Hello, ${first} ${last}`))
   *  .ap(Reader.of('World'))
   * // => [Reader]
   */
  this.ap = function (reader) {
    return this.bind((modify) => reader.map(modify))
  }

  /**
   * bind function
   * @param {function} computation
   * @returns {Reader}
   * @example
   *
   * Reader.of((name) => `Hello ${name}`)
   *  .bind((greet) => Reader.of((name) => `${greet} ${name === 'world' && 'hey'}`))
   * // => [Reader]
   */
  this.bind = function (computation) {
    return new Reader((env) => computation(this.run(env)).run(env))
  }

  /**
   * map function
   * @param {function} computation
   * @returns {Reader}
   * @example
   *
   * Reader.of(identity).map(x => Reader.of(x ** 2))
   * // => [Reader]
   */
  this.map = function (computation) {
    return this.bind((env) => new Reader(computation(env)))
  }

  /**
   * run function
   * @param {*} env
   * @returns {Reader}
   * @example
   *
   * Reader.of(identity).run(2)
   * // => 2
   */
  this.run = function (env) {
    return this.val(env)
  }
}

/**
 * of function
 * @param {function} operation
 * @returns {Reader}
 * @example
 *
 * Reader.of(identity)
 * // => [Reader]
 */
Reader.of = function (operation) {
  return new Reader(operation)
}

Reader.prototype = Object.create(Monadic.prototype)
Reader.prototype.constructor = Monadic

module.exports = Reader
