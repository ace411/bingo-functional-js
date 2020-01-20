const { describe, Try } = require('riteway')
const { any } = require('../../../index')

describe('any()', async (assert) => {
  const odd = (val) => val % 2 !== 0
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(any).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a boolean predicate and array whose items are non-predicate conformant',
    should: 'return false',
    actual: any([2, 4, 8], odd),
    expected: false,
  })

  assert({
    given: 'a boolean predicate and array with at least a single predicate conformant item',
    should: 'return true',
    actual: any([2, 7, 8, 12], odd),
    expected: true,
  })

  assert({
    given: 'a boolean predicate and object whose items are non-predicate conformant',
    should: 'return false',
    actual: any({ foo: 2, bar: 4 }, odd),
    expected: false,
  })

  assert({
    given: 'a boolean predicate and object with at least a single predicate conformant item',
    should: 'return true',
    actual: any({ foo: 2, bar: 4, baz: 3 }, odd),
    expected: true,
  })
})
