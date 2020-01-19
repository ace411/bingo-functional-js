const { Maybe, Just, Nothing } = require('./maybe')
const {
  head, filter, map, fold,
} = require('../../Algorithms/Collection')
const {
  isEmpty, compose, partial, identity, isNull,
} = require('../../Algorithms/Function')

/**
 * fromValue function
 * returns a Nothing type if just value is null; Just if otherwise
 *
 * fromValue :: a -> b -> m a
 * @param {*} just
 * @param {*} nothing
 * @returns {(Just|Nothing)}
 * @example
 *
 * fromValue(null)
 * // => [Nothing]
 */
const fromValue = (just, nothing = null) => Maybe.fromValue(just, nothing)

/**
 * isJust function
 * checks if value is of the Just type
 *
 * isJust :: Maybe a -> Bool
 * @param {*} just
 * @returns {boolean}
 * @example
 *
 * isJust(Maybe.just(3))
 * // => true
 */
const isJust = (just) => just instanceof Just

/**
 * isNothing function
 * checks if value is of the Nothing type
 *
 * isNothing :: Maybe a -> Bool
 * @param {*} nothing
 * @returns {boolean}
 * @example
 *
 * isNothing(Maybe.nothing())
 * // => true
 */
const isNothing = (nothing) => nothing instanceof Nothing

/**
 * maybe function
 * performs case analysis on the Maybe monad
 *
 * maybe :: b -> (a -> b) -> Maybe a -> b
 * @param {*} defaultVal
 * @param {function} func
 * @param {(Just|Nothing)} maybeVal
 * @returns {*}
 * @example
 *
 * maybe(0, (x) => x ** 2, Maybe.just(3))
 * // => 9
 */
const maybe = (defaultVal, func, maybeVal) => (isNothing(maybeVal)
  ? defaultVal
  : maybeVal.flatMap(func))

function MaybeException(msg) {
  this.message = msg
  this.name = 'MaybeException'
}

/**
 * fromJust function
 * extracts the element out of a Just and throws an error if its argument is Nothing
 *
 * fromJust :: Maybe a -> a
 * @param {(Just|Nothing)} maybeVal
 * @returns {*}
 * @example
 *
 * fromJust(fromValue('foo'))
 * // => 'foo'
 */
const fromJust = (maybeVal) => {
  if (isNothing(maybeVal)) {
    throw new MaybeException('Maybe.fromJust: Nothing')
  }

  return maybeVal.getJust()
}

/**
 * fromMaybe function
 * extracts the element out of a Just and throws an error if its argument is Nothing
 *
 * fromMaybe :: a -> Maybe a -> a
 * @param {*} defaultVal
 * @param {(Just|Nothing)} maybeVal
 * @returns {*}
 * @example
 *
 * fromMaybe(0, fromValue('foo'))
 * // => 'foo'
 */
const fromMaybe = (defaultVal, maybeVal) => (isNothing(maybeVal)
  ? defaultVal
  : maybeVal.getJust())

/**
 * listToMaybe function
 * returns Nothing if given an empty list and Just a where a is the first element of the list
 *
 * listToMaybe :: [a] -> Maybe a
 * @param {array} list
 * @returns {(Just|Nothing)}
 * @example
 *
 * listToMaybe(['foo'])
 * // => [Just]
 */
const listToMaybe = (list) => (isEmpty(list) ? fromValue(null) : fromValue(head(list)))

/**
 * maybeToList function
 * returns an empty list when given Nothing or a singleton list when not given Just
 *
 * maybeToList :: Maybe a -> [a]
 * @param {(Just|Nothing)} maybeVal
 * @returns {array}
 * @example
 *
 * maybeToList(fromValue(2))
 * // => [2]
 */
const maybeToList = (maybeVal) => (isNothing(maybeVal) ? [] : [maybeVal.getJust()])

/**
 * catMaybes function
 * takes a list of Maybes and returns a list of all the Just values
 *
 * catMaybes :: [Maybe a] -> [a]
 * @param {array} maybes
 * @returns {array}
 * @example
 *
 * catMaybes([fromValue(null), fromValue(2), fromValue('foo')])
 * // => [2, 'foo']
 */
const catMaybes = (maybes) => {
  const res = compose(
    partial(map, (val) => {
      const result = val.flatMap(identity)
      return result
    }),
    partial(filter, (val) => !isNull(val)),
  )

  return res(maybes)
}

/**
 * mapMaybe function
 * is a version of map which throws out elements
 *
 * mapMaybe :: (a -> Maybe b) -> [a] -> [b]
 * @param {function} func
 * @param {array} values
 * @returns {array}
 * @example
 *
 * mapMaybe((x) => fromValue(x ** 2), [2, 3, null])
 * // => [2, 3]
 */
const mapMaybe = (func, values) => {
  const mapped = compose(partial(map, func), catMaybes)

  return mapped(values)
}

/**
 * lift function
 * renders function amenable to Maybe type arguments
 *
 * lift :: Maybe m => (a -> b) -> m a -> m b
 * @param {function} func
 * @return {function}
 * @example
 *
 * let square = lift((x) => x ** 2)
 * square(fromValue(2))
 * // => [Just]
 */
const lift = (func) => function (...args) {
  let finalArgs
  if (fold(
    (status, instance) => (isNothing(instance) ? false : status),
    args,
    true,
  )) {
    finalArgs = map((instance) => instance.getJust(), args)

    return fromValue(func(...finalArgs))
  }

  return fromValue(null)
}

module.exports = {
  fromValue,
  fromJust,
  isJust,
  isNothing,
  maybe,
  lift,
  fromMaybe,
  catMaybes,
  listToMaybe,
  maybeToList,
  mapMaybe,
}
