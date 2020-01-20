const { describe } = require('riteway')
const { concat } = require('../../../index')

describe('concat()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: concat(),
    expected: undefined,
  })

  assert({
    given: 'a wildcard and words',
    should: 'return a string with words separated by wildcard',
    actual: concat(':', 'foo', 'bar', 'baz'),
    expected: 'foo:bar:baz',
  })
})
