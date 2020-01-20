const { describe } = require('riteway')
const { isSymbol } = require('../../../index')

describe('isSymbol()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isSymbol(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isSymbol(true), isSymbol(false)],
    expected: [false, false],
  })

  assert({
    given: 'undefined',
    should: 'return false',
    actual: isSymbol(undefined),
    expected: false,
  })

  assert({
    given: 'a symbol',
    should: 'return true',
    actual: isSymbol(Symbol('foo')),
    expected: true,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isSymbol(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isSymbol(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isSymbol(5),
    expected: false,
  })

  assert({
    given: 'an object',
    should: 'return false',
    actual: isSymbol({}),
    expected: false,
  })

  assert({
    given: 'an array',
    should: 'return false',
    actual: isSymbol([]),
    expected: false,
  })

  assert({
    given: 'a string',
    should: 'return false',
    actual: isSymbol(''),
    expected: false,
  })

  assert({
    given: 'an Error object',
    should: 'return false',
    actual: isSymbol(new Error('fail')),
    expected: false,
  })
})
