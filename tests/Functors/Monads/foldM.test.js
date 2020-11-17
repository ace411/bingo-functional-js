const { describe, Try } = require('riteway')
const { foldM, fromValue, IO } = require('../../../index')

describe('foldM()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(foldM).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function, accumulator, and empty list',
    should: 'return a monad that contains the accumulator',
    actual: foldM(
      (acc, val) => fromValue(val > acc ? val : acc),
      [],
      0,
    ).getJust(),
    expected: 0,
  })

  assert({
    given: 'a function, accumulator, and an array',
    should: 'return a monad that contains the result of a fold operation',
    actual: foldM(
      (acc, val) => IO(() => (val > acc ? val : acc)),
      [3, 9, 12, 8],
      0,
    ).exec(),
    expected: 12,
  })
})
