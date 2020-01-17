const { describe } = require('riteway')
const { isNumeric } = require('../../../index')

describe('isNumeric()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return false',
    actual: isNumeric(),
    expected: false,
  })

  assert({
    given: 'a string without any numerical value',
    should: 'return false',
    actual: isNumeric('bingo-functional-js'),
    expected: false,
  })

  assert({
    given: 'a string with an explicit numerical value',
    should: 'return true',
    actual: isNumeric('99'),
    expected: true,
  })
})
