const { describe, Try } = require('riteway')
const { flip } = require('../../../index')

describe('flip()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(flip).toString(),
    expected: 'TypeError: func is not a function',
  })

  assert({
    given: 'a function and its arguments in reverse order',
    should: 'return the result of the argument function',
    actual: flip((x, y) => x / y, 2, 4),
    expected: 2,
  })
})
