const { describe } = require('riteway')
const { identity } = require('../../../index')

describe('identity()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: identity(),
    expected: undefined,
  })

  assert({
    given: 'an argument of any type',
    should: 'return the argument value',
    actual: identity('foo'),
    expected: 'foo',
  })
})
