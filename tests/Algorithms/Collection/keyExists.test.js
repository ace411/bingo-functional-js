const { describe, Try } = require('riteway')
const { keyExists } = require('../../../index')

describe('keyExists()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(keyExists).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an array and non-existent index',
    should: 'return false',
    actual: keyExists(['foo', 'bar'], '3'),
    expected: false,
  })

  assert({
    given: 'an object and non-existent key',
    should: 'return false',
    actual: keyExists({ foo: 'foo', bar: 'bar' }, 'baz'),
    expected: false,
  })

  assert({
    given: 'an array and existent index',
    should: 'return true',
    actual: keyExists(['foo', 'bar'], '3'),
    expected: false,
  })

  assert({
    given: 'an object and existent key',
    should: 'return true',
    actual: keyExists({ foo: 'foo', bar: 'bar' }, 'foo'),
    expected: true,
  })
})
