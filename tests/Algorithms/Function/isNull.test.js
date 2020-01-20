const { describe } = require('riteway')
const { isNull } = require('../../../index')

describe('isNull()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isNull(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isNull(true), isNull(false)],
    expected: [false, false],
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isNull(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isNull(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return true',
    actual: isNull(null),
    expected: true,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isNull(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isNull({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isNull([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isNull(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isNull(new Error('fail')),
    expected: false,
  })
})
