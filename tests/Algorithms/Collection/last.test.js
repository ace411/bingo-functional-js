const { describe, Try } = require('riteway')
const { last } = require('../../../index')

describe('last()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(last).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array',
    should: 'return undefined',
    actual: last([]),
    expected: undefined,
  })

  assert({
    given: 'an empty object',
    should: 'return undefined',
    actual: last({}),
    expected: undefined,
  })

  assert({
    given: 'a non-empty array',
    should: 'return the last element of the array',
    actual: last(['foo', 'bar']),
    expected: 'bar',
  })

  assert({
    given: 'a non-empty object',
    should: 'return the last element of the object',
    actual: last({ foo: 'foo', bar: 'bar' }),
    expected: 'bar',
  })
})
