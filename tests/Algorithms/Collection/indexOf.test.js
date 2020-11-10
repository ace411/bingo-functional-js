const { describe, Try } = require('riteway')
const { indexOf } = require('../../../index')

describe('indexOf()', async (assert) => {
  assert({
    given: 'an array and non-existent array value',
    should: 'return undefined',
    actual: indexOf(['foo', 'bar'], 'baz'),
    expected: undefined,
  })

  assert({
    given: 'an object and non-existent object value',
    should: 'return undefined',
    actual: indexOf({ a: 'foo', b: 'bar', c: 12 }, 'goo'),
    expected: undefined,
  })

  assert({
    given: 'an array and existent array value',
    should: 'return corresponding value index',
    actual: indexOf(['foo', 'bar'], 'bar'),
    expected: '1',
  })

  assert({
    given: 'an object and existent object value',
    should: 'return corresponding object key',
    actual: indexOf({ foo: 2, bar: 33 }, 33),
    expected: 'bar',
  })

  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: indexOf(),
    expected: undefined,
  })
})
