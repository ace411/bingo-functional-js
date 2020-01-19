const { describe, Try } = require('riteway')
const {
  listToMaybe,
  maybeToList,
  catMaybes,
  fromValue,
  mapMaybe,
  Nothing,
  Just,
} = require('../../../index')

describe('listToMaybe()', async (assert) => {
  assert({
    given: 'an empty array',
    should: 'return a Nothing instance',
    actual: listToMaybe([]) instanceof Nothing,
    expected: true,
  })

  assert({
    given: 'a non-empty array',
    should: 'return a Just instance',
    actual: listToMaybe(['foo', 'bar']) instanceof Just,
    expected: true,
  })

  assert({
    given: 'a non-empty array',
    should: 'eventually evaluate to the first value in the array',
    actual: listToMaybe(['foo', 'bar']).getJust(),
    expected: 'foo',
  })
})

describe('maybeToList()', async (assert) => {
  assert({
    given: 'a Just instance',
    should: 'return a singleton list',
    actual: maybeToList(fromValue(3)),
    expected: [3],
  })

  assert({
    given: 'a Nothing instance',
    should: 'return an empty list',
    actual: maybeToList(fromValue(null)),
    expected: [],
  })
})

describe('catMaybes()', async (assert) => {
  assert({
    given: 'an array of Nothing instances',
    should: 'return an empty list',
    actual: catMaybes([fromValue(null), fromValue(null), fromValue(null)]),
    expected: [],
  })

  assert({
    given: 'an array of Just and Nothing instances',
    should: 'return a non-empty list',
    actual: catMaybes([fromValue(2), fromValue(null), fromValue('foo')]),
    expected: [2, 'foo'],
  })

  assert({
    given: 'an array',
    should: 'throw an error',
    actual: Try(catMaybes, ['foo', 'bar', 'baz']).toString(),
    expected: 'TypeError: val.flatMap is not a function',
  })
})

describe('mapMaybe()', async (assert) => {
  assert({
    given: 'a function that evaluates to a Maybe instance and an array',
    should: 'return an array containing values encapsulated in Just instances',
    actual: mapMaybe((x) => fromValue(x ** 2), [2, 3]),
    expected: [4, 9],
  })

  assert({
    given: 'a function and an array',
    should: 'throw an error',
    actual: Try(mapMaybe, (val) => val ** 2, [3, 4, 5]).toString(),
    expected: 'TypeError: val.flatMap is not a function',
  })
})
