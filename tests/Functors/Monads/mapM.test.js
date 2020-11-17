const { describe, Try } = require('riteway')
const { mapM, state, writer } = require('../../../index')

describe('mapM()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(mapM).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function and an empty array',
    should: 'return a monad containing an empty array',
    actual: mapM((x) => state((y) => x + y), []).run(undefined),
    expected: [[], undefined],
  })

  assert({
    given: 'a function and a non-empty array',
    should: 'return a monad containing a transformed array',
    actual: mapM((x) => writer(x ** 2, `square ${x}`), [3, 9, 12]).run(),
    expected: [
      [9, 81, 144],
      ['square 3', 'square 9', 'square 12'],
    ],
  })
})
