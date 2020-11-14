const { describe } = require('riteway')
const { pluckDeep } = require('../../../index')

describe('pluckDeep()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return an empty array',
    actual: pluckDeep(),
    expected: [],
  })

  assert({
    given: 'a multi-dimensional array and recurrent existent index',
    should: 'return an array containing all corresponding values',
    actual: pluckDeep(['foo', [1, 3, 9, ['bar', 'baz']]], '0'),
    expected: ['foo', 1, 'bar'],
  })

  assert({
    given: 'a multi-dimensional object and reccurent existent key',
    should: 'return an array containing all corresponding values',
    actual: pluckDeep({
      a: 'foo',
      b: { a: 2, d: 3, c: { a: 'bar', e: 'fooz' } },
    }, 'a'),
    expected: ['foo', 2, 'bar'],
  })

  assert({
    given: 'an object and non-existent key',
    should: 'return an empty array',
    actual: pluckDeep({ a: 'foo', b: 'bar' }, 'fooz'),
    expected: [],
  })

  assert({
    given: 'an array and non-existent index',
    should: 'return an empty array',
    actual: pluckDeep(['foo', 'bar', 'baz'], '32'),
    expected: [],
  })
})
