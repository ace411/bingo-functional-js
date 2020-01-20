const { describe, Try } = require('riteway')
const { head } = require('../../../index')

describe('head()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(head).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array',
    should: 'return undefined',
    actual: head([]),
    expected: undefined,
  })

  assert({
    given: 'an empty object',
    should: 'return undefined',
    actual: head({}),
    expected: undefined,
  })

  assert({
    given: 'a non-empty array',
    should: 'return the first element of the array',
    actual: head(['foo', 'bar']),
    expected: 'foo',
  })

  assert({
    given: 'a non-empty object',
    should: 'return the first element of the object',
    actual: head({ foo: 'foo', bar: 'bar' }),
    expected: 'foo',
  })
})
