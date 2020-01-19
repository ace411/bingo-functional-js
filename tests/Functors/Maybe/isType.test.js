const { describe } = require('riteway')
const {
  fromValue, isJust, isNothing, compose,
} = require('../../../index')

const checkType = (just) => compose(
  fromValue,
  (obj) => (just ? isJust(obj) : isNothing(obj)),
)

describe('isJust()', async (assert) => {
  assert({
    given: 'a Just instance',
    should: 'return true',
    actual: checkType(true)('foo'),
    expected: true,
  })

  assert({
    given: 'a Nothing instance',
    should: 'return false',
    actual: checkType(true)(null),
    expected: false,
  })
})

describe('isNothing()', async (assert) => {
  assert({
    given: 'a Just instance',
    should: 'return false',
    actual: checkType(false)('foo'),
    expected: false,
  })

  assert({
    given: 'a Nothing instance',
    should: 'return false',
    actual: checkType(false)(null),
    expected: true,
  })
})
