const { Maybe, Just, Nothing } = require('./maybe')
const { head, filter, map } = require('../../Algorithms/Collection')
const {
  isEmpty, compose, partial, identity, isNull,
} = require('../../Algorithms/Function')

const fromValue = (just, nothing = null) => Maybe.fromValue(just, nothing)

const isJust = (just) => just instanceof Just

const isNothing = (nothing) => nothing instanceof Nothing

const maybe = (def, func, maybe) => (isNothing(maybe) ? def : maybe.flatMap(func))

function MaybeException(msg) {
  this.message = msg
  this.name = 'MaybeException'
}

const fromJust = (maybe) => {
  if (isNothing(maybe)) {
    throw new MaybeException('Maybe.fromJust: Nothing')
  }

  return maybe.getJust()
}

const fromMaybe = (def, maybe) => (isNothing(maybe) ? def : maybe.getJust())

const listToMaybe = (list) => (isEmpty(list) ? fromValue(null) : fromValue(head(list)))

const maybeToList = (maybe) => (isNothing(maybe) ? [] : [maybe.getJust()])

const catMaybes = (maybes) => {
  const res = compose(
    partial(map, (val) => {
      const res = val.flatMap(identity)
      return res
    }),
    partial(filter, (val) => !isNull(val)),
  )

  return res(maybes)
}

const mapMaybe = (func, val) => {
  const mapped = compose(partial(map, func), catMaybes)

  return mapped(val)
}

module.exports = {
  fromValue,
  fromJust,
  isJust,
  isNothing,
  maybe,
  fromMaybe,
  catMaybes,
  listToMaybe,
  maybeToList,
  mapMaybe,
}
