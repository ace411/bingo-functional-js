const { describe, Try } = require('riteway')
const { min } = require('../../../index')

describe('min()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(min).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array',
    should: 'return undefined',
    actual: min([]),
    expected: undefined,
  })

  assert({
    given: 'an empty object',
    should: 'return undefined',
    actual: min({}),
    expected: undefined,
  })

  assert({
    given: 'a non-empty array of numbers',
    should: 'return the lowest numerical value in the array',
    actual: min([2, 9, 3]),
    expected: 2,
  })

  assert({
    given: 'a non-empty object containing numbers',
    should: 'return the lowest numerical value in the object',
    actual: min({ foo: 7.1, bar: 3.45, baz: 2.2 }),
    expected: 2.2,
  })
})
