const { describe, Try } = require('riteway')
const { truncate } = require('../../../index')

describe('truncate()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(truncate).toString(),
    expected: 'TypeError: Cannot read property \'length\' of undefined',
  })

  assert({
    given: 'some text and cutoff threshold',
    should: 'return a string of specified length to which an ellipsis is appended',
    actual: truncate('bingo-functional-js', 16),
    expected: 'bingo-functional...',
  })
})
