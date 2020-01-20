const { describe, Try } = require('riteway')
const { fromPairs } = require('../../../index')

describe('fromPairs()', async (assert) => {
  assert({
    given: 'an empty array',
    should: 'return an empty object',
    actual: fromPairs([]),
    expected: {},
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(fromPairs).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an array containing array pairs',
    should: 'return a JSON object',
    actual: fromPairs([
      ['foo', 'bar'],
      ['baz', 'fooz'],
    ]),
    expected: { foo: 'bar', baz: 'fooz' },
  })
})
