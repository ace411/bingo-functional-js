const { describe } = require('riteway')
const { constantFunction: cf, isFunction } = require('../../../index')

describe('constantFunction()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(cf()),
    expected: true,
  })

  assert({
    given: 'no arguments',
    should: 'return a function which when invoked returns undefined',
    actual: cf()(),
    expected: undefined,
  })

  assert({
    given: 'multiple arguments',
    should: 'return a function',
    actual: isFunction(cf('foo', 'bar', 'baz')),
    expected: true,
  })

  assert({
    given: 'multiple arguments',
    should: 'return a function which when invoked returns the first argument received',
    actual: cf('foo', 'bar', 3)(),
    expected: 'foo',
  })
})
