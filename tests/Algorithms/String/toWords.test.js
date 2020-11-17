const { describe } = require('riteway')
const { toWords } = require('../../../index')

describe('toWords()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return an empty array',
    actual: toWords(),
    expected: [],
  })

  assert({
    given: 'a string and a regular expression',
    should: 'split the string into an array',
    actual: toWords('foo bar:baz', /[\s/:]/g),
    expected: ['foo', 'bar', 'baz'],
  })
})
