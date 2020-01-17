const { describe } = require('riteway')
const { isUndefined } = require('../../../index')

describe('isUndefined()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return true',
    actual: isUndefined(),
    expected: true,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isUndefined(true), isUndefined(false)],
    expected: [false, false],
  })

  assert({
    given: 'undefined',
    should: 'return true',
    actual: isUndefined(undefined),
    expected: true,
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isUndefined(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isUndefined(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isUndefined(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isUndefined(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isUndefined({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isUndefined([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isUndefined(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isUndefined(new Error('fail')),
    expected: false,
  })
})
