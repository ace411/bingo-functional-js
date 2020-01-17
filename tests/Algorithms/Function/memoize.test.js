const { describe } = require('riteway')
const { memoize, isFunction } = require('../../../index')

describe('memoize()', async (assert) => {
  const factorial = (val) => (val < 2 ? 1 : factorial(val - 1) * val)

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(memoize()),
    expected: true,
  })

  assert({
    given: 'a function and its arguments',
    should: 'return the result of the function',
    actual: memoize(factorial)(5),
    expected: 120,
  })
})
