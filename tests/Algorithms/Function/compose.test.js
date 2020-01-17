const { describe } = require('riteway')
const { compose, isFunction } = require('../../../index')

describe('compose()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(compose()),
    expected: true,
  })

  assert({
    given: 'multiple functions of single arity',
    should: 'return a function',
    actual: isFunction(compose((val) => val ** 2, (val) => val ** 3)),
    expected: true,
  })
})
