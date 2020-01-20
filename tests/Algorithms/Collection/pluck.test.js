const { describe, Try } = require('riteway')
const { pluck } = require('../../../index')

describe('pluck()', async (assert) => {
  assert({
    given: 'an object and non-existent key',
    should: 'return an empty array',
    actual: pluck({ a: 'foo', b: 'bar' }, 'fooz'),
    expected: [],
  })

  assert({
    given: 'an array and non-existent index',
    should: 'return an empty array',
    actual: pluck(['foo', 'bar', 'baz'], '32'),
    expected: [],
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(pluck).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an object and existent key',
    should: 'return a singleton array containing a corresponding value',
    actual: pluck({ a: 'foo', b: 'bar' }, 'a'),
    expected: ['foo'],
  })

  assert({
    given: 'an array and existent index',
    should: 'return a singleton array containing corresponding value',
    actual: pluck(['foo', 'bar', 'baz'], '1'),
    expected: ['bar'],
  })

  assert({
    given: 'a multi-dimensional array and recurrent existent index',
    should: 'return an array containing all corresponding values',
    actual: pluck(['foo', [1, 3, 9, ['bar', 'baz']]], '0'),
    expected: ['foo', 1, 'bar'],
  })

  assert({
    given: 'a multi-dimensional object and reccurent existent key',
    should: 'return an array containing all corresponding values',
    actual: pluck({
      a: 'foo',
      b: { a: 2, d: 3, c: { a: 'bar', e: 'fooz' } },
    }, 'a'),
    expected: ['foo', 2, 'bar'],
  })
})
