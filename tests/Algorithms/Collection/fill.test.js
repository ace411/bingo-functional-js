const { describe } = require('riteway')
const { fill } = require('../../../index')

describe('fill()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: fill(),
    expected: undefined,
  })

  assert({
    given: 'an array, an arbitrary value and a key-range',
    should: 'return an array',
    actual: fill([2, 4, 6, 7], 'foo', 1, 3),
    expected: [2, 'foo', 'foo', 'foo'],
  })
})
