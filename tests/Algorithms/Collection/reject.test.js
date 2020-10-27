const { describe } = require('riteway')
const { reject } = require('../../../index')

describe('reject()', async (assert) => {
  const even = (x) => x % 2 === 0

  assert({
    given: 'a function and an empty object',
    should: 'return an empty object',
    actual: reject(even, {}),
    expected: {},
  })

  assert({
    given: 'a function and an empty array',
    should: 'return an empty array',
    actual: reject(even, []),
    expected: [],
  })

  assert({
    given: 'a function and an object with items',
    should: 'return an object with non-predicate conformant results',
    actual: reject(even, { a: 12, b: 33, c: 99 }),
    expected: { b: 33, c: 99 },
  })

  assert({
    given: 'a function and an array with items',
    should: 'return an array with predicate conformant results',
    actual: reject(even, [12, 33, 99]),
    expected: [33, 99],
  })
})
