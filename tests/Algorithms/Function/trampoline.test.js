const { describe, Try } = require('riteway')
const { trampoline } = require('../../../index')

describe('trampoline()', async (assert) => {
  const fib = (val) => (val < 2 ? val : fib(val - 1) + fib(val - 2))

  assert({
    given: 'a tail-recursive function',
    should: 'return the result of the tail recursion',
    actual: trampoline(fib)(30),
    expected: 832040,
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(trampoline(), 'foo').toString(),
    expected: 'TypeError: func is not a function',
  })
})
