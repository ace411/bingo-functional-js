const { describe } = require('riteway')
const { isEmpty } = require('../../../index')

describe('isEmpty()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isEmpty(),
    expected: false,
  })

  assert({
    given: 'a boolean value',
    should: 'return false',
    actual: [isEmpty(true), isEmpty(false)],
    expected: [false, false],
  })

  assert({
    given: 'a regex',
    should: 'return false',
    actual: isEmpty(/([0-9])$i/),
    expected: false,
  })

  assert({
    given: 'a symbol',
    should: 'return false',
    actual: isEmpty(Symbol('foo')),
    expected: false,
  })

  assert({
    given: 'a function',
    should: 'return false',
    actual: isEmpty(() => 'foo'),
    expected: false,
  })

  assert({
    given: 'a null value',
    should: 'return false',
    actual: isEmpty(null),
    expected: false,
  })

  assert({
    given: 'a number',
    should: 'return false',
    actual: isEmpty(5),
    expected: false,
  })

  assert({
    given: 'an empty object',
    should: 'return true',
    actual: isEmpty({}),
    expected: true,
  })

  assert({
    given: 'an empty array',
    should: 'return true',
    actual: isEmpty([]),
    expected: true,
  })

  assert({
    given: 'an empty string',
    should: 'return true',
    actual: isEmpty(''),
    expected: true,
  })
})
