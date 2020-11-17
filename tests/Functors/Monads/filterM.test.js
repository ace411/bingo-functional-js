const { describe, Try } = require('riteway')
const { filterM, fromValue, reader } = require('../../../index')

describe('filterM()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(filterM).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function and an empty array',
    should: 'return an empty array encapsulated in a monad',
    actual: filterM((x) => fromValue(x % 2 === 0), []).getJust(),
    expected: [],
  })

  assert({
    given: 'a function and a non-empty array',
    should: 'return an array with predicate-conformant entries',
    actual: filterM((x) => reader((y) => y + x >= 10), [5, 9, 2, -3]).run(5),
    expected: [5, 9],
  })
})
