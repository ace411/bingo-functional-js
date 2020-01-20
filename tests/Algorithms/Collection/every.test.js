const { describe, Try } = require('riteway')
const { every } = require('../../../index')

describe('every()', async (assert) => {
  const even = (val) => val % 2 === 0

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(every).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a boolean predicate and array whose items are non-predicate conformant',
    should: 'return false',
    actual: every([3, 7, 9, 16], even),
    expected: false,
  })

  assert({
    given: 'a boolean predicate and object whose items are non-predicate conformant',
    should: 'return false',
    actual: every({ foo: 3, bar: 9, baz: 8 }, even),
    expected: false,
  })

  assert({
    given: 'a boolean predicate and object with predicate conformant items',
    should: 'return true',
    actual: every({ foo: 2, bar: 4, baz: 8 }, even),
    expected: true,
  })

  assert({
    given: 'a boolean predicate and array with predicate conformant items',
    should: 'return true',
    actual: every([2, 8, 12], even),
    expected: true,
  })
})
