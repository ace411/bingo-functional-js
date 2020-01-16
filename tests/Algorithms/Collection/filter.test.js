const { describe } = require('riteway')
const { filter } = require('../../../index')

describe('filter()', async (assert) => {
  const even = (x) => x % 2 === 0

  assert({
    given: 'a function and an empty object',
    should: 'return an empty object',
    actual: filter(even, {}),
    expected: {},
  })

  assert({
    given: 'a function and an empty array',
    should: 'return an empty array',
    actual: filter(even, []),
    expected: [],
  })

  assert({
    given: 'a function and an object with items',
    should: 'return an object with predicate conformant results',
    actual: filter(even, { a: 12, b: 33, c: 99 }),
    expected: { a: 12 },
  })

  assert({
    given: 'a function and an array with items',
    should: 'return an array with predicate conformant results',
    actual: filter(even, [12, 33, 99]),
    expected: [12],
  })
})
