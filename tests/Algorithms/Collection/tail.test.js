const { describe, Try } = require('riteway')
const { tail } = require('../../../index')

describe('tail()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(tail).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a non-empty array',
    should: 'return an array containing every element but the first',
    actual: tail(['foo', 'bar', 'baz']),
    expected: ['bar', 'baz'],
  })

  assert({
    given: 'a non-empty object',
    should: 'return an object containing every element but the first',
    actual: tail({ foo: 'foo', bar: 'bar', baz: 'baz' }),
    expected: { bar: 'bar', baz: 'baz' },
  })
})
