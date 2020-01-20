const { describe } = require('riteway')
const { isNumber } = require('../../../index')

describe('isNumber()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isNumber(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isNumber(true), isNumber(false)],
    expected: [false, false],
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isNumber(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isNumber(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isNumber(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return true',
    actual: isNumber(5),
    expected: true,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isNumber({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isNumber([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isNumber(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isNumber(new Error('fail')),
    expected: false,
  })
})
