const { describe } = require('riteway')
const { isError } = require('../../../index')

describe('isError()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isError(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isError(true), isError(false)],
    expected: [false, false],
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isError(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isError(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isError(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isError(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isError({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isError([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isError(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return true',
    actual: isError(new Error('fail')),
    expected: true,
  })
})
