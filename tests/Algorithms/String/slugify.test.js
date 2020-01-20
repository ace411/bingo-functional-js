const { describe, Try } = require('riteway')
const { slugify } = require('../../../index')

describe('slugify()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(slugify).toString(),
    expected: 'TypeError: Cannot read property \'split\' of undefined',
  })

  assert({
    given: 'some text',
    should: 'return a slug',
    actual: slugify('bingo functional js'),
    expected: 'bingo-functional-js',
  })
})
