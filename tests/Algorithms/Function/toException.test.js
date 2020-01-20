const { describe } = require('riteway')
const { toException, isFunction } = require('../../../index')

describe('toException()', async (assert) => {
  function AnException(msg) {
    this.message = msg
    this.name = 'AnException'
  }
  const exp = (msg) => {
    throw new AnException(msg)
  }

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(toException()),
    expected: true,
  })

  assert({
    given: 'a function that harbors an exception',
    should: 'return an exception message',
    actual: toException(exp)('fail'),
    expected: 'fail',
  })

  assert({
    given: 'a function that harbors an exception and an exception handler',
    should: 'output a handler-specific return value',
    actual: toException((num, den) => {
      if (den === 0) exp('Division by zero exception')

      return num / den
    }, (_) => 0)(1, 0),
    expected: 0,
  })
})
