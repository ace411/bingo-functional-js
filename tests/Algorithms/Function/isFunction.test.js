const { describe } = require('riteway')
const { isFunction } = require('../../../index')

describe('isFunction()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isFunction(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isFunction(true), isFunction(false)],
    expected: [false, false],
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isFunction(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return true',
    actual: isFunction(() => 'foo'),
    expected: true,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isFunction(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isFunction(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isFunction({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isFunction([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isFunction(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isFunction(new Error('fail')),
    expected: false,
  })
})
