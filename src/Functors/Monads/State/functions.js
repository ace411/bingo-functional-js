const State = require('./state')

/**
 * state function
 * embeds a simple state action in the State monad
 *
 * state :: (s -> (a, s)) -> m a
 * @param {function} action
 * @returns {State}
 * @example
 *
 * state((x) => x ** 2)
 * // => [State]
 */
const state = (action) => State.of((value) => action(value))

/**
 * put function
 * replace the state in the State monad
 *
 * put :: s -> m ()
 * @param {*} value
 * @returns {State}
 * @example
 *
 * put('foo')
 * // => [State]
 */
const put = (value) => state((_) => value)

/**
 * get function
 * return the State from the internals of the State monad
 *
 * get :: m s
 * @returns {State}
 * @example
 *
 * get()
 * // => [State]
 */
const get = () => state((value) => [value, value])

/**
 * gets function
 * gets a specific State monad component using a projection function
 *
 * gets :: State s m => (s -> a) -> m a
 * @param {function} projection
 * @returns {State}
 * @example
 *
 * gets((x) => x ** 3)
 * // => [State]
 */
const gets = (projection) => state((value) => [projection(value), value])

/**
 * modify function
 * maps an old state to a new one in a State monad
 *
 * @param {function} func
 * @returns {State}
 * @example
 *
 * modify(identity)
 * // => [State]
 */
const modify = (func) => State.of((value) => [null, func(value)])

/**
 * runState function
 * unwraps a State monad computation as a function
 *
 * runState :: State s a -> s -> (a, s)
 * @param {State} monad
 * @param {*} item
 * @returns {array}
 * @example
 *
 * runState(State.of('foo'), 'bar')
 * // => ['foo', 'bar']
 */
const runState = (monad, item) => monad.run(item)

/**
 * evalState function
 * evaluates a State computation with a given initial state and returns a final value
 *
 * evalState :: State s a -> s -> a
 * @param {State} monad
 * @param {*} item
 * @returns {*}
 * @example
 *
 * evalState(state(identity), 'bar')
 * // => [Function]
 */
const evalState = (monad, item) => {
  const [initial] = monad.run(item)

  return initial
}

/**
 * execState
 * evaluates the State monad with a given initial state and returns the final state
 *
 * execState :: State s a -> s -> s
 * @param {State} monad
 * @param {*} item
 * @returns {*}
 * @example
 *
 * execState(state(identity), 'foo')
 * // => 'foo'
 */
const execState = (monad, item) => {
  const [, final] = monad.run(item)

  return final
}

module.exports = {
  get,
  put,
  gets,
  state,
  modify,
  runState,
  evalState,
  execState,
}
