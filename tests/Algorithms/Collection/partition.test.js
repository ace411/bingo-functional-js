const { describe, Try } = require('riteway')
const { partition } = require('../../../index')

describe('partition()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(partition).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an array and number of partitions',
    should: 'return a multi-dimensional array',
    actual: partition(3, ['foo', 'bar', 'baz', 2, 6, 90]),
    expected: [['foo', 'bar'], ['baz', 2], [6, 90]],
  })
})
