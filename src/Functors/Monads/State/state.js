const Monadic = require('../monad')

/**
 * State monad
 * @constructor
 * @param {*} comp
 */
function State(comp) {
  Monadic.call(this, comp)

  /**
   * ap function
   * @param {State} state
   * @returns {State}
   * @example
   *
   * new State((x) => x ** 2).ap(new State(2))
   * // => [State]
   */
  this.ap = function (state) {
    return this.bind((transform) => state.map(transform))
  }

  /**
   * bind function
   * @param {function} transform
   * @returns {State}
   * @example
   *
   * State.of('foo').bind((x) => new State(x ** 2))
   * // => [State]
   */
  this.bind = function (transform) {
    return new State((state) => {
      const [initial, final] = this.run(state)

      return transform(initial).run(final)
    })
  }

  /**
   * map function
   * @param {function} transform
   * @returns {State}
   * @example
   *
   * State.of('foo').map(identity)
   * // => [State]
   */
  this.map = function (transform) {
    const result = this.bind((state) => new State((ret) => [transform(state), ret]))
    return result
  }

  /**
   * run function
   * @param {*} state
   * @returns {*}
   * @example
   *
   * new State('foo').run('bar')
   * // => ['foo', 'bar']
   */
  this.run = function (state) {
    const ret = (this.val)(state)
    return ret
  }
}

State.prototype = Object.create(Monadic.prototype)
State.prototype.constructor = Monadic

/**
 * of function
 *
 * @param {*} value
 * @returns {State}
 * @example
 *
 * State.of('foo')
 * // => [State]
 */
State.of = function (value) {
  return new State((state) => [value, state])
}

module.exports = State
