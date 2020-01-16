const { describe, Try } = require('riteway')
const { map, compose } = require('../../../index')

describe('map()', async (assert) => {
  const ops = compose((x) => x + 1, (x) => x * x)
  const transform = (x) => ops(x)

  assert({
    given: 'no arguments',
    should: 'throw a type error',
    actual: Try(map).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function and array',
    should: 'return an array containing transformed values',
    actual: map(transform, [3, 5, 6]),
    expected: [16, 36, 49],
  })

  assert({
    given: 'a function and object',
    should: 'return an object containing transformed values',
    actual: map(transform, { a: 5, b: 99 }),
    expected: { a: 36, b: 10000 },
  })

  assert({
    given: 'a function and an empty object',
    should: 'return an empty object',
    actual: map(transform, {}),
    expected: {},
  })

  assert({
    given: 'a function and an empty array',
    should: 'return an empty array',
    actual: map(transform, []),
    expected: [],
  })
})
