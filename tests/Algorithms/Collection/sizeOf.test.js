const { describe, Try } = require('riteway')
const { sizeOf } = require('../../../index')

describe('sizeOf()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(sizeOf).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an argument that is neither an array nor object',
    should: 'return zero',
    actual: sizeOf(9),
    expected: 0,
  })

  assert({
    given: 'an array',
    should: 'return size of array',
    actual: sizeOf(['foo', 'bar']),
    expected: 2,
  })

  assert({
    given: 'an object',
    should: 'return size of object',
    actual: sizeOf({ foo: 'foo', bar: 'bar' }),
    expected: 2,
  })
})
