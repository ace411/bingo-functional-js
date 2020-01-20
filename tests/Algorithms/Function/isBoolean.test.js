const { describe } = require('riteway')
const { isBoolean } = require('../../../index')

describe('isBoolean()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isBoolean(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return true',
    actual: [isBoolean(true), isBoolean(false)],
    expected: [true, true],
  })

  assert({
    given: 'undefined',
    should: 'return false',
    actual: isBoolean(undefined),
    expected: false,
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isBoolean(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isBoolean(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isBoolean(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isBoolean(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isBoolean({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isBoolean([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isBoolean(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isBoolean(new Error('fail')),
    expected: false,
  })
})
