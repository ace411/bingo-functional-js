const { describe, Try } = require('riteway')
const { flatten } = require('../../../index')

describe('flatten()', async (assert) => {
  assert({
    given: 'an empty array',
    should: 'return an empty array',
    actual: flatten([]),
    expected: [],
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(flatten).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a multi-dimensional array',
    should: 'an array with a single dimension',
    actual: flatten([1, 2, [4, 9, [8, 12, [99, 22]]]]),
    expected: [1, 2, 4, 9, 8, 12, 99, 22],
  })
})
