const { describe, Try } = require('riteway')
const { mapDeep } = require('../../../index')

describe('mapDeep()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(mapDeep).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function and empty array',
    should: 'return an empty array',
    actual: mapDeep((val) => val ** 2, []),
    expected: [],
  })

  assert({
    given: 'a function and empty object',
    should: 'return an empty object',
    actual: mapDeep((val) => val ** 2, {}),
    expected: {},
  })

  assert({
    given: 'a function and non-empty multi-dimensional array',
    should: 'return an array with transformed values',
    actual: mapDeep((val) => val ** 2, [3, 7, [9, 4]]),
    expected: [9, 49, [81, 16]],
  })

  assert({
    given: 'a function and non-empty multi-dimensional object',
    should: 'return an object with transformed values',
    actual: mapDeep((val) => val.toUpperCase(), { a: 'foo', b: { c: 'bar' } }),
    expected: { a: 'FOO', b: { c: 'BAR' } },
  })
})
