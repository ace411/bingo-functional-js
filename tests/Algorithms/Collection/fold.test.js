const { describe, Try } = require('riteway')
const { fold } = require('../../../index')

describe('fold()', async (assert) => {
  const max = (acc, val) => (val > acc ? val : acc)

  assert({
    given: 'accumulator and no list item',
    should: 'return the accumulator value',
    actual: fold(max, [], 0),
    expected: 0,
  })

  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: fold(),
    expected: undefined,
  })

  assert({
    given: 'a function, object, and accumulator value',
    should: 'return a single value that builds on the accumulator',
    actual: fold(max, { a: 33, b: 22, c: 97 }, 0),
    expected: 97,
  })

  assert({
    given: 'a function, array, and accumulator value',
    should: 'return a single value that builds on the accumulator',
    actual: fold(max, [85, 32, 20], 0),
    expected: 85,
  })
})
