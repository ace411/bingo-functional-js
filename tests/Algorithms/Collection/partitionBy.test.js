const { describe, Try } = require('riteway')
const { partitionBy } = require('../../../index')

describe('partitionBy()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(partitionBy).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'partition size value and an array',
    should: 'return a partitioned array with more than one dimension',
    actual: partitionBy(2, ['foo', 'bar', 'baz', 'fooz']),
    expected: [['foo', 'bar'], ['baz', 'fooz']],
  })
})
