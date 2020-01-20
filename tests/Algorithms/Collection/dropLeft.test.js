const { describe, Try } = require('riteway')
const { dropLeft } = require('../../../index')

describe('dropLeft()', async (assert) => {
  assert({
    given: 'an empty object',
    should: 'return an empty object',
    actual: dropLeft({}),
    expected: {},
  })

  assert({
    given: 'an empty array',
    should: 'return an empty array',
    actual: dropLeft([]),
    expected: [],
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(dropLeft).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an object with items and a specific number of elements to pop',
    should: 'return an object with fewer items',
    actual: dropLeft({
      a: 12, b: 13, c: 'foo', d: 'bar',
    }, 2),
    expected: { c: 'foo', d: 'bar' },
  })

  assert({
    given: 'an array with items and a specific number of elements to pop',
    should: 'return an array with fewer items',
    actual: dropLeft(['foo', 'bar', 12, 13], 2),
    expected: [12, 13],
  })
})
