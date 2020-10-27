const { identity: id, compose } = require('../../index')

/**
 * identity law proof helper
 * F(id) = id
 * @param {object} functor
 * @returns {object}
 * @example
 *
 * identity(new IO(() => fs.readFileSync('data.txt', { encoding: 'utf-8' })))
 * // => { left: [Monadic], right: [Monadic] }
 */
const identity = (functor) => ({ left: functor.map(id), right: id(functor) })

/**
 * composition law helper
 * F(g o f) = F(g) o F(f)
 * @param {object} functor
 * @param  {...any} funcs
 * @returns {object}
 * @example
 *
 * composition(Maybe.fromValue('foo'), (x) => x ** 2, (y) => y ** 3)
 * // => { left: [Monadic], right: [Monadic] }
 */
const composition = (functor, ...funcs) => {
  const [fx, fy] = funcs

  return {
    left: functor.map(fx).map(fy),
    right: functor.map(compose(fx, fy)),
  }
}

/**
 * left identity proof helper
 * x >>= f = f x
 * @param {Monadic} monad
 * @param {function} func
 * @param {*} val
 * @returns {object}
 * @example
 *
 * leftIdentity(Reader.of(identity), (x) => Reader.of(x ** 2), 2)
 * // => { left: [Monadic], right: [Monadic] }
 */
const leftIdentity = (monad, func, val) => ({ left: monad.bind(func), right: func(val) })

/**
 * right identity proof helper
 * m >>= return = m
 * @param {Monadic} monad
 * @param {Monadic} constructor
 * @returns {object}
 * @example
 *
 * rightIdentity(Reader.of(identity), new Reader(identity))
 * // => { left: [Monadic], right: [Monadic] }
 */
const rightIdentity = (monad, constructor) => ({ left: monad, right: constructor })

/**
 * associativity law helper
 * (m >>= f) >>= g = m >>= (\x -> f x >>= g)
 * @param {Monadic} monad
 * @param  {...any} funcs
 * @returns {object}
 * @example
 *
 * associativity(State.of(x), (x) => State.of(x ** 2), (y) => State.of(y ** 3))
 * // => { left: [Monadic], right: [Monadic] }
 */
const associativity = (monad, ...funcs) => {
  const [fx, fy] = funcs

  return {
    left: monad.bind(fx).bind(fy),
    right: monad.bind((val) => fx(val).bind(fy)),
  }
}

module.exports = {
  composition,
  identity,
  leftIdentity,
  rightIdentity,
  associativity,
}
