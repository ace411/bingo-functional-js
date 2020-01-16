const { describe, Try } = require('riteway')
const { max } = require('../../../index')

describe('max()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(max).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array',
    should: 'return undefined',
    actual: max([]),
    expected: undefined,
  })

  assert({
    given: 'an empty object',
    should: 'return undefined',
    actual: max({}),
    expected: undefined,
  })

  assert({
    given: 'a non-empty array of numbers',
    should: 'return the largest numerical value in the array',
    actual: max([2, 9, 3]),
    expected: 9,
  })

  assert({
    given: 'a non-empty object containing numbers',
    should: 'return the largest numerical value in the object',
    actual: max({ foo: 7.1, bar: 3.45, baz: 2.2 }),
    expected: 7.1,
  })
})
