const { describe } = require('riteway')
const { isRegExp } = require('../../../index')

describe('isRegExp()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isRegExp(),
    expected: false,
  })

  assert({
    given: 'a regex',
    should: 'return true',
    actual: isRegExp(/([0-9])$i/),
    expected: true,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isRegExp(true), isRegExp(false)],
    expected: [false, false],
  })

  assert({
    given: 'undefined',
    should: 'return false',
    actual: isRegExp(undefined),
    expected: false,
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isRegExp(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isRegExp(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isRegExp(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isRegExp(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isRegExp({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isRegExp([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isRegExp(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isRegExp(new Error('fail')),
    expected: false,
  })
})
