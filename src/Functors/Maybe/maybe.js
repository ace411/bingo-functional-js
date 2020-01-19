const { Monadic } = require('../Monads')

/**
 * Nothing constructor
 * @constructor
 */
function Nothing() {
  Monadic.call(this, null)

  /**
   * ap function
   * @param {Nothing} _
   * @returns {Nothing}
   * @example
   *
   * Nothing.ap(identity)
   * // => [Nothing]
   */
  this.ap = function (_) {
    return this
  }

  /**
   * bind function
   * @param {function} _
   * @returns {Nothing}
   * @example
   *
   * (new Nothing()).bind(x => fromValue(x))
   * // => [Nothing]
   */
  this.bind = function (_) {
    return this
  }

  /**
   * map function
   * @param {function} _
   * @returns {Nothing}
   * @example
   *
   * (new Nothing()).map(identity)
   * // => [Nothing]
   */
  this.map = function (_) {
    return this
  }

  /**
   * filter function
   * @param {function} _
   * @returns {Nothing}
   * @example
   *
   * (new Nothing()).filter(x => x % 2 === 0)
   * // => [Nothing]
   */
  this.filter = function (_) {
    return this
  }

  /**
   * flatMap function
   * @param {function} _
   * @returns {null}
   * @example
   *
   * (new Nothing()).flatMap(identity)
   * // => null
   */
  this.flatMap = function (_) {
    return this.val
  }

  /**
   * getNothing function
   * @returns {null}
   * @example
   *
   * Nothing.getNothing()
   * // => null
   */
  this.getNothing = function () {
    return this.val
  }

  /**
   * getJust function
   * @returns {null}
   * @example
   *
   * Nothing.getJust()
   * // => null
   */
  this.getJust = function () {
    return this
  }
}

/**
 * of function
 * @returns {Nothing}
 * @example
 *
 * Nothing.of()
 * // => [Nothing]
 */
Nothing.of = function () {
  return new Nothing()
}

Nothing.prototype = Object.create(Monadic.prototype)
Nothing.prototype.constructor = Monadic

function Just(val) {
  Monadic.call(this, val)

  /**
   * ap function
   * @param {Just} maybe
   * @returns {(Just|Nothing)}
   * @example
   *
   * fromValue((str) => str.toUpperCase()).ap(fromValue('foo'))
   * // => [Just]
   */
  this.ap = function (maybe) {
    return maybe.map(this.val)
  }

  /**
   * bind function
   * @param {function} transform
   * @returns {(Just|Nothing)}
   * @example
   *
   * fromValue(2).bind(x => fromValue(x ** 2))
   * // => [Just]
   */
  this.bind = function (transform) {
    return transform(this.val)
  }

  /**
   * map function
   * @param {function} transform
   * @returns {(Just|Nothing)}
   * @example
   *
   * fromValue('foo').map(identity)
   * // => [Just]
   */
  this.map = function (transform) {
    this.val = transform(this.val)
    return this
  }

  /**
   * filter operation
   * @param {function} predicate
   * @returns {(Just|Nothing)}
   * @example
   *
   * fromValue(4).filter((x) => x % 2 === 0)
   * // => [Just]
   */
  this.filter = function (predicate) {
    this.val = predicate(this.val) ? this.val : null

    return this.val === null ? Nothing.of() : this
  }

  /**
   * flatMap function
   * @param {function} transform
   * @returns {*}
   * @example
   *
   * fromValue('bar').flatMap(identity)
   * // => 'bar'
   */
  this.flatMap = function (transform) {
    this.val = transform(this.val)

    return this.val
  }

  /**
   * getJust function
   * @returns {*}
   * @example
   *
   * fromValue('foo').getJust()
   * // => 'foo'
   */
  this.getJust = function () {
    return this.val
  }

  /**
   * getNothing function
   * @returns {null}
   * @example
   *
   * fromValue('foo').getNothing()
   * // => null
   */
  this.getNothing = function () {
    return null
  }
}

/**
 * of function
 * @param {*} val
 * @returns {Just}
 * @example
 *
 * Just.of('foo')
 * // => [Just]
 */
Just.of = function (val) {
  return new Just(val)
}

Just.prototype = Object.create(Monadic.prototype)
Just.prototype.constructor = Monadic

/**
 * Maybe constructor
 * @constructor
 */
function Maybe() {
  this.val = undefined
}

/**
 * fromValue function
 * @param {*} just
 * @param {*} nothing
 * @returns {(Just|Nothing)}
 * @example
 *
 * Maybe.fromValue('foo')
 * // => [Just]
 */
Maybe.fromValue = function (just, nothing = null) {
  this.val = just !== nothing ? Just.of(just) : Nothing.of()
  return this.val
}

/**
 * just function
 * @param {*} val
 * @returns {Just}
 * @example
 *
 * Maybe.just('bar')
 * // => [Just]
 */
Maybe.just = function (val) {
  this.val = Just.of(val)
  return this.val
}

/**
 * nothing function
 * @returns {Nothing}
 * @example
 *
 * Maybe.nothing()
 * // => [Nothing]
 */
Maybe.nothing = function () {
  this.val = Nothing.of()
  return this.val
}

module.exports = { Maybe, Just, Nothing }
