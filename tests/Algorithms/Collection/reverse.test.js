const { describe, Try } = require('riteway')
const { reverse } = require('../../../index')

describe('reverse()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(reverse).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array',
    should: 'return an empty array',
    actual: reverse([]),
    expected: [],
  })

  assert({
    given: 'an empty object',
    should: 'return an empty object',
    actual: reverse({}),
    expected: {},
  })

  assert({
    given: 'a non-empty array',
    should: 'return an array in reverse order',
    actual: reverse(['foo', 'bar', 'baz']),
    expected: ['baz', 'bar', 'foo'],
  })

  assert({
    given: 'a non-empty object',
    should: 'return an object in reverse order',
    actual: reverse({ foo: 'foo', bar: 'bar', baz: 'baz' }),
    expected: { baz: 'baz', bar: 'bar', foo: 'foo' },
  })
})
