const { describe } = require('riteway')
const { pluck } = require('../../../index')

describe('pluck()', async (assert) => {
  assert({
    given: 'an object and non-existent key',
    should: 'return undefined',
    actual: pluck({ a: 'foo', b: 'bar' }, 'fooz'),
    expected: undefined,
  })

  assert({
    given: 'an array and non-existent index',
    should: 'return undefined',
    actual: pluck(['foo', 'bar', 'baz'], '32'),
    expected: undefined,
  })

  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: pluck(),
    expected: undefined,
  })

  assert({
    given: 'an object and existent key',
    should: 'return a singleton array containing a corresponding value',
    actual: pluck({ a: 'foo', b: 'bar' }, 'a'),
    expected: 'foo',
  })

  assert({
    given: 'an array and existent index',
    should: 'return a singleton array containing corresponding value',
    actual: pluck(['foo', 'bar', 'baz'], '1'),
    expected: 'bar',
  })
})
