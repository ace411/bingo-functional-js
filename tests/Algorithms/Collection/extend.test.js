const { describe } = require('riteway')
const { extend } = require('../../../index')

describe('extend()', async (assert) => {
  assert({
    given: 'non-array values',
    should: 'return a list containing each argument',
    actual: extend(2, 3, 'foo', 'bar'),
    expected: [2, 3, 'foo', 'bar'],
  })

  assert({
    given: 'no arguments',
    should: 'return an empty array',
    actual: extend(),
    expected: [],
  })

  assert({
    given: 'multiple array values',
    should: 'return an array containing each argument\'s values',
    actual: extend(['foo', 'bar'], [4, 8], [90, 'baz']),
    expected: ['foo', 'bar', 4, 8, 90, 'baz'],
  })

  assert({
    given: 'multiple object values',
    should: 'return an object containing each argument\'s values',
    actual: extend({ foo: 'a', bar: 'c' }, { baz: 'd' }, { fooz: 'e' }),
    expected: {
      foo: 'a', bar: 'c', baz: 'd', fooz: 'e',
    },
  })
})
