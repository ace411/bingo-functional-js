const { describe } = require('riteway')
const { maybe, partial, fromValue } = require('../../../index')

describe('maybe()', async (assert) => {
  const caseAnalysis = partial(maybe, 0, (val) => 3 / val)
  const filter = (instance) => instance.filter((val) => 3 % val === 0)

  assert({
    given: 'default value, function, and Just instance',
    should: 'return function result',
    actual: caseAnalysis(filter(fromValue(1))),
    expected: 3,
  })

  assert({
    given: 'default value, function, and Nothing instance',
    should: 'return default value',
    actual: caseAnalysis(filter(fromValue(12))),
    expected: 0,
  })
})
