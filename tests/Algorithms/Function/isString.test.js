const { describe } = require('riteway')
const { isString } = require('../../../index')

describe('isString()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isString(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isString(true), isString(false)],
    expected: [false, false],
  })

  assert({
    given: 'undefined',
    should: 'return false',
    actual: isString(undefined),
    expected: false,
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isString(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isString(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isString(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isString(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isString({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isString([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return true',
    actual: isString(''),
    expected: true,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isString(new Error('fail')),
    expected: false,
  })
})
