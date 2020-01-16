const { describe, Try } = require('riteway')
const { dropRight } = require('../../../index')

describe('dropRight()', async (assert) => {
  assert({
    given: 'an empty object',
    should: 'return an empty object',
    actual: dropRight({}),
    expected: {},
  })

  assert({
    given: 'an empty array',
    should: 'return an empty array',
    actual: dropRight([]),
    expected: [],
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(dropRight).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an object with items and a specific number of elements to pop',
    should: 'return an object with fewer items',
    actual: dropRight({
      a: 12, b: 13, c: 'foo', d: 'bar',
    }, 2),
    expected: { a: 12, b: 13 },
  })

  assert({
    given: 'an array with items and a specific number of elements to pop',
    should: 'return an array with fewer items',
    actual: dropRight(['foo', 'bar', 12, 13], 2),
    expected: ['foo', 'bar'],
  })
})
