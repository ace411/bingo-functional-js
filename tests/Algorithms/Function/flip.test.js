const { describe } = require('riteway')
const { flip, isFunction } = require('../../../index')

describe('flip()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(flip()),
    expected: true,
  })

  assert({
    given: 'a function and its arguments in reverse order',
    should: 'return the result of the argument function',
    actual: flip((x, y) => x / y)(2, 4),
    expected: 2,
  })
})
