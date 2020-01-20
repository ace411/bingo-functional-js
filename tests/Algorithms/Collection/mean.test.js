const { describe, Try } = require('riteway')
const { mean } = require('../../../index')

describe('mean()', async (assert) => {
  const should = 'return a valid average of the numbers'

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(mean).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty object',
    should: 'return NaN',
    actual: Try(mean, {}).toString(),
    expected: 'NaN',
  })

  assert({
    given: 'an empty array',
    should: 'return NaN',
    actual: Try(mean, []).toString(),
    expected: 'NaN',
  })

  assert({
    given: 'an array containing numbers',
    should,
    actual: mean([3, 7, 5]),
    expected: 5,
  })

  assert({
    given: 'an object containing numbers',
    should,
    actual: mean({ a: 3, b: 7, c: 5 }),
    expected: 5,
  })
})
